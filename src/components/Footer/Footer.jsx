import React from 'react';
import './Footer.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { BsFacebook } from 'react-icons/bs';
import { AiFillYoutube, AiFillInstagram, AiTwotoneMail } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import logo from '../../assets/logo.svg'

const Footer = () => {
     return (
          <div className='mt-5 pt-5'>
               <footer className="footer container-fluid mt-5 sticky-lg-top py-5">
                    <div className="container p-2">
                         <div className="row d-flex">
                              <div className="col-lg-3">
                                   <div className="skk mx-lg-3">
                                        <div className="sm">
                                             <img src={logo} alt="" />
                                        </div>
                                        <p className="text-justify mt-4 text-light ms-2">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                                        <div className=" d-flex mt-4">
                                             <div className="sa">
                                                  <div className="followUs">
                                                       <a href="https://www.facebook.com/smsarzil.muntaha" target='_blank'>
                                                            <BsFacebook />

                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa">
                                                  <div className="followUs">
                                                       <a href="https://www.instagram.com/" target='_blank'>
                                                            <AiFillInstagram />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa">
                                                  <div className="followUs">
                                                       <a href="https://www.youtube.com/channel/UCJOmN86g6tWuxer1_J5wuaQ" target='_blank'>
                                                            <AiFillYoutube />
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="sa ">
                                                  <div className="followUs">
                                                       <a href="#">
                                                            <SiGmail />
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3">
                                   <div className="mx-lg-3 ps-lg-5">
                                        <div>
                                             <h4 className="text-info mt-4 ms-3">About</h4>
                                        </div>
                                        <ul className="list-unstyled mt-4 linkStyle">
                                             <li>
                                                  <ActiveLink to="/">Home</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/service">Service</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/contact">Contact</ActiveLink>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-lg-3">
                                   <div className="ps-lg-3">
                                        <div>
                                             <h4 className="text-info mt-4 ms-3">Company</h4>
                                        </div>
                                        <ul className="list-unstyled mt-4 linkStyle">
                                             <li>
                                                  <ActiveLink to="/carDoctor">Why Car Doctor</ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/about">About</ActiveLink>
                                             </li>
                                        </ul>

                                   </div>
                              </div>
                              <div className="col-lg-3">
                                   <div className="ps-lg-3">
                                        <div>
                                             <h4 className="text-info mt-4 ms-3">Support</h4>
                                        </div>
                                        <ul className="list-unstyled mt-4 linkStyle">
                                             <li>
                                                  <ActiveLink to="/support">Support Center
                                                  </ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/feedback">Feedback
                                                  </ActiveLink>
                                             </li>
                                             <li>
                                                  <ActiveLink to="/accesbility">Accesbility</ActiveLink>
                                             </li>
                                        </ul>

                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>


               <div className="container mt-3">
                    <p className="text-left">
                         &copy; Sarzil Muntaha @ <span className="text-info">Azmira Akhtar</span>
                         <span className="text-info float-end">
                              Back to top
                         </span>
                    </p>
               </div>
          </div>
     );
};

export default Footer;