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
        .then(data => displayPosts(data))
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

function displayPosts(jsonData) {
    // console.log(jsonData);
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = `
    <h2>Posts</h2>
    `;
    document.body.appendChild(postsContainer);
    for (const post of jsonData) {
        const div = document.createElement("div");
        div.classList.add("post");
        div.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `;
        postsContainer.appendChild(div);
    }
}

// extra: need to know more about this
function addAPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "New Post",
            body: "Post's body",
            userID: 9
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}