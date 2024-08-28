let users = [
    {uname: "Admin", email: "admin@admin.com", pass: "admin123"},
    {uname: "user1", email: "u1@test.com", pass: "user123"},
    {uname: "Jane Doe", email: "jane.doe@example.com", pass: "jane456"},
    {uname: "Alex Smith", email: "alex.smith@example.com", pass: "alex789"}
];

if (localStorage.getItem("users") == null) {
    localStorage.setItem("users", JSON.stringify(users));
} else {
    users = JSON.parse(localStorage.getItem("users"));
}

let form = document.querySelector("form");

form.addEventListener("submit", login);

function login(event) {
    event.preventDefault();

    let valid = false;

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    users.forEach((user) => {
        if(user.email == email && user.pass == password) {
            localStorage.setItem("username", user.uname);

            valid = true

            if (user.uname == "Admin") {
                location.href = "../pages/admin.html"
            } else {
                location.href ='../index.html';
            }
        }
    });

    if (!valid) {
        alert("Invalid info, try again!")

        form.reset();
    }
}
