'use strict';

/**
 * navbar toggle
 */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

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
/**
 * Preloader
 */

