var divContent = document.createElement('div');
var ask = document.createElement('div');
var par = document.createElement('p');
var askInput = document.createElement('input');
var askBtn = document.createElement("button");
var circle = document.createElement('div');
var littleCircle = document.createElement('div');
var answer = document.createElement('span');

divContent.classList.add('content');
ask.classList.add('ask');
askBtn.classList.add('ask__btn');
circle.classList.add('circle');
littleCircle.classList.add('circle__little-circle');
answer.classList.add('answer');

askInput.setAttribute('type','text');

document.body.append(divContent);
divContent.append(ask);
divContent.append(circle);

ask.append(par);
ask.append(askInput);
ask.append(askBtn);

circle.append(littleCircle);
circle.append(answer);
littleCircle.append(answer);
par.innerHTML='Задайте ваш вопрос';
askBtn.innerHTML='Задать вопрос';

var otvetu = ['Может быть', 'Никогда!', 'Нет','Возможно', 'Да!','Не важно','Удовлетворительно', 'Выглядит реальным'];
askBtn.onclick = function Predict () {
    if(askInput.value.length){
        circle.classList.add('circleShake');
        var ans = otvetu[Math.floor(Math.random() * otvetu.length)];
        answer.className="answer";
        answer.innerHTML = ans;
        circle.addEventListener( "animationend",  function() {
        circle.classList.remove("circleShake");
        answers.classList.remove("answer")});
    }
}

