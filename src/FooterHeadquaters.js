import React from 'react'
import UniverseCareLogo from './UniverseCareLogo.png'

function FooterHeadquaters()
{
    const element=
    <div>
        <h4 style={{color:"rgba(255, 132, 0, 1)",textDecorationLine:"underline"}}>HEADQUARTERS</h4>
        <ul className="Services">
            
           <li>246-50 57th Drive</li>
           <li>Douglaston,NY 11362</li>
           <li>hello@universacre.com</li>
           <li>P:(718)224-3758</li>
           <li>F:8777999065</li>
           <li><img id="UniverseCareLogoFooter"style={{padding:"15px",width: "200px",height: "38.44px"}} src={UniverseCareLogo} alt="UniverseCareLogo"></img></li>
            </ul>



    </div>
    return element;
}
export default FooterHeadquaters