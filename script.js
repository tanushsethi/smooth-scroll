function scroll(e){
    e.preventDefault();
    var section = document.getElementById(this.dataset.name);
    console.log(section);
    var scroller = setInterval(()=>{
        if(section.getBoundingClientRect().top<=0){
            clearInterval(scroller);
            return;
        }
        window.scrollBy(0, 50);
    }, 20);
}

var menuItems = document.querySelectorAll("nav a");

for(var i = 0; i<menuItems.length ; i++){
    menuItems[i].addEventListener('click', scroll);
}

