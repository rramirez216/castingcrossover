import React from 'react'
import { scroller } from 'react-scroll'

import Form from '../components/layout/Form'
import List from '../components/layout/List'
import useFetch from '../hooks/useFetch'
import randomMessage from '../util/randomMessage'

function Home() {
  const [submitButtonClicked, setSubmitButtonClicked] = React.useState(false)
  const [names, setNames] = React.useState({
    actorOne: '',
    actorTwo: '',
  })

  const { list, fetchData } = useFetch()
  const options = {
    delay: 300,
    duration: 550,
    smooth: true,
  }
  const handleChange = (event) => {
    setNames({
      ...names,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    let first = names.actorOne.split(' ').join('%20')
    let second = names.actorTwo.split(' ').join('%20')

    fetchData(first, second)
  }
  React.useEffect(() => {
    if (submitButtonClicked) {
      scroller.scrollTo('list', options)
      console.log('scroll!')
    }
  }, [submitButtonClicked])

  let totalCoStarCredits
  if (list) {
    totalCoStarCredits = list.length > 0 ? list.length : randomMessage()
  }

  return (
    <main className='h-full flex flex-col sm:items-center gap-16'>
      <Form
        names={names}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setSubmitButtonClicked={setSubmitButtonClicked}
        submitButtonClicked={submitButtonClicked}
      />

      <List list={list} total={totalCoStarCredits} />
    </main>
  )
}

export default Home
