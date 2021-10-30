let calc_btn = document.getElementById("btn");
let amount = document.getElementById("amount_in");
let size_radio =Array.from(document.getElementsByName("size")) ;
let letter_type = Array.from(document.getElementsByName("letter_type"));
let result = document.getElementById("#result");

calc_btn.addEventListener("click",(event)=>{
    if(size_radio.every(radio=>!radio.checked)) alert("Выберете размер");
    if(letter_type.every(radio=>!radio.checked)) alert("Выбирите тип бумаги");
    if(amount.value == '') alert("Укажите количество");
    else calculate();
});

amount.addEventListener("keypress",(event)=>{
    if(event.keyCode < 48 || event.keyCode >57) event.returnValue = false;
});

function calculate(){
    const costs = [8.5, 10.5, 15.5];
    const overprice = [0,1.5];
    let pricePh = costs[size_radio.findIndex(radio=>radio.checked)] + overprice[letter_type.findIndex(radio=>radio.checked)];
    result.value += `Цена одной фотографии: ${pricePh}\n`
    result.value+= `Количество: ${amount.value}шт.\n`
    result.value += `Сумма заказа: ${parseInt(amount.value) * pricePh}`
}