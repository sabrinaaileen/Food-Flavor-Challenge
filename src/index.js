function submitContact(event) {
  event.preventDefault();
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");
  alert(
    `Thank you, ${nameInput.value}! We'll get in touch with you as soon as possible!`
  );
}
let form = document.querySelector("#submit-form");
form.addEventListener("submit", submitContact);
