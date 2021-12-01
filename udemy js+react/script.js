const numberOfFilms ;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

    while(numberOfFilms ==null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
  }
start()

const personalMoviveDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function remermberMtFilms(){
    for(let i =0; i <2;i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('Насколько вы его оцените ?','');
        if( a != null && b != null && a!="" && b !="" && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done')
        }
        else{
            i--;
            console.log('error')
        }
    }
}
