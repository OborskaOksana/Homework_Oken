/*_____________________________________________________________
1. Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
_________________________________________________________________*/

/*                   ______AnswerTask1______            */

/*
let x = prompt("enter X");
if (x === 0) {
    console.log('correct');
} else {
    console.log('not correct');
}
*/

/*__________________________________________________________________
2. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
_________________________________________________________________________*/

/*                    ______AnswerTask2______            */

/*
let time = +prompt('what time is it?');
if (time >= 0 && time < 15) {
    console.log('first');
} else if (time >= 15 && time < 30) {
    console.log('second');
} else if (time >= 30 && time < 45) {
    console.log('third');
} else if (time >= 45 && time < 60) {
    console.log('fourth');
} else {
    console.log('not correct');
}
*/

/*___________________________________________________________________________
3. У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
_____________________________________________________________________________*/

/*                     ______AnswerTask3______            */

/*
let day = 20;
if (typeof day === 'number') {
    if (day >= 1 && day < 11) {
        console.log('decade_1');
    } else if (day >= 11 && day < 20) {
        console.log('decade_2');
    } else if (day >= 20 && day <= 31) {
        console.log('decade_3');
    } else {
        console.log('not correct');
    }
}
*/

/*__________________________________________________________________________________
4. Скласти розклад на тиждень за домопоги switch.
Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
____________________________________________________________________________________*/

/*                        ______AnswerTask4______            */

/*
switch ( +prompt("enter number day")) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:

        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('not correct');
}
*/

/*__________________________________________________________________________
5.Користувач вводить або має три числа. Потрібно знайти та вивести максимальне число з цих трьох .
Також потрібно врахувати коли введені рівні числа.
____________________________________________________________________________________________*/

/*                      ______AnswerTask5______            */

/*
let a = 0;
let b = 0;
let c = 0;
if (a > b && a > c) {
    console.log(a);
} else if (b > c && b > a) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
} else if (a === b && b === c) {
    console.log('not correct');
}
 */