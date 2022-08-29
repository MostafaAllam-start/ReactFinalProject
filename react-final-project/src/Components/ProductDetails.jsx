import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const ProductDetails = (props) => {
    const product = props.products.filter(product => product.id === Number(props.match.params.id))[0];
    return ( 
        <>
            <div className='col-xs-12 col-md-6 mx-auto'>
                <Carousel>
                    {product.imgs.map((url, index)=>{
                        return(
                            <Carousel.Item key={index} style={{height:'50hv'}}>
                                <img                                    
                                    className="d-block mx-auto w-80"
                                    src={url}
                                    alt={`slide ${index}`}
                                />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
                <h1>{product.title}</h1>
                <h5>Price: {product.price}$</h5>
                
                <p>{product.description}</p>
                
                <div  className="d-flex justify-content-end">
                    <Button
                        vaiant='outlined'
                        onClick={() => props.onAddToCart(product)}
                    >
                        <AddShoppingCartIcon 
                            sx={{
                                fontSize:50,
                            }}
                        />
                    </Button>
                </div>
            </div>
        </>
     );
}
 
export default ProductDetails;