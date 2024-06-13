import React from 'react'

function Item({ item }) {
  const {
    title,
    poster_path,
    release_date,
    role,
    roleTwo,
    actorOneName,
    actorTwoName,
  } = item
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
    <li className='flex border-b first:border-t border-black p-4 gap-2 text-base'>
      <div className='min-w-16 max-w-16'>{moviePoster}</div>
      <div className='text-left'>
        <p className='font-bold '>{title}</p>
        <p className=''>
          <span className='font-bold'>1st:</span> {role}
        </p>
        <p className=''>
          <span className='font-bold'>2nd:</span> {roleTwo}
        </p>
        <p className=''>{`${release_date.slice(0, 4)}`}</p>
      </div>
    </li>
  )
}

export default Item
