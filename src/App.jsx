import { useState } from 'react'
import './App.css'
import GetAllVideos from './Components/AllVideos'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Video from './Components/Video'

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/video/:id" element={<Video></Video>} />
    </Routes>
    </BrowserRouter>
    </>
  )

}

export default App;
