// 1) створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function RectangleArea(a,b) {
//     return a*b;
// }
// document.write (`Rectangle area = `, RectangleArea(5,2));

// 2) створити функцію яка обчислює та повертає площу кола з радіусом r

// function CircleArea(r) {
//    return Math.PI * Math.pow(r,2);
// }
// document.write (`CircleArea = `, CircleArea(3));

// 3) створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function CylinderArea(r, h) {
//     return Math.round (Math.PI * h * r * 2);
// }
//
// document.write(`CylinderArea = `, CylinderArea(4, 2));

// 4) створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1,2,3];
//
// function elements(array) {
//     for (const item of array) {
//         document.write(item);
//     }
// }
// elements (arr);

// 5) створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     document.write(`<p> ${text} </p>`)
// }
//
// paragraph(`Some text`);

// 6) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function listElement(text) {
//     document.write(
//         `<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
//          </ul>`)
// }
//
// listElement(`Some text`);

// 7) створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function listElent2(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
//
// listElent2(`Add some text`, 3);

// 8) створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [3, 4, 7, 'some text', false, 'some text2'];
//
// function data(array) {
//     document.write(`<ul>`)
//     for (const i of array) {
//         document.write(`<li>${i}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// data(arr);

// 9) створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'Vasya', age: 31},
//     {id: 2, name: 'Petya', age: 30},
//     {id: 3, name: 'Kolya', age: 29},
// ];
//    function user(array){
//     for (const i of users) {
//         document.write(`<div>${i.id}. ${i.name}- age ${i.age}</div>`)
//     }
//     document.write(`</ul>`)
// }
//
// user(users);

// 10) створити функцію яка повертає найменьше число з масиву

//let mas = [1, 2, 3, 6, 8, 4, 1, -2, -10, -6];

// function MinElement(array) {
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

// let mas = [1, 2, 3, 6, 8, 4, 1, -2];
//
// function MinElement(array) {
//     let sum = 0;
//     for (const i of array) {
//         sum += i;
//     }
//     return sum;
// }
// document.write(MinElement(mas));
