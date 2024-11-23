// Função para alternar a exibição do menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Criar meus marcadores
function criarMarcador(icone, cor = '#CC164E', tamanho = '36px') {
    return L.divIcon({
        html: `<i class="${icone}" style="font-size: ${tamanho}; color: ${cor};"></i>`,
        className: '', // Remove bordas do marcador
        iconAnchor: [13, 13], // Centraliza o ícone no marcador
    });
}



// Inicialização do mapa com Leaflet
document.addEventListener("DOMContentLoaded", function() {

    const coordenadas = {
        base: [
            { lat: -23.5903031, lon: -46.6825861, icon:''}
        ],
        acidentes: [
            { lat: -23.5903031, lon: -46.6825861, icon:'fa-solid fa-car-burst'},
            { lat: -23.5910000, lon: -46.6830000, icon:'fa-solid fa-car-burst'}
        ],
        alagamentos: [
            { lat: -23.5919531, lon: -46.6825861, icon:'fa-solid fa-cloud-showers-water'}
        ],
        assedio: [
            { lat: -23.5903031, lon: -46.6895861, icon:'fa-solid fa-venus'}
        ],
        furto: [{ lat: -23.5903031, lon: -46.6805861, icon:'fa-solid fa-user-ninja'}
        ],
        morte: [{ lat: -23.5903031, lon: -46.6800861, icon:'fa-solid fa-skull'}
        ],
        roubo: [{ lat: -23.5869031, lon: -46.6825861, icon:'fa-solid fa-gun'}
        ],
    };


    var map = L.map('map_container').setView([coordenadas.base[0].lat, coordenadas.base[0].lon], 17);

    L.tileLayer('https://api.maptiler.com/maps/dataviz/256/{z}/{x}/{y}.png?key=NE3nPnfOYAFFjADM9bUI',
    {maxZoom: 20}).addTo(map);

    map.zoomControl.setPosition('topright');

    // Grupos de camadas para cada tipo de marcador
    var acidentesGroup = L.layerGroup().addTo(map);
    var alagamentosGroup = L.layerGroup().addTo(map);
    var assedioGroup = L.layerGroup().addTo(map);
    var furtoGroup = L.layerGroup().addTo(map);
    var morteGroup = L.layerGroup().addTo(map);
    var rouboGroup = L.layerGroup().addTo(map);

    // Adiciona marcadores aos respectivos grupos
    L.marker([-23.5903031, -46.6825861], { icon: criarMarcador('fa-solid fa-car-burst') }).addTo(acidentesGroup);
    L.marker([-23.5919531, -46.6825861], { icon: criarMarcador('fa-solid fa-cloud-showers-water') }).addTo(alagamentosGroup);
    L.marker([-23.5903031, -46.6895861], { icon: criarMarcador('fa-solid fa-venus') }).addTo(assedioGroup);
    L.marker([-23.5903031, -46.6805861], { icon: criarMarcador('fa-solid fa-user-ninja') }).addTo(furtoGroup);
    L.marker([-23.5903031, -46.6800861], { icon: criarMarcador('fa-solid fa-skull') }).addTo(morteGroup);
    L.marker([-23.5903031, -46.6810861], { icon: criarMarcador('fa-solid fa-skull') }).addTo(morteGroup);
    L.marker([-23.5893031, -46.6810861], { icon: criarMarcador('fa-solid fa-skull') }).addTo(morteGroup);
    L.marker([-23.5869031, -46.6825861], { icon: criarMarcador('fa-solid fa-gun') }).addTo(rouboGroup);

    // Mapeia botões a seus respectivos grupos
    const filtros = {
        acidentes: acidentesGroup,
        alagamentos: alagamentosGroup,
        assedio: assedioGroup,
        furto: furtoGroup,
        morte: morteGroup,
        roubo: rouboGroup
    };
 
    // Criar meus toggle buttons
    const buttons = document.querySelectorAll(".icon-button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Alterna a classe "active" no botão
            button.classList.toggle("active");

            // Pega o nome do filtro com base no texto do botão
            const filtro = button.querySelector("span").textContent.toLowerCase();

            // Mostra ou esconde os marcadores baseados no estado do botão
            if (button.classList.contains("active")) {
                map.addLayer(filtros[filtro]); // Mostra os marcadores
            } else {
                map.removeLayer(filtros[filtro]); // Esconde os marcadores
            }
        });
    });











    async function fetchAddress(address) {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`);
            const data = await response.json();
            if (data.length > 0) {
                const { lat, lon } = data[0];
                return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
            }
            return null;
        } catch (error) {
            console.error("Erro ao buscar o endereço:", error);
            return null;
        }
    };
    
    // Evento para atualizar o mapa enquanto o usuário digita
    const addressInput = document.getElementById('address_input');
    addressInput.addEventListener('input', async function () {
        const address = addressInput.value.trim();
        if (address.length > 3) { // Só busca se o texto tiver mais de 3 caracteres
            const result = await fetchAddress(address);
            if (result) {
                const { latitude, longitude } = result;
    
                // Atualiza o mapa e marcador
                map.setView([latitude, longitude], 17);
    
                // Remove o marcador anterior, se existir
                if (currentMarker) {
                    map.removeLayer(currentMarker);
                }
    
                // Adiciona um novo marcador
                currentMarker = L.marker([latitude, longitude]).addTo(map);
            }
        }
    });    



});
