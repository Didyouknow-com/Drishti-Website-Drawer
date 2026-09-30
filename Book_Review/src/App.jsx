import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import OFUIL from './assets/oneofusislying.jpeg'
import WWL from './assets/wewereliars.jpeg'
import AGGGTM from './assets/aggttm.jpeg'
import IG from './assets/ig.jpeg'
import './App.css'

//cd Book_Review

//npm run dev

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='firstbox'>Book</div>
      <div className='secbox'>Reviews</div>

      <div className="carousel">
        <div className="group">
          <div className="card">
            <img className="bookcover" src={OFUIL} />
          </div>

          <div className="card">
            <img className="bookcover" src={WWL} />
          </div>

          <div className="card">
            <img className="bookcover" src={AGGGTM} />
          </div>

          <div className="card">
            <img className="bookcover" src={IG} />
          </div>

          <div className="card">5</div>
        </div>

        <div className="group">
          <div className="card">
            <img className="bookcover" src={OFUIL} />
          </div>

          <div className="card">
            <img className="bookcover" src={WWL} />
          </div>

          <div className="card">
            <img className="bookcover" src={AGGGTM} />
          </div>

          <div className="card">
            <img className="bookcover" src={IG} />
          </div>

          <div className="card">5</div>
        </div>
      </div>

<div className="groupb">
          <div className="card">
            <img className="bookcover" src={OFUIL} />
          </div>

          <div className="card">
            <img className="bookcover" src={WWL} />
          </div>

          <div className="card">
            <img className="bookcover" src={AGGGTM} />
          </div>

          <div className="card">
            <img className="bookcover" src={IG} />
          </div>

          <div className="card">5</div>
        </div>

        <div className="group">
          <div className="card">
            <img className="bookcover" src={OFUIL} />
          </div>

          <div className="card">
            <img className="bookcover" src={WWL} />
          </div>

          <div className="card">
            <img className="bookcover" src={AGGGTM} />
          </div>

          <div className="card">
            <img className="bookcover" src={IG} />
          </div>

          <div className="card">5</div>
        </div>
    
    </>
    
    
  )
}

export default App
