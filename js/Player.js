class Player {
    constructor(name = '') {
        this.name = name;
    }

    addPlayer() {
        let nameInput = document.getElementById("nameInput");
        this.name = nameInput.value;

        let currentPlayer = document.getElementById("currentPlayer");
        currentPlayer.innerHTML = this.name;
    }
}