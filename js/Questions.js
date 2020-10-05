class Questions {
    constructor(id = 0) {
        this.id = id;
        this.questionObj = [];
        this.answersObj = [];
        this.correctAnswersObj = [];
        this.chosenAnswers = [];
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

    async newQuestion() {

        let num = document.getElementById("list");
        let url = "https://quizapi.io/api/v1/questions?apiKey=V2SqyAql6TQH3KSslxE0L7hulaIiaFrZ3BeXbDqn&limit=" + num.value;
        
        await fetch(url);

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
    
    stepBack() {

        let num = document.getElementById("list");

        this.id--;

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

        // console.log(this.chosenAnswers[this.id - 1][1].length);
        //for (let i = 0; i < this.answersObj[this.id - 1].length; i++) {
            // if (this.chosenAnswers[this.id - 1].chosenAnswer.answerIndex.length == 1) {
            //     document.getElementById("c" + (this.chosenAnswers[this.id + 1].answerIndex)).checked == true;
            // } 
            // else if (this.chosenAnswers[this.id + 1].answerIndex.legth == 1) {
            //     console.log("hej");
            // }
        //}        

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

        let currentCorrect = this.correctAnswersObj[this.id - 1];
        console.log(currentCorrect);

        chosenAnswer.id = this.id;
        chosenAnswer.question = this.questionObj[this.id - 1];
        for (let i = 0; i < this.answersObj[this.id - 1].length; i++) {
            if (document.getElementById("c" + (i + 1)).checked == true) {
                chosenAnswer.answerArr.push(this.answersObj[this.id - 1][i]);
                chosenAnswer.answerIndex.push(i);
            }
            if (currentCorrect[i] === "true") {
                chosenAnswer.correctIndex.push(i);
            }
        }        
        
        this.chosenAnswers.splice(chosenAnswer.id - 1, 1, chosenAnswer);

        console.log(this.chosenAnswers);
    }
}