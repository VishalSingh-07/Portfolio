import React from "react";
import "./carouselcard.css";
function CarouselCard(props) {
     return (
          <div className="carousel-card">
               <div className="image-container">
                 {/* <h1>{Iamge}</h1> */}
                    <img
                         className="carousel-card-image"
                         src={"./images/"+props.path}
                         alt={props.alt + " Logo"}
                    />
               </div>
          </div>
     );
}
export default CarouselCard;
