import React from 'react'
import axios from 'axios'

function useFetch() {
  const [data, setData] = React.useState(null)

  // React.useEffect(() => {

  // }, [])
  const fetchData = async (url) => {
    try {
      let response = await axios.get(url)
      setData(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return { data, fetchData }
}

export default useFetch
