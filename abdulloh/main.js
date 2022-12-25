let mode = document.querySelector('.mode')
let form = document.querySelector('form')
let loginBox = document.querySelector(".loginbox");
let loginBtn = document.querySelector('.loginBtn')
let exitLogin = document.querySelector('.x')
let loginAside = document.querySelector('.loginAside')
let modeAside = document.querySelector('.modeAside')

let sidebar = document.querySelector(".sidebar-icon");
let xbtn = document.querySelector(".xbtn");

let compactBtn = document.querySelector('.compactBtn') 
let sportBtn = document.querySelector('.sportBtn') 
let vanBtn = document.querySelector('.vanBtn') 
let allBtn = document.querySelector('.viewall') 

let compactCars = document.querySelector(".carCards");
let sportCars = document.querySelector(".sportscarCards");
let vanCars = document.querySelector(".vanccarCards");

mode.addEventListener('click', ()=>{
       var element = document.body;
       var nav = document.querySelector("nav");
       element.classList.toggle("bg-dark");
       nav.classList.toggle("bg-dark");
       
    let carCard = document.querySelectorAll('.carCard')
      for (var i = 0; i <= carCard.length; i++) {
        var carCard1 = carCard[i];

        
        let off = true
        if(off){
            carCard1.style.backgroundColor = "#272727";
            carCard1.style.color = 'white';
            off = false
            
        }else if(!off){
            carCard1.style.backgroundColor = "#eee";
            carCard1.style.color = '#000';
            off = true
        }
      }
    // let text = document.querySelectorAll('.btn')
    //   for (var i = 0; i <= text.length; i++) {
    //     var text1 = text[i];

    //     text1.style.backgroundColor = "#272727";
    //     text1.style.color = 'white';
    //   }

      var theme;
      if(element.classList.contains('bg-dark')){
        theme = 'dark'
      }else{
        theme = 'light'
      }

      localStorage.setItem('Theme', JSON.stringify(theme))
})

let getTheme = JSON.parse(localStorage.getItem('Theme'))
if(getTheme === 'dark'){
    document.body.classList = "bg-dark"
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})


loginBtn.addEventListener('click', ()=>{
    document.querySelector(".greyCover").classList.add("cover");
    loginBox.classList.remove('none')
})
exitLogin.addEventListener('click', ()=>{
    document.querySelector(".greyCover").classList.remove("cover");
    loginBox.classList.add('none')
})
loginAside.addEventListener('click', ()=>{
    document.querySelector(".greyCover").classList.add("cover");
    loginBox.classList.remove('none')
})


compactBtn.addEventListener('click', ()=>{
    compactBtn.style.backgroundColor = "#299764";
    compactBtn.style.color = "#fff";
    vanBtn.style.backgroundColor = "transparent";
    vanBtn.style.color = "#000";
    sportBtn.style.backgroundColor = "transparent";
    sportBtn.style.color = "#000";
    allBtn.style.backgroundColor = "transparent";
    allBtn.style.color = "#000";
    
    compactCars.style.display = "flex";
    sportCars.style.display = "none";
    vanCars.style.display = "none";
})
sportBtn.addEventListener('click', ()=>{
    sportBtn.style.backgroundColor = "#299764";
    sportBtn.style.color = "#fff";
    vanBtn.style.backgroundColor = "transparent";
    vanBtn.style.color = "#000";
    compactBtn.style.backgroundColor = "transparent";
    compactBtn.style.color = "#000";
    allBtn.style.backgroundColor = "transparent";
    allBtn.style.color = "#000";

    compactCars.style.display = 'none'
    sportCars.style.display = 'flex'
    vanCars.style.display = 'none'
})
vanBtn.addEventListener('click', ()=>{
    vanBtn.style.backgroundColor = "#299764";
    vanBtn.style.color = "#fff";
    sportBtn.style.backgroundColor = "transparent";
    sportBtn.style.color = "#000";
    compactBtn.style.backgroundColor = "transparent";
    compactBtn.style.color = "#000";
    allBtn.style.backgroundColor = "transparent";
    allBtn.style.color = "#000";

    compactCars.style.display = "none";
    sportCars.style.display = "none";
    vanCars.style.display = "flex";
})

allBtn.addEventListener('click', ()=>{
    vanBtn.style.backgroundColor = "transparent";
    vanBtn.style.color = "#000";
    sportBtn.style.backgroundColor = "transparent";
    sportBtn.style.color = "#000";
    compactBtn.style.backgroundColor = "transparent";
    compactBtn.style.color = "#000";

    allBtn.style.backgroundColor = "#299764";
    allBtn.style.color = '#fff';

    compactCars.style.display = "flex";
    sportCars.style.display = "flex";
    vanCars.style.display = "flex";
})

sidebar.addEventListener('click', ()=>{
    document.querySelector(".greyCover").classList.add('cover');
    document.querySelector('aside').style.right = '0'
})
xbtn.addEventListener('click', ()=>{
    document.querySelector(".greyCover").classList.remove("cover");
    document.querySelector('aside').style.right = '-100%'
})