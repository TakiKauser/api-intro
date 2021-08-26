document.getElementById("comment-btn").addEventListener("click", () => {
    loadComment();
});
function loadComment() {
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(jsonData => displayComments(jsonData))
}
function displayComments(jsonData) {
    // console.log(jsonData);
    const commentsContainer = document.getElementById("comment-container");

    for (const comment of jsonData) {
        // console.log(comment);
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h3.innerText = `Email: ${comment?.email}`;
        h4.innerText = `Name: ${comment?.name}`;
        p.innerText = `Says: ${comment?.body}`;
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(p);
        commentsContainer.appendChild(div);

        // div.style.textAlign = "center";
        div.style.backgroundColor = "orange";
        div.style.color = "darkslategrey";
        div.style.border = "3px solid";
        div.style.borderRadius = "15px";
        div.style.margin = "15px";

        commentsContainer.style.textAlign = "center";
        commentsContainer.style.backgroundColor = "steelblue";
        commentsContainer.style.border = "3px solid";
        commentsContainer.style.borderRadius = "7px";
    }
}