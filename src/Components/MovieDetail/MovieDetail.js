import React, {useEffect} from 'react'
import {useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import './MovieDetail.scss'
import {fetchAsyncMoviesOrShowsDetail, getMovies} from '../../Features/Movies/MovieSlice'


const MovieDetail = () => {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getMovies)
 console.log(data)
  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowsDetail(imdbID))
  }, [dispatch])
  return (
    <div className ='movie-section'>
      <div className ='movie-left'>
        <div className ='movie-title'>{data.Title} </div>
        <div className ='movie-rating'>
          <span>IMDB Rating : {data.imdbRating}</span>
          <span>IMDB Votes : {data.imdbVotes}</span>
          <span>IMDB Runtime : {data.imdbRuntime}</span>
          <span>IMDB Year : {data.imdbYear}</span>
        </div>
        <div className ='movie-plot'>
          {data.Plot}
        </div>
        <div className ='movie-info'>
          <div>
          <span>Director: </span>
          <span>{data.Director}</span>
          </div>

          <div>
          <span>Star: </span>
          <span>{data.Actors}</span>
          </div>

          <div>
          <span>Genres: </span>
          <span>{data.Genre}</span>
          </div>

          <div>
          <span>Awards: </span>
          <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className ='section-right'>
        <img src ={data.Poster} alt ={data.Title}/>
      </div>
    </div>
  )
}

export default MovieDetail