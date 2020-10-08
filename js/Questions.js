class Questions {
    constructor(id = 0, score = 0) {
        this.id = id;
        this.questionObj = [];
        this.answersObj = [];
        this.correctAnswersObj = [];
        this.chosenAnswers = [];
        this.score = score;
    }

    setId() {
        let num = document.getElementById("list");

        if (this.id < num.value) {
            this.id++;
        }

        console.log("this.id = " + this.id);
    }

    fetchQuestion() {
        let tmp = [];
        let tmp2 = [];
        let num = document.getElementById("list");
        let url = "https://quizapi.io/api/v1/questions?apiKey=V2SqyAql6TQH3KSslxE0L7hulaIiaFrZ3BeXbDqn&limit=" + num.value;
        fetch(url)
        .then((response) => response.json())
        .then((data) => { 
            for (let i = 0; i < num.value; i++) {
                this.questionObj.push(data[i].question);

                tmp = Object.values(data[i].answers);
                this.answersObj.push(tmp);

                tmp2 = Object.values(data[i].correct_answers);
                this.correctAnswersObj.push(tmp2);
            }

            console.log(this.questionObj);
            console.log(this.answersObj);
            console.log(this.correctAnswersObj);
        });
        
        
    }

    async initiateAPI() {

        let num = document.getElementById("list");
        let url = "https://quizapi.io/api/v1/questions?apiKey=V2SqyAql6TQH3KSslxE0L7hulaIiaFrZ3BeXbDqn&limit=" + num.value;
        
        await fetch(url);

        this.loadQuestion();
    }

    loadQuestion() {
        
        for (let i = 1; i <= this.answersObj[this.id - 1].length; i++) {
            document.getElementById("d" + i).style.display = "block";
            document.getElementById("c" + i).checked = false;
        }

        let questionId = document.getElementById("questionCounter");
        questionId.innerHTML = "Question " + this.id + ":";

        let questionWrite = document.getElementById("question");
        questionWrite.innerHTML = this.questionObj[this.id - 1].replace(/\</g,"&lt;");
            
        for (let i = 0; i < this.answersObj[this.id - 1].length; i++) {
            if (this.answersObj[this.id - 1][i] != undefined) {
                document.getElementById("l" + (i + 1)).innerHTML = this.answersObj[this.id - 1][i].replace(/\</g,"&lt;");
            } else {
                document.getElementById("d" + (i + 1)).style.display = "none";
            }
        }

        this.activeButtons();
        this.selectedOptions();
    }

    stepBack() {

        this.id--;

        this.loadQuestion();
    }

    activeButtons() {

        let num = document.getElementById("list");

        document.getElementById("btnPrev").disabled = false;
        
        if (this.id < num.value) {
            document.getElementById("btnNext").disabled = false;
            document.getElementById("btnAnswers").disabled = true;
        }
        if (this.id == num.value) {
            document.getElementById("btnNext").disabled = true;
            document.getElementById("btnAnswers").disabled = false;
        }
        if (this.id <= 1) {
            document.getElementById("btnPrev").disabled = true;
        }
    }

    selected() {
        let chosenAnswer = {
            id: 0,
            question: "",
            answerArr: [],
            answerIndex: [],
            correct: false,
            correctIndex: [],
            correctAnswersStr: [],
        }

        let currentAnswer = this.answersObj[this.id - 1];
        let currentCorrect = this.correctAnswersObj[this.id - 1];        

        chosenAnswer.id = this.id;
        chosenAnswer.question = this.questionObj[this.id - 1].replace(/\</g,"&lt;");
        for (let i = 0; i < this.answersObj[this.id - 1].length; i++) {
            if (document.getElementById("c" + (i + 1)).checked == true) {
                chosenAnswer.answerArr.push(this.answersObj[this.id - 1][i].replace(/\</g,"&lt;"));
                chosenAnswer.answerIndex.push(i);
            }
            if (currentCorrect[i] === "true") {
                chosenAnswer.correctAnswersStr.push(currentAnswer[i].replace(/\</g,"&lt;"))
                chosenAnswer.correctIndex.push(i);
            }
        } 

        if (JSON.stringify(chosenAnswer.answerIndex) === JSON.stringify(chosenAnswer.correctIndex)) {
            chosenAnswer.correct = true;
        }
        
        this.chosenAnswers.splice(chosenAnswer.id - 1, 1, chosenAnswer);
        
        console.log(this.chosenAnswers);
    }

    scoreCalc() {
        let num = document.getElementById("list");

        for (let chosenAnswer of this.chosenAnswers) {
            if (chosenAnswer.correct == true) {
                this.score++;                
            }
        }

        document.getElementById("scoreLine").innerHTML = "You got " + this.score + " out of " + num.value + " questions right";
    }

    selectedOptions() {

        let a = this.chosenAnswers[this.id - 1];
        let b = this.answersObj[this.id - 1];
        let c = b.filter(x => x != null);        
            
        if (a != undefined && a.answerIndex.length >= 1) {
            for (let i = 0; i < c.length; i++) {
                document.getElementById("c" + (Number(a.answerIndex[i]) + 1)).checked = true;
                console.log("checked = " + (Number(a.answerIndex[i]) + 1));
            }
        }
    }

    writeAnswers() {

        let result = document.getElementById("resultList");
        let elementId = 0;

        for (let chosenAnswer of this.chosenAnswers) {

            elementId++;

            let container = document.createElement("div");
 
            let writeQuestionId = document.createElement("h1");
            let writeQuestion = document.createElement("h1");
            let writeChosen = document.createElement("p");
            let writeCorrect = document.createElement("p");

            writeQuestionId.innerHTML = "Question " + chosenAnswer.id + ":";
            writeQuestion.innerHTML = chosenAnswer.question;
            if (chosenAnswer.correct == true) {
                writeChosen.innerHTML = "You answered " + chosenAnswer.answerArr + " which is CORRECT!";
            } else {
                writeChosen.innerHTML = "You answered " + chosenAnswer.answerArr + " which is WRONG!";
                writeCorrect.innerHTML = "The correct answer is " + chosenAnswer.correctAnswersStr;
            } 

            container.appendChild(writeQuestionId);
            container.appendChild(writeQuestion);
            container.appendChild(writeChosen);
            container.appendChild(writeCorrect);

            container.classList.add("container");
            container.setAttribute("id", elementId);

            result.appendChild(container);            
        }
    }

    resetGame() {

        document.getElementById("scoreCard").style.display = "none";
        document.getElementById("scoreCard").style.display = "none";
        document.getElementById("questionsAll").style.display = "none";
        document.getElementById("answersAll").style.display = "none";
        document.getElementById("regAll").style.display = "block";   
        document.getElementById("scoreLine").innerHTML = "";    
        
        for (let i = 1; i <= this.id; i++) {
            let element = document.getElementById(i);
            if (document.getElementById(i) != undefined) {
                element.remove();
            }                
        }

        this.id = 0;
        this.questionObj.length = 0;
        this.answersObj.length = 0;
        this.correctAnswersObj.length = 0;
        this.chosenAnswers.length = 0;
        this.score = 0;

        let player = new Player();
        player.name = "";
    }
}