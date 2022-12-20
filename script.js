const navContent = document.getElementById("navContent");
const nav = document.getElementById("Nav");

const portrateText = document.getElementById("PortrateText");

window.scrollTo({ top: 0, behavior: 'smooth'});
ShowNav();

function CheckNav(){
    if(window.pageYOffset<=100)
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


const text = ["Web Designer", "Game Developer", "Artist"];

var SelectedText = 0; 
async function IncrementText(){
    SelectedText++;
    if(SelectedText > text.length-1){
        SelectedText=0;
    }

    var characters = Array.from(text[SelectedText]);
    var currentString = "";

    portrateText.textContent = currentString;

    await sleep(1000)
   
   for(var i = 0; i < characters.length; i++){
        currentString += characters[i];
        portrateText.textContent = currentString;
        
        await sleep(1000/characters.length);     
    }

}

setInterval(IncrementText, 4000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }