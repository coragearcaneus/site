🐱 Corage Arcaneus - O Felino Lendário

Bem-vindo ao site oficial do Corage Arcaneus, um espaço dedicado ao gato mais lendário de todos os tempos. Aqui você encontra informações sobre ele, sua alimentação, vacinas, galeria de fotos e até um carrossel interativo de status!


---

📂 Estrutura do Projeto

CorageArcaneus/
│── index.html          # Página principal com todas as seções do site
│── styles.css          # Estilos do site (responsivo e dinâmico)
│── script.js           # Código JavaScript para interações (menu, galeria, carrossel)
│── images/             # Pasta de imagens do Corage (fotos, status, etc.)
│── README.md           # Documentação do projeto


---

🔥 Funcionalidades

✅ Cabeçalho Responsivo → Com um menu hamburger que expande ao clicar.
✅ Galeria de Fotos → Adicione quantas imagens quiser, mantendo sempre o mesmo formato.
✅ Seção de Vacinas → Lista atualizada com as vacinas tomadas e futuras.
✅ Seção de Alimentação → Informações sobre a dieta e petiscos favoritos.
✅ Carrossel de Status → Um slider com imagens que simulam "stories".
✅ Design Responsivo → O site funciona perfeitamente em qualquer tela!


---

🚀 Como Usar

📌 1. Adicionar Novas Fotos

Para adicionar novas imagens do Corage à galeria:

1. Coloque suas fotos na pasta images/.


2. Abra o arquivo script.js.


3. Na variável photos, adicione o nome do novo arquivo:



const photos = [
    "images/corage1.jpg",
    "images/corage2.jpg",
    "images/corage3.jpg",
    "images/corage4.jpg"  // Nova imagem adicionada
];

4. Salve as alterações e atualize a página.




---

📌 2. Adicionar Novos Status

Para incluir novas imagens no carrossel de status:

1. Salve a imagem na pasta images/.


2. No script.js, adicione um novo item na variável slides:



const slides = [
    {
        image: "images/status1.jpg",
        caption: "Corage aproveitando o dia!"
    },
    {
        image: "images/status2.jpg",
        caption: "Hora do petisco!"
    },
    {
        image: "images/status3.jpg",
        caption: "Dormindo como um rei!"
    }
];

3. Atualize o site para ver o novo status no carrossel.




---

🌍 Como Hospedar no GitHub Pages

1. Crie um repositório no GitHub chamado CorageArcaneus.


2. Envie todos os arquivos do projeto (index.html, styles.css, script.js, images/, etc.).


3. Vá até Settings > Pages no GitHub.


4. Escolha a branch principal e clique em Save.


5. Acesse seu site pelo link:

https://seuusuario.github.io/CorageArcaneus/




---

🔧 Personalização

Você pode editar os textos diretamente no index.html para personalizar informações sobre o Corage.

Se quiser mudar o estilo do site, edite styles.css. Algumas sugestões de personalização:

🎨 Mudar as cores – Alterar as cores no header, botões e textos.
📱 Melhorar a responsividade – Ajustar espaçamentos e tamanhos de elementos.
⚡ Adicionar novas seções – Criar novas partes como "Brinquedos favoritos", "Momentos épicos", etc.


---

💡 Tecnologias Utilizadas

HTML5 → Estrutura da página

CSS3 → Estilização e responsividade

JavaScript (ES6+) → Interações dinâmicas



---

📜 Licença

Este projeto é open-source! Você pode modificar e compartilhar à vontade. Se usar este site para seu próprio pet, mencione a inspiração! 🐾


---

🌟 Criado por [Davi] com amor para o Corage Arcaneus! 💙

Se precisar de melhorias, novas funcionalidades ou quiser sugestões, estou à disposição! 🚀

