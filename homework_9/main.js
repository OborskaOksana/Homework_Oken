// Все стірлочними!!!!!!!!!
// 1) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let average = (arr) => {
//     let sum = 0;
//     for (const i of arr) {
//         sum += i;
//     }
//     return sum / average.length;
// }
// document.write(average(mas));

// 2) створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let MinAndMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const Element of arg) {
//         if (Element < min) {
//             min = Element
//        }
//         if (Element > max) {
//             max = Element
//         }
//     }
//     document.write(`MaxElement = `, max ,`<br> MinElement =`)
//     return (min);
//
// }
// document.write(MinAndMax(4,5,9,-4,1,2,3,12,15,10));

// 3) створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = () => {
//     let arr=[];
//     for (let i=0; i<10; i++) {
//         arr.push(Math.round(Math.random()*10+1));
//     }
//     return arr;
// }
// document.write(random());

// 4) створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let random = (limit) => {
//     let arr=[];
//     for (let i=0; i<10; i++) {
//         arr.push(Math.round(Math.random()*100+10));// від 10 до 110 (100 чисел)
//     }
//     return arr;
// }
// document.write(random(10));

// 5) Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1,2,3,4,5,6,7,8,9,10]
// //document.write(arr.reverse());
// let newArray=(array)=> {
// let revArray = [];
// for (let i= array.length -1; i>=0; i--) {
// revArray.push(array[i]);
// }
// return revArray;
// }
// document.write(newArray(arr));

// 6) створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
//
// let arr = [
//     {
//    number:40
// },
// {
//     number:50
// }
// ];
// let change = (array) => [array[0],array[1]]=[array[1],array[0]];
// console.log(change(arr));

/* Переробити на стрілочні функції з попереднього дз*/
// 1)створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let RectangleArea = (a,b)=> a*b;
//  document.write (`Rectangle area = `, RectangleArea(5,2));

// 2) створити функцію яка обчислює та повертає площу кола з радіусом r

// let CircleArea= (r) => Math.PI * Math.pow(r,2)
// document.write (`CircleArea = `, CircleArea(3));

// 3) створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let CylinderArea = (r, h) => Math.round(Math.PI * h * r * 2)
// document.write(`CylinderArea = `, CylinderArea(4, 2));

// 4) створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1, 2, 3];
//
// let elements = (array) => {
//     for (const item of array) {
//         document.write(item);
//     }
// }
// elements(arr);

// 5) створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (text) =>
// document.write(`<p> ${text} </p>`);
// paragraph(`Some text`);

// 6) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let listElement = (text) =>
//     document.write(
//         `<ul>
//  <li>${text}</li>
//  <li>${text}</li>
//  <li>${text}</li>
//          </ul>`);
//
// listElement(`Some text`);

// 7) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let listElent2 = (text, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// listElent2(`Add some text`, 3);

// 8) створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [3, 4, 7, 'some text', false, 'some text2'];
//
// let data = (array) => {
//     document.write(`<ul>`)
// for (const i of array) {
//   document.write(`<li>${i}</li>`)
//    }
//     document.write(`</ul>`)
//  }
//
//  data(arr);

// // 9) створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users = [
//     {id: 1, name: 'Vasya', age: 31},
//     {id: 2, name: 'Petya', age: 30},
//     {id: 3, name: 'Kolya', age: 29},
// ];
//    let user = (array) => {
//     for (const i of users) {
//         document.write(`<div>${i.id}. ${i.name}- age ${i.age}</div>`)
//     }
//     document.write(`</ul>`)
// }
//
// user(users);

// 10) створити функцію яка повертає найменьше число з масиву

// let mas = [1, 2, 3, 6, 8, 4, 1, -2, -10, -6];
//
// let MinElement = (array) => {
//     let min = array[0];
//     for (const i of array) {
//         if (i < min) {
//             min = i
//         }
//     }
//     return min;
// }
//
// document.write(MinElement(mas));

// 11) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//let mas = [1, 2, 3, 6, 8, 4, 1, -2];
//
// let MinElement = (array) => {
//     let sum = 0;
//     for (const i of array) {
//         sum += i;
//     }
//     return sum;
// }
// document.write(MinElement(mas));


