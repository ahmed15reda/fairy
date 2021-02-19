function displayMenu() {
    if (document.getElementById("navbar-list").classList.contains("show")) {
        document.getElementById("navbar-list").classList.remove("show");

    } else {
        document.getElementById("navbar-list").classList.add("show")
    }
}

function displayCalendar(){
    if (document.getElementById("calendar").classList.contains("showDate")) {
        document.getElementById("calendar").classList.remove("showDate");

    } else {
        document.getElementById("calendar").classList.add("showDate")
    }
}


