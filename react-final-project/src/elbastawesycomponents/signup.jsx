// import { useRef } from "react";
import React  from 'react';
import {signup,useAuth} from "./firebase"
import {useState,useRef} from 'react';

// import {signup,useAuth} from "./firebase";
function Signup(props){
    const [loading,setloading]=useState(false);
    const emailref=useRef();
    const passwordref=useRef();
    const currentUser=useAuth();
    async function handlesignup(){
        setloading(true);
           try {
            await signup(emailref.current.value,passwordref.current.value)
           } catch (error) {
            alert("not a valid email")
           }
           setloading(false)
        }
    return(
        <React.Fragment>
<button type="button" class="modalpopup" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden={currentUser||loading}>
 Signup Now!
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content ">
      <div className="container ">
      <div class="row ">
      <div class=" col-9 m-3  text-center" id="exampleModalLabel"></div>
      <button type="button" class="btn-close col-3  m-3 " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="row ">
      <h5 class=" col-10 m-2  text-center modalheadingcolor " id="exampleModalLabel">Fin.</h5>
        
      </div>
      </div>
      <div class="container ">
      <div className='row '>
      <input type={"email"} placeholder="email" className='col-10 m-4 emailinput bg' ref={emailref}/>
        
        </div>
        <div className='row '>
      <input type={"password"} placeholder="Password" className='col-10 m-4 emailinput bg'  ref={passwordref}/>
        
        </div>
        <div className='row '>
      <input type={"button"} value={"sign up"} className='col-10 m-4 emailinput signupsubmit '  data-bs-dismiss="modal" onClick={handlesignup} />
        
        </div>
      </div>
      </div>
      </div>
      </div>

        </React.Fragment>
    )
}
export default Signup;
