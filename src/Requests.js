const base_URL = "https://api.themoviedb.org/3";

console.log(process.env.REACT_APP_API_KEY);

const requests = {
  trending: `${base_URL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`,
  Netflix_original: `${base_URL}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  top_rated: `${base_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`,
  action_movies: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  comedy_movies: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  horror_movies: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  romantic_movies: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  Documentary: `${base_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export default requests;
