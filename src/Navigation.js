import React from 'react'
import './Navigation.css'
import UniverseCareLogo from './UniverseCareLogo.png'


class Navigation extends React.Component
{   constructor()
    {   super();
        this.myul=React.createRef();
        this.mybtn=React.createRef();
        this.navButtonClicked=this.navButtonClicked.bind(this);
        this.closeNav=this.closeNav.bind(this);
    }
    
    navButtonClicked()
    {
        this.myul.current.style.display="inline";
        this.mybtn.current.style.display="none";
    }
    closeNav()
    {
        console.log("clicked");
        this.myul.current.style.display="none";
        this.mybtn.current.style.display="inline";
    }

    render()
    {  
        
        
            
    
    
        const element=
        <div>
            
        
        <ul className="onlyForDesktop" style={{padding:"10px"}}>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#Resources">Resources</a></li>
            <li><a href="#careers" style={{color:"rgba(0, 71, 171, 1)"}}>Careers</a></li>
            <li><a href="#homeCareHeroes">Home Care Heroes</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    
     
        <div className="onlyForMobile">
        <button id="navBarButton" ref={this.mybtn}
        onClick={() => this.navButtonClicked()} ><i class="fa fa-bars"></i></button>
    
     

        <div ref={this.myul} style={{display:"none",top:"0",height:"100%",right:"0",position:"fixed",zIndex:"1",transition:"0.5s",backgroundColor:"rgba(255, 241, 225, 1)"}}>
            
        <button onClick={() => this.closeNav()}><i class="fa fa-long-arrow-left"></i></button>
        
        <ul>
            
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#Resources">Resources</a></li>
            <li><a href="#careers" style={{color:"rgba(0, 71, 171, 1)"}}>Careers</a></li>
            <li><a href="#homeCareHeroes">Home Care Heroes</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="tel:8669863356" style={{textDecoration:"none"}} ><i class="fa fa-phone" style={{width:"26px",height:"26px"}}></i> Call us</a></li>
        </ul>
        </div>
        </div>
        </div>

        
    const items=
<div id="navid" >
    

    
<img style={{padding:"15px",width: "200px",height: "38.44px"}}src={UniverseCareLogo} alt="oldpeople"></img>
{element}

<a className="onlyForDesktop" href="tel:8669863356" style={{textDecoration:"none",padding:"24px",fontSize:"16px"}} ><i class="fa fa-phone" style={{width:"26px",height:"26px"}}></i> 866-986-3356</a>






</div>
return(items);
}
 
 
}

export default Navigation


