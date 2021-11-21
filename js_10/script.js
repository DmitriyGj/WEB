let header_aligment_stngs = [...document.getElementsByClassName("header_aligment")]
let background_imgs = [...document.getElementsByClassName("background_img")]
let header_font_style = [...document.getElementsByClassName("header_font_style")]
let header_font_color = [...document.getElementsByClassName("header_text_color")]
let text_font_size = document.getElementById("text_font_size")



for(let i = 1; i !=41; i++){
    let option = document.createElement("option")
    option.text = `${i}пт`
    option.value = `${i}pt`
    text_font_size.add(option)
}

header_font_color.forEach(element=>{
    element.addEventListener("click",(event)=>{
        document.getElementById("headertext").style.color = element.getAttribute("id")
    })
})

header_font_style.forEach(element=>{
    element.addEventListener("click",(event)=>{
        document.getElementById("headertext").style.fontFamily = element.getAttribute("ID")
    })
})

background_imgs.forEach(element => {
    element.addEventListener("click",(event)=>{
        document.body.style.background = `url(${element.getAttribute("src")})`
    })
});

header_aligment_stngs.forEach(element => { 
    element.addEventListener("click",(event)=>{
        document.getElementById("headertext").style.textAlign = element.getAttribute("ID")
    })
})

