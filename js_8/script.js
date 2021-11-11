const validators = [validateLastName,validateLogin,validatePassword,applyPassword,validateDate,validatePhone,validateInn]

let inputs = [...document.getElementsByTagName("input")]
let btn = document.getElementById("apply");
let textInputs = inputs.filter(inp => inp.type =="text")
document.getElementsByName("sex")[0].checked = true;
btn.disabled = true;

textInputs.forEach((input)=>{
    input.addEventListener("keyup",(event)=>{
        btnCheck()
    })
})

function btnCheck(){
    let results = validators.map((validator,index)=>validator(textInputs[index].value))
    btn.disabled = results.some(result => !result)
}

function validateLastName(lastNameString){
    return new RegExp('^[А-ЯA-z][а-я]{2,18}$').test(lastNameString)
}

function validateLogin(loginString){
    return new RegExp('^[a-zA-Z0-9А-Яа-я]{3,10}$').test(loginString)
}

function validatePassword(passwordString){
    return new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$').test(passwordString)
}

function applyPassword(passwordString){
    return passwordString === document.getElementById("password_field").value;
}

function validateDate(dateString){
    const amountOfDays = [31,[28,29],31,30,31,30,31,31,30,31,30,31]
    regexpr =[ new RegExp("^([0-3]*[0-9])\.([0-1]*[0-9])\.([1-2][0-9]{3})$"),
               new RegExp("^([0-3]*[0-9])\/([0-1]*[0-9])\/([1-2][0-9]{3})$")]
    if(regexpr.some(expr=>expr.test(dateString)))
    {
        let parsedDate = dateString.split(regexpr[regexpr.findIndex(exp=>exp.test(dateString))])
        let day = parseInt(parsedDate[1]), month = parseInt(parsedDate[2]), year = parseInt(parsedDate[3])
        if((month < 0 || month > 12)){
            return false;
        }
        let maxDays = 31;
        if(month === 1){
            maxDays = amountOfDays[month][(year % 4 === 0 || year % 400 ===0) && year % 100  !== 0 ? 1:0];
        }
        else{
            maxDays = amountOfDays[month];
        }
        if(day> maxDays){
            return false;
        }
        return true;
    }
    else{
        return false;
    }
}

function validatePhone(phoneString){   
    return new RegExp("\\([0-9]{3}\\)(\ )*[0-9]{3}(-|\ )*(([0-9]{2}(-|\ )*[0-9]{2})$)").test(phoneString)
}

function validateInn(InnString){
    const regExprs = [new RegExp("^[0-9]{10}$"), 
                    new RegExp("^[0-9]{12}$")]
    if(regExprs.some(expr=>expr.test(InnString)))
    {
        if(InnString.Length == 10)
            return teninnlen(InnString)
         else 
            return tewelveinnlen(InnString)
    }
    else{
        return false;
    }
}

function elevenInnLen(InnString){
    const coefs =[7,2,4,10,3,5,9,4,6,8]
    sum = 0
    for(let i = 0; i != 10; i++){
        sum+= parseInt(InnString[i]) * coefs[i]
    }
    return sum%11 === parseInt(InnString[10])
}

function tewelveinnlen(InnString){
    const coefs = [3,7,2,4,10,3,5,9,4,6,8];
    sum = 0;
    for(let i = 0; i != 11; i++){
        sum+= parseInt(InnString[i]) * coefs[i]
    }
    return sum%11 === parseInt(InnString[11]) && elevenInnLen(InnString)
}

function teninnlen(InnString){
    const coefs = [2,4,10,0,3,5,9,4,6,8]
    sum = 0
    for(let i = 0; i != InnString.Length; i++){
        sum+= parseInt(InnString[i]) * coefs[i]
    }
    return sum%11 === parseInt(InnString[10])
}