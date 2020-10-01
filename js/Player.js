class Player {
    constructor(name = '', score = 0) {
        this.name = name;
        this.score = score;
    }

    addPlayer() {
        let nameInput = document.getElementById("nameInput");
        this.name = nameInput.value;

        let currentPlayer = document.getElementById("currentPlayer");
        currentPlayer.innerHTML = this.name;
    }
}