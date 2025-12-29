<script>
document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  const status = document.getElementById("status");
  status.textContent = "Sender...";

  try {
    const res = await fetch("https://rough-sun-c41c.antonyderskov.workers.dev/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const text = await res.text();
    status.textContent = text;
  } catch (err) {
    status.textContent = "Der opstod en fejl.";
  }
});
</script>
