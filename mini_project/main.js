// В index.html
// +1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(value => value.json ())
//     .then(value => {
//         const divWrap = document.createElement('div');
//         divWrap.setAttribute('class', 'wrap');
//         document.body.append(divWrap);
//
//         for (const item of value) {
//             const innerDiv = document.createElement('div');
//             innerDiv.setAttribute('class', 'inner');
//             innerDiv.innerHTML = `<h2> ID : ${item.id} </h2>
//             <h2> Name : ${item.name} </h2>
//             <h2> Username : ${item.username} </h2>
//             <h2> Email : ${item.email} </h2>`;
//             divWrap.append(innerDiv);
//         }
//     });

// +2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(value => value.json ())
//     .then(value => {
//         const divWrap = document.createElement('div');
//         document.body.append(divWrap);
//
//         for (const item of value) {
//             const innerDiv = document.createElement ('div');
//             divWrap.append(innerDiv);
//             for (const itemKey in item) {
//                 const divElement = document.createElement('div');
//               //  divElement.innerText = `${itemKey} ${item[itemKey]}`;
//                 innerDiv.innerHTML = `<h3> ID : ${item.id} </h3>
//                 <h3> Name : ${item.name}</h3>`;
//                 divWrap.append(divElement);
//             }
//         }
//     });


// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
// const users = [
//     {name: 'Vasya', age: 31, status: false},
//     {name: 'Petya', age: 30, status: true},
//     {name: 'Kolya', age: 29, status: true},
//     {name: 'Olya', age: 28, status: false},
//     {name: 'Max', age: 30, status: true},
//     {name: 'Anya', age: 31, status: false},
//     {name: 'Oleg', age: 28, status: false},
//     {name: 'Andrey', age: 29, status: true},
//     {name: 'Masha', age: 30, status: true},
//     {name: 'Olya', age: 31, status: false},
//     {name: 'Max', age: 31, status: true}
// ];
//
// const favouritesKey = 'mini_project';
// localStorage.setItem (favouritesKey, JSON.stringify([]));
// const container = document.getElementById('container');
//
// users.forEach(user => {
//     const userDiv = document.createElement('div');
//
//     const content = document.createElement('div');
//     content.innerText= `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
//
//     const btn = document.createElement('button');
//     btn.innerText = 'Show ol information';
//     btn.onclick = () => {
//         const mini_project = JSON.parse(localStorage.getItem(favouritesKey)) || [];
//         mini_project.push(user);
//         localStorage.setItem (favouritesKey, JSON.stringify(mini_project));
//         btn.disabled = true;
//     }
//     userDiv.append(content, btn);
//     container.append(userDiv);
//
// })

//
// На странице user-details.html:
// +4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.

// const users = [
//     {name: 'Vasya', age: 31, status: false},
//     {name: 'Petya', age: 30, status: true},
//     {name: 'Kolya', age: 29, status: true},
//     {name: 'Olya', age: 28, status: false},
//     {name: 'Max', age: 30, status: true},
//     {name: 'Anya', age: 31, status: false},
//     {name: 'Oleg', age: 28, status: false},
//     {name: 'Andrey', age: 29, status: true},
//     {name: 'Masha', age: 30, status: true},
//     {name: 'Olya', age: 31, status: false},
//     {name: 'Max', age: 31, status: true}
// ];
//
// const favouritesKey = 'mini_project';
// localStorage.setItem (favouritesKey, JSON.stringify([]));
// const container = document.getElementById('container');
//
// users.forEach(user => {
//     const userDiv = document.createElement('div');
//
//     const content = document.createElement('div');
//     content.innerText= `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
//
//     const btn = document.createElement('button');
//     btn.innerText = 'Show ol information';
//     btn.onclick = () => {
//         const mini_project = JSON.parse(localStorage.getItem(favouritesKey)) || [];
//         mini_project.push(user);
//         localStorage.setItem (favouritesKey, JSON.stringify(mini_project));
//         btn.disabled = true;
//     }
//     userDiv.append(content, btn);
//     container.append(userDiv);
//
// })

// +5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

//
// fetch ('https://jsonplaceholder.typicode.com/posts')
//     .then (value => value.json())
//     .then(value => {
//         const htmlDivElement = document.createElement('div');
//         document.body.append(htmlDivElement);
//
//         for (const post of value) {
//             const divWrap = document.createElement('div');
//             htmlDivElement.append(divWrap);
//             const {userId, id, title, body} = post;
//             divWrap.innerHTML = `<h2>UserId : ${userId}</h2>
//         <h2>Id : ${id}</h2>
//         <h2>title : ${title}</h2>
//         <h2>body : ${body}</h2>`;
//
//             const button = document.createElement('button');
//             button.innerText = 'post of current user';
//             divWrap.append(button);
//
//             button.onclick = () => {
//                 fetch (`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//                     .then (value => value.json())
//                     .then(value => {
//                         const wrapComments = document.createElement('div');
//                         divWrap.append(wrapComments);
//                         for (const comment of value) {
//                             const div = 'div';
//                             const commentDiv = document.createElement(div);
//                             commentDiv.innerText = comment.postId + ' ' + comment.id + '  '
//                                 + comment.name;
//                             wrapComments.append(commentDiv);
//                             button.disabled = true;
//                         }
//                     });
//             }
//         }
//     });


// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

// const users = [
//     {name: 'Vasya', age: 31, status: false},
//     {name: 'Petya', age: 30, status: true},
//     {name: 'Kolya', age: 29, status: true},
//     {name: 'Olya', age: 28, status: false},
//     {name: 'Max', age: 30, status: true},
//     {name: 'Anya', age: 31, status: false},
//     {name: 'Oleg', age: 28, status: false},
//     {name: 'Andrey', age: 29, status: true},
//     {name: 'Masha', age: 30, status: true},
//     {name: 'Olya', age: 31, status: false},
//     {name: 'Max', age: 31, status: true}
// ];
//
// const favouritesKey = 'mini_project';
// localStorage.setItem (favouritesKey, JSON.stringify([]));
// const container = document.getElementById('container');
//
// users.forEach(user => {
//     const userDiv = document.createElement('div');
//
//     const content = document.createElement('div');
//     content.innerText= `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
//
//     const btn = document.createElement('button');
//     btn.innerText = 'Show ol information';
//     btn.onclick = () => {
//
//         const mini_project = JSON.parse(localStorage.getItem(favouritesKey)) || [];
//         mini_project.push(user);
//         localStorage.setItem (favouritesKey, JSON.stringify(mini_project));
//         btn.disabled = true;
//     }
//     userDiv.append(content, btn);
//     container.append(userDiv);
//
// })


// На странице post-details.html:
// +7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.

const users = [
    {name: 'Vasya', age: 31, status: false},
    {name: 'Petya', age: 30, status: true},
    {name: 'Kolya', age: 29, status: true},
    {name: 'Olya', age: 28, status: false},
    {name: 'Max', age: 30, status: true},
    {name: 'Anya', age: 31, status: false},
    {name: 'Oleg', age: 28, status: false},
    {name: 'Andrey', age: 29, status: true},
    {name: 'Masha', age: 30, status: true},
    {name: 'Olya', age: 31, status: false},
    {name: 'Max', age: 31, status: true}
];

const favouritesKey = 'mini_project';
localStorage.setItem (favouritesKey, JSON.stringify([]));
const container = document.getElementById('container');

users.forEach(user => {
    const userDiv = document.createElement('div');

    const content = document.createElement('div');
    content.innerText= `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;

    const btn = document.createElement('button');
    btn.innerText = 'Show ol information';
    btn.onclick = () => {
        const mini_project = JSON.parse(localStorage.getItem(favouritesKey)) || [];
        mini_project.push(user);
        localStorage.setItem (favouritesKey, JSON.stringify(mini_project));
        btn.disabled = true;
    }
    userDiv.append(content, btn);
    container.append(userDiv);

})


// +8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// fetch ('https://jsonplaceholder.typicode.com/posts')
//     .then (value => value.json())
//     .then(value => {
//         const htmlDivElement = document.createElement('div');
//         document.body.append(htmlDivElement);
//
//         for (const post of value) {
//             const divWrap = document.createElement('div');
//             htmlDivElement.append(divWrap);
//             const {userId, id, title, body} = post;
//             divWrap.innerHTML = `<h2>UserId : ${userId}</h2>
//         <h2>Id : ${id}</h2>
//         <h2>title : ${title}</h2>
//         <h2>body : ${body}</h2>`;
//
//             const button = document.createElement('button');
//             button.innerText = 'Click';
//             divWrap.append(button);
//
//             button.onclick = () => {
//                 fetch (`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//                     .then (value => value.json())
//                     .then(value => {
//                         const wrapComments = document.createElement('div');
//                         divWrap.append(wrapComments);
//                         for (const comment of value) {
//                             const div = 'div';
//                             const commentDiv = document.createElement(div);
//                             commentDiv.innerText = comment.postId + ' ' + comment.id + '  '
//                                 + comment.name + ' ' + comment.email + ' ' + comment.body;
//                             wrapComments.append(commentDiv);
//                             button.disabled = true;
//                         }
//                     });
//             }
//         }
//     });

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
//style.css


// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
//style1.css


// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
//style2.css
