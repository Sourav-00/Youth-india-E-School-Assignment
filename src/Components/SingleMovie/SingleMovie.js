import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../context";
import "../SingleMovie/SingleMovie.css"
const SingleMovie = () =>{
    const {id}=useParams();
    const [movie,setMovie]=useState("");

    const getMovie = async(url) =>{
        try{
            const res= await fetch(url);
            const data = await res.json();
            if(data.Response==="True")
            {
                // setIsLoading(false);
                setMovie(data);
            }

            
        }catch(error){
           console.log(error); 
        }
    } 
   
    useEffect(()=>{
        getMovie(`${API_URL}&i=${id}`);
    },[id]);
    console.log(movie);
    return (
        <div className="container">
        <div className="single-movie">
            <div className="single-poster">
                <img src={movie.Poster}></img>
            </div>
            <div className="movie-info">
                <h3>Movie Name : {movie.Title}</h3>
                <h4>Cast : {movie.Actors}</h4>
                <h4>Genre : {movie.Genre}</h4>
                <h4>Rating : {movie.imdbRating}</h4>
                <p><h4>Movie Plot :</h4> {movie.Plot}</p>
            </div>
        </div>
        </div>
    )
}
export default SingleMovie;