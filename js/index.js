var NameInput = document.getElementById('SiteNameInput');
var EmailInput = document.getElementById('SiteEmailInput');
var PasswordInput = document.getElementById('SitePasswordInput');
var PasswordLogin = document.getElementById('PasswordLogin');
var EmailLogin = document.getElementById('EmailLogin');
var AllInputs = document.getElementById('AllInputs');
var Display = document.getElementById('Display');
var SignUpInputs = document.getElementById('SignUpInputs');
var InputsList = [];
if (localStorage.getItem('InputsList') != null) {
    InputsList = JSON.parse(localStorage.getItem('InputsList'));
}
function SignUp() {
    if (isNameValid() && isEmailValid() && PassValid()) {
        var InputsObject = {
            Name: NameInput.value,
            Email: EmailInput.value,
            Password: PasswordInput.value,
        };
        InputsList.push(InputsObject);
        ClearForm();
        localStorage.setItem('InputsList', JSON.stringify(InputsList));
        Success.classList.replace('d-none', 'd-block');
        SignUpInputs.classList.replace('d-block', 'd-none');
    } else {
        SignUpInputs.classList.replace('d-none', 'd-block');
        Success.classList.replace('d-block', 'd-none');
    }
}
function ClearForm() {
    NameInput.classList.remove('is-valid');
    EmailInput.classList.remove('is-valid');
    PasswordInput.classList.remove('is-valid');
}
function Login() {
    var email = EmailLogin.value;
    var password = PasswordLogin.value;
    for (var i = 0; i < InputsList.length; i++) {
        if (email === InputsList[i].Email && password === InputsList[i].Password) {
            localStorage.setItem('CurrentUser', JSON.stringify(InputsList[i]));
            window.open("./logout.html", "_self");
            return;
        }
    }
    AllInputs.classList.replace('d-none', 'd-block');
}
function DisplayName() {
    var currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
    if (currentUser) {
        document.getElementById("Display").innerHTML = `<h1 class="mb-3">Welcome ${currentUser.Name}</h1>`;
    }
}
function Logout() {
    localStorage.removeItem('CurrentUser');
    document.getElementById("Display").innerHTML = "";
}

var regex = {
    RegexName: /^[A-Za-z\s]{2,}$/,
    RegexEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    RegexPass: /^[A-Za-z\d@$!%*?&]{4,}$/
}
function isNameValid() {
    if (regex.RegexName.test(NameInput.value)) {
        return true
    } else {
        return false
    }
}
NameInput.addEventListener("keyup", function () {
    if (isNameValid() == true) {
        NameInput.classList.add('is-valid');
        NameInput.classList.remove('is-invalid');
    } else {
        NameInput.classList.add('is-invalid');
        NameInput.classList.remove('is-valid');
    }
})

function isEmailValid() {
    if (regex.RegexEmail.test(EmailInput.value)) {
        return true
    } else {
        return false
    }
}
EmailInput.addEventListener("keyup", function () {
    if (isEmailValid() == true) {
        EmailInput.classList.add('is-valid');
        EmailInput.classList.remove('is-invalid');
    } else {
        EmailInput.classList.add('is-invalid');
        EmailInput.classList.remove('is-valid');
    }
})
function PassValid() {
    if (regex.RegexPass.test(PasswordInput.value)) {
        return true
    } else {
        return false
    }
}
PasswordInput.addEventListener("keyup", function () {
    if (PassValid() == true) {
        PasswordInput.classList.add('is-valid');
        PasswordInput.classList.remove('is-invalid');
    } else {
        PasswordInput.classList.add('is-invalid');
        PasswordInput.classList.remove('is-valid');
    }
})



