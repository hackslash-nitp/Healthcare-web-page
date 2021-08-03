import React from 'react'
import FooterHeadquaters from './FooterHeadquaters.js' 
import FooterServices from './FooterServices.js' 
import FooterCompany from './FooterCompany' 
import './Footer.css'
import EmailReciever from './EmailReciever'
function Footer()
{
const element=<div>
<div className="footeralignment" style={{paddingBottom:"11%"}}>

    <div><FooterHeadquaters/></div>
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <FooterServices/>
        <FooterCompany/>
        </div>
    <div><EmailReciever/></div>


</div> 
<hr></hr>
<div id="CopyrightMessage"> <h4>Copyright 2020 <span style={{color:"rgba(255, 132, 0, 1)"}}>Universecare</span>-All right reserved</h4></div>
</div>
return element;
}
export default Footer