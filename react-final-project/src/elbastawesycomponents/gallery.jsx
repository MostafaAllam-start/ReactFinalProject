import React from 'react';
import image1 from './images/1-left.jpg';
import image2 from './images/2-right.jpg';
import image3 from './images/3-left.jpg';
import image4 from './images/4-right.jpg';
import Qoute from 'inspirational-quotes';

function Gallery(){
    const qoute=Qoute.getQuote().text;
   const author=Qoute.getQuote().author;
   console.log(qoute);
    return(
        <div className='container  mb-5 mt-5'>
        <div className='row '>
            <div className='col-lg '>
               <div className='row'>
                <div className='col-lg-5 col-6  mb-2 pt-3 mt-2 '>
                    <img src={image1} alt="image1" className='img1'/>
                </div>
                <div className='col-lg-7  col-6  pt-5 mt-5 '><img src={image2} alt="image2" className='img2'/></div>
               </div>
               <div className='row '>
                <div className='col-lg-5 col-6  pt-2 col-md-5'>
                    <img src={image3} alt="image3" className='img3'/>
                </div>
                <div className='col-lg-7  col-12 pt-4  col-md-7'>
                    <img src={image4} alt="image4" className='img4 '/>
                </div>
               </div>
            </div>
            <div className='col-lg-6 col-12 mt-2 '>
            {/* <h1>{qoute}</h1> */}
               <h1>flexible and options to</h1>
               <h1>suit your life style</h1>
               <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
               {/* <p className='description '> "{qoute}"</p>
            <p className='description '> Said  by: </p>
            <p className=' description'>'{author}'</p> */}
               <button className='bg-green text-light col-4 '> More</button>
            </div>
        </div>
        
    </div>
    )
}
export default Gallery;