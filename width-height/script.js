let box = document.querySelector('.box'),
    btn = document.querySelector('.btn'),
    width = box.offsetWidth,
    height = box.scrollHeight; //высота с учетом скролла

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect()); //все координаты и размеры элемента
console.log(box.getBoundingClientRect().left); //положение елемента по левому краю

console.log(document.documentElement.clientWidth); //ширина документа
console.log(document.documentElement.clientHeight); //высота документа
console.log(document.documentElement.scrollTop); //прокрутка стр

btn.addEventListener('click', function(){
  // box.style.height = box.scrollHeight + 'px';
  box.scrollTop = 0;
});

//scrollBy(x, y); //прокрутка X, Y - перенесет относительно текущего расположения
//scrollTo(x, y); //прокрутка X, Y - перенесет в определенные координаты