document.addEventListener("DOMContentLoaded", function(e) {
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
        questions.initiateAPI();
        document.getElementById("regAll").style.display = "none"; 
        document.getElementById("scoreCard").style.display = "block";
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
        questions.loadQuestion();
    })

    //----------Lock answers-button----------//

    document.getElementById("btnAnswers").addEventListener("mousedown", function(e) {
        questions.selected(); 
        questions.scoreCalc(); 
        
    })

    document.getElementById("btnAnswers").addEventListener("mouseup", function(e) {
        document.getElementById("questionsAll").style.display = "none";
        document.getElementById("answersAll").style.display = "block";
        questions.writeAnswers();
    })
})
