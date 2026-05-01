const form = document.querySelector("#bookingForm");
const status = document.querySelector("#formStatus");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const petName = String(data.get("pet") || "your pet").trim();
  const service = String(data.get("service") || "grooming").trim();

  status.textContent = `Request received for ${petName}'s ${service}. This demo would send the request to the salon for confirmation.`;
  form.reset();
});
