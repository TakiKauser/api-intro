function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(jsonData => console.log(jsonData))
}

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(jsonData => displayUsers(jsonData))
}

function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log(data))
}

function displayUsers(jsonData) {
    // console.log(jsonData);
    const ul = document.getElementById("users");
    for (const user of jsonData) {
        // console.log(`Name: ${user.name}, Email: ${user.email}`);
        const li = document.createElement("li");
        li.innerText = `Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li);
    }
}