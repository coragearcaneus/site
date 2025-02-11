document.addEventListener("DOMContentLoaded", function() {
  /* --- Menu Hamburger --- */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });

  /* --- Galeria de Fotos --- */
  const gallery = document.getElementById("photoGallery");

  // Array com links externos das imagens (substitua pelos seus links do Terabox)
  const photos = [
    "https://i.postimg.cc/KYdXG0Pf/images-2.jpg",
    "https://i.postimg.cc/KYdXG0Pf/images-2.jpg",
    "https://i.postimg.cc/KYdXG0Pf/images-2.jpg"
  ];

  // Criar a modal para exibição em tela cheia
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.classList.add("modal");
  modal.innerHTML = `
    <span class="close-modal">&times;</span>
    <img class="modal-content" id="modalImg">
  `;
  document.body.appendChild(modal);

  const modalImg = document.getElementById("modalImg");
  const closeModal = document.querySelector(".close-modal");

  // Criar elementos da galeria
  photos.forEach(photo => {
    const photoItem = document.createElement("div");
    photoItem.classList.add("photo-item");

    const img = document.createElement("img");
    img.src = photo;
    img.alt = "Foto de Corage Arcaneus";
    img.classList.add("gallery-img");

    // Evento para abrir imagem em tela cheia
    img.addEventListener("click", function() {
      modal.style.display = "flex";
      modalImg.src = this.src;
    });

    photoItem.appendChild(img);
    gallery.appendChild(photoItem);
  });

  // Fechar a modal ao clicar no "X"
  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Fechar modal ao clicar fora da imagem
  modal.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  /* --- Carrossel de Status --- */
  const carousel = document.getElementById("statusCarousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Array de slides com links externos
  const slides = [
    {
      image: "https://i.postimg.cc/xCHwcLg2/images-1.jpg",
      caption: "Corage aproveitando o dia!"
    },
    {
      image: "https://i.postimg.cc/xCHwcLg2/images-1.jpg",
      caption: "Hora do petisco!"
    }
  ];

  // Criar slides dinamicamente
  slides.forEach(slide => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");
    slideDiv.innerHTML = `
      <img src="${slide.image}" alt="Status do Corage">
      <p class="caption">${slide.caption}</p>
    `;
    carousel.appendChild(slideDiv);
  });

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    const slideWidth = carousel.querySelector(".slide").clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }

  prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });

  // Auto play do carrossel a cada 5 segundos
  setInterval(() => {
    nextBtn.click();
  }, 5000);
});