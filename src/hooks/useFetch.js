import React from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )

        setData(response.data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  return data
}

export default useFetch
