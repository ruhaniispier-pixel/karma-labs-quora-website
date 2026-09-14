document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("audit-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thanks! Your audit request has been captured. Connect this form to your preferred email/CRM to receive submissions.");
    });
  }
});
