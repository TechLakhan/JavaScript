const action_movies = ["KGF", "Animal", "Pushpa", "Deewar"]
const comedy_movies = ["Phir-Hera-Pheri", "Khatta-Meetha", "De Dana Dan"]

// action_movies.push(comedy_movies);
// console.log(action_movies[4][1]);

// const all_Movies = action_movies.concat(comedy_movies);
// console.log(all_Movies);

const movies = [...action_movies, ...comedy_movies]
// console.log(movies);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(3);

console.log(real_another_array);

console.log(Array.isArray("Hitesh"))

console.log(Array.from({name : "hitesh"})) // Interesting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
