class Player {
    constructor(name = '') {
        this.name = name;
        //this.score = score;
    }

    addPlayer() {
        let nameInput = document.getElementById("nameInput");
        this.name = nameInput.value;

        let currentPlayer = document.getElementById("currentPlayer");
        currentPlayer.innerHTML = this.name;
    }

    // playerScore() {
    //     for (let chosenAnswer of this.questions.chosenAnswers) {
    //         if (chosenAnswer.correct == true) {
    //             this.score++;
    //         }
    //     }

    //     console.log("from player: " + this.questions.chosenAnswers);
    // }

    // writeScore() {
        
    //     this.playerScore();
    //     document.getElementById("scoreLine").innerHTML = this.score;
    //     console.log(this.score);
    // }
}