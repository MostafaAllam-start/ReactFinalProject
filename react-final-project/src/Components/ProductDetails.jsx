import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const ProductDetails = (props) => {
    const product = props.products.filter(product => product.id === Number(props.match.params.id))[0];
    return ( 
        <>
            <div className='col-xs-12 col-md-6 mx-auto'>
                <Carousel>
                    {product.imgs.map((url, index)=>{
                        return(
                            <Carousel.Item key={index}>
                                <img                                    
                                    className="d-block mx-auto w-80"
                                    src={url}
                                    alt={`slide ${index}`}
                                    style={{height:'50vh'}}
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <h1>{product.title}</h1>
                <h5>Price: {product.price}$</h5>
                
                <p>{product.description}</p>
                
                <div  className="d-flex justify-content-end">
                    <i className="fa-solid fa-cart-plus fa-2x" style={{cursor:"pointer", color:"#30514e"}} onClick={()=>props.onAddToCart(product)}/>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetails;