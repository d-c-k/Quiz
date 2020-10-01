window.addEventListener("DOMContentLoaded", function(e) {
    let player = new Player();
    let currentScore = document.getElementById("currentScore");
    currentScore.innerHTML = player.score;
    let btnPlay = document.getElementById("btnPlay");

    btnPlay.addEventListener("mousedown", function(e) {
        player.addPlayer();
        console.log(player);
    })
    btnPlay.addEventListener("mouseup", function(e) {
        document.getElementById("regAll").style.display = "none"; 
        document.getElementById("questionsAll").style.display = "block";
    })
})
