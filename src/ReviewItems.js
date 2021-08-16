import React from 'react'
import Stars from './Stars.js'


function ReviewItems(props)
{         
    var sty={};
   
     sty={
        width:"327px",
        height:"210px",
                
        }    
    
        const idValue= "itemOfReview"+props.idNo;
       // console.log(props.idNo);
    
    
   const item= 
   <div className="itemOfReview" id={idValue} style={sty}>
       <div style={{padding:"10px", width:"inherit",height:"inherit"}}>
           
       
       <h4 style={{fontSize:"18px"}}>{props.name}</h4>
        <Stars stars={props.stars} />
     
       <h4 style={{fontSize:"14px"}}>{props.comment}</h4>
       </div>
   </div>
   return (item)
}
export default ReviewItems
