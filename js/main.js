let questions = [{
        prompt: "Question 1: What is the name of his dog?",
        answers: ["Justin", "Wayne", "Tim", "Mike"],
        correctAnswer: "Justin"
    },
    {
        prompt: "Question 2: What is the name of his cat?",
        answers: ["Caesar", "Milo", "Rocky", "Sox"],
        correctAnswer: "Caesar"
    },
    {
        prompt: "Question 3: What is the mother\'s name?",
        answers: ["Martha", "Mary", "Teresa", "Val"],
        correctAnswer: "Martha"
    },
    {
        prompt: "Question 4: What is the Father\'s name?",
        answers: ["Don", "John", "Jim", "Bill"],
        correctAnswer: "Don"
    },
    {
        prompt: "Question 5: What is the child\'s name?",
        answers: ["Sam", "Martin", "Mike", "Goober"],
        correctAnswer: "Sam"
    }
];


let userAnswers = [];
let numberCorrect = 0;
let clickCount = 0;

$(document).ready(function () {
    $("#next").attr("disabled", true);
    $("#prev").attr("disabled", true);
    displayQuestion(questions);

});

$('.button').on('click', function (event) {
    if (event.target.value === "Submit" || event.target.value === "Next") {
        if (clickCount >= 0 && clickCount <= 4) {
            $("#prev").attr("disabled", false);

            clickCount++;
            //This is the correct way to push the selected value to userAnswers array
            userAnswers.push($("input:checked + label").text());
            // console.log(checkedButton); //How come if I comment this out it jumps to line 72?
        }

        //if you are on final page and click next or submit
        if (clickCount === 5) {
            for (let i = 0; i < questions.length; i++) {
                if (questions[i].correctAnswer === userAnswers[i]) {
                    numberCorrect += 1;
                }
            }
            finalScore();
        } else {
            displayQuestion(questions);
        }
    }
    if (event.target.value === "Previous") {
        if (clickCount > 0 && clickCount <= 4) {
            clickCount--;
            displayQuestion(questions);
            $('form input[type="radio"]').prop("checked", true);
        }
    }
});

let displayQuestion = function (questions) {
    $('#question').html(questions[clickCount].prompt);

    for (let i = 0; i < questions[clickCount].answers.length; i++) {
        $(`label[for='${i}']`).html(questions[clickCount].answers[i]);
    }

    $("#next").attr("disabled", true);

    $('input').on('click', function () {
        $("#next").attr("disabled", false);
    });
}

function finalScore() {
    document.getElementById('question').innerText = (`You got ${numberCorrect} out of ${questions.length}`);

    $('form[name="answer-form"]').hide();
    $(".button").hide();
    
    var button = document.createElement("button");
    button.innerHTML = "Play Again?";
    button.classList.add("button");

    $("main").append(button);

    // 3. Add event handler 
    button.addEventListener("click", function () {
        location.reload();
    });
}   