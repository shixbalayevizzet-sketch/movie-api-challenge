const movies = [
    {id: 1, title: "Interstellar", rating: 8.7},
    {id: 2, title: "Inception", rating: 8.8}
];

// 1. Add new movie using spread operator
const newMovie = {id: 6, title: "Dune", rating: 8.0};
const updatedMovies = [...movies, newMovie];

// 2. Arrow function for rating >= 8
const highRated = updatedMovies.filter(m => m.rating >= 8);

// 3. Template literal
console.log(`${movies[0].title} (${movies[0].year || 2014}) - Rating: ${movies[0].rating}`);
