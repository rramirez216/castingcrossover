import axios from 'axios'

export const handler = async (event) => {
  const { id } = event.queryStringParameters
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.VITE_MOVIE_API_KEY}&language=en-US`

  const response = await axios.get(url)

  const credits = response.data

  return {
    statusCode: 200,
    body: JSON.stringify({
      credits,
    }),
  }
}
