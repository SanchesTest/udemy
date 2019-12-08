// создание обьекта
let options = {
  width: 1024,
  height: 1024,
  name: 'test'
};

console.log(options.name);

// добавление в обьект
options.bool = false;

options.colors = {
  border: 'black',
  bg: 'red'
};


// удаление с обьекта
delete options.bool;

console.log(options);


// Перебор обьекта
for(let key in options){
  console.log('Property ' + key + ' have value ' + options[key]);
}


// Количество свойств в обьекте
console.log(Object.keys(options).length);