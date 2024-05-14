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
    <li className='flex border-b first:border-t border-black p-4 gap-8 text-base overflow-hidden'>
      <div className='w-24 shrink'>{moviePoster}</div>
      <div className='grow-[3] text-left'>
        <p className='font-bold truncate'>{title}</p>
        <p className='black'>
          <span className='font-bold'>{actorOneName}:</span> {role}
        </p>
        <p className='black'>
          <span className='font-bold'>{actorTwoName}:</span> {roleTwo}
        </p>
        <p className='black'>{`${release_date.slice(0, 4)}`}</p>
      </div>
    </li>
  )
}

export default Item
