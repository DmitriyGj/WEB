'use strict';

document.addEventListener("DOMContentLoaded",()=>{
    const movieDB = {
        films: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv_imgs = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector('form.add'),
        addInput =addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('input[type = "checkbox"]');

    const deleteAdv = (arr)=>{ 
        arr.forEach(element=>{
            element.remove();
        });
    };
    
    const makeChanges = ()=>{
        genre.innerHTML ="ДРАМА";
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr)=>{
        arr.sort();
    };

    function buildMovieList(films,parent){
        parent.innerHTML ="";

        sortArr(movieDB.films);
    
        films.forEach((movie,index)=>{
            parent.innerHTML +=  
            `<li class="promo__interactive-item">${index+1} ${movie}
                <div class="delete"></div>
            </li>`;
        });

        parent.querySelectorAll('div.delete').forEach((btn,index)=>{
            btn.addEventListener('click',()=>{
                movieDB.films.splice(index,1);
                buildMovieList(movieDB.films,movieList);
            });
        });
    }

    addForm.addEventListener('submit',()=>{
        event.preventDefault();
        let newFilm = addInput.value;
        const isFavorite = checkBox.checked;
        if(newFilm){
            newFilm = newFilm.length> 21? `${newFilm.substring(0,22)}...`:newFilm;
            movieDB.films.push(newFilm);
            sortArr(movieDB.films);
            buildMovieList(movieDB.films,movieList);
        }
        if(isFavorite){
            console.log('Любимый фильм');
        }
        event.target.reset();
    });

    deleteAdv(adv_imgs);

    makeChanges();

    sortArr(movieDB.films);

    buildMovieList(movieDB.films, movieList);
});


