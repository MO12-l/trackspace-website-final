document.querySelectorAll(".demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-message");
    if (message) {
      message.textContent = "Preview only — your details were not sent.";
    }
  });
});

document.querySelectorAll("[data-demo-message]").forEach((button) => {
  button.addEventListener("click", () => {
    const message = button.closest("form").querySelector(".form-message");
    if (message) {
      message.textContent = "Password reset is not available in this preview.";
    }
  });
});