const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const message = document.getElementById('message');

const submit = document.getElementById('submit');
const close = document.querySelector('.btn-close');

submit.addEventListener('click', function(e) {
	const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
	
	if (name.value !== '' && surname.value !== '' && email.value !== '' && email.value.indexOf("@") !== -1) {
		e.preventDefault();
		const modalNames = document.getElementById('names_m');
		const modalEmail = document.getElementById('email_m');
		const modalMessage = document.getElementById('message_m');
		modalNames.innerHTML = name.value + ' ' + surname.value;
		modalEmail.innerHTML = email.value;
		modalMessage.innerHTML = message.value;
		modal.show();
	}
})

close.addEventListener('click', function() {
	location.reload();
})

logo = document.querySelector('header img');
const audio = new Audio('./welcome.mp3');

logo.addEventListener("click", function() {
  if (!audio.paused) {
    return;
  }

	audio.play();
})

