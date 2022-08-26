import React from 'react'
function Signin(props){
    return(
        <React.Fragment>
   <div>
          {/* <!-- Button trigger modal --> */}
<button type="button" class="signinpopup" data-bs-toggle="modal" data-bs-target="#exampleModal2" hidden={props.hidden}>
 Login Now!
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
      <input type={"email"} placeholder="email" className='col-10 m-4 emailinput bg' ref={props.emailref2}/>
        
        </div>
        <div className='row '>
      <input type={"password"} placeholder="Password" className='col-10 m-4 emailinput bg'  ref={props.passwordref2}/>
        
        </div>
        <div className='row '>
      <input type={"button"} value={"sign in"} className='col-10 m-4 emailinput signupsubmit '  data-bs-dismiss="modal" onClick={props.handleclick} />
        
        </div>
      </div>
      {/* <div class="">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
        </div>

        </React.Fragment>
    )
}
export default Signin;