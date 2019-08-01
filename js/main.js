let questions = [{
    prompt: "Question 1: What is the name of his dog?",
    answers: ["Justin", "Wayne", "Tim", "Mike"],
    correctAnswerIndex: 0
},
{
    prompt: "Question 2: What is the name of his cat?",
    answers: ["Caesar", "Milo", "Rocky", "Sox"],
    correctAnswerIndex: 2
},
{
    prompt: "Question 3: What is the mother\'s name?",
    answers: ["Martha", "Mary", "Teresa", "Val"],
    correctAnswerIndex: 3
},
{
    prompt: "Question 4: What is the Father\'s name?",
    answers: ["Don", "John", "Jim", "Bill"],
    correctAnswerIndex: 3
},
{
    prompt: "Question 5: What is the child\'s name?",
    answers: ["Sam", "Martin", "Mike", "Goober"],
    correctAnswerIndex: 4
}
];


let userAnswers = [];
var arrAnswers = ["Justin", "Milo", "Mary", "Jim", "Mike"]

$(document).ready(function () {
    // do some init
    $("#submit").attr("disabled", true);
    console.log(questions.length);

    displayQuestion(questions);

});

var numberCorrect = 0
var clickCount = 0

// clickCount.clamp(clickCount, 0, 4);

$('.button').on('click', function (event) {
    console.log('Click Count', clickCount)
    // if (clickCount >= 0 && clickCount < 4) {
    if (event.target.value == "Submit" || event.target.value == "Next") {
        if (clickCount >= 0 && clickCount < 5) {
            
            clickCount++
            
            console.log(event.target, 'asdfasdf');
            console.log($("input:checked + label").text(), 'asldjfalsdf');
            
            userAnswers.push($("input:checked + label").text()); //This is the correct way to push the selected value to userAnswers array
            console.log(userAnswers);
            displayQuestion(questions);
            // console.log(checkedButton); //How come if I comment this out it jumps to line 72?
            console.log('asdfhskdjhfkjasdfkjasdf')
            
            
        }
        if (clickCount == 5) { //if you are on final page and click next or submit
            

            for (var i = 0; i < arrAnswers.length; i++) {
                if (arrAnswers[i] === userAnswers[i]) {
                    numberCorrect += 1
                } 
            } finalScore();
           
        }
    }
    if (event.target.value == "Previous") {
        if (clickCount > 0 && clickCount <= 4) {
            clickCount--
            displayQuestion(questions);
            // let prevAnswer = userAnswers.pop();
            console.log(userAnswers);
            $('form input[type="radio"]').prop("checked", true);
            // $('form[name="foo"]').show();
            // $(".button").show();
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

function finalScore() {
    console.log('You got', numberCorrect, 'out of 5 correct!')
    document.getElementById('question').innerText = ('You got' + ' ' + numberCorrect + ' ' + 'out of 5 correct!')
    // document.getElementById("element").style.display = "none";
    $('form[name="foo"]').hide();
    $(".button").hide();
    // ('You got', numberCorrect, 'out of 5 correct!')
    var button = document.createElement("button");
button.innerHTML = "Play Again?";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
    location.reload();
});
    
}