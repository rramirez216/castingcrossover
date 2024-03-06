import React from 'react'
import axios from 'axios'
import findDuplicateCredits from '../util/findDuplicateCredits'

function useFetch() {
  const [firstActorData, setFirstActorData] = React.useState(null)
  const [secondActorData, setSecondActorData] = React.useState(null)
  const [list, setList] = React.useState(null)

  const movieApiKey = import.meta.env.VITE_MOVIE_API_KEY

  const fetchData = async (first, second) => {
    try {
      let idForFirst = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${movieApiKey}&query=${first}&include_adult=false&language=en-US&page=1`
      )
      let idForSecond = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${movieApiKey}&query=${second}&include_adult=false&language=en-US&page=1`
      )

      let id = idForFirst.data.results[0].id
      let secondId = idForSecond.data.results[0].id

      let creditsForFirst = await axios.get(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${movieApiKey}&language=en-US`
      )
      let creditsForSecond = await axios.get(
        `https://api.themoviedb.org/3/person/${secondId}/movie_credits?api_key=${movieApiKey}&language=en-US`
      )

      let firstResult = creditsForFirst.data.cast
      setFirstActorData(firstResult)

      // console.log('first actor results', firstResult)

      let secondResult = creditsForSecond.data.cast
      setSecondActorData(secondResult)
      // console.log('second actor results', secondResult)

      let duplicate = findDuplicateCredits(firstResult, secondResult)
      setList(duplicate)
      console.log(duplicate)
    } catch (error) {
      console.log(error.message)
    }
  }

  return { list, fetchData }
}

export default useFetch
