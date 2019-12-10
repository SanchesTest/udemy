//============================================ МАССИВЫ

// let arr =['first',2,3,'four',5];

// удалить последнее значения с массива
// arr.pop();

// добавляем елемент в конец массива
// arr.push('5');

// удалить элемент в начале массива
// arr.shift();

// добавить эллемент в начало массива
// arr.unshift('1');

// Перебор массива
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// Перебор массива
// arr.forEach(function(item, i, mass){
//   console.log(i + ': ' + item + ' (Массив: ' + mass + ')');
// });

// console.log(arr);



// получаем ключи (позиции элементов масиива), ключ 0 = значение 1, ключ 1 = значение 3
// let mass = [1,3,4,6,7];

// for(let key in mass){
//   console.log(key);
// }


// Получаем значения массива
// let massTwo = [1,3,4,6,7];

// for(let key of massTwo){
//   console.log(key);
// }


//============================================= SPLIT, JOIN, SORT

//============ SPLIT

// добавляем в массив элементы введенные в поле, разделитель запятая, тоесть вводить нид через запятую

// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);


//============  JOIN

// делаем с массива строку, все значения массива выведуца строкой, join(', '), задаем разделитель в строке, запятая и пробел
// let arr = ['awwe', 3, 'zzz', 'pp', 'ref'];
//     i = arr.join(', ');

// console.log(i);


//============ SORT

// построить элементы массива в алфавитном порядке
// let arr = ['awwe', 'zzz', 'pp', 'ref'];
//     i = arr.sort();

// console.log(arr);


//============ SORT цифер

// let arr = [1, 15, 4];
//     i = arr.sort(compareNum);

// function compareNum(a,b){
//   return a - b;
// }

// console.log(arr);
