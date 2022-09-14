
let name = document.querySelector(".name");
let pass = document.querySelector(".pass");
let age = document.querySelector(".age");
let country = document.querySelector(".country")

if(window.sessionStorage.getItem("name") ) {
    name.value = window.sessionStorage.getItem("name")
}
if(window.sessionStorage.getItem("age") ) {
    age.value = window.sessionStorage.getItem("age")
}
if(window.sessionStorage.getItem("pass") ) {
    pass.value = window.sessionStorage.getItem("pass")
}
if(window.sessionStorage.getItem("country")) {
    country.value = window.sessionStorage.getItem("country")
}

name.onblur = function () {
    window.sessionStorage.setItem("name", name.value)
}
pass.onblur = function () {
    window.sessionStorage.setItem("pass", pass.value)
}
age.onblur = function () {
    window.sessionStorage.setItem("age", age.value)
}

window.sessionStorage.setItem("country", country.value)
country.addEventListener("change", (e) => {
    window.sessionStorage.setItem("country", country.value);
})
