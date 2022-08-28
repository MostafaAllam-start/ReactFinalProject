import React from 'react';
import { collection,getDocs } from 'firebase/firestore';
import  { useEffect, useState } from 'react'
import { db } from './firebase';
function Carousel (){
  
      const [products,setproducts]=useState([]);
      const productscollectionref=collection(db,"products")
      useEffect(()=>{
          const getproducts=async ()=>{
              const data= await getDocs(productscollectionref);
              console.log(data)
              setproducts(data.docs.map((doc)=>({...doc.data(),id:doc.id}))) }
          getproducts(); 
      }
     
      ,[]);
      const chairs=products.filter((product)=>{
          return product.categorie=="chair";
      })
      const beds=products.filter((products)=>{
        return products.categorie=="bed"
      });
      const sofa=products.filter((products)=>{
        return products.categorie=="sofa"
      });
      const lamps=products.filter((products)=>{
        return products.categorie=="lamp"
      });
      
    return(
        <React.Fragment>
        
            <div className='container bg-white'>
            
            <div className='col d-flex justify-content-center'>
               <a className='p-2 carousellink active' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1">Chairs</a>
               <a className='p-2 carousellink' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Beds</a>
               <a className='p-2 carousellink' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Sofa</a>
               <a className='p-2 carousellink' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">Lamps</a>



            </div>
       
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div> */}
  <div class="carousel-inner">
    <div class="carousel-item active border bg-light">
    <h1 className='text-light'>c1</h1>
    <div className='row'>
    {chairs.map((product)=>{return (
            <div class="col">
            <div className='product bg-white'>
            <img src={product.imgsrc} className='img'/>
            <h5 className='heading'>{product.name}</h5>
            <p className='description'> {product.description}</p>
            <div className='row'>
            <h4 className='col-8 '>${product.price}.00</h4>
            <button className='addbutton col-2  border '>
               +
            </button>
            </div>
        </div>
  </div>)})}
  {/* ---------------------------- */}
  
{/* ------------------------------- */}



    </div>
    
    </div>
    <div class="carousel-item bg-light">
    <h1 className='text-light'>c2</h1>
    <div className='row'>
    {beds.map((product)=>{return (
            <div class="col">
            <div className='product bg-white'>
            <img src={product.imgsrc} className='img'/>
            <h5 className='heading'>{product.name}</h5>
            <p className='description'> {product.description}</p>
            <div className='row'>
            <h4 className='col-8 '>${product.price}.00</h4>
            <button className='addbutton col-2  border '>
               +
            </button>
            </div>
        </div>
  </div>)})}
{/* -------------------- */}
{/* -------------------- */}


    </div>
    </div>
    <div class="carousel-item bg-light">
    <h1 className='text-light'>c3</h1>
    <div className='row'>
    {sofa.map((product)=>{return (
            <div class="col">
            <div className='product bg-white'>
            <img src={product.imgsrc} className='img'/>
            <h5 className='heading'>{product.name}</h5>
            <p className='description'> {product.description}</p>
            <div className='row'>
            <h4 className='col-8 '>${product.price}.00</h4>
            <button className='addbutton col-2  border '>
               +
            </button>
            </div>
        </div>
  </div>)})}
{/* ----------------------------- */}
{/* -------------------- */}


    </div>
    </div>
    <div class="carousel-item bg-light">
    <h1 className='text-light'>c4</h1>
    <div className='row'>
    {lamps.map((product)=>{return (
            <div class="col">
            <div className='product bg-white'>
            <img src={product.imgsrc} className='img'/>
            <h5 className='heading'>{product.name}</h5>
            <p className='description'> {product.description}</p>
            <div className='row'>
            <h4 className='col-8 '>${product.price}.00</h4>
            <button className='addbutton col-2  border '>
               +
            </button>
            </div>
        </div>
  </div>)})}
{/* ----------------------- */}

{/* ------------------- */}



    </div>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </React.Fragment>
    )
}
export default Carousel;