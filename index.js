const form = document.getElementById("signup-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const inputs = [firstName, lastName, email, password];
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.parentElement.classList.remove(
      "intro-form__form__input-group--error"
    );
  });
});

const setError = (el, msg) => {
  const parentEl = el.parentElement;
  parentEl.classList.add("intro-form__form__input-group--error");
  const errorText = parentEl.getElementsByTagName("span")[0];
  errorText.textContent = msg;
};

const validateInputs = () => {
  let isValid = true;

  const emailRe =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (firstName.value === "") {
    setError(firstName, "First Name cannot be empty");
    isValid = false;
  }

  if (lastName.value === "") {
    setError(lastName, "Last Name cannot be empty");
    isValid = false;
  }

  if (!emailRe.test(email.value)) {
    setError(email, "Looks like this is not an email");
    isValid = false;
  }

  if (password.value === "") {
    setError(password, "Password cannot be empty");
    isValid = false;
  }

  return isValid;
};

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const isValid = validateInputs();
  if (isValid) window.location.replace("https://github.com/mgksp");
});
