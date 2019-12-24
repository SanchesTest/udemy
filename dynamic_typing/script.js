// Динамическая типизация

//================== - to String

// 1)
String(4); //= string

// 2)
'q' + 5 //= q5

'q' + false //= qfalse

typeof('' + 5) //= string

console.log(typeof('' + 5));

//=================== - to Number

// 1)
Number('4') //= number

// 2)
+'4' //= number

typeof(5 + +'4') //= number

5 + +'4' //= 9

// 3)
typeof(parseInt('15px', 10)) //= number

parseInt('15px', 10) //= 15


// ================================= Логическое преобразование

//==== Всегда false
// 0, '', null, undefined, NaN

let switcher = null;

if(switcher){
  console.log('Loading...');
}

switcher = 1;

if(switcher){
  console.log('Working...');
}

// 2)
Boolean('5') //= true or Boolean(5)

Boolean(0) //= false

typeof(Boolean('5')) //= boolean

// 3)
typeof(!!'5') //= boolean

!!'5' //= true

!!0 //= false

