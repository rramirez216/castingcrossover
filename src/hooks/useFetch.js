import React from 'react'
import axios from 'axios'

function useFetch() {
  const [fetchedData, setFetchedData] = React.useState(null)

  // React.useEffect(() => {

  // }, [])
  const fetchData = async (url) => {
    try {
      let response = await axios.get(url)
      let result = response.data
      setFetchedData(result)
      console.log(result)
    } catch (error) {
      console.log(error.message)
    }
  }

  return { fetchedData, fetchData }
}

export default useFetch
