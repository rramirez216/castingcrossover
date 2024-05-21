import React from 'react'
import { useForm } from 'react-hook-form'

import Form from '../components/layout/Form'
import List from '../components/layout/List'
import useFetch from '../hooks/useFetch'
import randomMessage from '../util/randomMessage'

function Home() {
  const [selectedOption, setSelectedOption] = React.useState('date')
  const [radioOrder, setRadioOrder] = React.useState('descending')

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()

  const { list, fetchData } = useFetch()

  const names = getValues()

  const onSubmit = (data) => {
    let first = data.actorOne.split(' ').join('%20')
    let second = data.actorTwo.split(' ').join('%20')
    fetchData(first, second)
    console.log(data)
  }

  let totalCoStarCredits
  if (list) {
    totalCoStarCredits = list.length > 0 ? list.length : randomMessage()
  }

  return (
    <main className='h-full flex flex-col sm:items-center gap-16'>
      <Form
        names={names}
        handleSubmit={handleSubmit}
        register={register}
        onSubmit={onSubmit}
        errors={errors}
        getValues={getValues}
      />

      <List
        list={list}
        total={totalCoStarCredits}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        radioOrder={radioOrder}
        setRadioOrder={setRadioOrder}
      />
    </main>
  )
}

export default Home
