
var wins = 0;
var loser = 0;
var userTotal= 0;
var targetNumber = Math.floor(Math.random()*120)+19;

//keeps track of game stats
function update(){

    if (userTotal === targetNumber) {
        console.log("line10")
        winner++;
        $("#wins").text(wins);
        alert("You Win!!!");
        userTotal= 0;
        targetNumber = Math.floor(Math.random()*120)+19;
   var num1 = Math.floor(Math.random()*12+1);
   var num2 = Math.floor(Math.random()*12+1);
   var num3 = Math.floor(Math.random()*12+1);
   var num4 = Math.floor(Math.random()*12+1);
        
    } 
    else if (userTotal >= targetNumber) {
        console.log("line57")
        loser++;
        $("#losses").text(loser);
        alert("You Lose");
        userTotal= 0;
        targetNumber = Math.floor(Math.random()*120)+19;
   var num1 = Math.floor(Math.random()*12+1);
   var num2 = Math.floor(Math.random()*12+1);
   var num3 = Math.floor(Math.random()*12+1);
   var num4 = Math.floor(Math.random()*12+1);
        
       
    }

}

//Starts the game
$(document).ready(function() {

function runGame(){
    userTotal= 0;
    targetNumber = Math.floor(Math.random()*120)+19;
var num1 = Math.floor(Math.random()*12+1);
var num2 = Math.floor(Math.random()*12+1);
var num3 = Math.floor(Math.random()*12+1);
var num4 = Math.floor(Math.random()*12+1);
       
 $(".card-body").text(targetNumber);
  
    
$("#image1").on("click", function() {
     userTotal += num1
     $(".card-body2").text(userTotal);
     update();
    
    
})
$("#image2").on("click", function() {
     userTotal += num2
     $(".card-body2").text(userTotal);
     update();
  
})
$("#image3").on("click", function() {
     userTotal += num3 
     $(".card-body2").text(userTotal);
     update();
 
})
$("#image4").on("click", function() {
     userTotal += num4
     $(".card-body2").text(userTotal);
     update();
})


}
runGame();


    
    // function reset() {
    //     random = Math.floor(Math.random()*102+19);   
    //      num1 = Math.floor(Math.random()*12+1);
    //      num2 = Math.floor(Math.random()*12+1);
    //      num3 = Math.floor(Math.random()*12+1);
    //      num4 = Math.floor(Math.random()*12+1);
    //     $("#image1").attr("data-value", num1);
    //     $("#image2").attr("data-value", num2);
    //     $("#image3").attr("data-value", num3);
    //     $("#image4").attr("data-value", num4);
    //     userTotal = 0;
    //     $("#score").text(userTotal);

    // }
    
    // function winner() {
    //     wins++;
    //     $("#numberWins").text(wins);
    //     reset();
    // }
    
    // function loser() {
        
    //     losses++;
    //     $("#numberLosses").text(losses);
    //     reset();
    // }

    // user total
    
    // $(".image").on("click", function() {  
    //     $("#score").text(userTotal);
    
        // if (userTotal === random) {
        //     winner++
        //     alert("You Win!!!")
        // }
    
        // else if (userTotal > random) {
        //     loser++
        //     alert("You Lose")
        //     loser()
        // } 

        
    // })
});

