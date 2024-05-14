import React from 'react'
import axios from 'axios'
import findDuplicateCredits from '../util/findDuplicateCredits'

function useFetch() {
  const [list, setList] = React.useState(null)

  const fetchData = async (first, second) => {
    try {
      const getFirstActorId = await axios.get(
        `/.netlify/functions/getActorId?name=${first}`
      )
      const getSecondActorId = await axios.get(
        `/.netlify/functions/getActorId?name=${second}`
      )

      let firstId = getFirstActorId.data.actorData.id
      let secondId = getSecondActorId.data.actorData.id

      let firstActorName = getFirstActorId.data.actorData.name
      let secondActorName = getSecondActorId.data.actorData.name

      const creditsForFirst = await axios.get(
        `/.netlify/functions/getActorCredits?id=${firstId}`
      )
      const creditsForSecond = await axios.get(
        `/.netlify/functions/getActorCredits?id=${secondId}`
      )

      let firstResult = creditsForFirst.data.credits.cast

      let secondResult = creditsForSecond.data.credits.cast

      let duplicateCredits = findDuplicateCredits(
        firstResult,
        secondResult,
        firstActorName,
        secondActorName
      )
      setList(duplicateCredits)
      console.log(duplicateCredits)
    } catch (error) {
      console.log(error.message)
    }
  }

  return { list, fetchData }
}

export default useFetch
