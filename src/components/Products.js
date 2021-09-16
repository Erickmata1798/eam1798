import React from 'react';
import { Carousel } from 'react-bootstrap';
import imagen from '../images/section3-image.png';
import imagen2 from '../images/section3-image.png';
import imagen3 from '../images/section3-image.png';
const Products = () => {
    return (
        <div className="Products">
            <Carousel id="Products__carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagen}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagen2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagen3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            <div className="Products__slider">
                <p className="products__title-1">Sed ut perspiciatis</p>
                <p className="products__title-2">Nemo Enim</p>
                <p className="products__paragraph">Sed ut perspiciatis unde omnis iste natus error sit<br/>
                 voluptatem accusantium doloremque laudantium,<br/> totam rem aperiam.</p>
            </div>
            

        </div>
    );
}

export default Products;
