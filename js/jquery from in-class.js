

// document.addEventListener('DOMContentLoaded', function(){
//     console.log('DOM Loaded');
// });


// $(document).ready(function () {
//     console.log('Jquery DOM loaded.')
// });


// $(function(){
//     console.log('Jquery 2 DOM loaded.')
// });


var myDiv = $('#myDiv');
myDiv.html('Hello...');


var newDiv2 = $('<div></div>').text('Jquery new div');
$('body').append(newDiv2);


// $('#myDiv').remove();

$('#myDiv').css('color', 'red');


$('div').css('background', 'yellow');

// $('#myDiv').click(function(){
//     $('#myDiv').hide('slow', function(){
//         alert('Animation Complete');
//     })
// })

$('#myDiv').on('click', function () {
    console.log('clicked');
})

$('form').on('submit', function (e) {
    e.preventDefault();
    console.log(e.target);
    let ul = $('ul');
    let value = $('input').val();
    var li = $(`<li>${value}</li>`)
    ul.append(li);
    console.log('Thanks for submitting the form');
})


$('ul').on('click', function(event) {
    console.log(`${event.target.textContent} says clicked.`);
})


// const FETCHME = 'https://www.beb.com';


// https://www.reddit.com/search.json  ?q=cats+nsfw:no

searchQuery = 'hunger games';

let result = $.get('http://www.omdbapi.com'), {
    apiKey: '7c511dd8',
    type: 'movie',
    s: searchQuery
}

console.log(result);