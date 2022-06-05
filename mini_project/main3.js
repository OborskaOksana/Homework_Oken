const mini_project = 'mini_project';
const container = document.getElementById('container');
const users = JSON.parse(localStorage.getItem(mini_project)) || [];

users.forEach(user => {
    const userDiv = document.createElement('div');

    const content = document.createElement('div');
    content.innerText = `Name: ${user.name}\nAge: ${user.age}\nStatus: ${user.status}`;
    userDiv.append(content);
    container.append(userDiv);
})
