

let guestScore =  document.getElementById("guest-score")
let homeScore =  document.getElementById("home-score")
homeScoreCount = 0
guestScoreCount = 0
function homeone() {
    homeScoreCount +=1
    homeScore.textContent = homeScoreCount
}
function hometwo() {
    homeScoreCount +=2
    homeScore.textContent = homeScoreCount
}
function homethree() {
    homeScoreCount +=3
    homeScore.textContent = homeScoreCount
}

function guestone() {
   guestScoreCount +=1
   guestScore.textContent =guestScoreCount
}
function guesttwo() {
   guestScoreCount +=2
   guestScore.textContent =guestScoreCount
}
function guestthree() {
   guestScoreCount +=3
   guestScore.textContent =guestScoreCount
}

function reset() {
    guestScoreCount = 0
    homeScoreCount = 0
    homeScore.textContent = homeScoreCount
    guestScore.textContent =guestScoreCount
}