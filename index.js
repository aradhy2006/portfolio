let tablinks = document.getElementsByClassName("tablinks");
let contents = document.getElementsByClassName("content");

function opentab(tabname) {
    for (let tab of tablinks) {
        tab.classList.remove("active");
    }

    for (let content of contents) {
        content.style.display = "none";
    }

    document.getElementById(tabname).style.display = "block";
    event.currentTarget.classList.add("active");
}