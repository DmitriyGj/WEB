window.addEventListener('DOMContentLoaded',()=>{
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });
        tabs.forEach(item=>{
            item.classList.remove('.tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('.tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',(event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,index)=>{
                if(item === target){
                    hideTabContent();
                    showTabContent(index);
                } 
            });
        }
    });

    //Timer 
    const deadLine = '2021-12-25';

    function getRemaining(endTime){
        const t= Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t/(1000 * 60 * 60 * 24)),
            hours = Math.floor((t/ (1000* 60 * 60)) % 24),
            minutes = Math.floor((t/1000 / 60 ) % 60),
            seconds = Math.floor((t/1000) % 60);
        
        return {
            'total':t,
            'days': days,
            'hours':hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        return num < 10 ? `0${num}`: num;
    }

    function setClock(selector,endTime){
        const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(UpdateClock, 1000);
        UpdateClock();

        function UpdateClock(){
            const t = getRemaining(endTime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if(t.total < 0){
                clearInterval(timeInterval);
                days.innerHTML = getZero(0);
                hours.innerHTML = getZero(0);
                minutes.innerHTML = getZero(0);
                seconds.innerHTML = getZero(0);
            }
        }
    }
    setClock('.timer',deadLine);

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal= document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
    
        modalTrigger.forEach(btn=>btn.addEventListener('click',showModal));

        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow ='';
        }

        function showModal(){
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimer);
        }
        
        modalCloseBtn.addEventListener('click',closeModal);

        modal.addEventListener('click',(event)=>{
            if(event.target === modal){
                closeModal();
            }
        });

        document.addEventListener('keydown',(event)=>{
            if(event.code === 'Escape' && modal.classList.contains('show')){
                closeModal();
            }
        });

        const modalTimer = setTimeout(showModal,15000);

        function showModalByScroll() { 
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
                showModal();
                window.removeEventListener('scroll',showModalByScroll);
            }
        }

        window.addEventListener('scroll',showModalByScroll);

        //MenuCards

        class MenuCard{
            constructor(src,alt,title, description, price, parentSelector, ...classes ){
                this.src = src;
                this.alt = alt;
                this.classes = classes;
                this.title = title;
                this.description = description;
                this.price = price;
                this.transfer = 27;
                this.parent = document.querySelector(parentSelector);
                this.changeToUAH();
            }

            changeToUAH(){
                this.price *= this.transfer;
            }

            render(){
                const element  = document.createElement('div');
                if(this.classes.length === 0){
                    this.classes = ['menu__item']
                }
                this.classes.forEach(className => element.classList.add(className));
                element.innerHTML = `   <img src=${this.src} alt= ${this.alt}>
                                        <h3 class="menu__item-subtitle">${this.title}</h3>
                                        <div class="menu__item-descr">${this.description}</div>
                                        <div class="menu__item-divider"></div>
                                        <div class="menu__item-price">
                                            <div class="menu__item-cost">Цена:</div>
                                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                                        </div>`;
                this.parent.append(element);
            }
        }
        new MenuCard("img/tabs/vegy.jpg",
                    "vegy",
                    `Меню "Фитнес"`,
                    `Меню 'Фитнес' - это новый подход к приготовлению блюд: 
                    больше свежих овощей и фруктов. Продукт активных 
                    и здоровых людей. Это абсолютно новый продукт 
                    с оптимальной ценой и высоким качеством!`,
                    9
                    ,".menu .container").render();
        new MenuCard("img/tabs/elite.jpg",
                    "elite",
                    `Меню “Премиум”`,
                    `В меню “Премиум” мы используем не только красивый 
                    дизайн упаковки, но и качественное исполнение блюд. 
                    Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`,
                    20,
                    ".menu .container").render();
        new MenuCard("img/tabs/post.jpg",
                    "post",
                    `Меню "Постное"`,
                    `Меню “Постное” - это тщательный подбор ингредиентов: 
                    полное отсутствие продуктов животного происхождения, 
                    молоко из миндаля, овса, кокоса или гречки, правильное 
                    количество белков за счет тофу и импортных вегетарианских стейков.`,
                    18,
                    ".menu .container").render();   
    
        //Forms
        const forms = document.querySelectorAll('form');
        
        const message={
            loading:'Загрузка',
            success: 'Спасибо ! Скоро мы с вами свяжемся',
            failure: 'Что-то пощло не так...'
        }

        forms.forEach(item=>{
            postData(item);
        });

        function postData(form){
            form.addEventListener('submit', (e)=>{
                e.preventDefault();

                const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                statusMessage.textContent = message.loading;
                form.append(statusMessage);

                const request = new XMLHttpRequest();
                request.open('POST','server.php');

                request.setRequestHeader('Content-type', 'application/json')
                const formData = new FormData(form);
                const object ={};
                formData.forEach(function(value,key){
                    object[key]= value;
                });
                const jsonObj = JSON.stringify(object);
                request.send(jsonObj);

                request.addEventListener('load',()=>{
                    if(request.status === 200){
                        console.log(request.response);
                        statusMessage.textContent = message.success;
                        form.reset();
                        setTimeout(()=>{
                            statusMessage.remove()
                        },2000);
                    }
                    else{
                        statusMessage.textContent = message.failure;
                    }
                });
            });
        }
});


