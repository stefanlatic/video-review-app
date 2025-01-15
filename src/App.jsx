import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const VIDEOS = [{
  id:1,
  title: "How to learn React",
  url: "https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s",
  cover: "https://i.ytimg.com/vi/DLX62G4lc44/maxresdefault.jpg" 
},{
  id:2,
  title: "How to learn CSS",
  url: "https://www.youtube.com/watch?v=1PnVor36_40",
  cover: "https://i.ytimg.com/vi/1PnVor36_40/maxresdefault.jpg" 
}];

const App = () => {
  return(
    <>

    {VIDEOS.map( video => {
      return (<a href={video.url} target="_blank">
        <img src={video.cover} alt={video.title} />
        <h3>{video.title}</h3>
      </a>)
    })}
    
    </>
  )

}

export default App
