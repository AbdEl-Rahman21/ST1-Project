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

form.addEventListener("submit", register);

function register(event) {
    event.preventDefault();

    let valid = true;

    let uname = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    users.forEach(user => {
        if(!/^[^@]+@[^@]+.[^@]+$/.test(email) || user.uname == uname || user.email == email || user.pass == password) {
            valid = false;
        }
    });

    if (valid) {
        users.push({uname: uname, email: email, pass: password});
        
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("username", uname);

        location.href = "../index.html";
    } else {
        alert("Invalid info, try again!");

        form.reset();
    }
}
