//Sets turn to 0 meaning O's turn
let turn = 0;
let chosenBoxes = [0,0,0,0,0,0,0,0,0];

//On page ready the board div is hidden
$(document).ready(function(){
    $('.board').hide();
    $('#finish').hide();
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
let $boxes = $('.boxes').children();
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

//Select the li elements in boxes
var liList = document.querySelectorAll('li.box');

//This handles mouseover event
for(let i = 0; i < liList.length; i++){
    liList[i].addEventListener('mouseover', function(){
        if(turn == 0 && chosenBoxes[i] == 0){
            liList[i].style.backgroundColor = '#EFEFEF';
            liList[i].classList.toggle('box-filled-1');
        }else if(turn == 1 && chosenBoxes[i] == 0){
            liList[i].style.backgroundColor = '#EFEFEF';
            liList[i].classList.toggle('box-filled-2');
        }
    });
}

//This handles mouseout event
for(let i = 0; i < liList.length; i++){
    liList[i].addEventListener('mouseout', function(){
        if(turn == 0 && chosenBoxes[i] == 0){
            liList[i].classList.toggle('box-filled-1');
        }else if(turn == 1 && chosenBoxes[i] == 0){
            liList[i].classList.toggle('box-filled-2');
        }
    });
}

let winner = 0;

//This function checks for a winner 
//If all spaces are filled and there is 
//no winner it will return a tie
function checkForWinner(){
    //Check for x winners in every arrangement
    //This arrangement is the top row
    if(chosenBoxes[0] == 1 && chosenBoxes[1] == 1 && chosenBoxes[2] == 1){
        winner = 1;
        return winner;
    }
    //This arrangement is the middle row
    else if(chosenBoxes[3] == 1 && chosenBoxes[4] == 1 && chosenBoxes[5] == 1){
        winner = 1;
        return winner;
    }
    //This arrangement is the bottom row
    else if(chosenBoxes[6] == 1 && chosenBoxes[7] == 1 && chosenBoxes[8] == 1){
        winner = 1;
        return winner;
    }
    //This arrangement is diagonal top left to bottom right
    else if(chosenBoxes[0] == 1 && chosenBoxes[4] == 1 && chosenBoxes[8] == 1){
        winner = 1;
        return winner;
    }
    //This arrangement is digonal top righ to bottom left
    else if(chosenBoxes[2] == 1 && chosenBoxes[4] == 1 && chosenBoxes[6] == 1){
        winner = 1;
        return winner;
    }
    //This arrangement is the left column
    else if(chosenBoxes[0] == 1 && chosenBoxes[3] == 1 && chosenBoxes[6] == 1){
        winner = 1;
        return winner;
    }
    //This arrangement is the middle column
    else if(chosenBoxes[1] == 1 && chosenBoxes[4] == 1 && chosenBoxes[7] == 1){
        winner = 1;
        return winner;
    }
    //This arrangement is the right column
    else if(chosenBoxes[2] == 1 && chosenBoxes[5] == 1 && chosenBoxes[8] == 1){
        winner = 1;
        return winner;
    }

    //Checks for o winners in every arrangement
    //This arrangement is the top row
    if(chosenBoxes[0] == 2 && chosenBoxes[1] == 2 && chosenBoxes[2] == 2){
        winner = 2;
        return winner;
    }
    //This arrangement is the middle row
    else if(chosenBoxes[3] == 2 && chosenBoxes[4] == 2 && chosenBoxes[5] == 2){
        winner = 2;
        return winner;
    }
    //This arrangement is the bottom row
    else if(chosenBoxes[6] == 2 && chosenBoxes[7] == 2 && chosenBoxes[8] == 2){
        winner = 2;
        return winner;
    }
    //This arrangement is diagonal top left to bottom right
    else if(chosenBoxes[0] == 2 && chosenBoxes[4] == 2 && chosenBoxes[8] == 2){
        winner = 2;
        return winner;
    }
    //This arrangement is digonal top righ to bottom left
    else if(chosenBoxes[2] == 2 && chosenBoxes[4] == 2 && chosenBoxes[6] == 2){
        winner = 2;
        return winner;
    }
    //This arrangement is the left column
    else if(chosenBoxes[0] == 2 && chosenBoxes[3] == 2 && chosenBoxes[6] == 2){
        winner = 2;
        return winner;
    }
    //This arrangement is the middle column
    else if(chosenBoxes[1] == 2 && chosenBoxes[4] == 2 && chosenBoxes[7] == 2){
        winner = 2;
        return winner;
    }
    //This arrangement is the right column
    else if(chosenBoxes[2] == 2 && chosenBoxes[5] == 2 && chosenBoxes[8] == 2){
        winner = 2;
        return winner;
    }

    //Checks for a tie
    let numSelected = 0;

    for(let i = 0; i < 9; i ++){
        if(chosenBoxes[i] == 1 || chosenBoxes[i] == 2){
            numSelected ++;
        }
    }

    if(numSelected == 9){
        winner = 3;
        return winner;
    }

    //If there is no winner returns 0
    winner = 0;
    return winner;
}

//This handles the click event on the boxes
//and set the boxes to either x or o
//it also checks for a winner on every click
$($boxesUl).on('click', function(event){
    if(turn == 0 && chosenBoxes[$(event.target).index()] == 0){
        $(event.target).css('background-color', '#FFA000');
        $(event.target).addClass('box-filled-1');
        chosenBoxes[$(event.target).index()] = 1;
        $($playerSelector[1]).addClass('active');
        $($playerSelector[0]).removeClass('active');
    }else if(turn == 1 && chosenBoxes[$(event.target).index()] == 0){
        $(event.target).css('background-color', '#3688C3');
        $(event.target).addClass('box-filled-2');
        chosenBoxes[$(event.target).index()] = 2;
        $($playerSelector[0]).addClass('active');
        $($playerSelector[1]).removeClass('active');
    }
    if(turn == 0){
        turn = 1;
    }else{
        turn = 0;
    }

    //This checks for a winner and displays the winner screen
    if(checkForWinner() == 1){
        $('.board').hide();
        $('#finish').show();
        $('#finish').addClass('screen-win-one');
    }else if(checkForWinner() == 2){
        $('.board').hide();
        $('#finish').show();
        $('#finish').addClass('screen-win-two');
    }else if(checkForWinner() == 3){
        $('.board').hide();
        $('#finish').show();
        $('#finish').addClass('screen-win-tie');
        $('.message').text('There is a tie!');
    }
});

//This function clears the board so the game
//can be played again
function boardClear(){
    chosenBoxes = [0,0,0,0,0,0,0,0,0];
    $($playerSelector[0]).removeClass('active');
    $($playerSelector[1]).removeClass('active');
    $($playerSelector[0]).addClass('active');
    turn = 0;
    $($boxesUl).each(function(index){
        $($boxes).removeClass('box-filled-1');
        $($boxes).removeClass('box-filled-2');
        $($boxes).css('background-color', '#EFEFEF')
    });
}

//This handles the events when the new game button is clicked
$('#finish a').on('click', function(){
    boardClear();
    $('.message').text('Winner');
    $('#finish').hide();
    $('.board').show();
    $('#finish').removeClass('screen-win-one');
    $('#finish').removeClass('screen-win-two');
    $('#finish').removeClass('screen-win-tie');
});

