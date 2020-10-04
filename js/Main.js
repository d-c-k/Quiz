window.addEventListener("DOMContentLoaded", function(e) {
    let player = new Player();
    let questions = new Questions();
    let currentScore = document.getElementById("currentScore");
    currentScore.innerHTML = player.score;
    let btnPlay = document.getElementById("btnPlay");

    btnPlay.addEventListener("mousedown", function(e) {
        questions.fetchQuestion();
        player.addPlayer();
        console.log(player);
    })
    btnPlay.addEventListener("mouseup", function(e) {
        questions.setId();
        questions.newQuestion();
        document.getElementById("regAll").style.display = "none"; 
        document.getElementById("questionsAll").style.display = "block";
    })

    // let answers = document.getElementById("btnAnswers");
    
    // answers.addEventListener("click", function(e) {
    //     questions.newQuestion();
    //     console.log(data)
    //     console.log(Questions)
    // })

    document.getElementById("btnNext").addEventListener("click", function (e) {
        questions.setId();
        questions.newQuestion();
    })
})
