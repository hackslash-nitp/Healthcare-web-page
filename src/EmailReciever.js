import React from 'react'
import MWBE from "./mwbe.jpg"
import CHAP from "./chap.png"
function EmailReciever(){


    const element=
    <div style={{textAlign:'left'}}>
            <p className="Services">Sign-up to recieve the latest articles </p>
            <p></p><input type="text" style={{width:"323px",height:"42px"}}></input><p></p>
            <button style={{backgroundColor:"rgba(0, 71, 171, 1)",fontSize:"16px",color:"white",width:"128px",height:"42px"}}>Submit</button>
            <div>
                <img src={MWBE} alt="mwbe" style={{width:"87px",height:"87px"}}/>
                <img src={CHAP} alt="chap" style={{width:"87px",height:"87px"}}/>
            </div>
        <div>Follow us 
        <a href="#facebook" style={{paddingLeft:"10px"}}><i class="fa fa-facebook-square"></i></a>
        <a href="#instagram"style={{paddingLeft:"10px"}}><i class="fa fa-instagram"></i></a>
        <a href="#linkedIn"style={{paddingLeft:"10px"}}><i class="fa fa-linkedin"></i></a>
        <a href="#twitter"style={{paddingLeft:"10px"}}><i class="fa fa-twitter"></i></a>

        </div>
    </div>
    return element;

}
export default EmailReciever