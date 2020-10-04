window.addEventListener("DOMContentLoaded", function(e) {
    let player = new Player();
    let questions = new Questions();    

    document.getElementById("btnPlay").addEventListener("mousedown", function(e) {
        questions.fetchQuestion();
        player.addPlayer();
        console.log(player);
    })
    
    document.getElementById("btnPlay").addEventListener("mouseup", function(e) {
        questions.setId();
        questions.newQuestion();
        document.getElementById("regAll").style.display = "none"; 
        document.getElementById("questionsAll").style.display = "block";
    })

    document.getElementById("btnNext").addEventListener("mousedown", function (e) {
        questions.correct();
    })

    document.getElementById("btnNext").addEventListener("mouseup", function (e) {
        questions.setId();
        questions.newQuestion();
    })
})
