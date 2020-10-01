class Questions {
    constructor(id = 0, questionObj = '') {
        this.id = id;
        this.questionObj = questionObj;
        this.answersObj = [];
        this.correctAnswersObj = [];
    }

    fetchQuestion() {
        // let num = document.getElementById("list");
        // let url = "https://quizapi.io/api/v1/questions?apiKey=V2SqyAql6TQH3KSslxE0L7hulaIiaFrZ3BeXbDqn&limit=" + num.value;
        // fetch(url)
        // .then((response) => response.json())
        // .then((data) => {
        //     for (let i = 0; i <= data.length; i++) {
        //         this.id = i + 1;
        //         this.questionObj = data[i].question;
        //         this.answersObj.push(data[i].answers);
        //         this.correctAnswersObj.push(data[i].correctAnswers);
        //     }
        // });
    }

    newQuestion() {
        //--------------
        let num = document.getElementById("list");
        let url = "https://quizapi.io/api/v1/questions?apiKey=V2SqyAql6TQH3KSslxE0L7hulaIiaFrZ3BeXbDqn&limit=" + num.value;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
        //--------------

        let questionId = document.getElementById("questionCounter");
        questionId.innerHTML = "Question " + data[0].index + 1;

        let questionWrite = document.getElementById("question");
        questionWrite.innerHTML = data[0].question;

        let answerCheck = document.getElementById("c1");
        answerCheck.innerHTML = data[0].answer[0];

        //---
        });
        //---
    }

    correct() {

    }
}