let songs = [
    {name: "Cinematic Background Inspirational", artist: "makesoundmusic", link: "../songs/CBI.mp3", cover: "../images/Make Sound.webp"},
    {name: "Countdown", artist: "makesoundmusic", link: "../songs/Countdown.mp3", cover: "../images/Make Sound.webp"},
    {name: "Cold Sad Pianos", artist: "makesoundmusic", link: "../songs/CSP.mp3", cover: "../images/Make Sound.webp"},
    {name: "Tokyo Cafe", artist: "TVARI", link: "../songs/Tokyo Cafe.mp3", cover: "../images/Tokyo Cafe.jpg"},
    {name: "Uplifting Feel Good", artist: "makesoundmusic", link: "../songs/UFG.mp3", cover: "../images/Make Sound.webp"}
];

if (localStorage.getItem("songs") == null) {
    localStorage.setItem("songs", JSON.stringify(songs));
} else {
    songs = JSON.parse(localStorage.getItem("songs"));
}

const list = document.getElementById("songList");
const audio = document.getElementById("audio-player");

songs.forEach((song) => {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h4 = document.createElement("h4");
    let h3 = document.createElement("h3");

    div.setAttribute("class", "song-container");

    img.setAttribute("src", song.cover);
    img.setAttribute("class", "song-img");
    img.setAttribute("data-value", song.link)

    h4.setAttribute("class", "song-name");
    h3.setAttribute("class", "artist-name");

    h4.innerHTML = song.name;
    h3.innerHTML = song.artist;

    div.appendChild(img);
    div.appendChild(h4);
    div.appendChild(h3);

    li.appendChild(div);

    list.appendChild(li);
});

const songContainers = document.querySelectorAll(".song-container")

songContainers.forEach((container) => {
    container.firstChild.addEventListener("click", (e) => {
        audio.src = e.target.getAttribute("data-value");
        audio.load();
        audio.play();
    });
});
