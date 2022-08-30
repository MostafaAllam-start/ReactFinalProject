import React from 'react';
import Signin from './signin';
import Signup from './signup';
import imagebanner from './images/imagebanner3.png';
function Banner(props){
   
    return(
        <div className='container-fluid  '>
        <div className='row  '>
        <div className='col-lg-4 col-12 col-md-12 container   '>
            <h1 className='ms-5'>Make Your</h1>
           
        </div>
        <div className='col-lg-2 d-lg-flex d-none '></div>
        <div className='col-lg  bg-light'></div>
        </div>
        <div className='row '>
            <div className='col-lg-4 col-12  '>
            <h1 className='ms-5'> interior more</h1>
            <h1 className='ms-5'>modern</h1>
            <p className='description ms-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co</p>
           
            <div className='row '>
            <div className='col-lg-6 col-12 mt-2 ' >
 <Signin emailref2={props.emailref2}  passwordref2={props.passwordref2} currentUser={props.currentUser} loading={props.loading} handlelogin={props.handlelogin}/>     

            </div>
            <div className='col-lg-6 col-12 mt-2'>
<Signup emailref={props.emailref}  passwordref={props.passwordref} currentUser={props.currentUser} loading={props.loading} handlesignup={props.handlesignup}/>

            </div>
            </div>
            </div>
           <div className='col-lg-2 d-lg-flex d-none'></div>
            <div className='col-lg d-lg-flex d-md-none d-none d-md-flex col-md-12 background-img  bg-light position-relative'>
            <img src={imagebanner} alt='banner' className='bannerimg  '/>
        </div>
       
            </div>
            <div className='row mt-5 mb-5'>
                <div className='col text-center'>
                    <h3 className='mt-5'>Best selling products</h3>
                </div>
            </div>
        </div>
    )
}
export default Banner;