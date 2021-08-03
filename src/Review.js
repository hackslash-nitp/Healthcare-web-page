import React from 'react'
import ReviewContainer from './ReviewContainer'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ReviewData from './ReviewData.js'
import Stars from './Stars.js'
import './Review.css'
const len=ReviewData.length;
function Review(){
var total=0;
for(var i=0;i<ReviewData.length;i++)
total=total+ReviewData[i].stars;

const avg=parseInt((total)/(len+1));


const abc=
<div style={{backgroundColor: "rgba(255, 241, 225, 1)", paddingTop:"80px",paddingBottom:"80px"}}>
    

<div className="finalReviewContainer">


<div className="SummaryOfReview" >
        <h1>{avg}</h1>
        <Stars stars={avg}/>
        <h4>{len} verified customers reviewed by google</h4>
        
 </div>
<div className="scrollCont" >
<OwlCarousel
    className="owl-theme"
    loop="true"
    
    autoplay="true"
    autoplayTimeout="3000"
    autoplayHoverPause="true"
    
    dots="false"
    pagination="false"
    responsiveClass="true"
    responsive={{
        0:{
            items:"1",
            
            
        },
        1200:{
            items:"2.2"
        }
    }}
    
    
>
      <ReviewContainer/>
      </OwlCarousel>
      </div>
</div>


<a href="AllReviews" style={{fontSize:"26px"}}>See all reviews<i class="fa fa-long-arrow-right"></i></a>
    
</div>
return(abc)
}
export default Review



