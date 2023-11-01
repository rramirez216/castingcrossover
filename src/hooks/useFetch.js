import React from 'react'
import axios from 'axios'

function useFetch() {
  const [firstActorData, setFirstActorData] = React.useState(null)
  const [secondActorData, setSecondActorData] = React.useState(null)

  // React.useEffect(() => {

  // }, [])
  const fetchData = async (first, second) => {
    try {
      let idForFirst = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=&query=${first}&include_adult=false&language=en-US&page=1`
      )
      let idForSecond = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=&query=${second}&include_adult=false&language=en-US&page=1`
      )

      let id = idForFirst.data.results[0].id
      let secondId = idForSecond.data.results[0].id

      let creditsForFirst = await axios.get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=&language=en-US`
      )
      let creditsForSecond = await axios.get(
        `https://api.themoviedb.org/3/person/${secondId}/movie_credits?api_key=&language=en-US`
      )

      let firstResult = creditsForFirst.data.cast
      setFirstActorData(firstResult)
      console.log(firstResult)

      let secondResult = creditsForSecond.data.cast
      setSecondActorData(secondResult)
      console.log(secondResult)
    } catch (error) {
      console.log(error.message)
    }
  }

  return { firstActorData, secondActorData, fetchData }
}

export default useFetch
