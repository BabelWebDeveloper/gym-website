let toggleNavStstus = false;

let toggleNav = function() {
    let getNav = document.querySelector(".nav-js");
    let getToggle = document.querySelector("#toggle");
    let getLinks = document.querySelectorAll(".nav-js a");
    let getHeaderHgroup = document.querySelector(".hgroup-js");
    let getMain = document.querySelector(".main-js");


    if(toggleNavStstus === false) {
        getNav.style['background-color'] = "rgba(170, 0, 0, 0.84)";
        getToggle.style.color = "white";
        getHeaderHgroup.style.width = "80%";
        getMain.style.width = "80%";
        let linksLength = getLinks.length;
        for(i = 0; i < linksLength; i++) {
            getLinks[i].style.display = "inline";
        }

        toggleNavStstus = true;
    }

    else if(toggleNavStstus = true) {
        getNav.style['background-color'] = "transparent";
        getToggle.style.color = "#AA0000";
        getHeaderHgroup.style.width = "100%";
        getMain.style.width = "100%";
        let linksLength = getLinks.length;
        for(i = 0; i < linksLength; i++) {
            getLinks[i].style.display = "none";
        }

        toggleNavStstus = false;
    }
}