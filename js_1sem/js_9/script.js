const models = [[[0,0,"Jaguar E-type 1961"],[0,-180,"Rolls-Royce Silver Shadow 1965"],[0,-360,"Astro Martin DB5 1963"]],
             [[-500,0,"MG MGB 1962"],[-500,-180,"Morgan Plus 8 1968"],[-500,-360, "Lotus Esprit 1976"]]]
let currentModels = [[[0,0 ],[0,1]],[[1,0],[1,1]]]
let stopBtn = document.getElementById("stopBtn")
stopBtn.disabled = true;
let startBtn = document.getElementById("startBtn")
let modelview =document.getElementById("view")

function initalize(){
    [...document.getElementsByClassName("column")].forEach( (column,cindex)=>{
        [...column.getElementsByClassName("auto")].forEach((image,imageIndex)=>{
            image.onmouseover= function (event){
                modelview.value = models[currentModels[cindex][imageIndex][0]][currentModels[cindex][imageIndex][1]][2]
            };
            image.onmouseout= function (event){
                modelview.value =""
            }
        })
    })
    updateImage()
}
initalize();

function updateImage(){
    [...document.getElementsByClassName("column")].forEach((column,cindex)=>{
        [...column.getElementsByClassName("auto")].forEach((image,imageIndex)=>{
            image.style.backgroundPositionY = `${models[currentModels[cindex][imageIndex][0]][currentModels[cindex][imageIndex][1]][1]}px`
            image.style.backgroundPositionX = `${models[currentModels[cindex][imageIndex][0]][currentModels[cindex][imageIndex][1]][0]}px`
        })
    })
}

var timer;

function rotate(){
    let temp= currentModels[0]
    currentModels[0] = currentModels[1]
    currentModels[1] = temp;
    updateImage();
}

startBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    timer = setInterval(rotate,500)
    stopBtn.disabled = false;
    startBtn.disabled = true
})

stopBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    clearInterval(timer)
    stopBtn.disabled = true;
    startBtn.disabled = false;
} )

