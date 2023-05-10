import React, { useContext } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLink from '../ActiveLink/ActiveLink';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import logo  from '../../assets/logo.svg'
// import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
     // const { user, logOut } = useContext(AuthContext)

     // // logOut part start
     // const handelLogOut = () => {
     //      logOut()
     //           .then(() => {
     //                // Sign-out successful.
     //           })
     //           .catch((error) => {
     //                // An error happened.
     //           });
     // }
     // // logOut part end

     return (
          <div className='fixed-top'>
               <Navbar bg="light" expand="lg" className=' mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4'>
                              <img src={logo} alt="" />
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="mx-auto my-2 my-lg-0"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <ActiveLink to="/">Home</ActiveLink>
                                   <ActiveLink to="/about">About</ActiveLink>
                                   <ActiveLink to="/services">Services</ActiveLink>
                                   <ActiveLink to="/blog">Blog</ActiveLink>
                                   <ActiveLink to="/contact">Contact</ActiveLink>
                              </Nav>
                              <Form className=' d-flex align-content-center text-center'>
                               <div className='fs-3 me-3'><HiOutlineLockClosed/></div>
                               <div className='fs-3 me-3'><BiSearch/></div>
                               <div className='mt-lg-1'><button type="button" className="btn btn-outline-danger py-2 px-3">Appointment</button></div>
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;