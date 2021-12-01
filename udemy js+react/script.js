const numberOfFilms ;

const personalMoviveDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: ()=>{
        this.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        while(this.count ==null || isNaN(this.count)){
            this.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
    },
    remermberMyFilms:() => {
        for(let i =0; i <2;i++){
            let a = prompt('Один из последних просмотренных фильмов?',''),
                  b = prompt('Насколько вы его оцените ?','');
            if( a != null && b != null && a!="" && b !="" && a.length < 50){
                this.movies[a] = b;
                console.log('done');
            }
            else{
                i--;
                console.log('error');
            }
        }
    },
    witeYourGeneres: ()=>{
        for(let i = 1;i != 4;i++){
            personalMoviveDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`)
        }
    }
    ,
    detectedPersonalLevel:()=>{
        if(personalMoviveDB.count < 10){
            console.log('Просмотрено довольно мало фильмов')
        }
        else if(personalMoviveDB.count >= 10 && personalMoviveDB.count < 30){
            console.log('Просмотрено довольно мало фильмов')
        }
        else if(personalMoviveDB.count >= 30){
            console.log('Вы киноман')
        }
        else{
            console.log('Произошла ошибка')
        }
    },
    toggleVisibleMyDB:()=>{
        this.privat = !this.privat
    },
    showMyDB:(hidden)=>{
        if(!hidden)
            console.log(this)
    }
};


