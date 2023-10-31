import React from 'react'
import axios from 'axios'

function useFetch() {
  const [fetchedData, setFetchedData] = React.useState(null)

  // React.useEffect(() => {

  // }, [])
  const fetchData = async (url) => {
    try {
      let responseForId = await axios.get(url)
      let id = responseForId.data.results[0].id

      let responseForCredits = await axios.get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=&language=en-US`
      )
      let result = responseForCredits.data.cast
      setFetchedData(result)
      console.log(result)
    } catch (error) {
      console.log(error.message)
    }
  }

  return { fetchedData, fetchData }
}

export default useFetch
