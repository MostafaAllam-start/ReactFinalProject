import React from 'react';
import {useParams, Link} from "react-router-dom";


function Productdetails(props){
    const {id}=useParams();
    const product = props.products.filter(product=>product.id === id)[0];
    const maylike = (product)=>{
        if(!product){
            return []; 
        }
        return props.products.filter(product_filter=>product_filter.categorie === product.categorie);
    }
    return(
        <React.Fragment>
            {product?
                <>
                    <div className="container  mb-3 detail-container" style={{borderRadius:'10px'}}>
                        <div className="row m-4">
                            <div className="col-sm-12 col-md-6">
                                <img  className="col-md-10 col-sm-12 m-2 detailimg" src={product.imgsrc} height={"300px"} alt=""/>
                            </div>
                            <div className="col-6 mb-4" >
                                <h3 className="producttitle pt-3 text-capitalize">{product.name}</h3>
                                <p className="mt-4">{product.description}</p>
                                <h4 className="pricedetail mb-5 mt-5">${product.price}</h4>
                                <button className="signinpopup" onClick={()=>{props.onAddToCart(product)}}>Add to cart</button>
                            </div>
                        </div>
                
                    </div>
                    <div className=" text-center  container p-3 mb-3 detail-container" style={{borderRadius:'10px'}}>
                        <h3 className="text-left modalheadingcolor">you may also like:</h3>
                        <div className='row g-4 container-fluid mt-4'>

                            {maylike(product).map((product)=>{return (
                                <div className="col-xs-10 col-md-3 mb-2 mx-auto" key={product.id}>
                                    <div className="card">
                                        <img src={product.imgsrc} className="card-img-top" style={{height:"300px"}} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description.slice(0,15)}....<Link to={`/${product.id}`}>more</Link></p>
                                            <h4 className='col-8 '>${product.price}.00</h4>
                                            <div className="d-flex flex-row-reverse">
                                                <i className="fa-solid fa-circle-plus fa-4x" style={{cursor:"pointer", color:"#30514e"}} onClick={()=>props.onAddToCart(product)}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                </>
            :
                <>
                </>
            }
                
        </React.Fragment>
    )
}
export default Productdetails