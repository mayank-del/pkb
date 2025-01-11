import React,{useEffect,useState,useRef} from 'react'
import p from "./assets/p.png";
import k from "./assets/k.png";
import b from "./assets/b.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Carousel } from 'react-bootstrap';
import neha from "./assets/neha.jpg"
import mayank from "./assets/mayank.jpg"
import pramit from "./assets/pramit.png"
import "./App.css";
import burst from "./assets/burst.mp3"

function HomeMid() {
    const [isMobile, setIsMobile] = useState(false);
    //const audioRef = useRef(null);


    useEffect(()=>{

        Aos.init({duration:900});

        

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
          };
      
          handleResize();
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    
        },[]);
        const [hasInteracted, setHasInteracted] = useState(false);

        const audioRef = useRef(null);

            useEffect(() => {
                function handleClick(){
                    setHasInteracted(true);
                    if (hasInteracted && audioRef.current) {
                        audioRef.current.play();
                     
                    }
                }
                window.addEventListener('click', handleClick);

                // Cleanup the event listener when the component unmounts
                return () => {
                  window.removeEventListener('click', handleClick);
                };
              }, [hasInteracted]);

        const images = [
            { id: 1, src: neha, alt: 'Image 1',role: "Business Executive of PKB"},
            { id: 2, src: mayank, alt: 'Image 2' },
            { id: 3, src: pramit, alt: 'Image 3' },
          ];
    
  return (
    <div>
        <div style={{display:"flex",height:"40vh",width:"100vw",alignItems:"center",justifyContent:"center"}}>
        <img data-aos="fade-right" style={{width:"100px",height:"60px"}} src={p} alt="" />
        <img data-aos="fade-down" style={{width:"100px",height:"60px"}} src={k} alt="" />
        <img data-aos="fade-left" style={{width:"100px",height:"60px"}} src={b} alt="" />
{   hasInteracted &&      <audio ref={audioRef} src={burst} autoPlay /> 
 }        </div>
        <div style={{height:"40vh", display:"flex",width:"100%", alignItems:"center",justifyContent:"center"}}>
        <div style={{width:`${!isMobile?"40%":"80%"}`}} className="glassmorphic-carousel-container">
        <Carousel >
      
      <Carousel.Item>
        
        <div className="carousel-image-wrapper">
            <img className="carousel-image" src={neha}
          alt="First slide"/>
          </div>
        <Carousel.Caption>
          <h3>Neha</h3>
          <p>Business Executive</p>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        
        <div className="carousel-image-wrapper">
            <img className="carousel-image" src={mayank}
          alt="Second slide"/>
          </div>
        <Carousel.Caption>
          <h3>Mayank</h3>
          <p>CTO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <div className="carousel-image-wrapper">
            <img className="carousel-image" src={pramit}
          alt="First slide"/>
          </div>
        <Carousel.Caption>
          <h3>PKB</h3>
          <p>CEO cum Founder</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-wrapper">
            <img  className="carousel-image" src={pramit}
          alt="First slide"/>
          </div>
        <Carousel.Caption>
          <h3>Tridib</h3>
          <p>HR</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <div className="carousel-image-wrapper">
            <img className="carousel-image" src={pramit}
          alt="First slide"/>
          </div>
        <Carousel.Caption>
          <h3>Subranil</h3>
          <p>Head of Operation</p>
        </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
        </div>
        </div>
    </div>
    
  )
}

export default HomeMid