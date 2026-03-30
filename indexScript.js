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

b4.addEventListener("mouseover",function(event){
    g4.style.transform="translate(0px, -20px)"
    b4.style.color="yellow"
    b4.style.textShadow="0 0 40px 0 yellow"
    b4.style.background="linear-gradient(#520d0d,#aa1313,#ca0909)"
})
b4.addEventListener("mouseout",function(event){
    g4.style.transform="translate(0px, 0px)"
    b4.style.color="wheat"
    b4.style.textShadow=""
    b4.style.background="linear-gradient(#520d0d,#831616,#af0f0f)"
})

