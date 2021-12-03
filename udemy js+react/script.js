let numberOfFilms ;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: ()=>{
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        while(personalMovieDB.count ==null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
    },
    remermberMyFilms:() => {
        for(let i =0; i <2;i++){
            let a = prompt('Один из последних просмотренных фильмов?',''),
                b = prompt('Насколько вы его оцените ?','');
            if( a != null && b != null && a!="" && b !="" && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            }
            else{
                i--;
                console.log('error');
            }
        }
    },
    writeYourGeneres: ()=>{
        for(let i = 1;i != 2;i++){
            let genre =prompt(`Введите ваши любимые жанры через запятую`);
            if(genre == null || genre =='' ){
                console.log("error");
                i--;
            }
            else{
                personalMovieDB.genres =genre.split(', ') ;
            }
        }
        personalMovieDB.genres.forEach((element,index) => {
            console.log(`Любимый жанр ${index+1} - это  ${element}`);
        });
    },
    detectedPersonalLevel:()=>{
        if(personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов')
        }
        else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Просмотрено довольно мало фильмов')
        }
        else if(personalMovieDB.count >= 30){
            console.log('Вы киноман')
        }
        else{
            console.log('Произошла ошибка')
        }
    },
    toggleVisibleMyDB:()=>{
        if(personalMovieDB.privat){
            personalMovieDB.privat =false;
        }
        else{
            personalMovieDB.privat = true;
        }
    },
    showMyDB:(hidden)=>{
        if(!hidden){
            console.log(personalMovieDB);
        }
    }
};


