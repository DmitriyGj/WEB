function initTextChecker(){
    let textbox = document.getElementById("answertext")
    textbox.addEventListener("keypress",event=>{
        if((isNaN(event.key) && event.key !== ".") ||
        ((textbox.value.includes(".") || textbox.value.length === 0 )&& event.key ===".") ){
            event.returnValue = false;
            alert("не числовые данные")
        }
    });
}
initTextChecker()

document.getElementById("submit_btn").addEventListener("click",event=>{
    if(checkAllFillAnswers()){
        let score = 0.0;
        let questions = [...document.getElementsByClassName("question")]
        if([...questions[0].getElementsByTagName("input")].findIndex(check=>check.checked) === 3) score++
        [...questions[1].getElementsByTagName("input")].filter(item=>item.checked).forEach(elem=>{
            score += parseInt(elem.value)
        })
        if(document.getElementById("answertext").value != 0.398) score/=2 
        else score++;
        if(document.getElementById("answerselect").selectedIndex === 0) score++ 
        showresult(score)
    }
    else{
        event.preventDefault()
        alert("не все впоросы пройдены")
    }
})

function checkAllFillAnswers () { 
    let allInputs = [...document.getElementsByTagName("input")]
    return allInputs.filter(inp=>inp.getAttribute("type")=== "radio").some(inp=>inp.checked)
    && allInputs.filter(inp=>inp.getAttribute("type")=== "checkbox").some(inp=>inp.checked)
    && allInputs.filter(inp => inp.getAttribute("type") ==="text").some(inp=>inp.value)
    && document.getElementById("answerselect").selectedIndex  !== -1
        
 };

 function showresult(score){
    if(score < 2)
        alert("Неудовлетворительно")
    if(score > 2 && score < 6)
        alert("Хорошо")
    if(score > 5)
        alert("Отлично")
 };