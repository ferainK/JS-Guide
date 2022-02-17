import axios from 'axios'

fetchMovies('frozen')

//영화 찾기 함수
function fetchMovies(movie) {
  axios
    .get('https://omdbapi.com/?apikey=7035c60c&s=' + movie)
    .then((res) => {
      console.log(res)
      const pEl = document.querySelector('p')
      const imgEl = document.querySelector('img')
      pEl.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}