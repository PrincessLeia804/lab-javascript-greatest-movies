const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  }]

function turnHoursToMinutes(moviesArray) {
    
    /* regular expression \d+, any digit from 0 to 9 (\d) repeated one or more times (+). 
    The qualifier g =  global search (doesn't stop on the first hit).*/
    // moviesArray.forEach(function (movie){ 
        let currentMovieDuration = moviesArray.map(function (movie) {
            return movie.duration.match(/\d+/g);
        })

        console.log(currentMovieDuration);


        let timeArr = [];

       for (let i = 0; i < currentMovieDuration.length; i++){
            parseInt(currentMovieDuration[i][0]);
            parseInt(currentMovieDuration[i][1]);
       }
        console.log(currentMovieDuration);
        // let timeArr = currentMovieDuration.map(function (element) {
        //     return parseInt(element[0], element[1]);
        // });       
        // console.log(timeArr);

        let movieDuration = (timeArr[0])*60 + (timeArr[1]);
        movie.duration = movieDuration
    // })
}
    
  
  console.log(turnHoursToMinutes(movies))``