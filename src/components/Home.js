import React from 'react';
import { Carousel } from 'react-bootstrap';
import imagen from '../images/slider-1.png';
import imagen2 from '../images/slider2.jpg';
import imagen3 from '../images/slider3.jpg';


const Home = () => {
    
    return (
        <div className="body" id="home">
            
            <Carousel className="test" id="carousel">
                
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-blockw-100"
                            src={imagen}
                            alt="First slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-blockw-100"
                            src={imagen2}
                            alt="Second slide"
                        />
                        
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                        <img
                            className="d-blockw-100"
                            src={imagen3}
                            alt="Third slide"
                        />
                        
                    </Carousel.Item>
                    
                    
                </Carousel>
                <main className="main">
                
                <div className="main__text">
                    <p className="main__text__elements__title">Sed ut perspiciatis <br /> unde omnis iste natus</p>
                    <p className="main__text__elements__secondary">Sed ut perspiciatis unde omnis iste natus error <br /> sit
                        voluptatem accusantium doloremque.
                    </p>
                </div>
                <button type="button" className="button">Read More</button>
               
            </main>
        </div>
    );
}

export default Home;

