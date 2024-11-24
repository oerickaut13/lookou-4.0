# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Estudantes  </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Estudantes em modalidade presencial.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Evitar roubos e/ou locais com ocorrências.</td>
</tr>
  <tr align=center>
<th colspan="2">Perfil 02: Idosos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas com mais de 60 anos que transitam pela cidade.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Ter conhecimento das localidades inseguras na cidade em que está.</td>
</tr>
  <tr align=center>
<th colspan="2">Perfil 03: Mulheres </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Mulheres que precisam circular em lugares públicos pela cidade.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Evitar assédio, importunação sexual e proteger a integridade física.</td>
</tr>
  <tr align=center>
<th colspan="2">Perfil 04: Trabalhadores de Aplicativo </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Trabalhadores que circulam na cidade como atividade remunerada.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Desviar os deslocamentos para não passar por lugares perigosos e sofrer emboscadas. Conhecer os lugares está trabalhando.</td>
</tr>
  <tr align=center>
<th colspan="2">Perfil 05: Turistas </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas de passagem por uma cidade que não conhecem.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Tomar conhecimento dos pontos da cidade que não deveriam frequentar por causa do risco de incidentes.</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
|Estudante           |Aderir a uma universidade em área segura. |Fugir de problemas externos à minha graduação.|
|Idoso               |Sacar beneficios da aposentadoria em local seguro. |Garantir o sustento mensal.|
|Mulher              |Escolher lugares seguros para frequentar. |Diminuir as possibilidades de ser vítima de crimes voltados a mulheres.|
|Trabalhador de aplicativo           |Estar seguro no trabalho. |Proteger a minha integridade física.|
|Mulher              |Livrar-se do assédio em locais para prática de esportes. | Escapar de importunações.|
|Estudante           |Preservar o material escolar. | Não arcar com novos gastos.|
|Trabalhador de aplicativo          |Evitar deslocamento para áreas não seguras. |Diminuir possibilidades de perda de patrimônio/ferramenta de trabalho. |
|Turista             |Conhecer a cidade sem imprevistos. | Aproveitar as férias |
|Mulher              |Frequentar estabelecimentos noturnos. |Desfrutar do lazer noturno. |
|Trabalhador de aplicativo          | Decidir horários mais flexíveis relacionas à segurança no trânsito. |Driblar acidentes. |
|Turista             | Assegurar todos os documentos e pertences pessoais. | Não precisar encerrar a viagem mais cedo. |

## Requisitos do Projeto

### Requisitos Funcionais

|ID          | Descrição                       | Prioridade |
|------------|---------------------------------|------------|
| RF-01 | A aplicação deve permitir ao usuário cadastrar uma conta. | ALTA | 
| RF-02 | A aplicação deve exigir um upload de documento ou foto para cada conta criada. | ALTA |
| RF-03 | A aplicação deve permitir ao usuário fazer o login em sua conta. | ALTA | 
| RF-04 | A aplicação deve fornecer um mapa interativo com destaque das áreas de maior risco.| ALTA |
| RF-05 | O usuário deve conseguir filtrar as áreas de risco por data, local e tipos de ocorrências. | ALTA | 
| RF-06 | O usuário deve poder reportar incidentes diretamente pelo aplicativo. | ALTA |
| RF-07 | A aplicação deve integrar dados de segurança pública de fontes confiáveis. | ALTA |
| RF-08 | A aplicação deve garantir que os dados coletados sejam consistentes e íntegros ao longo do tempo. | ALTA |
| RF-09 | A aplicação deve encaminhar notificações para usuários cuja localização é considerada de risco. | ALTA |
| RF-10 | A aplicação deve bloquear notificações consecutivas por um mesmo usuário em um curto período. |ALTA|
| RF-11 | A aplicação deve usar a localização do usuário para fornecer alertas e informações específicas. | MÉDIA |
| RF-12 | A aplicação deve permitir que se veja informações sobre os perfis que relataram os incidentes. | MÉDIA | 
| RF-13 | A aplicação deve permitir que usuários se avaliem dentro da plataforma, e que os reports sejam avaliados, autenticando informação. | MÉDIA | 
| RF-14 | A aplicação deve permitir que usuários extraiam bases de dados de ocorrências em um csv. | BAIXA |

**Prioridade: Alta / Média / Baixa. 

### Requisitos Não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|-----------|
| RNF-01 | O design deve ser responsivo para funcionar em diferentes tamanhos de tela. | ALTA | 
| RNF-02 | O aplicativo deve fornecer possibilidade de aumento de fonte para facilitar a leitura. | MÉDIA | 
| RNF-03 | O aplicativo deve possuir pop-ups mostrando as mudanças realizadas nas atualizações. | BAIXA |
| RNF-04 | O aplicativo deve permitir ao usuário upload de uma foto de perfil. | BAIXA | 

**Prioridade: Alta / Média / Baixa. 

