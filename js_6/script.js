let btns = [...document.getElementsByTagName("button")];
let create_btn = document.getElementById("create_massive_btn");
create_btn.disabled = true;
let inputs = [...document.getElementsByTagName("input")];

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
    create_btn.disabled = mass_length.value.length === 0; 
});

create_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    in_massive_box.value="";
    mass_length = parseInt(mass_length.value);
    in_array = generateMass(mass_length);
    in_massive_box.value = in_array.join(", ");
});

let checkboxes = inputs.filter(input=> input.type === "checkbox");
let radiobuttons = inputs.filter(input => input.type ==="radio");
radiobuttons[2].checked = true;

function generateMass(length){
    var array = [];
    for(var i =0; i != length;i++){
        array.push(parseInt((Math.random() * (101 + 101 + 1) - 101).toFixed(0)));
    }
    return array;
};

function minValue(array){
    document.getElementById("minValue").value = array.reduce((maxValue,current)=> current<maxValue? current:maxValue , Number.MAX_SAFE_INTEGER);
}

function maxValue(array){
    document.getElementById("maxValue").value = array.reduce((maxValue,current)=> current>maxValue? current:maxValue , Number.MIN_SAFE_INTEGER);
}

function sum(array){
    document.getElementById("sum").value = array.reduce((prev,current)=>prev+current);
}

function amountOfNegative(array){
    document.getElementById("of_negative").value =array.reduce((count, current)=>current < 0? count+1:count,0); 
}

function amountOfMotNegative(array){
    document.getElementById("not_negative").value =array.reduce((count, current)=>current > -1? count+1:count,0); 
}

const optionalFuncs = [minValue,maxValue,sum,amountOfNegative,amountOfMotNegative];
let sorters = [(a,b) => a-b,(a,b,)=> b-a,(a)=>a]

document.getElementById("calc_btn").addEventListener("click",event=>{
    event.preventDefault();
    for(let i =0; i != checkboxes.length;i++){
        if(checkboxes[i].checked)
            optionalFuncs[i](in_array);
    }
    let sorterIndex =radiobuttons.findIndex(radio=>radio.checked);
    sorted_array_box.value = (sorterIndex !== 2 ? in_array.sort(sorters[sorterIndex]) : in_array).join(", ");
});