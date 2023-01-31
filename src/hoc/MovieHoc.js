import React from 'react'
import MovieNav from '../components/Navbar/MovieNav'

const MovieHoc = (Component) =>({...props})=> {
  return (
    <div>
       <MovieNav />
        <Component {...props} />
    </div>
  )
}

export default MovieHoc