import React from 'react'

function Stars(props)
{   
    if(props.stars===1)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star" style={{fontSize:"20px"}}></i></span>)
    else if(props.stars===2)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i></span>)
    else if(props.stars===3)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star" style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i></span>)
    else if(props.stars===4)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i></span>)
    else if(props.stars===5)
    return(<span style={{color:"rgba(255, 193, 7, 1)"}}><i class="fa fa-star"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i>&nbsp;&nbsp;&nbsp;<i class="fa fa-star"style={{fontSize:"20px"}}></i></span>)
}
export default Stars