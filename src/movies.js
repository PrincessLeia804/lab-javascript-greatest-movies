// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  

    return moviesArray.map(movie => movie.director);



    /*Option 2 ({} needs return keyword)
    const allDirectors = moviesArray.map((movie) => {
        return movie.director
    })

    return allDirectors;
    */

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray) return null;

    const spielbergDrama = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));

    return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) return 0;
    const allScores = moviesArray.map(movie => movie.score)
        .filter(allScores => typeof allScores === 'number')
        .reduce((acc, movie) => acc + movie, 0);

    if (moviesArray.length === 0) {
        return 0;
    }

    let result = allScores / moviesArray.length;
    return Math.round(result * 100) / 100;

    /* Option 2
    const sum = moviesArray.reduce((acc, curr) => {
        if (curr.score) {
            return acc + curr.score;
        } else {
            return acc;
        }
    }, 0);

    return Number((sum / moviesArray.length).toFixed(2));
    */
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const allScores = moviesArray.filter(movies => movies.genre.includes("Drama"))
        .map(movie => movie.score)
        .reduce((acc, movie) => acc + movie, 0)

    const allMovies = moviesArray.filter(movies => movies.genre.includes("Drama")).length

    if (allMovies === 0) {
        return 0;
    }

    let result = allScores / allMovies
    return Math.round(result * 100) / 100;

    /* Option 2
    const dramaMovies = moviesArray.filter((movie) => {
        movie.genre.includes("Drama")
    });

    if(dramaMovies.length === 0) return 0;
    return scoresAverage(dramaMovies);
    */

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
    let moviesByYear = JSON.parse(JSON.stringify(moviesArray));    
    
    let sortedMovies = moviesByYear
    .sort((a, b) => {
        if (a.year < b.year){
            // < 0 sort a before b
           return -1;
        }else if (a.year > b.year){
            // > 0 sort b before a
           return 1;
        }else {
            if(a.title < b.title){
                return -1;
            }else{
                return 1;
            }
        }
    })

    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesByTitle = JSON.parse(JSON.stringify(moviesArray));    
    
    let sortedMovies = moviesByTitle
    .sort((a, b) => {
        if (a.title < b.title){
            // < 0 sort a before b
           return -1;
        }else if (a.title > b.title){
            // > 0 sort b before a
           return 1;
        }else {
            return 0;
        }
    })
    .map(movie => movie.title)
    .slice(0,20)

    return sortedMovies
 }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
    /* regular expression \d+, any digit from 0 to 9 (\d) repeated one or more times (+). 
    The qualifier g =  global search (doesn't stop on the first hit).*/

        let currentMovieDuration = movie.map(function (element) {
           return element.duration.match(/\d+/g);
        });

        let timeArr = currentMovieDuration.map(function (element) {
            return parseInt(element);
        });       

        timeArr.forEach(duration => duration = (timeArr[0])*60 + (timeArr[1]));
    
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
