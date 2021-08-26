function loadAlbum() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(data => displayAlbum(data))
}

loadAlbum();

function displayAlbum(jsonData) {
    const albumContainer = document.getElementById("albums");
    for (const album of jsonData) {
        // console.log(album);
        const h3 = document.createElement("h3");
        h3.style.textAlign = "center";
        h3.innerText = album.title;
        albumContainer.appendChild(h3);
    }
}