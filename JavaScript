var playing = false;
var score;
var myCounter;
var timeremanining;

var correctAnswer;

//if we click on the start/reset
document.getElementById("startb").onclick = function(){
    
    //if we are playing
    
    if(playing == true){
        
        location.reload(); //reload page
        
    }else{//if we are not playing
        
        //change mode to playing
        
        playing = true;
        
        //set score to 0
        
        score = 0;
        document.getElementById("realscore").innerHTML = score;
        
        timeremanining = 30;
        document.getElementById("time").innerHTML = timeremanining;
      
        //change button to reset
        document.getElementById("startb").innerHTML = "Reset Game";
        
        //start countdown
        
        startCountdown();
        
        //generate a new Q&A
        
        generateQA();
    }
    
}

//Clicking on an answer box

for(i=1; i<5; i++){
    document.getElementById("b"+i).onclick = function(){
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("realscore").innerHTML = score;
           
            
            //Generate new Q&A
            
            generateQA();
        }else{
        
        }
    }
}   
}


function startCountdown(){

 myCounter = setInterval(function(){
     timeremanining -= 1;
     document.getElementById("time").innerHTML = timeremanining;
     if(timeremanining == 0){
         clearInterval(myCounter);
         document.getElementById("score").innerHTML = "Your Final Score is" + "<br/>" + score;
        // location.reload(); 
     }
 }, 1000);
 }
   






//generate question and multiple answers

function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("mathproblem").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("b"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("b"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
