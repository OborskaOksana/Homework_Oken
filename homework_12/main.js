// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// let elementsByid = document.getElementById('content');
// const text = elementsByid.innerText;
// console.log(text);

// -- отримує текст з блоку з id "rules"

//console.log(document.getElementById('rules').innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

// document.getElementById('content');
// elementById.innerText = '<p>Hello</p>';
// elementById.innerHTML = '<p>Hello</p>';
// elementById.textContent = 'Hello';

// -- замініть текст параграфа з id 'rules' на будь-який інший

//document.getElementById('rules');
//elementById.innerText = 'Hello';

// -- змініть кожному елементу колір фону на червоний

// let children = document.body.children;
// for (const child of children) {
//     child.style.background = `red`;
// }

// -- змініть кожному елементу колір тексту на синій

// let elementNodeListof = document.querySelectorAll ('*');
// for (const elementNodeListofElement of elementNodeListof) {
//     elementNodeListofElement.style.color = 'red';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

//console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let elementByClassName = document.getElementsByClassName('fc_rules');
// for (const elementsByClassNameElement of elementByClassName) {
//     elementsByClassNameElement.style.color = 'red';
// }

// Взяти файл template_2.html та працювати в ньому

// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// let elementById = document.getElementById('main_header');
// elementById.className = 'hello1';
// elementById.classList.add('hello2');
// elementById.setAttribute('class', 'hello3');

// b) робить шириниу елементу ul 400px

// document.getElementsByTagName('ul') [0];
//     elementsByTagName.style.width = '400 px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// document.getElementsByClassName('linkList');
// for (const elementsByClassNameElement of elementsByClassName)
// {
//     elementsByClassNameElement.style.width = '50';
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// document.getElementsByClassName('linkList2');
// for (const getElementsByClassNameElement of getElementsByClassName)
// {
//     console.log(elementsByClassNameElement.innerText);
// }

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsByTagName = document.getElementsByTagName('li');
// for (const elementsByTagNameElement of elementsByTagName) {
//    elementsByTagNameElement.style.background = 'gray';
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let elementsByTagName = document.getElementsByTagName('а');
// for (const elementTagNameElement of elementsByTagName)
// {
//     elementsByTagNameElement.className = 'anchor';
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elementsByTagName = document.getElementsByTagName('a');
// for (const elementsByTagNameElement of elementsByTagName) {
//     if (elementsByTagNameElement.innerText === 'link3') {
//         elementsByTagNameElement.style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementByTagName = document.getElementsByTagName('a');
// for (const elementByTagNameElement of elementByTagName){
//     elementByTagNameElement.classList.add(`element.${elementByTagNameElement.innerText}`);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let Gr = prompt('Enter color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName)
// {
//     elementsByClassNameElement.style.background = Gr;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let color = prompt('Enter color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     if (elementsByClassNameElement.innerText === 'content 2 segment') {
//         elementsByClassNameElement.style.color = color;
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = prompt('Enter text');
// let elementsByClassName = document.getElementsByClassName('content_1');
// for (const elementsByClassNameElement of elementsByClassName) {
//         elementsByClassNameElement.innerText = text;
// }


// l) отримати елементи p та змінити їм padding на 20px

// let elementsByTagName = document.getElementsByTagName('p')
// for (const elementsByTagNameElement of elementsByTagName) {
//         elementsByTagNameElement.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementsByClassName = document.getElementsByClassName('text2');
// for (const elementsByClassNameElement of elementsByClassName) {
//         elementsByClassNameElement.innerText = 'march-2022';
// }

