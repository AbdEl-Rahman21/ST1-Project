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
