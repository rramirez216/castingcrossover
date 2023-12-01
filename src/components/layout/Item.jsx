import React from 'react'

function Item({ item }) {
  const { title, poster_path, release_date } = item
  let moviePoster = 'no image available'

  if (poster_path)
    moviePoster = (
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title} movie poster`}
        className='w-full'
      />
    )
  return (
    <div className='max-w-[240px] text-center shadow-ss p-4'>
      <div className='mb-2'>{moviePoster}</div>
      <p className=''>{`(${release_date.slice(0, 4)})`}</p>
      <p>{title}</p>
    </div>
  )
}

export default Item
