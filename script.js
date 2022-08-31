function scroll(e){
    e.preventDefault();
    var section = document.getElementById(this.dataset.name);
    console.log(section);
    window.scrollTo(0,section.getBoundingClientRect().top);
}

var menuItems = document.querySelectorAll("nav a");

for(var i = 0; i<menuItems.length ; i++){
    menuItems[i].addEventListener('click', scroll);
}

