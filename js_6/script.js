let btns = Array.from(document.getElementsByTagName("button"));
let create_btn = document.getElementById("create_massive_btn");
create_btn.disabled = true;
let inputs = Array.from(document.getElementsByTagName("input"));

let mass_length = document.getElementById("mass_length");
let in_massive_box = document.getElementById("in_box_mass"); 
let in_array = new Object();

inputs.filter(input => input.className.includes("unedit")).
    forEach(input=>input.addEventListener("keypress",event=>{
        event.returnValue =false;
    }));

mass_length.addEventListener("keypress",event=>{
    if(isNaN(event.key.toString()) ) event.returnValue = false;
});

mass_length.addEventListener("keyup",event=>{
    create_btn.disabled = mass_length.value.length == 0; 
})

create_btn.addEventListener("click",(event)=>{
    in_massive_box.value="";
    in_array = new Array();
    event.preventDefault();
    mass_length = parseInt(mass_length.value);
    for(let i =0; i != mass_length; i++){
        in_array.push(parseInt((Math.random() * (101 + 101 + 1) - 101).toFixed(0)));
    }
    in_massive_box.value = in_array.join(", ");
});

let checkboxes = inputs.filter(input=> input.type == "checkbox");
let radiobuttons = inputs.filter(input => input.type =="radio");
radiobuttons[2].checked = true;


function minValue(array){
    let minValue = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i != array.length; i++){
        if(array[i] < minValue)
            minValue = array[i]
    }
    document.getElementById("minValue").value = minValue;
}

function maxValue(array){
    let maxValue = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i != array.length; i++){
        if(array[i] > maxValue)
            maxValue = array[i]
    }
    document.getElementById("maxValue").value = maxValue;
}

function sum(array){
    let sum =0;
    array.forEach(element => {
        sum += parseInt(element);
    });
    document.getElementById("sum").value = sum;
}

function amountOfNegative(array){
    let amount =0;
    array.forEach(element=>{
        if(element <0) amount++;
    })
    document.getElementById("of_negative").value =amount; 
}

function amountOfMotNegative(array){
    let amount =0;
    array.forEach(element=>{
        if(element >-1) amount++;
    })
    document.getElementById("not_negative").value =amount;
}

const optionalFuncs = [minValue,maxValue,sum,amountOfNegative,amountOfMotNegative];

let sorters = [function upsort(a,b){return a-b;},function downsort(a,b,){return b-a;},(a,b)=>a]

document.getElementById("calc_btn").addEventListener("click",event=>{
    event.preventDefault();
    for(let i =0; i != checkboxes.length;i++){
        if(checkboxes[i].checked)
            optionalFuncs[i](in_array);
    }
    let sorterIndex =radiobuttons.findIndex(radio=>radio.checked);
    sorted_array_box.value = sorterIndex != 2 ? in_array.sort(sorters[sorterIndex]) : in_array;
});