let songs = [
    {name: "Cinematic Background Inspirational", artist: "makesoundmusic", link: "../songs/CBI.mp3", cover: "../images/Make Sound.webp"},
    {name: "Countdown", artist: "makesoundmusic", link: "../songs/Countdown.mp3", cover: "../images/Make Sound.webp"},
    {name: "Cold Sad Pianos", artist: "makesoundmusic", link: "../songs/CSP.mp3", cover: "../images/Make Sound.webp"},
    {name: "Tokyo Cafe", artist: "TVARI", link: "../songs/Tokyo Cafe.mp3", cover: "../images/Tokyo Cafe.jpg"},
    {name: "Uplifting Feel Good", artist: "makesoundmusic", link: "../songs/UFG.mp3", cover: "../images/Make Sound.webp"}
];

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("username");
    location.href = '../index.html'
});

if (localStorage.getItem("songs") == null) {
    localStorage.setItem("songs", JSON.stringify(songs));
} else {
    songs = JSON.parse(localStorage.getItem("songs"));
}

const list = document.getElementById("songList");

songs.forEach((song) => {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let h3 = document.createElement("h3");
    let button = document.createElement("button");

    div.setAttribute("class", "song-container");

    img.setAttribute("src", song.cover);
    img.setAttribute("class", "song-img");

    h4.setAttribute("class", "song-name");
    h3.setAttribute("class", "artist-name");

    button.setAttribute("class", "remove");
    button.setAttribute("data-value", song.link);

    h4.innerHTML = song.name;
    h3.innerHTML = song.artist;
    button.innerHTML = "Remove";

    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(h3);
    div.appendChild(button)

    li.appendChild(div);

    list.appendChild(li);
});

let form = document.querySelector("form");

form.addEventListener("submit", addSong);

function addSong(event) {
    event.preventDefault();

    let sLink = "";
    let cLink = "";

    let name = document.getElementById("Name").value;
    let artist = document.getElementById("artist").value;
    let songFile = document.getElementById("sFile");
    let coverFile = document.getElementById("cFile");

    const sfr = new FileReader();
    const cfr = new FileReader();


    sfr.readAsDataURL(songFile.files[0]);

    sfr.addEventListener("load", () => {
        sLink = sfr.result;

        cfr.readAsDataURL(coverFile.files[0]);

        cfr.addEventListener("load", () => {
            cLink = cfr.result;

            songs.push({name: name, artist: artist, link:sLink , cover: cLink});
        
            localStorage.setItem("songs", JSON.stringify(songs));

            location.href = "./admin.html";
        });
    });
}

const songContainers = document.querySelectorAll(".song-container")

songContainers.forEach((container) => {
    container.children[3].addEventListener("click", (e) => {
        songs = songs.filter((song) => song.link != e.target.getAttribute("data-value"));

        localStorage.setItem("songs", JSON.stringify(songs));

        location.href = "./admin.html";
    });
});
