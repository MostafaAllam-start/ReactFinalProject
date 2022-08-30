// import { collection,getDocs } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
// import { db } from './firebase';
function Products(props){
    // const categorie=products.filter((product)=>{
    //     return product.categorie==="chair";
    // })
    // let getCategories = () => {
    //     let categories = []
    //     let products = props.products;
    //     for(let product of products){
    //         if(!categories.includes(product.categorie))
    //             categories.push(product.categorie)
    //     }
    //     categories.sort();
    //     return categories;
    // }
    return(
        <React.Fragment>

            <div className="container-fluid mt-4" > 
                <div className="row">
                    {/* <div className="col-2 d-none d-md-block">
                        <h5 style={{borderLeft:"solid #efefef 5px"}}>
                            Categoies
                        </h5>
                        <ul style={{listStyle:'None'}}  className="text-secondary">
                            <li onClick={() => setProducts(props.products)} style={{cursor:'pointer'}}>
                                All
                            </li> 
                            {getCategories().map((category, index)=> {
                                return(
                                    <li key={index} onClick={() => setProducts(props.products.filter(product => product.category === category))} style={{cursor:'pointer'}}>
                                        {category}
                                    </li> 
                                )
                            })}
                        </ul>
        
                    </div> */}
                    
                    <div className="col-12">
                        <div className="row">

                            {props.products.map(product => {
                                return(
                                    <div className="col-xs-10 col-md-3 mb-2" key={product.id}>
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
                                )
                            })}
                        </div>
                    </div>

                </div>
                    
            </div>
        </React.Fragment>
    )
}
export default Products; 