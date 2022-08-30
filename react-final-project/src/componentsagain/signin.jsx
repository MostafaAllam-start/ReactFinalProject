import React from 'react'

// import {useAuth,login} from "./firebase"
// import {useState,useRef} from 'react';

function Signin(props){
    // const [loading,setloading]=useState(false);

    // const passwordref2=useRef();
    // const emailref2=useRef();
    // const currentUser=useAuth();
    // async function handlelogin(){
    //     setloading(true);
    //     try {
    //      await login(emailref2.current.value,passwordref2.current.value)
    //      console.log(emailref2.current.value);
    //      console.log(passwordref2.current.value);
    //     } catch (error) {
    //      alert("error not found !")
    //      console.log(emailref2.current.value);
    //      console.log(passwordref2.current.value);
    //     }
    //     setloading(false)
    // }
    return(
        <React.Fragment>
   <div>
          {/* <!-- Button trigger modal --> */}
<button type="button" className="signinpopup" data-bs-toggle="modal" data-bs-target="#exampleModal2" hidden={props.currentUser ||props.loading}>
 Login Now!
</button>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content ">
      <div className="container ">
      <div className="row ">
      <div className=" col-9 m-3  text-center" id="exampleModalLabel"></div>
      <button type="button" className="btn-close col-3  mt-3 ms-4" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="row ">
      <h5 className=" col-10 ms-5  text-center modalheadingcolor " id="exampleModalLabel">Fin.</h5>
        
      </div>
      </div>
      <div className="container ">
      
      <div className='row '>
      <input type={"email"} placeholder="email" className='col-10 ms-5 emailinput bg mt-3 mb-3' ref={props.emailref2}/>
        
        </div>
        <div className='row '>
      <input type={"password"} placeholder="Password" className='col-10 ms-5  emailinput bg mt-3 mb-4'  ref={props.passwordref2}/>
        
        </div>
        <div className='row '>
      <input type={"button"} value={"sign in"} className='col-10  ms-5 emailinput signupsubmit mt-3 mb-5 '  data-bs-dismiss="modal" onClick={props.handlelogin} />
        
        </div>
     
      </div>
      {/* <div className="">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
        </div>

        </React.Fragment>
    )
}
export default Signin;