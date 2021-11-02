let btns = Array.from(document.getElementsByTagName("button"));
let create_btn = document.getElementById("create_massive_btn");
create_btn.disabled = true;
let mass_length = document.getElementById("mass_length");

let in_massive_box = document.getElementById("in_box_mass"); 

mass_length.addEventListener("keypress",event=>{
    if(isNaN(event.key.toString()) ) event.returnValue = false;
});

mass_length.addEventListener("keyup",event=>{
    create_btn.disabled = mass_length.value.length == 0; 
})

create_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let in_array = new Array();
    mass_length = parseInt(mass_length.value);
    for(let i =0; i != mass_length; i++){
        in_array.push((Math.random() * (101 + 101 + 1) - 101).toFixed(0));
    }
    in_massive_box.value = in_array.join(", ");
});

