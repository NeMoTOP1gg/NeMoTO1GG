
function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function power(a, b) {
    return Math.pow(a, b);
}


function divide(a, b) {
    if (b === 0) {
        return 'Ошибка: деление на ноль';
    }
    return a / b;
}


console.log("Сложение: ", add(5, 3));         
console.log("Вычитание: ", subtract(5, 3));  
console.log("Возведение: ", power(5, 3));      
console.log("Деление: ", divide(5, 0));        
console.log("Деление: ", divide(5, 2));       