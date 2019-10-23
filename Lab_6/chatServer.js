/*
chatServer.js
Author: David Goedicke (da.goedicke@gmail.com)
Closley based on work from Nikolas Martelaro (nmartelaro@gmail.com) as well as Captain Anonymous (https://codepen.io/anon/pen/PEVYXz) who forked of an original work by Ian Tairea (https://codepen.io/mrtairea/pen/yJapwv)
*/

var express = require('express'); // web server application
var app = express(); // webapp
var http = require('http').Server(app); // connects http library to server
var io = require('socket.io')(http); // connect websocket library to server
var serverPort = 8000;


//---------------------- WEBAPP SERVER SETUP ---------------------------------//
// use express to create the simple webapp
app.use(express.static('public')); // find pages in public directory

// start the server and say what port it is on
http.listen(serverPort, function() {
  console.log('listening on *:%s', serverPort);
});
//----------------------------------------------------------------------------//


//---------------------- WEBSOCKET COMMUNICATION -----------------------------//
// this is the websocket event handler and say if someone connects
// as long as someone is connected, listen for messages
io.on('connect', function(socket) {
  console.log('a new user connected');
  var questionNum = 0; // keep count of question, used for IF condition.
  var cuisineflag;
  socket.on('loaded', function() { // we wait until the client has loaded and contacted us that it is ready to go.

    socket.emit('answer', "Hey, hello I am chat bot example a simple chat bot example."); //We start with the introduction;
    setTimeout(timedQuestion, 5000, socket, "What is your name?"); // Wait a moment and respond with a question.

  });
  socket.on('message', (data) => { // If we get a new message from the client we process it;
    console.log(data);
    questionNum = bot(data, socket, questionNum); // run the bot function with the new message
  });
  socket.on('disconnect', function() { // This function  gets called when the browser window gets closed
    console.log('user disconnected');
  });
});
//--------------------------CHAT BOT FUNCTION-------------------------------//
function bot(data, socket, questionNum) {
  var input = data; // This is generally really terrible from a security point of view ToDo avoid code injection
  var answer;
  var question;
  var waitTime;
  //var cuisineflag; //0 for mexican food, 1 for italian food
  
  /// These are the main statments that make up the conversation.
  if (questionNum == 0) {
    answer = 'Hello ' + input + ', I can help you choose where to eat!';
    waitTime = 5000;
    question = 'Now, which sounds better: Mexican food or Italian food?';
  }

 else if (questionNum == 1) {
    answer = input.toLowerCase() + ' food sounds good to me too!';
    waitTime = 5000;
    question = 'Would you prefer something quick?';
    if(input.toLowerCase() === 'mexican'){
      cuisineflag = 0;
    }
    else{
      cuisineflag = 1;
    }
  } else if (questionNum == 2) {
    if(cuisineflag == 0){
      if(input.toLowerCase() === 'yes' || input === 1){
        answer = 'Cool! You should go get some tacos then';
	waitTime = 5000;
      }
      else{
        answer = 'Cool! You should go get some enchiladas con mole then';
	waitTime = 5000;
      }
    }
    else{
            if(input.toLowerCase() === 'yes' || input === 1){
        answer = 'Cool! You should go get some pizza then';
	waitTime = 5000;
      }
      else{
        answer = 'Cool! You should go get some pasta then';
	waitTime = 5000;
      }
    }
  } 
    else {
      answer = 'I have nothing more to say!'; // output response
      waitTime = 5000;
      question = '';
  }


  /// We take the changed data and distribute it across the required objects.
  socket.emit('answer', answer);
  setTimeout(timedQuestion, waitTime, socket, question);
  return (questionNum + 1);
}

function timedQuestion(socket, question) {
  if (question != '') {
    socket.emit('question', question);
  } else {
    //console.log('No Question send!');
  }

}
//----------------------------------------------------------------------------//
