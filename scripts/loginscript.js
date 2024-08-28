let users = [
    {uname: "user1", email: "u1@test.com", pass: "user123"},
    {uname: "Jane Doe", email: "jane.doe@example.com", pass: "jane456"},
    {uname: "Alex Smith", email: "alex.smith@example.com", pass: "alex789"}
];

 var button = document.querySelector('form');
 button.addEventListener("submit", checkUser);
function checkUser(event){
    event.preventDefault();
    console.log("success");
    var usersInput = document.getElementById('email').value;
    var passInput = document.getElementById('password').value;
    users.forEach(t => {
        if(t.email == usersInput && t.pass == passInput){
            localStorage.setItem("username", t.uname);
            location.href ='../index.html';
           
        }
    })

}