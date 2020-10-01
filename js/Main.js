window.addEventListener("DOMContentLoaded", function(e) {
    let player = new Player();
    let btnPlay = document.getElementById("btnPlay");

    btnPlay.addEventListener("mousedown", function(e) {
        player.addPlayer();
        console.log(player);
    })
    btnPlay.addEventListener("mouseup", function(e) {

        let regAll = document.getElementById("regAll").style.display = "none"; 
        let questionsAll = document.getElementById("questionsAll").style.display = "block";
        
        console.log("slayer");
    })
})
