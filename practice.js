// Задача №1

// if else, prompt

// Написати програму де ми питаємо у користувача

// номер місяця і показуємо до якого часу року він належить

// Якщо користувач ввів 2 - показуєм слово Зима

// Якщо 3 -Весна і т.д.


// const monthNumber = Number(prompt('enter month number'));
// if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
//     console.log("Зима")
// }else if (monthNumber >= 3  && monthNumber <=5) {
//     console.log('Весна')
// }else if (monthNumber >= 6 && monthNumber <=8) {
//     console.log('Літо')
// }else if ( monthNumber >= 9 && monthNumber <= 11) {
//     console.log('Осінь')
// }else {
//      console.log('дані не валідні')
// }


// ............

// Задача №2

 

// Написати програму яка перевіряє логін і пароль користувача

//  і виводить привітання - якщо все добре

//  і якщо ні помилку - невінний логін

// const login = 'user@gmail.com';

// const password = '12345'

// if (login === enterLogin && password === enterPassword) {
//     console.log('Hello')
//  } else {
//     console.log('Error')
//  }

//  const logIn = login === enterLogin && password === enterPassword ? 'Welcome' : 'Error';

//  console.log(logIn);


// ............

// Задача №3

/* на for

 * Напиши скрипт який підрахує суму всіх парних чисел,

 * які входят в діапазон чисел в змінних від min до max.

 * Наприклад, якщо min=0 і max=5, то діапазон 0-5,

 * зроби перевірку

 * виведи парні числа

 * і порахуй їх суму, змінна total

 * виведи консоль

 */

 

const min = 0;

const max = 5;

let total = 0;

for (let i = min; i <=max; i += 1){
    if (i % 2 === 0) {
        console.log('Парні числа', i );

        total += i;
    }
}

console.log('Сума парних чисел', total);

 

//..............................

// Задача №4

// Порахувати загальну суму в корзині

// const cart = [54, 28, 105, 70, 92, 17, 120];

// let total;

// const lastElement = carts.length - 1;створили змінну для останнього елемента
//  let total=0;
 
// for (let i = 0; i <= lastElement; i += 1){
//     console.log(carts[i]);//отримали доступ до кожного елемента
//     total += carts[i];//приплюсували кожен елемент

// }
// console.log('Сума усіх елементів', total);
// ...........................

 

// Задача №5

// Напиши скрипт який підраховує суму усіх парних чисел в масиві

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total;

// for (let i = 0; i <= numbers.length; i += 1){
//     if (numbers[i] % 2 === 0) {
//         console.log('Парні числа', numbers[i])


//         total += numbers[i];
//     }
// }
// console.log('Сума парних чисел', total);
