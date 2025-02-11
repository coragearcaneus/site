document.addEventListener("DOMContentLoaded", function() {
  /* --- Menu Hamburger --- */
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });

  /* --- Galeria de Fotos --- */
  const gallery = document.getElementById("photoGallery");

  // Array com links externos das imagens (substitua os links de exemplo pelos seus)
  const photos = [
    "https://link-do-seu-pet-1.jpg",
    "https://link-do-seu-pet-2.jpg",
    "https://link-do-seu-pet-3.jpg"
    // Adicione quantos links forem necessários
  ];

  // Cria um contêiner para cada foto, garantindo formatação fixa
  photos.forEach(photo => {
    const photoItem = document.createElement("div");
    photoItem.classList.add("photo-item");

    const img = document.createElement("img");
    img.src = photo;
    img.alt = "Foto de Corage Arcaneus";

    photoItem.appendChild(img);
    gallery.appendChild(photoItem);
  });

  /* --- Carrossel de Status --- */
  const carousel = document.getElementById("statusCarousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Array de slides com links externos
  const slides = [
    {
      image: "https://link-do-seu-status-1.jpg",
      caption: "Corage aproveitando o dia!"
    },
    {
      image: "https://link-do-seu-status-2.jpg",
      caption: "Hora do petisco!"
    }
    // Adicione mais slides conforme necessário
  ];

  // Cria os slides dinamicamente
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