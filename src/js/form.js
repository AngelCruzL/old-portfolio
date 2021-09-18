const $form = document.getElementById('form-contact');
$form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: { Accept: 'application/json' },
  });
  if (response.ok) {
    this.reset();
    alert('Gracias por contactarme, me pondré en contacto contigo pronto 😀');
  }
}
