window.addEventListener("DOMContentLoaded", function(e) {
    let player = new Player();
    let btnPlay = document.getElementById("btnPlay");
    btnPlay.addEventListener("mousedown", function(e) {
        player.addPlayer();

        console.log(player);
    })
    btnPlay.addEventListener("mouseup", function(e) {
        //window.location.href = "index.html";
        console.log("slayer");
    })
})