import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTrendingMovies } from '../components/movieSlice'

const useTrendingMovie = () => {

    const dispatch=useDispatch()
    const selector =useSelector(state=>state.movies.trendingMovies)

    useEffect(()=>{

      !selector && fetchingMovies()
    },[])
    const fetchingMovies=async()=>{
      const response=await fetch('https://jsonfakery.com/movies/random/20')
      const data=await response.json()
      dispatch(addTrendingMovies(data));
     
    }
}

export default useTrendingMovie
