// import { useRef } from "react";
import React  from 'react';
// import {signup,useAuth} from "./firebase";
function Signup(props){
  
    return(
        <React.Fragment>
<button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal2" hidden={props.hidden}>Sign up</button>
<div class="modal fade " id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog text-center">
    <div class="modal-content text-center">
      <div class="modal-header text-center">
        <h5 class="modal-title text-success" id="exampleModalLabel">Signup Now!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' ref={props.emailref} />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='password'  ref={props.passwordref}/>
  </div>
 
  

      </div>
      
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <div className='d-grid gap-2 col-6 mx-auto'>
        <button type="button" class="btn btn-success mb-2"  data-bs-dismiss="modal" onClick={props.handleclick} >Sign up</button>
        </div>
      </div>
    </div>
  </div>

        </React.Fragment>
    )
}
export default Signup;
