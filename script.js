
// 1
// alert ("Я JavaScript")

// 2
// let admin;
// let name = 'Гоша'
// admin = name;
// alert(admin); 


// 3 let name = "Danya";
// alert( hello ${1} ); // ?
// alert( hello ${"name"} ); // ?
// alert( hello ${name} ); // ?

// 4
// var name = prompt("Как вас зовут?");
//  document.write("Привет, " + Name + "!")';

// 5
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?

// 6
// let a = 2;
// let x = 1 + (a *= 2);
// alert(a + b); // 12



// 7
// let a = parseInt(prompt("Первое число?", 1));
// let b = parseInt(prompt("Второе число?", 2));
// alert(a + b); // 3


// 4
// function greet() {
//    const name =
// document.getElementById('name').value;
//    console.log(`Hello, ${name}!`);
// }

// 8
// 7 > 5
// "стол" > стул
// "4" >"52"
// undefined ==null
// undefined === null
// null == "\n0\n"
// null ==+ "\n0\n"

// 10
// let value = prompt("Какое "официальное" название JavaScript?", '');
//     if (value == 'ECMAScript')
//     {
//        alert("Верно!");
//     }
//     else
//     {
//        alert("Не знаете? ECMAScript!");
//     }

// 11
// let value = prompt("Введите число")
// if (value > 0)
//  {
//    alert(1);
//  }
//    else if (value < 0)
//  {
//    alert(-1);
//  }
//    else
//  {
//    alert(0);
//  }

// 12
// let result;
// if (a +_b < 4) {
//    result = "Мало";
// }   else {
//    result = "Много";
// }


// 9
// if ("0") {
//     alert("Привет");
// }
// Да выведет, так как с js значение 0 является истинной, то есть true

// https://github.com/NeMoTOP1gg/NeMoTO1GG

// 13
// let message;
//     if(login =='Сотрудник') {
//         message = 'Привет';
//     }
//     else if (login == 'Директор') {
//         message = 'Здравствуйте';
//     }
//     else if (login == '') {
//         message = 'Нет логина';
//     }
//     else {
//         message = '';
//     }

// 14
// alert(null ||4|| undefined); - выводит 4

// 15
// alert(alert(1) ||2|| alert(3)); - выводит или 1 или 2 

// 16
// alert((1) && alert && (2));

// 17
// alert(alert(1) && alert(2));

// 18
// alert(null || 2 && 3 || 4);

// 19
// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value);


// 20
// if (age >= 14 && age <= 90){

// }

// 21
// if (!(age >= 17 && age <= 99)) { с НЕ

// }

// if (age < 17 || age > 99) { без НЕ

// }

// 22
// if (-1 || 0)alert('first')
// if (-1 && 0)alert('second');
// if (null || -1 && 1) alert ('third')

// выведется first и third



// 23
// let login = prompt('Введите логин:');

// if (login === "Админ") {
//     let password = prompt ("Введите поролль:");
//     if (password === "Я главнный:");{
//         alert("Здравствуйте!");
//     }   else if (password === null || password ===""){
//         alert("Отменено");
//     }   else{
//         alert("Неверный пороль");
//     }
//     }   else if (login === null || login === "") {
//         alert("Отменено");
//     }   else{
//         alert("Я вас не знаю");
//     }