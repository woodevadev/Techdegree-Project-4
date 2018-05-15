//Sets turn to 0 meaning O's turn
let turn = 0;

//On page ready the board div is hidden
$(document).ready(function(){
    $('.board').hide();
});

//Handles the clicking of the start game button
$('#start a').on('click', function(){
    $('#start').hide();
    $('.board').show();

});

//Selects the player li tags
let $playerSelector = $('.board header ul').children();

//Sets active player to player 1
$($playerSelector[0]).addClass('active');

//Selects all of the boxes
let $boxes = $('.board ul').children();
//Selects the ul in board div
let $boxesUl = $('.board ul');
//Makes an imaage tag 
let $imgTags = $('<img></img>');
//Selects the newly created img tags 
let $imgList = $('.board ul img');

//Add img tags to boxes
$($boxes).each(function(index){
    $($boxes[index]).append($imgTags);
});

//Handles the hover event making the boxes
//have a hover image of x or o
$($boxesUl).hover(function(event){
    if(turn == 0){
        $(event.target).css('background-color', '#EFEFEF');
        $(event.target).addClass('box-filled-1');
    }else{
        $(event.target).css('background-color', '#EFEFEF');
        $(event.target).addClass('box-filled-2');
    }
}, function(event){
    if(turn == 0){
        $(event.target).removeClass('box-filled-1');
    }else{
        $(event.target).removeClass('box-filled-2');
    }
});

//This function checks for a winner 
//If all spaces are filled and there is 
//no winner it will return a tie
function checkForWinner(){
    if($($boxes[0]).css('background-color') == '#FFA000'){
    }
}

$($boxesUl).on('click', function(event){
    if(turn == 0){
        $(event.target).css('background-color', '#FFA000');
        $(event.target).addClass('box-filled-1');
    }else{
        $(event.target).css('background-color', '#3688C3');
        $(event.target).addClass('box-filled-2');
    }
    if(turn == 0){
        turn = 1;
    }else{
        turn = 0;
    }

});

console.log($($boxes[0]).css('background'));