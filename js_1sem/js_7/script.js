const operations = [calcDays,calcWeekends, calcWorkDays, calcFullWeeks,calcFullMonths];
const amountOfDays = [31,[28,29],31,30,31,30,31,31,30,31,30,31]
const regexs =[
    new RegExp("^([0-3]*[0-9])\\.([0-1]*[0-9])\\.([0-9][0-9]{1,3})$"),
    new RegExp("^([0-3]*[0-9])\/([0-1]*[0-9])\/([0-9][0-9]{1,3})$"),
    new RegExp("^([0-3]*[0-9])\/([0-1]*[0-9])\/([0-9][0-9]{1,3})$")];
let radios = [...document.getElementsByName("day_work")];
radios[0].checked = true;

var $ = function(id){return document.getElementById(id);}

$("calc_btn").addEventListener("click",(event)=>{
    event.preventDefault();
    let startDate = GetStartDate();
    let end_date = GetEndDate();
    if(startDate > end_date || [startDate,end_date].some(date=>date === undefined)){
        alert("Невозможно выполнить операцию")
        return;
    }
    $("result").value = operations[radios.findIndex(radio=>radio.checked)](startDate,end_date)
})


function parseDate(stringDate,regExp){
    let parsedDate = stringDate.split(regExp);
    [day,month,year] = [parseInt(parsedDate[1]),parseInt(parsedDate[2])-1,parsedDate[3].Length == 2? parseInt(parsedDate[3])+1000: parseInt(parsedDate[3])];
    if((month < 0 || month > 12) ){
        alert("Дата введена неверно")
        return;
    }
    let maxDays = 31;
    if(month === 1){
        maxDays = amountOfDays[month][(year % 4 === 0 || year % 400 ===0) && year % 100  !== 0 ? 1:0];
    }
    else{
        maxDays = amountOfDays[month];
    }
    if(day> maxDays){
        alert("Дата введена неверно")
        return;
    }
    return new Date(year,month,day);
}

function GetStartDate(){
    let startDateString = $("start_date").value;
    if(regexs.some(regex => regex.test(startDateString))){
        let regExpr = regexs[regexs.findIndex(regex=>regex.test(startDateString))];
        return parseDate(startDateString,regExpr)
    }
    else{
        alert("Дата введена неверно")
    }
}

function GetEndDate(){
    let date = $("end_date").value.split("-")
    return new Date(parseInt(date[0]),parseInt(date[1])-1,parseInt(date[2]));
}

function calcDays(date1,date2){
    return Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)
}

function calcWeekends(date1,date2){
    let daysRange = calcDays(date1,date2);
    let curDay = date1.getDay();
    let weekends = 0;
    for(let i =0; i != daysRange;i++){
        if(curDay === 6) {
            curDay=0;
            weekends++;
        }
        if(curDay ===0){
            weekends++;
        }
        curDay++;
    }
    return weekends;
}

function calcWorkDays(date1,date2){
    let daysRange = calcDays(date1,date2);
    let curDay = date1.getDay();
    let workdays = 0;
    for(let i =0; i != daysRange;i++){
        if(curDay !== 6 && curDay !== 0) 
            workdays++;
        else if(curDay == 6)
        {
            curDay =0
            continue
        }
        curDay++;
    }
    return workdays;
}

function calcFullWeeks(date1, date2){
    let rangeDays = calcDays(date1,date2);
    if(date1.getDay() == 1){
        return Math.floor(rangeDays/7);
    }
    else{
        return Math.floor(rangeDays/7) - 1;
    }
}

function calcFullMonths(date1, date2){
    let weeks = calcFullWeeks(date1,date2)
    return Math.floor(weeks/4)
}