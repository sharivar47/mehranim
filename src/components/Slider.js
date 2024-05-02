import RightSide from "./slidersection/RightSide";
import {useState} from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            imageUrl: "asset/img/palm.png",
            alt: "cute-woman-with-short-hairs-relaxing-her-bedroom-boho-style-palm-trees-macrame-wall 1"
        },
        {
            imageUrl: "asset/img/palm2.png",
            alt: "beautiful-pic"
        },
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

   return (
       <div className="tag-on-photo-OsLAzO" >
          <RightSide/>
           <div className="slider-container">
               {slides.map((item, index) => (
                   <div className={`frame-2785-bzGx1t ${index === currentSlide ? "slide active" : "slide"}`} >
                       <img className="cute-woman-with-shor-mad5bi"
                            src={require(`../${item.imageUrl}`)}
                            alt={item.alt}/>
                       <div className="tag-component-mad5bi" >
                           <div className="ellipse-17"></div>
                           <div className="ellipse-19"></div>
                           <div className="ellipse-18"></div>
                       </div>
                       <div className="component-8-mad5bi" >
                           <div className="ellipse-17"></div>
                           <div className="ellipse-19"></div>
                           <div className="ellipse-18"></div>
                       </div>
                       <div className="component-9-mad5bi" >
                           <div className="ellipse-17"></div>
                           <div className="ellipse-19"></div>
                           <div className="ellipse-18"></div>
                       </div>
                       <div className="component-10-mad5bi" >
                           <div className="ellipse-17"></div>
                           <div className="ellipse-19"></div>
                           <div className="ellipse-18"></div>
                       </div>
                   </div>
               ))}
           </div>
           <div className="next-bzGx1t next">
               <img className="vuesaxlineararrow-right"
                 src="https://cdn.animaapp.com/projects/66333b5cd088bd98580d74fb/releases/66333c1cd088bd98580d74fc/img/vuesax-linear-arrow-right-7.svg"
                 onClick={nextSlide}
                    alt="vuesax/linear/arrow-right"/></div>
           <div className="next-vjQExD next"><img
               onClick={prevSlide}
               className="vuesaxlineararrow-right-5UZ3EF vuesaxlineararrow-right"
               src="https://cdn.animaapp.com/projects/66333b5cd088bd98580d74fb/releases/66333c1cd088bd98580d74fc/img/vuesax-linear-arrow-right-8.svg"
               alt="vuesax/linear/arrow-right"/></div>
       </div>
   )
}
export default Slider