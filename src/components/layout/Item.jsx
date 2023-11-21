import React from 'react'

function Item({ item }) {
  const { title, poster_path, release_date } = item
  let moviePoster = 'no image available'

  if (poster_path)
    moviePoster = (
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title} movie poster`}
      />
    )
  return (
    <div>
      <p>{title}</p>
      <div>{moviePoster}</div>
      <p>{release_date.slice(0, 4)}</p>
    </div>
  )
}

export default Item
