window.onload = function() {
  let card = document.querySelector('.card');
  document.querySelector('#width').addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
      var inputWidth = document.querySelector('#width').value;
      card.style.width = inputWidth + "px";
      console.log(inputWidth);
    }
    if (e.key === 'Tab') {
      var inputWidth = document.querySelector('#width').value;
      card.style.width = inputWidth + "px";
      console.log(inputWidth);
    }
  });
  document.querySelector('#height').addEventListener("keypress", function (e) { 
    if (e.key === 'Enter') {
      var inputHeight = document.querySelector('#height').value;
      card.style.height = inputHeight + "px";
    }
    if (e.key === 'Tab') {
      var inputHeight = document.querySelector('#height').value;
      card.style.height = inputHeight + "px";
    }
  });
  document.querySelector('.top-suit').innerHTML = generateRandomSuit();
  document.querySelector('.bottom-suit').innerHTML = document.querySelector('.top-suit').innerHTML; 
  document.querySelector('.number').innerHTML = generateRandomNumber();
  let counter = 10;
  setInterval(function(){
    document.querySelector('#timer').innerHTML = counter;
    counter--;
    if (counter === 0) {
      window.location.reload();
    }
  }, 1000);
};

let generateRandomNumber = () => {                                  
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let indexNum = Math.floor(Math.random()*numbers.length);
  return numbers[indexNum];
}

let generateRandomSuit = () => {                                   
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random()*suit.length);
  if (indexSuit === 2 || indexSuit === 3) {
    document.querySelector('.top-suit').style.color = "red";
    document.querySelector('.bottom-suit').style.color = "red";
  }
  return suit[indexSuit];
}