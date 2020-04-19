const allsub = document.querySelectorAll(".info");
const allItm = document.querySelectorAll(".itm");
for (var i = 1; i < allsub.length; i++) {
    allsub[i].style.display = "none";
}
function info(x) {
    switch (x) {
        case 0: for (var i = 0; i < allsub.length; i++) {
            if (i !== 0) {
                allsub[i].style.display = "none";
                allItm[i].classList.remove("active");
            }
            else {
                allsub[i].style.display = "unset";
                allItm[i].classList.add("active");
            }
        };
            break;
        case 1: for (var i = 0; i < allsub.length; i++) {
            if (i !== 1) {
                allsub[i].style.display = "none";
                allItm[i].classList.remove("active");
            }
            else {
                allsub[i].style.display = "unset";
                allItm[i].classList.add("active");
            }
        };
            break;
        case 2: for (var i = 0; i < allsub.length; i++) {
            if (i !== 2) {
                allsub[i].style.display = "none";
                allItm[i].classList.remove("active");
            }
            else {
                allsub[i].style.display = "unset";
                allItm[i].classList.add("active");
            }
        };
            break;
        case 3: for (var i = 0; i < allsub.length; i++) {
            if (i !== 3) {
                allsub[i].style.display = "none";
                allItm[i].classList.remove("active");
            }
            else {
                allsub[i].style.display = "unset";
                allItm[i].classList.add("active");
            }
        };
            break;
        case 4: for (var i = 0; i < allsub.length; i++) {
            if (i !== 4) {
                allsub[i].style.display = "none";
                allItm[i].classList.remove("active");
            }
            else {
                allsub[i].style.display = "unset";
                allItm[i].classList.add("active");
            }
        };
            break;
        case 5: for (var i = 0; i < allsub.length; i++) {
            if (i !== 5) {
                allsub[i].style.display = "none";
                allItm[i].classList.remove("active");
            }
            else {
                allsub[i].style.display = "unset";
                allItm[i].classList.add("active");
            }
        };
            break;
        case 6: for (var i = 0; i < allsub.length; i++) {
            if (i !== 6) {
                allsub[i].style.display = "none";
                allItm[i].classList.remove("active");
            }
            else {
                allsub[i].style.display = "unset";
                allItm[i].classList.add("active");
            }
        };
    }
}