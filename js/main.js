const ham = document.getElementById("ham")

ham.addEventListener("click", function () {
    document.getElementsByClassName(`top`)[0].classList.toggle("open")
    document.getElementsByClassName(`middle`)[0].classList.toggle("open")
    document.getElementsByClassName(`bottom`)[0].classList.toggle("open")
})

ham.addEventListener("click", function () {
    document.getElementById("ham_open").classList.toggle(`open`)
})