import React from "react";
import "../Search/Search.css"
import { useGlobalContext } from "../../context";
const Search = () =>{
    const {query,setQuery}=useGlobalContext();
    return (
        <section className="search-section">
            <h2>Search Your Favourite Movie</h2>

            <form action="#" onSubmit={(e)=>e.preventDefault()}>
            <div className="search-ip">
                <input
                type="text"
                placeholder="search-here"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                />
            </div>
            </form>

        </section>
    )
}
export default Search;