import { collection,getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from './firebase';
function Products(){
    const [products,setproducts]=useState([]);
    const productscollectionref=collection(db,"products")
    useEffect(()=>{
        const getproducts=async ()=>{
            const data= await getDocs(productscollectionref);
            console.log(data)
            setproducts(data.docs.map((doc)=>({...doc.data(),id:doc.id}))) }
        getproducts(); 
    }
   
    ,[])
    const categorie=products.filter((product)=>{
        return product.categorie==="chair";
    })
    return(
        <React.Fragment>
           <div className='row row-cols-1 row-cols-md-3 g-4 container-fluid mt-4'>
           {products.map((product)=>{return (
            <div class="col">
            <div className='product'>
            <img src={product.imgsrc} className='img' alt="product"/>
            <h2>{product.name}</h2>
            <p className='description'> {product.description}
            <Link to={`/${product.id}`}>
            more ...
            </Link>
            </p>

            <div className='row'>
            <h4 className='col-8 '>${product.price}.00</h4>
            <button className='addbutton col-2  border '>
               +
            </button>
            </div>
        </div>
  </div>)})}
           </div>
        </React.Fragment>
    )
}
export default Products; 