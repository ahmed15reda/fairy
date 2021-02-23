let sideNav = $("#side-nav");
let content = $("#content-container");
let sideNavWidth = sideNav.outerWidth();

$("#toggle").click(function () {
    if (sideNav.css("left") == "0px") {
        sideNav.animate({left: `-${sideNavWidth}`});
        content.css("left","0px");
        content.css("border-radius", "0px");
        

    } else {
        sideNav.animate({left: `0px`});
        content.css("left","130px");
        content.css("border-top-left-radius", "50px");
        content.css("border-bottom-left-radius", "50px");
        $("#toggle").css("display","none")
    }
})

$("#close").click(function () {
    if (sideNav.css("left") == "214px") {
        sideNav.animate({left: `${sideNavWidth}`});
        content.css("left","13px");
        content.css("border-top-left-radius", "50px");
        content.css("border-bottom-left-radius", "50px");
        
        

    } else {
        sideNav.animate({left: `-${sideNavWidth}`});
        content.css("left","0px");
        content.css("border-radius", "0px");
        $("#toggle").css("display","block")
        
    }
})

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

let sidebar = document.getElementById("sidebar-navigation");
let link = sidebar.getElementsByClassName("item");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let contacts = document.getElementById("chat-contacts");
let chat = contacts.getElementsByClassName("chat");

for (let i = 0; i < chat.length; i++) {
    chat[i].addEventListener("click", function() {
        
      let current = document.getElementsByClassName("activeChat");
      current[0].className = current[0].className.replace(" activeChat", "");
      this.className += " activeChat";
    });
  }


