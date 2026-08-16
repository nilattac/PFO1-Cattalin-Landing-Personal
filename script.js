// =========================================
// MODAL DE HABILIDADES
// Al hacer click en un botón .skill-btn, abre
// un modal con la imagen indicada en data-img
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("skill-modal");
  const modalImg = document.getElementById("modal-img");
  const skillButtons = document.querySelectorAll(".skill-btn");
  const closeElements = modal.querySelectorAll("[data-close]");

  let lastFocusedElement = null;

  function openModal(imgSrc, imgAlt) {
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt || "";
    modal.classList.add("modal--open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");

    lastFocusedElement = document.activeElement;
    modal.querySelector(".modal__close").focus();
  }

  function closeModal() {
    modal.classList.remove("modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    modalImg.src = "";

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  skillButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const imgSrc = button.getAttribute("data-img");
      const imgAlt = button.getAttribute("data-alt");
      openModal(imgSrc, imgAlt);
    });
  });

  closeElements.forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  // Cerrar con la tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal--open")) {
      closeModal();
    }
  });

  // =========================================
  // ENVÍO DEL FORMULARIO DE CONTACTO
  // =========================================
  const formulario = document.getElementById('form-contacto');

  // El condicional evita errores si cambias de página y el formulario no existe
  if (formulario) {
    formulario.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(formulario);
      
      fetch('https://web3forms.com', {
        method: 'POST',
        body: formData
      })
      .then(async (response) => {
        if (response.status === 200) {
          alert("¡Mensaje enviado con éxito! Me pondré en contacto pronto.");
          formulario.reset();
        } else {
          alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
      })
      .catch(error => {
        console.log(error);
        alert("Algo salió mal. Por favor, comprueba tu conexión.");
      });
    });
  }
});
