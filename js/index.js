let scoreHomeEl = document.getElementById("home-score")
let scoreGuestEl = document.getElementById("guest-score")
let scoreHome = Number(scoreHomeEl.textContent)
let scoreGuest = Number(scoreGuestEl.textContent)

function addOneHome(){
    //console.log(scoreHome)
    scoreHome++
    scoreHomeEl.textContent = scoreHome.toString()
    //console.log(scoreHome)
    //console.log(scoreHomeEl.textContent)
}

function addTwoHome(){
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome.toString()
}

function addThreeHome(){
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

function addOneGuest(){
    scoreGuest++
    scoreGuestEl.textContent = scoreGuest
}

function addTwoGuest(){
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function addThreeGuest(){
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}