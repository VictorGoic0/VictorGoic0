document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formspree-form");
  const responseDiv = document.getElementById("formspree-response");
  if (!form) return;
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    responseDiv.textContent = "";
    responseDiv.classList.remove(
      "formspree-success",
      "formspree-error",
      "formspree-visible"
    );
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        responseDiv.textContent = "Thank you! Your message has been sent.";
        responseDiv.classList.add("formspree-success", "formspree-visible");
      } else {
        const data = await response.json();
        const errorMsg =
          data && data.errors && data.errors.length
            ? data.errors.map((e) => e.message).join(", ")
            : "Oops! There was a problem submitting your message.";
        responseDiv.textContent = errorMsg;
        responseDiv.classList.add("formspree-error", "formspree-visible");
      }
    } catch (error) {
      responseDiv.textContent =
        "Oops! There was a problem submitting your message.";
      responseDiv.classList.add("formspree-error", "formspree-visible");
    }
  });
  const resetBtn = document.getElementById("formspree-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      responseDiv.textContent = "";
      responseDiv.classList.remove(
        "formspree-success",
        "formspree-error",
        "formspree-visible"
      );
    });
  }
});
