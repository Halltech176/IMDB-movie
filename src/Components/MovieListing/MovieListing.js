import React from "react"
import MovieCard from "../MovieCard/MovieCard"
import { useSelector } from "react-redux"
import './MovieListing.scss'

const MovieListing = () => {
  const movies = useSelector((state) => state.movies)
  console.log(movies)
  const shows = useSelector((state) => state.movies.shows)
  let renderMovies ;
  let renderShows ;
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3> {movies.error} </h3>
      </div>
    );
    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => (
        <MovieCard key={index} data={show} />
      ))
    ) : (
      <div className="movie-error">
        <h3> {movies.error} </h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
    <h2>Movies</h2>
        <div className="movie-container">
         {renderMovies}
        </div>
      </div>
      <div className="movie-list">
    <h2>shows</h2>
        <div className="movie-container">
         {renderShows}
        </div>
      </div>
    </div>
  );
};

export default MovieListing