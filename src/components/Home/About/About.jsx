import React from 'react';
import './About.css'
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
     return (
          <div>
               <div className='row mt-5 pt-lg-5'>
                    <div className="col-lg-6 ">
                         <div>
                              <div>
                                   <img className=' img-fluid imgPerson' src={person} alt="" />
                              </div>
                              <div>
                                   <img className=' img-fluid imgParts' src={parts} alt="" />
                              </div>
                         </div>
                    </div>
                    <div className="col-lg-6 pTag">
                         <div>
                              <h5 className=' fw-bold text-danger'>About Us</h5>
                              <h2 className=' col-lg-6 fs-1 my-4'>We are qualified & of experience in this field</h2>
                              <div className=' col-lg-8 py-2'>
                                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                   <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                              </div>
                              <button type="button" className="btn btn-danger mt-4">Get More Info</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default About;