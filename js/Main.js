window.addEventListener("DOMContentLoaded", function(e) {
    let player = new Player();
    let questions = new Questions();    

    //----------Start-button----------//

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

    //----------Previous-button----------//

    document.getElementById("btnPrev").addEventListener("mousedown", function(e) {
        questions.selected();        
    })

    document.getElementById("btnPrev").addEventListener("mouseup", function(e) {
        questions.stepBack();
    })

    //----------Next-button----------//

    document.getElementById("btnNext").addEventListener("mousedown", function(e) {
        questions.selected();        
    })

    document.getElementById("btnNext").addEventListener("mouseup", function(e) {
        questions.setId();
        questions.newQuestion();
    })

    //----------Lock answers-button----------//

    document.getElementById("btnAnswers").addEventListener("click", function(e) {
    })
})
