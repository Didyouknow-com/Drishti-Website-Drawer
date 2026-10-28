import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import OFUIL from './assets/oneofusislying.jpeg'
import WWL from './assets/wewereliars.jpeg'
import AGGGTM from './assets/aggttm.jpeg'
import IG from './assets/ig.jpeg'
import TBISP from './assets/theboyinthestripedpajamas.jpeg'
import TBT from './assets/thebookthief.jpeg'
import STTS from './assets/salttothesea.jpeg'
import IMBY from './assets/imustbetrayyou.jpeg'
import PNF from './assets/theprisonerofnightandfog.jpeg'
import THG from './assets/hungergames.jpeg'
import DVG from './assets/divergent.jpeg'
import LGD from './assets/legend.jpeg'
import UGL from './assets/uglies.jpg'
import './App.css'
import Home from "./Home"
import BookPage from "./BookPage"
import { Routes, Route } from 'react-router-dom'

//cd Book_Review

//npm run dev

function App() {

  return (
    <Routes>

    <Route path="/" element ={<Home />} />
    <Route path="/books/:bookId" element = {<BookPage />} />
    </Routes>


    
  )
}

export default App
