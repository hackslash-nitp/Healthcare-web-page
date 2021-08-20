import React from 'react'


function FooterServices()
{
    const element=
    <div>
        <h4 style={{color:"rgba(255, 132, 0, 1)",textDecorationLine:"underline"}}>SERVICES</h4>
        <ul className="Services">
            
            <li><a href="#HourlyCare"><i class="fa fa-circle-o" style={{color:"rgba(255, 132, 0, 1)"}}></i>Hourly Care</a></li>
            <li><a href="#DailyCare"><i class="fa fa-circle-o" style={{color:"rgba(255, 132, 0, 1)"}}></i>Daily Care</a></li>
            <li><a href="#HospitaltoHome"><i class="fa fa-circle-o" style={{color:"rgba(255, 132, 0, 1)"}}></i>Hospital to Home</a></li>
            <li><a href="#RespiteCare"><i class="fa fa-circle-o" style={{color:"rgba(255, 132, 0, 1)"}}></i>Respite Care</a></li>
            <li><a href="#SpecialisedCare"><i class="fa fa-circle-o" style={{color:"rgba(255, 132, 0, 1)"}}></i>Specialised Care</a></li>
            </ul>



    </div>
    return element;
}
export default FooterServices