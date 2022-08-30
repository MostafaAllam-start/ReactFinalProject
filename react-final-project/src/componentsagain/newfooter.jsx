import React from 'react'
function Footing(){
    return(
        <React.Fragment>
            <div className='container-fluid btn-green mt-5 ' >
                <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 col-12 mt-4 '>
                        <h3 className='title'>Fin.</h3>
                      <div className='p-2'>
                      <a className="btn btn-outline-light btn-floating mx-1 rounded-circle" href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i></a>

                              <a className="btn btn-outline-light btn-floating mx-2 rounded-circle" href="#!" role="button"
                            ><i className="fab fa-twitter"></i></a>

<a className="btn btn-outline-light rounded-circle btn-floating mx-1" href="#!" role="button"
                            ><i className="fab fa-instagram"></i></a>
                      </div>
                      
                    </div>
                    <div className='col-lg col-12 pt-4'>
                       <p className='text-light'> <a>Services</a></p>
                     <p className='text-light'>   <a>Home</a></p>
                       <p className='text-light'> <a>Category</a></p>
                        <p className='text-light'><a>Products</a></p>
                      <p className='text-light'>  <a>About</a></p>
                    </div>
                    <div className='col-lg col-12 pt-4'>
                    <p className='text-light'> <a>About</a></p>
                     <p className='text-light'>   <a>Our Story</a></p>
                       <p className='text-light'> <a>Team</a></p>
                        <p className='text-light'><a>Benefits</a></p>
                      <p className='text-light'>  <a>Career</a></p>
                    </div>

                </div>
                </div>
                <div className='row text-center'>
                <div className="text-light pb-2 pt-2">
                    © 2022 Copyright: ITI Training Inistitute - Mansoura Branch
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Footing