//skills About section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function hide(tab) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tab).classList.add("active-tab");

}

//active scroll bar //
let menli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeside(){
    let l = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menli.forEach(sec => sec.classList.remove("active"));
    menli[len].classList.add("active");
}

activeside();
window.addEventListener("scroll",activeside);