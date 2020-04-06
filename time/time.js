//let timerId = setTimeout(sayHello, 1000); //запускаем через 1 сек
//clearTimeout(timerId); //Отменяем запуск

// let timerId = setInterval(sayHello, 1000); 
// clearTimeout(timerId);

// function sayHello(){
//   console.log('hello');
// }

// Рекурсивный вызов
// let timerId = setTimeout(function log(){
//   console.log('hello');
//   setTimeout(log, 2000);
// });

// Анимация кубика
let btn = document.querySelector('.btn');
let block = document.querySelector('.block');

function anim(){
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame(){
    if(pos == 250){
      clearInterval(id);
    } else{
      pos++;
      block.style.top = pos + 'px';
      block.style.left = pos + 'px';
    }
  }
}

btn.addEventListener('click', anim);

// ДЕЛИГИРОВАНИЕ
let cont = document.querySelector('.cont'),
    l = document.querySelectorAll('.l');

// cont.addEventListener('click', function(e){
//   if(e.target && e.target.classList.contains('l')){
//     console.log('true');
//   }
// });

cont.addEventListener('click', function(e){
  if(e.target && e.target.matches('div.first')){
    console.log('true');
  }
});
