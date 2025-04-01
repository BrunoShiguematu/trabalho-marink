const form = document.getElementById("form");
const username = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("pwd");
const passwardconfirmation = document.getElementById("pwd-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkform();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});
username.addEventListener("blur", () => {
  checkInputUsername();
});
lastname.addEventListener("blur", () => {
  checkInputLastname();
});
password.addEventListener("blur", () => {
  checkInputPwd();
});
passwardconfirmation.addEventListener("blur", () => {
  checkInputPwdConfirmation();
});

function checkInputUsername() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    errorInput(username, "Preenchar o seu Nome.");
  } else {
    const formItem = username.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputLastname() {
  const lastnameValue = lastname.value;

  if (lastnameValue === "") {
    errorInput(lastname, "Preenchar o seu Sobrenome.");
  } else {
    const formItem = lastname.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "Digite um email obrigatorialmente.");
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content";
  }
}
function checkInputPwd() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    errorInput(password, "Escolha uma Senha.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A Senha deve ter no mínimo 8 carcteres.");
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content";
  }
}

function checkInputPwdConfirmation() {
  const passwordValue = password.value;
  const passwardconfirmationValue = passwardconfirmation.value;

  if (passwordValue === "") {
    errorInput(passwardconfirmation, "Confirme a sua Senha.");
  } else if (passwardconfirmationValue !== passwordValue) {
    errorInput(passwardconfirmation, "As senhas não são iguais.");
  } else {
    const formItem = passwardconfirmation.parentElement;
    formItem.className = "form-content";
  }
}

function checkform() {
  checkInputUsername();
  checkInputLastname();
  checkInputEmail();
  checkInputPwd();
  checkInputPwdConfirmation();

  const formItem = form.querySelectorAll(".form-content");
  const isValid = [...formItem].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("Cadastro feito com Sucesso!");
    window.location.href = "Pag2.html"
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.className = "form-content error";
}
