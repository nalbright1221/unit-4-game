//Crystal Collector Game 
var randomResult;
var loss = 0;
var win = 0;
var totalScore;
var previous = 0;

//computer picks a random result every time between  19 and 120 
var gameStartReset = function () {

    $(".crystals").empty();
   
        var images = [
            'https://i.postimg.cc/gxhd9FHx/blue.jpg',
            'https://i.postimg.cc/DWKhnjxB/green.jpg', 
            'https://i.postimg.cc/vgYd61Fn/pink.jpg', 
            'https://i.postimg.cc/LqBpXt7R/purple.jpg'];
    
    
        var randomResult = Math.floor(Math.random() * 101) + 19;
    
        $("#result").html('Random Result: ' + randomResult);
    
        //Every crystal needs to have a random number between 1-12 
        //this loop generates 4 chrystals all in seperate divs with values between 1-12
        for (var i = 0; i < 4; i++) {
            var random = Math.floor(Math.random() * 11) + 1;
            console.log(random)
    
            //selects div class 'crystals' and creates 4 new divs(each names crystal) within the .crystals div
            var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });
    
            ///puts crystal images into  div 
    
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
    
            });
    
            // //take this out so you cant see the numerical value for each crystal
            // crystal.html(random);
    
            $(".crystals").append(crystal);
    
        }
        $("#current-total").html(previous);
    }
    gameStartReset();

//When clicking any crystal, it should be adding with previous value until it reaches total score 

$(document).on('click', ".crystal", function () {


    var crystNum = parseInt($(this).attr('data-random'));

    previous += crystNum;

    $("#current-total").html(previous);


    // if it is greater  than  random result, user gets loss. add 1 to loss counter 
    if (previous > randomResult) {

        loss++;

        $("#loss").html(loss);
        
        previous = 0;

        gameStartReset();

    } 
    else if (previous === randomResult) {

        win++;

        $("#win").html(win);
        
        previous = 0;

       gameStartReset();
        
    }

});

// a new random number should be generated every single time we win or lose