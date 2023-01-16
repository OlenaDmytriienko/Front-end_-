const num = ['Sasha', 'Olha', 'Sveta'];
let a = 2;
let b = 2;
let res = a + b;


let message;
message = 'Привіт'; 
alert(message); 

let years = confirm('Вам є 18 років?');
//alert('Вітаю');

//var years = prompt('Якого Ви року народження?');
//if (years => 2004) alert('Вітаю');

let name = prompt('Як я можу до Вас звертатися?');

alert(`Гарного дня, ${name}!`); /* Ви сонечко!*/
let names;

document.getElementById('calc').onclick = function () {
          let y = document.getElementById('year').value;
          let old = 2022 - y;
          if (old>=18) alert('Вітаю');
          else alert('Вхід заборонено');
}

/*names = ['Катя', 'Олег', 'Денис'];
alert(names); 
const CONSTANT = 'value can not be changed'
CONSTANT = Борис;
console.log(CONSTANT); */

console.log(a)
document.querySelector('.out').innerHTML = test;