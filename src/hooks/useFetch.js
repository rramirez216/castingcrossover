import React from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(url)

        setData(response.data.result)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  return data
}

export default useFetch
