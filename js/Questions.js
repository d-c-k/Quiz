class Questions {
    constructor(id = 0) {
        this.id = id;
        this.questionObj = [];
        this.answersObj = [];
        this.answerCheck = [];
        this.answerLabel = [];
        this.correctAnswersObj = [];
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
                //this.id = i + 1;
                this.questionObj.push(data[i].question);
                // this.answersObj = Object.values(data[i].answers);
                // this.correctAnswersObj = Object.values(data[i].correct_answers);
                tmp = Object.values(data[i].answers);
                this.answersObj.push(tmp);
                tmp2 = Object.values(data[i].correct_answers);
                this.correctAnswersObj.push(tmp2);
            }

            // this.answersObj = Object.values(data.answers);
            // this.correctAnswersObj = Object.values(data.correct_answers);

            console.log(this.questionObj);
            console.log(this.answersObj);
            console.log(this.correctAnswersObj);
            for (let i = 1; i <= this.answersObj.length; i++) {
                this.answerLabel.push(document.getElementById("l" + i));
                this.answerCheck.push(document.getElementById("c" + i));
            }
        });
        
        
    }

    async newQuestion() {

        let num = document.getElementById("list");
        let url = "https://quizapi.io/api/v1/questions?apiKey=V2SqyAql6TQH3KSslxE0L7hulaIiaFrZ3BeXbDqn&limit=" + num.value;
        
        await fetch(url);

        for (let i = 1; i <= this.answersObj[this.id].length; i++) {
            document.getElementById("d" + i).style.display = "block";
        }

        let questionId = document.getElementById("questionCounter");
        questionId.innerHTML = "Question " + this.id;

        let questionWrite = document.getElementById("question");
        questionWrite.innerHTML = this.questionObj[this.id - 1].replace(/\</g,"&lt;");
            
        for (let i = 0; i < this.answersObj[this.id].length; i++) {
            if (this.answersObj[this.id - 1][i] != undefined) {
                this.answerLabel[i].innerHTML = this.answersObj[this.id - 1][i].replace(/\</g,"&lt;");
            } else {
                document.getElementById("d" + (i + 1)).style.display = "none";
            }
        }  
    }

    correct() {
    }
}