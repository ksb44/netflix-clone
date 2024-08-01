import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../components/movieSlice'

const useNowPlayingMovies = () => {

    const dispatch=useDispatch()

    useEffect(()=>{
      fetchingMovies()
    },[])
    const fetchingMovies=async()=>{
      const response=await fetch('https://jsonfakery.com/movies/paginated')
      const data=await response.json()
  
      dispatch(addNowPlayingMovies(data.data));
     
    }
}

export default useNowPlayingMovies
