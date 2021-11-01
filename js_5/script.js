const currency = ["Рубли","Евро", "Доллар", "Фунт стерлингов", "Японская иена", "Китайский юань", "Украинская гривна"];
let selections = Array.from(document.getElementsByTagName("select"));
let inputs = Array.from(document.getElementsByTagName("input"));
let calc_btn = document.getElementById("calculate");
let clear_btn = document.getElementById("clear");
let result = document.getElementById("result");
calc_btn.disabled = true;
 
inputs.forEach(input=>input.addEventListener("keypress",(event)=>{
    if(event.key =="." && input.value.length ==0 )event.returnValue = false;
    if(input.value.includes(".")&& event.key == ".") event.returnValue = false;
    if(isNaN(event.key) && event.key  != ".") event.returnValue = false;
}));

inputs.forEach(input =>input.addEventListener("keyup",(event)=>{
    calc_btn.disabled = inputs.some(input => input.value == "");
}))

calc_btn.addEventListener("click",event=>{
    event.preventDefault();
    display();
})

currency.forEach(elem=>{
    selections.forEach(select=>{
    let option = document.createElement("option");
        option.text = elem;
        option.value = elem;
        select.add(option);
    });
});

function display(){
    let course = parseFloat(inputs[0].value);
    let transSum = parseFloat(inputs[1].value);
    result.value += `Перевод: ${selections[0].value} - ${selections[1].value} по курсу ${course} \nК выдаче: ${(transSum/course).toFixed(2)}`
};