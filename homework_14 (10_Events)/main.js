// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const div = document.createElement('div');
// div.setAttribute('id', 'text');
// div.innerText = 'Hello';
//
// const button = document.createElement('button');
// button.innerText = 'Click';
//
// document.body.append(div,button);
//
// button.onclick = function (){
//     div.sryle.display = 'none';
// }
// button.onclick = function () {
//     div.style.visibility = 'hidden';
// }
//
// button.onclick = function () {
//     div.remove();
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const input = document.createElement('input');
// input.type = 'number';
//
// const button = document.createElement('button');
// button.innerText = 'Click';
//
// //document.body.appendChild(input,'button');
// button.body.append(input, button);
//
// button.addEventListener('click', function (){
//     if (input.value >=18) {
//         alert('Hello');
//     } else if (input.value === ''){
//         alert ('error')
//     } else {
//         alert ('blocked');
//     }
//     input.value ='';
// })

//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const button = document.getElementById('but');
// button.addEventListener('click', function (){
//     console.log (document.forms.form1.input1.value);
//     console.log (document.forms.form1.input2.value);
//     console.log (document.forms.form2.input3.value);
//     console.log (document.forms.form2.input4.value);
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// const  input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
// const button = document.createElement('button');
//
// button.innerText = 'Click';
// document.body.append(input1,input2, input3, button);
//
// button.addEventListener('click', function (){
//     const tr = input1.value;
//     const td = input2.value;
//     const inputText = input3.value;
//
//     function creatorTable (tr,td,text){
//         const table = document.createElement('table');
//         document.body.append(table);
//
//         for (let i=0; i<tr; i++) {
//             const tr = document.createElement('tr');
//             table.appendChild(tr);
//
//             for (let j=0; j<td; j++){
//                 const td = document.createElement('td');
//                 td.innerText = `${text}`;
//                 td.style.border = '1px solid red';
//                 tr.appendChild(td);
//             }
//         }
//     }
//     creatorTable(tr,td, inputText);
// })
______________________________________________________________
// const menuEl = document.getElementsByClassName('menu')[0];
// const titleEl = document.getElementsByClassName('title')[0];
//
// titleEl.onclick = function () {
//     menuEl.сlassList.toggle('hidden');
// }
