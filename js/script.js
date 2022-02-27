let Header = document.querySelector(".header")
let HeaderBugerIcon = document.querySelector(".header .buger-icon");
let Headerlinks = document.querySelector(".header ul")
let FooterUpDiv = document.querySelector(".Footer-Up");
let FooterUpBtn = document.querySelector(".Footer-Up button")

window.onscroll = () => {
    if (window.scrollY >= 900) {
        FooterUpDiv.classList.add("active")
        Header.classList.add("active")
    } else {
        FooterUpDiv.classList.remove("active")
        Header.classList.remove("active")
    }
} 

FooterUpBtn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}
HeaderBugerIcon.addEventListener("click" , function () {
    Headerlinks.classList.toggle("active")
    if (HeaderBugerIcon.style.display = "none") {
        console.log("Found")
    }
})
