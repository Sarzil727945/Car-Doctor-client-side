import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import img from '../../assets/images/login/login.svg'
import { AiFillEyeInvisible, AiOutlineGithub, AiFillEye } from 'react-icons/ai'
import {ImGoogle2} from 'react-icons/im'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
     const [error, setError] = useState('')
     const [success, setSuccess] = useState('')
     const [passwordShown, setPasswordShown] = useState(false);
     const [email, setEmail] = useState("")
     const [emailError, setEmailError] = useState('')
     const [user, setUser] = useState('')

     const {signIn, resetPassword, googlSignIn } = useContext(AuthContext)
     const navigate = useNavigate()
     const emailRef = useRef();

     // passwordShown function start
     const [passwordIcon, setPasswordIcon] = useState(false)

     const togglePassword = () => {
          setPasswordShown(!passwordShown);
          setPasswordIcon(!passwordIcon)
     };
     // passwordShown function end

     // main form part start 
     const handelLogin = (event) => {
          event.preventDefault();
          setError('')
          setSuccess('')
          const form = event.target
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);

          // Signed in part start
          signIn(email, password)
               .then((userCredential) => {
                    const currentUser = userCredential.user;
                    form.reset()
                    setEmail('')
                    // navigate(from, { replace: true })
                    setSuccess('Sign in successFull')
                    if (currentUser) {
                         Swal.fire({
                              title: 'Success!',
                              text: 'Login Success !!',
                              icon: 'success',
                              confirmButtonText: 'Ok'
                         })
                    }
               })
               .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
               });
          // Signed in part end
     }
     // main form part end

     // valid email function start 
     const handelEmail = (event) => {
          const emailInput = event.target.value
          if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
               setEmailError('Please provide a valid email')
          }
          else {
               setEmailError('')
          }
          setEmail(emailInput)
     }
     // valid email function end

     // handelGoogleRegister part start
     const handelGoogleRegister = () => {
          googlSignIn()
               .then((result) => {
                    const user = result.user;
                    setUser(user)
                    // navigate(from, { replace: true })
               }).catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
               });
     }
     // handelGoogleRegister part end

     // handelGitHubRegister part start 
     // const handelGitHubRegister = () => {
     //      githubSingIn()
     //           .then((result) => {
     //                const user = result.user;
     //                setUser(user)
     //                navigate(from, { replace: true })
     //           }).catch((error) => {
     //                const errorMessage = error.message;
     //                setError(errorMessage)
     //           });
     // }
     // handelGitHubRegister part end

     // Reset Password part start 
     const handelResetPassword = () => {
          const email = emailRef.current.value;
          if (!email) {
               alert('Please provide your email')
               return
          }

          resetPassword(email)
               .then(() => {
                    alert('Please check you email')
               })
               .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
               });

     }
     // Reset Password part end

     // console.log(user);
     return (
          <div className='mt-5 py-lg-5 row container'>
               <div className=' col-lg-6 mt-lg-5 pt-lg-5 '>
                    <img className=' img-fluid w-100 imgHeight' src={img} alt="" />
               </div>
               <div className=' col-lg-6'>
                    <div className=' my-lg-5 pt-lg-5'>
                         <Form onSubmit={handelLogin}>
                              <div className='border rounded px-5 py-4'>
                                   <h1 className='text-center my-3'>Login </h1>

                                   <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name='email'
                                             defaultValue={email}
                                             onChange={handelEmail}
                                             placeholder="Email" required
                                             ref={emailRef}
                                        />
                                   </Form.Group>

                                   {
                                        emailError && <span className=' text-danger pb-5'>{emailError}</span>
                                   }

                                   <Form.Group className="my-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <div className='parentPasswordShow position-relative'>
                                             <div>
                                                  <Form.Control type={passwordShown ? "text" : "password"} name='password' placeholder="Password"
                                                       required />
                                             </div>
                                             <div className='passwordShow position-absolute'>
                                                  <p className=' fs-5' onClick={togglePassword} >{
                                                       passwordIcon ? <AiFillEye /> : <AiFillEyeInvisible />
                                                  }</p>
                                             </div>
                                        </div>
                                   </Form.Group>

                                   <p className=' text-danger'>{error}</p>
                                   <p className=' text-success'>{success}</p>
                                   <div className="d-grid gap-2 mt-4">
                                        <Button variant="danger" type="submit">
                                             <b>Sign In</b>
                                        </Button>
                                        <div>
                                        <small>Create your new Password?</small>
                                        <button onClick={handelResetPassword} className='btn btn-link'>Reset Password</button>
                                   </div>
                                        <div className="d-grid gap-2 mt-3 mb-2 col-9 mx-auto">
                                        <Button onClick={handelGoogleRegister} className="btn btn-success" type="button"> <span className=' fs-5 text-light'><ImGoogle2 /></span> Sign-in with Google</Button>
                                   </div>
                                        {/* <div className="d-grid gap-2 mb-3 col-9 mx-auto">
                                        <Button onClick={handelGitHubRegister} className="btn btn-dark" type="button"> <span className=' fs-5 text-light'><AiOutlineGithub /></span> Sign-in with GitHub</Button>
                                   </div> */}
                                        <div className=' my-3 text-center'>
                                             <small className='me-1 fs-6'>Have an account? </small>
                                             <Link to='/register' className=' text-decoration-none text-danger fw-semibold'>Register</Link>
                                        </div>
                                   </div>
                              </div>
                         </Form>
                    </div>
               </div>
          </div>
     );
};

export default Login;