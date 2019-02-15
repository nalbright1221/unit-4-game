//Crystal Collector Game 
var randomResult; 
var loss = 0 ;
var win= 0;
var totalScore;
var previous  = 0;

//computer picks a random result every time between  19 and 120 

$(".crystals").empty();

    var randomResult = Math.floor(Math.random() * 101) + 19;

 
$("#result").html('Random Result: ' + randomResult); 

//Every crystal needs to have a random number between 1-12 
//this loop generates 4 chrystals all in seperate divs with values between 1-12
for (var i = 0; i < 4; i ++){
    var random = Math.floor(Math.random() * 11) +1;
    console.log(random)

//selects div class 'crystals' and creates 4 new divs(each names crystal) within the .crystals div
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.html(random);

     $(".crystals").append(crystal);
    
}



//When clicking any crystal, it should be adding with previous value until it reaches total score 
$(".crystal").on('click',  function  () {  
    

    var crystNum = parseInt($(this).attr('data-random'));

    previous += crystNum;
    $("#current-total").html(previous);
    


    // if it is greater  than  random result, user gets loss. add 1 to loss counter 
    if( previous > randomResult ){
        loss++;
        $("#loss").html(loss);
        console.log('YOU LOSE!');
       
    }
    
    // a new random number should be generated every single time we win or lose 
    else if(previous === randomResult){
    
        win++;

        $("#win").html(win);
        console.log('YOU WIN');
        
    }
    
});






// if it is equal, user wins 