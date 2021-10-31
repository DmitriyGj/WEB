const currency = ["Рубли","Евро", "Доллар", "Фунт стерлингов", "Японская иена", "Китайский юань", "Украинская гривна"];
let selections = Array.from(document.getElementsByTagName("select"));

currency.forEach(elem=>{
    selections.forEach(select=>{
    let option = document.createElement("option");
        option.text = elem;
        option.value = elem;
        select.add(option);
    });
});