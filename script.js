const navContent = document.getElementById("navContent");
const nav = document.getElementById("Nav");

const portrateText = document.getElementById("PortrateText");

const text = ["Web Designer", "Game Developer", "Artist"]

window.scrollTo({ top: 0, behavior: 'smooth'});

function CheckNav(){
    if(window.pageYOffset==0)
    {
       ShowNav();
    }
    else{
        HideNav();
    }
}

window.onscroll = CheckNav;

nav.onpointerenter = ShowNav;
nav.onpointerleave = HideNav;

function ShowNav(){navContent.style.top = "0%";}
function HideNav(){navContent.style.top = "-100%";}

var SelectedText = 0; 
function IncrementText(){
    SelectedText++; 
    if(SelectedText > text.length-1){
        SelectedText=0;
    }

    portrateText.textContent = text[SelectedText];
}

setInterval(IncrementText, 3000);
