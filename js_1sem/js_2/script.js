let inputs  = Array.from(document.getElementsByClassName("field"));
let btn = document.getElementById("btn");
let result = document.getElementById("result");
btn.disabled = true;

function btn_check(){
    btn.disabled = inputs.some(input=>input.value =="");
}

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let parsedFields = [];
    inputs.forEach(elem =>{ 
        parsedFields.push(Number.parseFloat(elem.value))
    });
    if(parsedFields.some(num=>isNaN(num))) alert("Поля заполнены неверно")
    else calculate(parsedFields);
});

function calculate(array){
    result.value= ((array[0]/100)*array[1]*array[2]).toString();
}
