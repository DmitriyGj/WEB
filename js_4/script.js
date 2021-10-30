let menu_info = Array.from(document.getElementsByTagName("input")).filter(inpute=>inpute.type == "checkbox")
let resultBox = document.getElementById("res");
let image = document.getElementById("display");
let orderBtn = document.getElementById("orderBtn");

menu_info.forEach(element => {
    element.addEventListener("click",()=>{
        let info = element.value.split(";");
        if(!element.checked){
            resultBox.value = (parseFloat(resultBox.value) - parseFloat(info[0]));
            image.src ="media/0.jpg";
        }
        else{
            resultBox.value = (parseFloat(resultBox.value) + parseFloat(info[0]));
            image.src = info[1];
        }
    });
}) ;

orderBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    menu_info.every(elem => !elem.checked)? alert("Выберете блюда"):alert("Заказ успешно сделан \n" + buildMessage());
})

function buildMessage(){
    let resultMessage ="";
    let true_check = menu_info.filter(checkbox => checkbox.checked )
    true_check.forEach(elem=>{
        let parsed = elem.value.split(";");
        resultMessage += `${parsed[2]} ${parsed[0]} \n`
    })
    resultMessage += `Общая стоймость заказа ровна: ${resultBox.value}`;
    return resultMessage;
}