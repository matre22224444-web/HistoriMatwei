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
    black1.style.zIndex="-1"
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

b1945=document.getElementById("button1945")
b1948=document.getElementById("button1948")
b1950=document.getElementById("button1950")
b1945.addEventListener("click",function(event){
    b1945.className="buttonon"
    b1948.className="buttonoff"
    b1950.className="buttonoff"
    GREK1945.style.fill="orange"
    IRAN1945.querySelectorAll('path').forEach(path => {
        path.style.setProperty('fill', 'orange', 'important');
    })
    TURK1945.style.fill="orange"
    GERM1948.querySelectorAll('path').forEach(path => {
        path.style.setProperty('fill', '', 'important');
    })
    KOREA1950.style.fill=""
})

b1948.addEventListener("click",function(event){
    b1948.className="buttonon"
    b1945.className="buttonoff"
    b1950.className="buttonoff"
    GREK1945.style.fill=""
    IRAN1945.querySelectorAll('path').forEach(path => {
        path.style.setProperty('fill', '', 'important');
    })
    TURK1945.style.fill=""
    GERM1948.querySelectorAll('path').forEach(path => {
        path.style.setProperty('fill', 'orange', 'important');
    })
    KOREA1950.style.fill=""
})

b1950.addEventListener("click",function(event){
    b1948.className="buttonoff"
    b1945.className="buttonoff"
    b1950.className="buttonon"
    GREK1945.style.fill=""
    IRAN1945.querySelectorAll('path').forEach(path => {
        path.style.setProperty('fill', '', 'important');
    })
    TURK1945.style.fill=""
    GERM1948.querySelectorAll('path').forEach(path => {
        path.style.setProperty('fill', '', 'important');
    })
    KOREA1950.style.fill="orange"
})

GREK1945=document.getElementById("gr")
IRAN1945=document.getElementById("ir")
TURK1945=document.getElementById("tr")
PLAN1947=document.getElementsByClassName("plan")
GERM1948=document.getElementById("de")
KOREA1950=document.getElementById("kp")

PLAN1948=document
GREK1945.addEventListener("mouseover",function(event){
    if(b1945.className==="buttonon"){
    GREK1945.style.fill="#fbff00"
    dop1.style.opacity="1"
    dop1.style.zIndex="100"}
})
GREK1945.addEventListener("mouseout",function(event){
    if(b1945.className==="buttonon"){
    GREK1945.style.fill="orange"
    dop1.style.opacity="0"
    dop1.style.zIndex="-20"}
})
IRAN1945.addEventListener("mouseover", function(event){
    if(b1945.className==="buttonon"){
    IRAN1945.querySelectorAll('path').forEach(path=>{
        path.style.setProperty('fill', '#fbff00', 'important');
    })
    dop2.style.opacity="1"
    dop2.style.zIndex="100"
}})
IRAN1945.addEventListener("mouseout", function(event){
    if(b1945.className==="buttonon"){
    IRAN1945.querySelectorAll('path').forEach(path=>{
        path.style.setProperty('fill', 'orange', 'important');
    })
    dop2.style.opacity="0"
    dop2.style.zIndex="-20"
}})
TURK1945.addEventListener("mouseover",function(event){
    if(b1945.className==="buttonon"){
    TURK1945.style.fill="#fbff00"
    dop3.style.opacity="1"
    dop3.style.zIndex="100"}
})
TURK1945.addEventListener("mouseout",function(event){
    if(b1945.className==="buttonon"){
    TURK1945.style.fill="orange"
    dop3.style.opacity="0"
    dop3.style.zIndex="-20"}
}) 

GERM1948.addEventListener("mouseover",function(event){
    if(b1948.className==="buttonon"){
    GERM1948.querySelectorAll('path').forEach(path=>{
        path.style.setProperty('fill', "#fbff00", 'important');
    })
    dop4.style.opacity="1"
    dop4.style.zIndex="100"}
})

GERM1948.addEventListener("mouseout",function(event){
    if(b1948.className==="buttonon"){
    GERM1948.querySelectorAll('path').forEach(path=>{
        path.style.setProperty('fill', "orange", 'important');
    })
    dop4.style.opacity="0"
    dop4.style.zIndex="-20"}
}) 
KOREA1950.addEventListener("mouseover",function(event){
    if(b1950.className==="buttonon"){
    KOREA1950.style.fill="#fbff00"
    dop5.style.opacity="1"
    dop5.style.zIndex="100"}
})
KOREA1950.addEventListener("mouseout",function(event){
    if(b1950.className==="buttonon"){
    KOREA1950.style.fill="orange"
    dop5.style.opacity="0"
    dop5.style.zIndex="-20"}
})
dop1=document.getElementById("dopinfo1")
dop2=document.getElementById("dopinfo2")
dop3=document.getElementById("dopinfo3")
dop4=document.getElementById("dopinfo4")
dop5=document.getElementById("dopinfo5")

