import React, {useEffect, useState} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import {useDispatch} from 'react-redux'
import {fetchAsyncMovies, fetchAsyncShows} from '../../Features/Movies/MovieSlice'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() =>{
      dispatch(fetchAsyncMovies());
      dispatch(fetchAsyncShows());
    }, [])
  return (
      <div>
    <div className ='banner-img'></div>
    <MovieListing/>
    </div>
  )
}

export default Home