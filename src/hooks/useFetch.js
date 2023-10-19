import axios from 'axios'

function useFetch(url) {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
      } catch (error) {
        console.log(error.message)
      }
    }
  }, [])

  return
}

export default useFetch
