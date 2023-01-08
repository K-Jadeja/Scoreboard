

let guestScore =  document.getElementById("guest-score")
let homeScore =  document.getElementById("home-score")
homeScoreCount = 0
guestScoreCount = 0
function homeone() {
    console.log(homeScore)
    homeScoreCount +=1
    homeScore.textContent = homeScoreCount
}
function hometwo() {
    console.log(homeScore)
    homeScoreCount +=2
    homeScore.textContent = homeScoreCount
}
function homethree() {
    console.log(homeScore)
    homeScoreCount +=3
    homeScore.textContent = homeScoreCount
}

function guestone() {
   console.log(guestScore)
   guestScoreCount +=1
   guestScore.textContent =guestScoreCount
}
function guesttwo() {
   console.log(guestScore)
   guestScoreCount +=2
   guestScore.textContent =guestScoreCount
}
function guestthree() {
   console.log(guestScore)
   guestScoreCount +=3
   guestScore.textContent =guestScoreCount
}

function reset() {
    guestScoreCount = 0
    homeScoreCount = 0
    console.log(homeScoreCount)
    homeScore.textContent = homeScoreCount
    guestScore.textContent =guestScoreCount
}