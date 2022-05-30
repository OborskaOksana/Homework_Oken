// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Cars(model, producer, year, maxspeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume
//     this.drive = function () {
//         console.log (`Ідемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//     this.info = function () {
//         for (const item in this) {
//             console.log (`${item} - ${this[item]}`);
//             //  console.log(this);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//     this.year = function (newYear){
//         this.year = newYear;
//     };
//     this.addDriver = function (driver){
//         this.drever = driver;
//     };
// }
//
// let newCars = new Cars('geely', 'Cina', 2020, '190', '3.8');
// newCars.drive();
// newCars.info();
// newCars.increaseMaxSpeed (70);
// newCars.year(2021);
// newCars.addDriver('Vasyl');
// console.log(newCars);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Cars {
//     constructor(model, producer, year, maxspeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//     }
//
//     drive() {
//         //    console.log (`Ідемо зі швидкістю ${this.maxspeed} на годину`);
//     };
//
//     info() {
//         for (const item in this) {
//             console.log (`${item} - ${this[item]}`);
//             //  console.log(this);
//         }
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxspeed += newSpeed;
//     }
//
//     yearCars (newYear) {
//       return  this.year = newYear;
//     };
//
//     addDrive(driver) {
//        return this.drever = driver;
//     };
// }
//
// let newCars = new Cars('geely', 'Cina', 2020, '190', '3.8');
// newCars.drive();
// newCars.info();
// newCars.increaseMaxSpeed (70);
// newCars.yearCars(2021);
// newCars.addDrive ('Vasyl')
// console.log(newCars);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function Cinderello (name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let arrCinderella = [
//     new Cinderello ('Olga', 25, 36),
//     new Cinderello ('Ira', 26, 37),
//     new Cinderello ('Nina', 27, 38),
// ];
//
// function Prince (name, age, findSize) {
//     this.name = name;
//     this.age = age;
//     this.findSize = findSize;
// }
// let newPrince = new Prince ('Dina', 31, 36);
//
// let find = (arrCind, prince) => {
//     for (const item of arrCind) {
//         if (item .footSize === prince.findSize) {
//             return `${item.name}`;
//         }
//     }
// }
// console.log (find(arrCinderella, newPrince));
//   let cind = arrCinderella.find(value => value.footSize === newPrince.findSize);
// console.log(cind);
//





