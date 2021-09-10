import React from 'react';
import imagen from '../images/section3-image.png';

const Products = () => {
    return (
        <div className="Products">
            <div className="Products__slider">
                <p className="products__title-1">Sed ut perspiciatis</p>
                <p className="products__title-2">Nemo Enim</p>
                <p className="products__paragraph">Sed ut perspiciatis unde omnis iste natus error sit<br/>
                 voluptatem accusantium doloremque laudantium,<br/> totam rem aperiam.</p>
            </div>
            <img src={imagen} alt="Imagen" className="Products__image"></img>

        </div>
    );
}

export default Products;
