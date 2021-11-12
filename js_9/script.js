let bgimgref = new Image();
let canvases = [...document.getElementsByClassName("auto")]
let columns = [...document.getElementsByClassName("column")]
let models = [[[0,0,"Jaguar E-type 1961"],[0,-180,"Rolls-Royce Silver Shadow 1965"],[0,-360,"Astro Martin DB5 1963"]],
             [[-500,0,"MG MGB 1962"],[-500,-180,"Morgan Plus 8 1968"],[-500,-360, "Lotus Esprit 1976"]]]
let currentModels = [[[0,0 ],[0,1]],[[1,0],[1,1]]]
let moving = false;
let stopBtn = document.getElementById("stopBtn")
stopBtn.disabled = true;
let startBtn = document.getElementById("startBtn")
let modelview =document.getElementById("view")

function initalize(){
    columns.forEach( (column,cindex)=>{
        let divs = [...column.getElementsByClassName("auto")]
        divs.forEach((image,imageIndex)=>{
            image.style.backgroundImage = bgimgref
            image.style.backgroundPositionY = `${models[cindex][imageIndex][1]}px`
            image.style.backgroundPositionX = `${models[cindex][imageIndex][0]}px`
            image.setAttribute("model",models[cindex][imageIndex][3])
            image.onmouseover= function (event){
                modelview.value = event.target.getAttribute("model").toString()
            };
            image.onmouseout= function (event){
                modelview.value =""
            }
        })
    })
}

initalize();

