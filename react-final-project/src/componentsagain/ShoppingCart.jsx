import React from 'react';
import {Link} from 'react-router-dom';
function ShoppingCart (props) {
    let getTotal = () => {
        let products = props.products;
        let total = 0;
        for(let product of products)
            total += product.count * product.price;
        return total;
    }
    console.log("props", props.ShoppingCart);
    return (
        <>
            <div>
                <h5 
                    className="p-2 mb-5" 
                    style={{borderLeft:"10px solid #efefef", fontFamily:"monospace"}}
                >
                        Your Shopping Cart
                </h5> 
                {props.products.length !== 0? 
                    <>
                        <div className="container">
                            <table className="table">
                                <tbody>
                                    {props.products.map((product, index)=>{
                                        return(
                                                <tr key={index}>
                                                    <td>
                                                        <img src={product.imgsrc} alt={`product${index}`} style={{width:"50px", height:"50px", borderRadius:"50%"}}/>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex flex-column">
                                                            <h5 className="mt-2">{product.name}</h5>
                                                            <small className="text-secondary">
                                                                <sup>$</sup>{product.price}
                                                            </small>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <i 
                                                            className="fa-solid fa-plus " 
                                                            style={{
                                                                    color:"#6a6e75",
                                                                    cursor:"pointer"
                                                                }}
                                                            onClick={() => props.onCountIncrease(product)}
                                                        />
                                                        <input 
                                                            type="text" 
                                                            value={product.count} 
                                                            style={{
                                                                    width:"50px", 
                                                                    height:"30px", 
                                                                    textAlign:'center', 
                                                                    margin:"0 10px", 
                                                                    border:"#efefef solid 2px", 
                                                                    borderRadius:"5px"
                                                                }}
                                                            onChange={(e) => props.onCountChange(product, Number(e.target.value))}
                                                        />
                                                        <i 
                                                            className="fa-solid fa-minus" 
                                                            style={{
                                                                    color:"#6a6e75",
                                                                    cursor:"pointer"
                                                                }}
                                                            onClick={() => props.onCountDecrease(product)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <h5 className="mt-2">
                                                            <sup>$</sup>{product.price*product.count}
                                                        </h5>
                                                    </td>
                                                    <td>
                                                        <i 
                                                            className="fa-solid fa-x mt-3" 
                                                            style={{color:"#6a6e75",
                                                                    cursor:'pointer',
                                                                }} 
                                                            onClick={()=>{props.onRemove(product)}}
                                                        />
                                                    </td>
                                                </tr>
                                        )
                                    })}

                                </tbody>
                            </table> 
                            <div style={{height:"15vh"}} className="d-flex justify-content-between mt-4">
                                <div>
                                    <button className="btn border-secondary" onClick={props.onClear}>Clear Cart</button>
                                </div>
                                <div>
                                    <div 
                                        className="d-flex justify-content-between"
                                    >
                                        <h5 className='text-secondary'>Subtotal</h5>
                                        <h5><sup>$</sup>{getTotal()}</h5>
                                    </div>     
                                    <small className='text-secondary d-block'>Taxes and shipping calculated at chechout</small>
                                    <button className="btn btn-primary mt-3 w-100 mb-3">Check out</button>
                                    <Link
                                        to="/products"
                                        className="text-secondary mb-3 pb-3 d-inline-block"
                                        style={{
                                            cursor:"pointer",
                                            textDecoration:'None'
                                        }}
                                    >
                                        <i className="fa-solid fa-arrow-left-long" />
                                        <span className="ms-2">
                                            Continue Shopping
                                        </span>
                                    </Link>
                                </div>
                        </div>
                        </div>
                    </>
                    :
                    <div className="text-center " style={{height:"44.9vh"}}>
                        <h5>Your cart is currently empty</h5>
                        <Link
                            to="/products"
                            className="text-secondary mb-3 pb-3 d-inline-block"
                            style={{
                                cursor:"pointer",
                                textDecoration:'None'
                            }}
                        >
                            <i className="fa-solid fa-arrow-left-long" />
                            <span className="ms-2">
                                Start Shopping
                            </span>
                        </Link>
                    </div>
                }

            </div>
        </>
    );

}
 
export default ShoppingCart;