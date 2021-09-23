/* Students: Please use this week's project for Week 5: Assignment 5: Shared Libraries. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */

     const info = [
       {
         question: "What goes in between () in Javascript?",
         answers: ["parameter" , "placeholder" , "number" , "joke"],
         correct_choice:0
       },

      {
         question: "What gives you only true or false values",
         answers: ["switch" , "function" , "boolean" , "class"],
         correct_choice:2
      },

      {
         question: "What goes after function()?",
         answers: [";" , "{}" , "[]" , "$"],
         correct_choice:1
       }
       
     ];

//turn tracker
var turn= 0;

//var for score
var point = 0;

//After page load show question and show score
console.log("yup");
showQuestion();


//showQuestion with current answers
console.log("answers");
function showQuestion() {
  //set counter
  $('#turns').text(turn + 1);

  //show question in text
  $('#question').text( info[turn].question );

  //provide buttons for answers
  $('#answers').empty();

  

  for ( let index in info[turn].answers ){
    // make button and set text to answer text 
    let button = $("<span>");
   
    button.text( info[turn].answers[index] );
    
    //checking if answer is correct for score
      if(index == info[turn].correct_choice){
        console.log(index);
          button.click(keepScore); 
      };

      //store a custom html attribute data value in span

       button.data('choice', index);

       //append button into html model

       $('#answers').append(button);

      //add event handler
       button.draggable();
  }

  // make the question droppable to recieve the dragged answer
  $('#question').droppable(
      {
        drop: function(event, ui){
            console.log(ui.draggable.data('choice') );
            var userPick = ui.draggable.data('choice');
              //did they pick the right answer
              if( userPick === info[turn].correct_choice){
                keepScore(userPick);
              }
        }
      }
  );

}

/*function checkAnswer(choice) {
    // handle event when user clicks an answer: right or wrong?
    // decide which answer is correct
    if ( choice == info[turn].correct_choice ) {
      $('#buzz').empty();
      $('#ding').text("Yes! So smart");
      keepScore();
    } else {
      // wrong button
      $('#buzz').text("Nope, try again!");
      $('#ding').empty();
    }
}  */

function keepScore(){
  
    point += 5;
    console.log(point);
    $('#score').text(point);
    turn ++ 
    if( turn < info.length){
         showQuestion();
    }else{
      $('body').html("<h1>Game Over!</h1>");
    }

}