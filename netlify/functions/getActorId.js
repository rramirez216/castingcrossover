import axios from 'axios'

export const handler = async (event) => {
  try {
    const { name } = event.queryStringParameters
    const url = `https://api.themoviedb.org/3/search/person?api_key=${process.env.VITE_MOVIE_API_KEY}&query=${name}&include_adult=false&language=en-US&page=1`

    const response = await axios.get(url)

    const actorId = response.data.results[0].id

    return {
      statusCode: 200,
      body: JSON.stringify({
        actorId,
      }),
    }
  } catch (err) {
    console.error(err)
  }
}
