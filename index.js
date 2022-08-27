const login_button = document.querySelector("div#login");
const section = document.querySelector("section");

login_button.addEventListener("mouseover", (e) => {

    if (section.style.backgroundColor === "red") {
        section.style.backgroundColor = "blue";
    } else {
        section.style.backgroundColor  = "red";
    }
})