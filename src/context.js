import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
export const API_URL = `https://www.omdbapi.com/?apikey=611b1a09`;

const AppProvider = ({children})=>{
    const [isLoading,setIsLoading]=useState(true);
    const [Movies,setMovies]=useState([]);
    const [query,setQuery]=useState("avengers");
    const getMovie = async(url) =>{
        try{
            const res= await fetch(url);
            const data = await res.json();
            if(data.Response==="True")
            {
                setIsLoading(false);
                setMovies(data.Search);
            }

            
        }catch(error){
           console.log(error); 
        }
    } 
   
    useEffect(()=>{
        getMovie(`${API_URL}&s=${query}`);
    },[query]);
    return <AppContext.Provider value={{isLoading,Movies,query,setQuery}}>{children}</AppContext.Provider>;
};
const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};