import axios from 'axios'

export const handler = async () => {
  const url = `https://api.themoviedb.org/3/search/person?api_key=${
    process.env.VITE_MOVIE_API_KEY
  }&query=${'willem dafoe'}&include_adult=false&language=en-US&page=1`

  const response = await axios.get(url)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: response.data,
    }),
  }
}
