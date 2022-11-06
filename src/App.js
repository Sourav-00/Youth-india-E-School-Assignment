import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Components/Home/Home.js";
import SingleMovie from "./Components/SingleMovie/SingleMovie.js"
const App =()=>{
  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<SingleMovie/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
} 
export default App;