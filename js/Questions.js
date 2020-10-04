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
    }

    correct() {
        let chosenAnswer = {
            id: 0,
            question: "",
            answerArr: [],
            correct: false,
        }

        chosenAnswer.id = this.id;
        chosenAnswer.question = this.questionObj[this.id - 1];
        for (let i = 0; i < this.answersObj[this.id - 1].length; i++) {
            if (document.getElementById("c" + (i + 1)).checked == true) {
                chosenAnswer.answerArr.push(this.answersObj[this.id - 1][i]);
            }
            //if (this.correctAnswersObj[i] = true)
        }
        
        
        this.chosenAnswers.push(chosenAnswer);

        console.log(this.chosenAnswers);
    }
}