import React from 'react'

const MovieCard = ({ movies }) => {
    const { Title , Poster } = movies;
  return (
    <div className='movie'>
        <div>
            <p>{ Title }</p>
        </div>
        <div>
            <img src={Poster !== "N/A" ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
        </div>
    </div>
  )
}

export default MovieCard