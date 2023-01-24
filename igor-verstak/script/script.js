import jsonItem from '../items_a1.json' assert {type: 'json'};
const cardOne = document.getElementById('card-01');
const cardThwo = document.getElementById('card-02');
const cardThree = document.getElementById('card-03'); 
const cardFour = document.getElementById('card-04');
let question = document.querySelector('#question');
const card = document.querySelectorAll('[data-card-word="card"]')
const button = document.querySelector('#next');
const level = document.querySelectorAll('.complexity-icon-lvl');

let lastWord = card[0];
let lastLevel = level[0];

cardOne.innerHTML = `<p>${jsonItem.words[0].translations[0]}</p>`;
cardThwo.innerHTML =`<p>${jsonItem.words[0].translations[1]}</p>`;
cardThree.innerHTML =`<p>${jsonItem.words[0].translations[2]}</p>`;
cardFour.innerHTML =`<p>${jsonItem.words[0].translations[3]}</p>`;
question.innerHTML = `<p>${jsonItem.words[0].ru}</p>` 

function wrongAnswer() {
  alert('Ответ не верный!');
  location.reload();
}

function correctAnswer(){
  alert('Ответ верный!');
  location.reload();
}

for(let i = 0; i < level.length; i++ ){
    level[i].addEventListener('click', function () {
        lastLevel.classList.remove('active-lvl');
        this.classList.add('active-lvl');
        lastLevel = this
    });
}



for(let i = 0; i < card.length; i++ ){

  card[i].addEventListener('click', function () {
    lastWord.classList.remove('active');
    this.classList.add('active');
    lastWord = this; 
  });
}




button.addEventListener('click', function(){
 if(cardOne.classList.contains('active')){
      cardOne.classList.remove('active');
      cardOne.classList.add('true')
      setTimeout( correctAnswer, 1000)

  }if(cardThwo.classList.contains('active')){
      cardThwo.classList.remove('true');
      cardThwo.classList.add('false');
      cardOne.classList.add('true');
      setTimeout(wrongAnswer, 1000)

  }if(cardThree.classList.contains('active')){
      cardThree.classList.remove('true');
      cardThree.classList.add('false');
      cardOne.classList.add('true');
      setTimeout(wrongAnswer, 1000)
      
  }if(cardFour.classList.contains('active')){
      cardFour.classList.remove('true');
      cardFour.classList.add('false');
      cardOne.classList.add('true');
      setTimeout(wrongAnswer, 1000)
  }
});








//заметки---------------------------------------------------------------------------------------------------------------------------




/*
card.forEach(function (item) {
  item.addEventListener('click', function () {
    if(card.forEach(function (item) { item.addEventListener('click', function () { item.classList.contains('active')} )}) === 1){
      item.classList.toggle('active');
      item.classList.toggle('words-card');
    }
  })
});
*/



/*

*/


/*
let cells = document.getElementsByClassName('words-card');

for(let i=0; i<cells.length;i++){
    cells[i].addEventListener('click', selectDate);    
}
function selectDate(){
    this.className += ' active';
}
*/







/*
for (i = 0; words.length > i; i++) {
  panels[i].onclick = function() {
    let currentActive = active[0];
    if (currentActive){
      currentActive.classList.remove('active');
    }if (currentActive !== this){
      this.classList.add('active');
    }
  };
};

*/