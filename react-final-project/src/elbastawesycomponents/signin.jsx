import React from 'react'
function Signin(props){
    return(
        <React.Fragment>
<button className='btn btn-outline-primary m-2' data-bs-toggle="modal" data-bs-target="#exampleModal" hidden={props.hidden}>Sign in</button>

            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog text-center">
    <div class="modal-content text-center">
      <div class="modal-header text-center">
        <h5 class="modal-title text-primary" id="exampleModalLabel">Sign in Now</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' ref={props.emailref2}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='password' ref={props.passwordref2}/>
  </div>
 
  

      </div>
      
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        <div className='d-grid gap-2 col-6 mx-auto'>
        <button type="button" class="btn btn-primary mb-2"  data-bs-dismiss="modal" onClick={props.handleclick}>Sign in</button>
        </div>
      </div>
    </div>
  </div>


        </React.Fragment>
    )
}
export default Signin;