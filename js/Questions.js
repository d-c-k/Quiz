class Questions {
    constructor(id = 0) {
        this.id = id;
        this.questionObj = [];
        this.answersObj = [];
        this.answerCheck = [];
        this.answerLabel = [];
        this.correctAnswersObj = [];
    }

    fetchQuestion() {
        let num = document.getElementById("list");
        let url = "https://quizapi.io/api/v1/questions?apiKey=V2SqyAql6TQH3KSslxE0L7hulaIiaFrZ3BeXbDqn&limit=" + num.value;
        fetch(url)
        .then((response) => response.json())
        .then((data) => { 
            for (let i = 0; i < num.value; i++) {
                //this.id = i + 1;
                this.questionObj.push(data[i].question);
                this.answersObj = Object.values(data[i].answers);
                if (data[i].correctAnswers != undefined) {
                    this.correctAnswersObj = Object.values(data[i].correctAnswers);
                }
            }

            console.log(this.questionObj);
            console.log(this.answersObj);
            for (let i = 1; i <= this.answersObj.length; i++) {
                this.answerLabel.push(document.getElementById("l" + i));
                this.answerCheck.push(document.getElementById("c" + i));
            }
        });
        
        
    }

    async newQuestion() {
        //--------------

        let num = document.getElementById("list");
        let url = "https://quizapi.io/api/v1/questions?apiKey=V2SqyAql6TQH3KSslxE0L7hulaIiaFrZ3BeXbDqn&limit=" + num.value;
        
        // fetch(url)
        // .then((response) => response.json())
        // .then((data) => {
        //--------------

        await fetch(url);

        for (let i = 0 ; i < num.value; i++) {
            this.id = i + 1;
            let questionId = document.getElementById("questionCounter");
            questionId.innerHTML = "Question " + this.id;

            let questionWrite = document.getElementById("question");
            questionWrite.innerHTML = this.questionObj[i];   
        }

            
        for (let i = 0; i < this.answersObj.length; i++) {
            if (this.answersObj[i] != undefined) {
                this.answerLabel[i].innerHTML = this.answersObj[i];
            } else {
                document.getElementById("d" + (i + 1)).style.display = "none";
            }
        }  
        
        console.log(this.correctAnswersObj)
    }

    correct() {

    }
}