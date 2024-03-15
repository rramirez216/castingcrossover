import React from 'react'
import axios from 'axios'
import findDuplicateCredits from '../util/findDuplicateCredits'

function useFetch() {
  const [firstActorData, setFirstActorData] = React.useState(null)
  const [secondActorData, setSecondActorData] = React.useState(null)
  const [list, setList] = React.useState(null)

  const fetchData = async (first, second) => {
    try {
      const getFirstActorId = await axios.get(
        `/.netlify/functions/getActorId?name=${first}`
      )
      const getSecondActorId = await axios.get(
        `/.netlify/functions/getActorId?name=${second}`
      )

      let firstId = getFirstActorId.data.actorId
      let secondId = getSecondActorId.data.actorId

      const creditsForFirst = await axios.get(
        `/.netlify/functions/getActorCredits?id=${firstId}`
      )
      const creditsForSecond = await axios.get(
        `/.netlify/functions/getActorCredits?id=${secondId}`
      )

      let firstResult = creditsForFirst.data.credits.cast
      setFirstActorData(firstResult)

      let secondResult = creditsForSecond.data.credits.cast
      setSecondActorData(secondResult)

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
