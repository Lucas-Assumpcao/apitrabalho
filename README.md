# API Harry Potter

Aplicação web simples que busca personagens da API pública do Harry Potter e exibe detalhes como espécies, gênero, linhagem e casa.

## Tecnologias

- HTML
- CSS
- JavaScript
- API: `https://hp-api.onrender.com/api/characters`

## Funcionalidades

- Busca por nome de personagem
- Exibe foto, espécie, gênero, linhagem e casa
- Navegação entre personagens com botões "Voltar" e "Avançar"
- Imagem padrão exibida quando o personagem não tem foto

## Como executar

1. Abra o arquivo `index.html` no seu navegador.
2. Digite o nome do personagem no campo de busca.
3. Clique em `Buscar`.

## Estrutura do projeto

- `index.html` — marcação da página
- `styles.css` — estilos visuais
- `main.js` — lógica de busca e navegação
- `cage.jpg` — imagem padrão para personagens sem foto

## Observações

- O projeto depende de uma conexão com internet para acessar a API.
- A busca é sensível apenas ao conteúdo do nome; espaços e diferenças de caixa não impedem a pesquisa.
