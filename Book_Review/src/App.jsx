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

//cd Book_Review

//npm run dev

function App() {

  return (
    <>
    
      <div className='firstbox'>Book</div>
      <div className='secbox'>Reviews</div>


      <div className='firsttitle'>Mystery</div>
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

        </div>
        
      </div>

      <div className='secondtitle'>Historical Fiction</div>
      <div className="carouselb">
                <div className="group">
          <div className="card">
            <img className="bookcover" src={TBISP} />
          </div>

          <div className="card">
            <img className="bookcover" src={TBT} />
          </div>

          <div className="card">
            <img className="bookcover" src={STTS} />
          </div>

          <div className="card">
            <img className="bookcover" src={IMBY} />
          </div>

          <div className="card">
            <img className="bookcover" src={PNF} />
          </div>
        </div>

        <div className="group">
          <div className="card">
            <img className="bookcover" src={TBISP} />
          </div>

          <div className="card">
            <img className="bookcover" src={TBT} />
          </div>

          <div className="card">
            <img className="bookcover" src={STTS} />
          </div>

          <div className="card">
            <img className="bookcover" src={IMBY} />
          </div>

          <div className="card">
            <img className="bookcover" src={PNF} />
          </div>
        </div>
      </div>

      <div className='thirdtitle'>Dystopian</div>
      <div className="carouselc">
                <div className="group">
          <div className="card">
            <img className="bookcover" src={THG} />
          </div>

          <div className="card">
            <img className="bookcover" src={DVG} />
          </div>

          <div className="card">
            <img className="bookcover" src={LGD} />
          </div>

          <div className="card">
            <img className="bookcover" src={UGL} />
          </div>

          <div className="card">
            <img className="bookcover" src={PNF} />
          </div>
        </div>

        <div className="group">
        <div className="card">
            <img className="bookcover" src={THG} />
          </div>

          <div className="card">
            <img className="bookcover" src={DVG} />
          </div>

          <div className="card">
            <img className="bookcover" src={LGD} />
          </div>

          <div className="card">
            <img className="bookcover" src={UGL} />
          </div>

          <div className="card">
            <img className="bookcover" src={PNF} />
          </div>
        </div>
      </div>
    
    </>

    
  )
}

export default App
