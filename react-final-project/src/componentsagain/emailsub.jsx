import React from 'react';
function Subscribtion(){
    return(
<React.Fragment>
<div className='container-fluid  mt-5 mb-5 subscribe pt-5 pb-5'>
                 <div className='container'>
                 <div className='row'>
                    <div className='col-lg-6 col-12 '>
                        <h1>You can recieve our offers</h1>
                        <h1>Through your email</h1>
                    </div>
                    <div className='col'>
                        
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-4 '>
                       
                    </div>
                    <div className='col-lg-8 '>
                       <div className='row'>
                       <div className='col-lg-7 col-12 mt-2' >
                        <input type={"email"} className="col-12 pt-2 borderless text-center" placeholder='Enter your email here'/>
                       </div>
                       <div className='col-lg-5 col-12 mt-2'>
                        <button className=' bg-green text-light col-lg-8 col-5'  >Subscribe</button>
                       </div>
                       </div>
                    </div>
                  </div>
                 </div>
                 </div>
</React.Fragment>

    )
}
export default Subscribtion;