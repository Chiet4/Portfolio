document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contato-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "Enviando...";
    status.style.color = "#000";

    const formData = new FormData(form);
    const action = form.getAttribute("action");
    const ajaxUrl = action.includes("/ajax/") ? action : action.replace("://formsubmit.co/", "://formsubmit.co/ajax/");

    try {
      const response = await fetch(ajaxUrl, {
        method: "POST",
        body: formData
      });
      const resData = await response.json();

      if (response.ok) {
        status.textContent = "Mensagem enviada com sucesso!";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = resData.message || "Erro ao enviar.";
        status.style.color = "red";
      }
    } catch (error) {
      console.error(error);
      status.textContent = "Falha na conexão.";
      status.style.color = "red";
    }
  });
});
