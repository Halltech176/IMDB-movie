import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import movieApi from '../../Common/apis/movieApi'
import {useDispatch} from 'react-redux'
import {ApiKey} from '../../Common/apis/MovieAPiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
 async () =>{ 
     const movieText = 'Harry'
    const response  = await movieApi.get(
        `?apiKey=${ApiKey}&s=${movieText}&type = movie`
    )
   return response.data
})

export const fetchAsyncShows = createAsyncThunk('series/fetchAsyncSeries',
    async ()=>{
        const seriesText = 'Friends'
        const response  = await movieApi.get(
            `?apiKey=${ApiKey}&s=${seriesText}&type = series`
        )
       return response.data
    }
)

export const fetchAsyncMoviesOrShowsDetail = createAsyncThunk('movies/fetchAsyncMovies',
 async (id) =>{ 
     const movieText = 'Harry'
    const response  = await movieApi.get(
        `?apiKey=${ApiKey}&i=${id}&Plot = full`
    )
   return response.data
})
const initialState = {
    movies :[],
    shows :{},
    selectedMovieOrShow : {}
}

const movieSlice = createSlice({
    name : 'movies',
    initialState,
    reducers : {
        addMovies : (state, {payload}) => {
            state.movies = payload;
        }
    },
    extraReducers : {
        [fetchAsyncMovies.pending] : () =>{
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled] : (state, {payload}) =>{
            return {...state, movies : payload};
        },
        [fetchAsyncMovies.rejected] : (state) =>{
            return state
        },
        [fetchAsyncShows.fulfilled] : (state, {payload}) =>{
            return {...state, shows : payload};
        },
        [fetchAsyncMoviesOrShowsDetail.fulfilled] : (state, {payload}) =>{
            return {...state, selectedMovieOrShow : payload};
        },
        
    }

})
export const { addMovies } = movieSlice.actions
export default movieSlice.reducer
export const getMovies = (state) => state.movies.selectedMovieOrShow
