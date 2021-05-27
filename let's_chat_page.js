var name_stg = localStorage.getItem("userlogined");
console.log("Username: " + name_stg);
document.getElementById("username_h2").innerHTML = name_stg;

function logout_to_home() {
    localStorage.removeItem("userlogined");
    window.location = "login.html";
}