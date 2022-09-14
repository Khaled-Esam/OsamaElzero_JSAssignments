
let fonts = document.querySelector(".fonts");
let colors = document.querySelector(".colors");
let sizes= document.querySelector(".sizes");

if(window.localStorage.getItem("font")) {
    document.body.style.fontFamily = window.localStorage.getItem("font")
}
if(window.localStorage.getItem("color")) {
    document.body.style.color = window.localStorage.getItem("color")
}
if(window.localStorage.getItem("size")) {
    document.body.style.fontSize = window.localStorage.getItem("size")
}

fonts.addEventListener("change", (e) => {
    window.localStorage.setItem("font", e.currentTarget.value);
    document.body.style.fontFamily = window.localStorage.getItem("font")
})
colors.addEventListener("change", (e) => {
    window.localStorage.setItem("color", e.currentTarget.value);
    document.body.style.color = window.localStorage.getItem("color")
})
sizes.addEventListener("change", (e) => {
    window.localStorage.setItem("size", e.currentTarget.value);
    document.body.style.fontSize = window.localStorage.getItem("size")
})