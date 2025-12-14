/*
   Script 1: Confirmación al enviar el formulario
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita envío real

      messageBox.textContent =
        "✅ Gracias por tu consulta. Te Mensaje se ha metido en la pila de hechizos.";
      messageBox.classList.add("success");

      form.reset();
    });
  }
});

/* 
   Script 2: Cambio de estilo visual
*/
document.addEventListener("DOMContentLoaded", () => {
  const themeButtons = document.querySelectorAll(".toggle-theme");

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("alt-theme");
    });
  });
});