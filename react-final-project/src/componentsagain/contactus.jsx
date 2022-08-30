import React from 'react';

function Contactus(){

    function submithandler(){
    alert("thanks we will contact you soon!");
    }
    return(
        <div className='container  mt-5 mb-5'>
            <div className='row   mb-4 d-flex justify-content-center'>
                <h1 className='border-bottom text-center' style={{width:"300px" ,color:"#30514e"}} >Contact Us</h1>
            </div>
            <div className='row'>
                <div className='col-lg-6 col-12'>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label ms-1">Name:</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label ms-1">Email address:</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label ms-1"> Compose:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
                    </div>
                    <div class="col-auto  d-flex justify-content-center">
                        <button type="submit" class="btn  col-4 " style={{backgroundColor:"#30514e",color:"white"}} onClick={submithandler}>Done</button>
                    </div>
                </div>
                <div className='col-lg-6 d-lg-flex d-none'>
                    <img src='https://images.unsplash.com/photo-1608085021901-62ec9e8f2c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=899&q=80'  alt='contactus' style={{width:"555px",height:"500px"}} />
                </div>
            </div>
        </div>
    )
}
export default Contactus;