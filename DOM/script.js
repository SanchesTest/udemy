

let heart = document.querySelectorAll('.heart'); 
let circle = document.querySelectorAll('.circle'); 
let div = document.createElement('div'); //создание элемента
let text = document.createTextNode('Hello World!'); //создание текстового узла

document.body.appendChild(div); // вставляем элемент в конец документа

document.body.insertBefore(text, heart[2]); //добавление текстового узла в DOM на 3-тью позицию в списке элементов heart

document.body.removeChild(heart[1]); // удаление элемента со страницы

document.body.replaceChild(heart[0], circle[2]); // елемент heart переставляем на место circle


let a = document.documentElement.textContent; //получения всего текста + title и CDATA-данных во всём документе

// textContent позволяет писать текст «безопасным способом». С textContent вставка получается «как текст», все символы трактуются буквально.

elem.outerHTML // получение элемента целиком  <div id="elem">Привет <b>Мир</b></div>

