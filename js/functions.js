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

    var main = document.querySelector("main")
    var footer = document.querySelector("footer")

    if (main.style.display != "none") {
        main.style.display = "none"
        footer.style.display = "none"
    }
    else {
        main.style.display = "block"
        footer.style.display = "block"
    }
})

function enlarge(element) {
    console.log("congrats! you've clicked on a polaroid")
    
    container = document.querySelector(".polaroids#sour")

    console.log(element.style.width)
    if (element.style.gridColumn == "1 / 4") {
        element.style.gridColumn = "span 1"
        element.style.gridRow = "span 1"
        element.style.transition = "transform .2s"
        element.style.width = "80%"
    }
    else {
        element.style.gridColumn = "1 / 4"
        element.style.transition = "transform .2s"
        element.style.gridRow = "1"
        element.style.width = "50%"
    }

}

function dodie(element) {
    console.log("hovering")
    console.log(element.src)
    console.log(element.alt)

    document.querySelector("#displayimage").src = element.querySelector(".image").src
    document.querySelector("#displayimage").alt = element.querySelector(".image").alt

}

window.addEventListener("load", function() {

	audio = document.querySelector("audio")
    cd = document.querySelector(".spin")

    cd.style.animationPlayState = "paused"

	audio.autoplay = false
	console.log("Auto play is set to false")

	audio.loop = true
	console.log("Loop is set to true")
});

document.querySelector(".play").addEventListener("click", function() {
	console.log("Play Video");

    var play = document.querySelector(".play")
    var pause = document.querySelector(".pause")
    cd = document.querySelector(".spin")

    cd.style.animationPlayState = "running"
    play.style.display = "none"
    pause.style.display = "inline"

    audio = document.querySelector("audio")

	audio.play()

});

document.querySelector(".pause").addEventListener("click", function() {
	console.log("Pause Video");

    var play = document.querySelector(".play")
    var pause = document.querySelector(".pause")
    cd = document.querySelector(".spin")

    cd.style.animationPlayState = "paused"

    play.style.display = "inline"
    pause.style.display = "none"

    audio = document.querySelector("audio")

	audio.pause()

});