window.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('button'),
        minuser = zamik(7),
        canvas = document.querySelector('.canvas'),
        audio = new Audio('smthng/1000-7.mp3');
    
    btn.addEventListener('click',function() {
        this.disabled = true;
        audio.play();
        const values = {
            prev: 1000, 
            current: 1000
        };
        setTimeout(calculator,400);
    });

    function calculator(values = {prev :1000, current : 1000}){
        if(values.prev > 6){
            values.current = minuser(values.prev)
            addCard(values.prev,values.current);
            values.prev = values.current;
            setTimeout(()=>calculator(values),400);
        }
        else{
            sendGhoulMessage();
            return;
        }
    }

    function addCard(prevresult, result) {
        let el = document.createElement('p');
        el.classList.add('counterMessage')
        el.innerHTML = `${prevresult} - 7 = ${result}`;
        canvas.append(el);
        document.documentElement.scrollTop = document.documentElement.scrollHeight; 
    }

    function sendGhoulMessage() {  
        let el = document.createElement('p');
        el.innerHTML = `Ты гуль`;
        canvas.append(el);
        document.documentElement.scrollTop = document.documentElement.scrollHeight; 
    }

    function zamik(x){
        return function minus(y) {
            return y-x;
        }
    };
});