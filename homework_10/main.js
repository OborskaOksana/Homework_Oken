// 1) Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.length);
// let str1 = 'lorem ipsum';
// console.log(str1.length);
// let str2 = 'javascript is cool';
// console.log(str2.length);

// 2) Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.toUpperCase());
// let str1 = 'lorem ipsum';
// console.log(str1.toUpperCase());
// let str2 = 'javascript is cool';
// console.log(str2.toUpperCase());

// 3) Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
// let str1 = 'LOREM IPSUM';
// console.log(str1.toLowerCase());
// let str2 = 'JAVASCRIPT IS COOL';
// console.log(str2.toLowerCase());

// 4) Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = 'dirty string';
// console.log(str);
//
// 5) Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let stringToarray = (str) => str.split(' ');
// console.log(stringToarray(str));
//
// 6) є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(array.map(value => value +''));

// 7) створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// let sortNums = (arr, direction) =>// [3,11,21]
// {
//     if (direction === 'ascemding') {
//         nums.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         nums.sort((a, b) => b - a)
//     }
//     return arr;
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));


// 8) є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// --відсортувати його за спаданням за monthDuration
// let sortArray = (array) => array.sort((a,b) => b.monthDuration = a.monthDuration);
// console.log(sortArray(courseAndDurationArray));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterArray = (array) => array.filter((value => value.monthDuration>5));
// console.log(filterArray(courseAndDurationArray));

// описати колоду карт
// let kolodaCards = {...}

// - знайти піковий туз
// console.log(kolodaCards.find(value.cardSuit === 'cluds'&& value.value === 'ace'));
// console.log(kolodaCards.filter(value => value.cardSuit === 'cluds'&& value.value === 'ace'));

// - всі шістки
// console.log(kolodaCards.filter(value => value.value === '6'));

// - всі червоні карти
// console.log(kolodaCards.filter(value => value.value === 'red'));

// - всі буби
// console.log(kolodaCards.filter(value => value.value === 'bubna'));

// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


