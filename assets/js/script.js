'use strict';

/**
 * navbar toggle
 */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // prevent bubbling if needed
  header.classList.toggle("nav-active");
  navToggleBtn.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.remove("nav-active"); // intentionally just remove to always close on link click
    navToggleBtn.classList.remove("active");
  });
}

document.addEventListener("click", function (e) {
  // close nav if clicked outside header
  if (!header.contains(e.target) && header.classList.contains("nav-active")) {
    header.classList.remove("nav-active");
    navToggleBtn.classList.remove("active");
  }
});

/**
 * back to top & header
 */
const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * EmailJS Send Form
 */
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("uppODNWqjBnJ2R7wC"); // Ganti dengan User ID kamu

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_gss9858", "template_88dnk4p", contactForm)
        .then(function () {
          Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Pesan berhasil dikirim. Terima kasih!',
            confirmButtonColor: '#3085d6'
          });
          contactForm.reset();
        }, function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Gagal mengirim pesan: ' + error.text,
            confirmButtonColor: '#d33'
          });
        });
    });
  } else {
    console.error("Form dengan ID 'contact-form' tidak ditemukan.");
  }
});


const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeModalBtn = document.querySelector(".close-modal");

const portfolioCards = document.querySelectorAll(".portfolio-card");

if (modal && modalImg && portfolioCards) {
  portfolioCards.forEach(card => {
    card.addEventListener("click", function(e) {
      const linkHref = this.getAttribute("href");
      
      if(linkHref === "#") {
        e.preventDefault(); 
        
        const bgImage = this.style.backgroundImage;
        const urlRegex = /url\(["']?(.*?)["']?\)/;
        const match = bgImage.match(urlRegex);

        if (match && match[1]) {
          modalImg.src = match[1]; 
          modal.classList.add("show-modal"); 
        }
      }
    });
  });

  // Tutup modal ketika tombol 'X' diklik
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("show-modal");
    });
  }

  // Tutup modal ketika area hitam diklik
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show-modal");
    }
  });
}