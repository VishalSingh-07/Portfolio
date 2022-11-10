import React from "react";
import "./carousel.css";
import CarouselCard from "./CarouselCard";
import skills from "./skills";
function Carousel(props) {
     return (
          <div className="carousel">
               <div className="scroll-animation">
                    {skills.map((skills) => {
                         return (
                              <CarouselCard
                                   key={skills._id}
                                   path={skills.path}
                                   alt={skills.alt}
                              />
                         );
                    })}
               </div>
          </div>
     );
}
export default Carousel;
