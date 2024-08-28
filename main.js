let users = [
    {uname: "user1", email: "u1@test.com", pass: "user123"},
    {uname: "Jane Doe", email: "jane.doe@example.com", pass: "jane456"},
    {uname: "Alex Smith", email: "alex.smith@example.com", pass: "alex789"}
];

let username = localStorage.getItem("uname");

if (username == null) { // Not Logged in
    const navButtons = document.querySelectorAll("li");

    navButtons.forEach((element) => {
        if (["Logout", "Songs", "Favorites"].includes(element.firstChild.innerHTML)) {
            element.parentNode.removeChild(element);
        }
    });
} else {
    const navButtons = document.querySelectorAll("li");

    navButtons.forEach((element) => {
        if (["Login", "Register"].includes(element.firstChild.innerHTML)) {
            element.parentNode.removeChild(element);
        }
    });
}
