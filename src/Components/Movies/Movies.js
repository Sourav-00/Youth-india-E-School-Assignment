import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "../Movies/Movies.css";
const Movies = () =>{
    const {Movies,isLoading}=useGlobalContext();
    if(isLoading===true)
    {
        return(
            <>
                <div className="movie-section">
                    <h3>Loading...</h3>
                </div>
            </>
        )
    }
    else
    
    return (
        <>
        <div className="movie-section">
        
           { Movies.map((movie)=>{
            const {imdbID,Title,Poster}=movie;
                return (
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                        <div className="poster">
                        <img src={Poster} alt={imdbID}></img>
                        </div>

                        <div className="movie-detail">
                            <h4>{Title}</h4>
                        </div>
                    </div>
                </NavLink>
                )
            })}
        </div>
        
        </>
    );
};
export default Movies;