let containerE = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    let colorContainerE= document.createElement("div");
    colorContainerE.classList.add("color-container");
    containerE.appendChild(colorContainerE); 
}

let colorContainerEs = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainerEs.forEach((colorContainerE)=>{
        let newColorCode=randomColor();
       colorContainerE.style.backgroundColor = "#"+ newColorCode;
       colorContainerE.innerText="#"+newColorCode;
        
    });

};

function randomColor(){
    let chars="0123456789abcdef";
    let colorcodeLength = 6;
    let colorcode="";
    for (let index = 0; index <  colorcodeLength; index++) {
        
        let randomNum  = Math.floor(Math.random()*chars.length);
        colorcode += chars.substring(randomNum, randomNum + 1);
        
        
    };
    return colorcode;

}