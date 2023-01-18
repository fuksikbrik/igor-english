import jsonItem from '../items_a1.json' assert {type: 'json'};
const card = document.querySelectorAll("[data-card-word='card']");
let question = document.querySelector('#question');
const button = document.querySelector('#next');
const lvl = document.querySelectorAll('.complexity-icon-lvl');
const words = document. querySelector('.words'); 



lvl.forEach(function (item) {
    item.addEventListener('click', function () {
     // item.classList.toggle('active');
      item.classList.toogle('complexity-icon-lvl');
    })
})

words.innerHTML = `<div data-card-word="card" class="words-card"><p>${jsonItem.words[0].translations[0]}</p></div>
                   <div data-card-word="card" class="words-card"><p>${jsonItem.words[0].translations[1]}</p></div>
                   <div data-card-word="card" class="words-card"><p>${jsonItem.words[0].translations[2]}</p></div>
                   <div data-card-word="card" class="words-card"><p>${jsonItem.words[0].translations[3]}</p></div>`

card.forEach(function (item) {
   item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.classList.toggle('words-card');
   })
});

button.addEventListener('click', function(){
        

});
