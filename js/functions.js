document.querySelector('.menu_bars').addEventListener('click', function() {

    console.log("toggle menu icon on mobile")
    this.classList.toggle("change")

    var pages = document.querySelector(".nav_list")
    var socials = document.querySelector(".socials")
    var nav = document.querySelector("nav")
    var name = document.querySelector(".name")

    pages.classList.toggle("change")
    socials.classList.toggle("change")
    nav.classList.toggle("change")
    name.classList.toggle("change")
})