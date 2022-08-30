// import { useRef } from "react";
import React  from 'react';
// import {signup,useAuth} from "./firebase"
// import {useState,useRef} from 'react';

// import {signup,useAuth} from "./firebase";
function Signup(props){
    
   
    return(
        <React.Fragment>
<button type="button" className="modalpopup" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden={props.currentUser||props.loading}>
 Signup Now!
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content ">
      <div className="container ">
      <div className="row ">
      <div className=" col-9 m-3  text-center" id="exampleModalLabel"></div>
      <button type="button" className="btn-close col-3  mt-3 ms-4 " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="row ">
      <h5 className=" col-10 ms-5   text-center modalheadingcolor " id="exampleModalLabel">Fin.</h5>
        
      </div>
      </div>
      <div className="container ">
      <div className='row '>
      <input type={"email"} placeholder="email" className='col-10 ms-5 emailinput bg mt-3 mb-3' ref={props.emailref}/>
        
        </div>
        <div className='row '>
      <input type={"password"} placeholder="Password" className='col-10 ms-5  emailinput bg mt-3 mb-4'  ref={props.passwordref}/>
        
        </div>
        <div className='row '>
      <input type={"button"} value={"sign up"} className='col-10  ms-5 emailinput signupsubmit mt-3 mb-5 '  data-bs-dismiss="modal" onClick={props.handlesignup} />
        
        </div>
      </div>
      </div>
      </div>
      </div>

        </React.Fragment>
    )
}
export default Signup;
