const menu=document.getElementById("menuglav")
const black1=document.getElementById("black")
const buttonhouse=document.getElementById("buttonhouse1")
const buttonlangimg=document.getElementById("butlangerimg")
const buttonrazimg=document.getElementById("buttonrazimg1")
const buttonback1=document.getElementById("buttonback")
const buttonbackimg1=document.getElementById("buttonbackimg")
menu.addEventListener('mouseover', function(event) {
    menu.style.transitionDuration = "1s"
    menu.style.opacity = "1"
    black1.style.zIndex="50"
    black1.style.transitionDuration="1s"
    black1.style.opacity="0.9"
})

menu.addEventListener('mouseout', function(event) {
    menu.style.transitionDuration = "1s"
    menu.style.opacity = "0"
    black1.style.zIndex="0"
    black1.style.opacity="0"
})
buttonhouse.addEventListener('mouseover', function(event){
    buttonhouse.src="infoObsh/houseon.svg"
})
buttonhouse.addEventListener('mouseout', function(event){
    buttonhouse.src="infoObsh/house.svg"
})
buttonlangimg.addEventListener('mouseover', function(event){
    buttonlangimg.src="infoObsh/RUSON.svg"
})
buttonlangimg.addEventListener('mouseout', function(event){
    buttonlangimg.src="infoObsh/RUS.svg"
})

const raz=document.getElementById("buttonraz")
raz.addEventListener('click',function(event){
    if(buttonrazimg.src.includes("infoObsh/raz1on.svg")){
        menu.style.left="0"
        buttonrazimg.src="infoObsh/raz2.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz2on.svg")){
        menu.style.left="70%"
        buttonrazimg.src="infoObsh/raz3.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz3on.svg")){
        menu.style.left="35%"
        buttonrazimg.src="infoObsh/raz1.svg"
    }
})

buttonrazimg.addEventListener("mouseover",function(event){
    if(buttonrazimg.src.includes("infoObsh/raz1.svg")){
        buttonrazimg.src="infoObsh/raz1on.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz2.svg")){
        buttonrazimg.src="infoObsh/raz2on.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz3.svg")){
        buttonrazimg.src="infoObsh/raz3on.svg"
    }
})

buttonrazimg.addEventListener("mouseout",function(event){
    if(buttonrazimg.src.includes("infoObsh/raz1on.svg")){
        buttonrazimg.src="infoObsh/raz1.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz2on.svg")){
        buttonrazimg.src="infoObsh/raz2.svg"
    }
    else if(buttonrazimg.src.includes("infoObsh/raz3on.svg")){
        buttonrazimg.src="infoObsh/raz3.svg"
    }
})

buttonback1.addEventListener("mouseover",function(event){
    buttonbackimg1.src="infoObsh/backon.svg"
})
buttonback1.addEventListener("mouseout",function(event){
    buttonbackimg1.src="infoObsh/back.svg"
})

const b1=document.getElementById("but1")
const b2=document.getElementById("but2")
const b3=document.getElementById("but3")
const b4=document.getElementById("but4")
const g1=document.getElementById("ger")
const g2=document.getElementById("orden")
const g3=document.getElementById("pism")
const g4=document.getElementById("radio")


b1.addEventListener("mouseover",function(event){
    g1.style.transform="translate(0px, -20px)"
    b1.style.color="yellow"
    b1.style.textShadow="0 0 40px 0 yellow"
    b1.style.background="linear-gradient(#520d0d,#aa1313,#ca0909)"
})
b1.addEventListener("mouseout",function(event){
    g1.style.transform="translate(0px, 0px)"
    b1.style.color="wheat"
    b1.style.textShadow=""
    b1.style.background="linear-gradient(#520d0d,#831616,#af0f0f)"
})

b2.addEventListener("mouseover",function(event){
    g2.style.transform="translate(0px, -20px)"
    b2.style.color="yellow"
    b2.style.textShadow="0 0 40px 0 yellow"
    b2.style.background="linear-gradient(#520d0d,#aa1313,#ca0909)"
})
b2.addEventListener("mouseout",function(event){
    g2.style.transform="translate(0px, 0px)"
    b2.style.color="wheat"
    b2.style.textShadow=""
    b2.style.background="linear-gradient(#520d0d,#831616,#af0f0f)"
})

b3.addEventListener("mouseover",function(event){
    g3.style.transform="translate(0px, -20px)"
    b3.style.color="yellow"
    b3.style.textShadow="0 0 40px 0 yellow"
    b3.style.background="linear-gradient(#520d0d,#aa1313,#ca0909)"
})
b3.addEventListener("mouseout",function(event){
    g3.style.transform="translate(0px, 0px)"
    b3.style.color="wheat"
    b3.style.textShadow=""
    b3.style.background="linear-gradient(#520d0d,#831616,#af0f0f)"
})

