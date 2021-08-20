import React from 'react'

import './Image.css';
import hand from './hand.png'
import Screenshot1 from './Screenshot1.png'
import Screenshot2 from './Screenshot2.png'

function Image(){
    const element=
    <div id="part_1"  >
      <div id="screen" >
        <div id="screenshot" >
         <img id="people" alt="screenshot" src={Screenshot1}/>
        </div>
        <div id="screenshot2">
        <img id="people2" alt="screenshot2" src={Screenshot2}/>
        </div>
      </div>
      <div id="part_2"  >
        <div id="text" >
           <h1 id="para" >WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND</h1>
           <button id="button" >Request An Appointment</button>
        </div>
        <div id="image" >
          <img src={hand} alt=""></img>
        </div>
      </div>
</div>
return(element)

}




export default Image