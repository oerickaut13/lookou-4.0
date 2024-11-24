document.addEventListener("DOMContentLoaded", function () {
    // Inicialização do mapa com Leaflet
    const map = L.map('map_container').setView([-23.5903031, -46.6825861], 17);

    L.tileLayer('https://api.maptiler.com/maps/dataviz/256/{z}/{x}/{y}.png?key=NE3nPnfOYAFFjADM9bUI', {
        maxZoom: 20
    }).addTo(map);

    map.zoomControl.setPosition('topright');

    let activeIcon = null; // Ícone atualmente selecionado
    let followMouseMarker = null; // Elemento que segue o mouse

    // Função para criar e configurar o marcador que segue o mouse
    function enableIconDrag(iconClass) {
        activeIcon = iconClass;

        // Cria o marcador que segue o mouse
        if (!followMouseMarker) {
            followMouseMarker = document.createElement('div');
            followMouseMarker.className = 'follow-mouse-marker';
            followMouseMarker.innerHTML = `<i class="${iconClass}" style="font-size: 24px; color: #CC164E;"></i>`;
            document.body.appendChild(followMouseMarker);

            // Atualiza a posição do marcador para seguir o mouse
            document.addEventListener('mousemove', (e) => {
                followMouseMarker.style.left = `${e.pageX}px`;
                followMouseMarker.style.top = `${e.pageY}px`;
            });
        }
    }

    // Adiciona o marcador no mapa ao clicar
    map.on('click', function (e) {
        if (activeIcon) {
            const { lat, lng } = e.latlng;

            // Adiciona um marcador ao mapa nas coordenadas do clique
            L.marker([lat, lng], { icon: criarMarcador(activeIcon) }).addTo(map);

            // Remove o marcador de acompanhamento do mouse
            if (followMouseMarker) {
                document.body.removeChild(followMouseMarker);
                followMouseMarker = null;
            }

            activeIcon = null; // Reseta o ícone ativo
        }
    });

    // Adiciona evento aos botões para ativar o modo de acompanhamento
    document.querySelectorAll('.icon-button').forEach((button) => {
        button.addEventListener('click', function () {
            const iconClass = button.querySelector('i').className;
            enableIconDrag(iconClass);
        });
    });

    // Função para criar o ícone do marcador
    function criarMarcador(icone, cor = '#CC164E', tamanho = '36px') {
        return L.divIcon({
            html: `<i class="${icone}" style="font-size: ${tamanho}; color: ${cor};"></i>`,
            className: '', // Remove bordas do marcador
            iconAnchor: [13, 13], // Centraliza o ícone no marcador
        });
    }
});
