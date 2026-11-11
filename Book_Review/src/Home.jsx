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
import {Link} from 'react-router-dom'
//cd Book_Review

//npm run dev

function Home() {

  return (
    <div className = "box">
    
      <div className='firstbox'>Book</div>
            
      
      <div className='secbox'>Reviews</div>


      <div className='firsttitle'>Mystery</div>
      <div className="carousel">
        <div className="group">

          <div className="card">
            <Link to ="/books/one-of-us-is-lying">
            <img className="bookcover" src={OFUIL} />
            </Link>
          </div>

          <div className="card">
            <Link to ="/books/we-were-liars">
            <img className="bookcover" src={WWL} />
            </Link>
          </div>

          <div className="card">
            <Link to ="/books/a-good-girls-guide-to-murder">
            <img className="bookcover" src={AGGGTM} />
            </Link>
          </div>

          <div className="card">
            <Link to ="/books/the-inheritance-games">
            <img className="bookcover" src={IG} />
            </Link>
          </div>

        </div>

        <div className="group">
          <div className="card">
            <Link to ="/books/one-of-us-is-lying">
            <img className="bookcover" src={OFUIL} />
            </Link>
          </div>

          <div className="card">
            <Link to ="/books/we-were-liars">
            <img className="bookcover" src={WWL} />
            </Link>
          </div>

          <div className="card">
            <Link to ="/books/a-good-girls-guide-to-murder">
            <img className="bookcover" src={AGGGTM} />
            </Link>
          </div>

          <div className="card">
            <Link to ="/books/the-inheritance-games">
            <img className="bookcover" src={IG} />
            </Link>
          </div>

        </div>
        
      </div>

      <div className='secondtitle'>Historical Fiction</div>
      <div className="carouselb">
                <div className="group">
          <div className="card">
            <Link to ="books/the-boy-in-the-striped-pajamas">
            <img className="bookcover" src={TBISP} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/the-book-thief">
            <img className="bookcover" src={TBT} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/salt-to-the-sea">
            <img className="bookcover" src={STTS} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/i-must-betray-you">
            <img className="bookcover" src={IMBY} />
            </Link>
          </div>
            
          <div className="card">
            <Link to ="books/prisoner-of-night-and-fog">
            <img className="bookcover" src={PNF} />
            </Link>
          </div>
        </div>

        <div className="group">
          <div className="card">
            <Link to ="books/the-boy-in-the-striped-pajamas">
            <img className="bookcover" src={TBISP} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/the-book-thief">
            <img className="bookcover" src={TBT} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/salt-to-the-sea">
            <img className="bookcover" src={STTS} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/i-must-betray-you">
            <img className="bookcover" src={IMBY} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/prisoner-of-night-and-fog">
            <img className="bookcover" src={PNF} />
            </Link>
          </div>
      </div>
      </div>

      <div className='thirdtitle'>Dystopian</div>
      <div className="carouselc">
                <div className="group">
          <div className="card">
            <Link to ="books/the-hunger-games">
            <img className="bookcover" src={THG} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/divergent">
            <img className="bookcover" src={DVG} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/legend">
            <img className="bookcover" src={LGD} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/uglies">
            <img className="bookcover" src={UGL} />
            </Link>
          </div>

        </div>

        <div className="group">
        <div className="card">
            <Link to ="books/the-hunger-games">
            <img className="bookcover" src={THG} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/divergent">
            <img className="bookcover" src={DVG} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/legend">
            <img className="bookcover" src={LGD} />
            </Link>
          </div>

          <div className="card">
            <Link to ="books/uglies">
            <img className="bookcover" src={UGL} />
            </Link>
          </div>

        </div>
      </div>
    
   
</div>
    
  )
}

export default Home
