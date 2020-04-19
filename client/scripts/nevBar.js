const bars = document.querySelector("#bars");
const collapse = () => {
    if (document.querySelector(".sideBar").style.display !== "block") {
        document.querySelector(".sideBar").style.display = "block";
    }
    else {
        document.querySelector(".sideBar").style.display = "none";
    }
}
bars.addEventListener('click', collapse);