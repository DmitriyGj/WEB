function initSelect(){
    let select = document.getElementById("text_font_size")

    select.addEventListener("change",(event)=>{
        [...document.getElementsByClassName("par")].forEach(element=>{
            element.style.fontSize=select.value;
        })
    })

    for(let i = 1; i !=41; i++){
        let option = document.createElement("option")
        if(i == 15)
            option.setAttribute("selected","selected")
        option.text = `${i}пт`
        option.value = `${i}pt`
        select.add(option)
    }
}

initSelect();

[...document.getElementsByClassName("header_text_color")].forEach(element=>{
    element.addEventListener("click",(event)=>{
        document.getElementById("headertext").style.color = element.style.background.style.color;
    })
});

[...document.getElementsByClassName("header_font_style")].forEach(element => {
    element.addEventListener("click",(event)=>{
        console.log(element.fontFamily)
        document.getElementById("headertext").style.fontFamily = element.getAttribute("id")
    })
});

([...document.getElementsByClassName("background_img")]).forEach(element => {
    element.addEventListener("click",(event)=>{
        document.body.style.background = `url(${element.getAttribute("src")})`
    })
});

([...document.getElementsByClassName("header_aligment")]).forEach(element => { 
    element.addEventListener("click",(event)=>{
        document.getElementById("headertext").style.textAlign = element.getAttribute("ID")
    })
});

document.getElementById("change_content").addEventListener("click",(event)=>{
    let value = prompt("Ввидите заголовок")
    if(value !== ""){
        document.getElementById("headertext").innerText = value
    }
});

document.getElementById("close_stngs").addEventListener("click",(event)=>{
    document.getElementById("settings_container").style.display = "none"
});

[...document.getElementsByClassName("pic_aligement")].forEach(element=>{
    element.addEventListener("click",(event)=>{
        document.getElementById("pic").style.float = element.getAttribute("ID")
    })
});

function pic_widthInit(){
    let pic_width =document.getElementById("pic_width")
    pic_width.addEventListener("keypress",(event)=>{
        switch (event.key){
            case ".":{
                if(pic_width.value.length ==0 || pic_width.value.includes(".")) {
                    event.returnValue = false;
                }
            }
            case "Enter":{
                document.getElementById("pic").style.width =`${pic_width.value}px`
            }
            default:{
                if(isNaN(event.key)){
                    event.returnValue = false;
                }
            }
        }
        if(event.key ==="Enter" ) 
    });

    pic_width.value = "400"
}

pic_widthInit();

