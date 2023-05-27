import React from "react"
import Layout from "./Components/Layout"
import {Routes, Route,} from 'react-router-dom'
import Home from "./Pages/Home"
import Product from "./Pages/Product"
// import Nave from "./Components/Nave"
import Women from "./Pages/Women"
import Men from "./Pages/Men"
import KId from "./Pages/KId"
import Tv from "./Pages/Tv"
import Homeaudio from "./Pages/Homeaudio"
import Camera from "./Pages/Camera"
import Generators from "./Pages/Generators"
import Mobile from "./Pages/Mobile"
import View from "./Pages/View"
import Help from "./Pages/Help"
function App() {

  return (
  
    <div className="">

      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route  path="/" element={<Home/>} >
            <Route  index element={<Product/>}/>
            <Route path="women"element={<Women/>}/>
            <Route path="men" element={<Men/>}/>
            <Route path="kids" element={<KId/>}/>
            <Route path="tv" element={<Tv/>}/>
            <Route path="audio" element={<Homeaudio/>}/>
            <Route path="camera" element={<Camera/>}/>
            <Route path="gen" element={<Generators/>} />
            <Route path="mobile" element={<Mobile/>}/>
            <Route path="view" element={<View/>} />
          </Route>
          <Route path="help" element={<Help/>} />
        </Route>
      </Routes>
    </div>

  )
}

export default App
