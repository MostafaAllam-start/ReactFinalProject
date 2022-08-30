import React from 'react';
const About = () => {
    return ( 
        <>
            <div className="container">
                <div className="row mt-5 text-center">
                    <h2 style={{color:"#30514e"}}>About Us</h2>
                </div>
                <div className="row text-center">
                    <div className="col-xl-4 col-sm-6 mb-3 mt-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, possimus? Quam pariatur nam officia accusantium nemo eos excepturi accusamus exercitatione.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mb-3 mt-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Samuel Hardy</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, possimus? Quam pariatur nam officia accusantium nemo eos excepturi accusamus exercitatione.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 mb-3 mt-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                            <h5 className="mb-0">Tom Sunderland</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, possimus? Quam pariatur nam officia accusantium nemo eos excepturi accusamus exercitatione.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;