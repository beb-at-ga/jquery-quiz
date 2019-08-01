let questions = [{
        prompt: "Question 1 ",
        answers: ["Justin", "Wayne", "Tim", "Mike"],
        correctAnswerIndex: 0
    },
    {
        prompt: "Question 2",
        answers: ["dsfsd", "Rub4324234y", "hfghfghfg", "sfdgdfg"],
        correctAnswerIndex: 2
    },
    {
        prompt: "Question 3",
        answers: ["gsdghjju6", "gfsdgs", "vxfgdf", "jyjxfh"],
        correctAnswerIndex: 3
    },
    {
        prompt: "Question 4",
        answers: ["345t345t", "4534t", "534t34", "g3q345ger"],
        correctAnswerIndex: 3
    },
    {
        prompt: "Question 5",
        answers: ["frefwer", "fhhfds", "r4q3fq34", "Pytht3t3t43on"],
        correctAnswerIndex: 4
    }
];


let userAnswers = [];


$(document).ready(function () {
    // do some init
    $("#submit").attr("disabled", true);
    console.log(questions.length);

    displayQuestion(questions);

});


var clickCount = 0
// clickCount.clamp(clickCount, 0, 4);

$('.button').on('click', function (event) {

    // if (clickCount >= 0 && clickCount < 4) {
    if (event.target.value == "Submit" || event.target.value == "Next") {
        if (clickCount >= 0 && clickCount < 4) {
            clickCount++
            displayQuestion(questions);
            console.log(event.target);
            // let checkedButton = $('input[name="answer-options"]:checked').val();
            // console.log(checkedButton);
            userAnswers.push($(checkedButton));
            $('form input[type="radio"]').prop("checked", false);
            console.log(userAnswers);
        }
    }
    if (event.target.value == "Previous") {
        if (clickCount > 0 && clickCount <= 4) {
            clickCount--
            displayQuestion(questions);
            // let prevAnswer = userAnswers.pop();
            console.log(userAnswers);
            $('form input[type="radio"]').prop("checked", true);
        }
    }
})
// else {
//     alert('Toooo Far')
// }
// })


let displayQuestion = function (questions) {

    $('#question').html(questions[clickCount].prompt);

    for (let i = 0; i < questions[clickCount].answers.length; i++) {
        // console.log(questions[clickCount].answers[i]);
        $(`label[for='${i}']`).html(questions[clickCount].answers[i]);
        // $(`a${i}`).data("answerIndex", questions[clickCount].answers[i]);
    }

    disableSubmit();

    $('input').on('click', function () {

        enableButton();

    });


}


// document.getElementById("submit").addEventListener("click", disableSubmit); // Runs the function when a clicked
// $('#submit').on('click', function (click) {
//     // function disableSubmit(click){
//     if (document.getElementById('a1').checked) {
//         const disabledSubmit = click.target;
//         disabledSubmit.disabled = true;
//     } else {
//         alert('Please Select One Option!')
//     }
// });

function disableSubmit(submit) {
    // const disabledSubmit = click.target;
    $("#submit").attr("disabled", true);
    //         disabledSubmit.disabled = true;
}

function enableButton() {
    // document.getElementById("submit").disabled = false;
    $("#submit").attr("disabled", false);
}