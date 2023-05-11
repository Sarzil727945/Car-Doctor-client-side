import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import img from '../../assets/images/login/login.svg'
import { AiFillEyeInvisible, AiOutlineGithub, AiFillEye } from 'react-icons/ai'
// import { ImGoogle2 } from 'react-icons/im'
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
     const [error, setError] = useState('')
     const [success, setSuccess] = useState('')
     const [passwordShown, setPasswordShown] = useState(false);
     // const [user, setUser] = useState('')
     // const navigate = useNavigate()

     // const location = useLocation()

     // const from = location.state?.from?.pathname || '/';

     // const { signIn, googlSignIn, githubSingIn, resetPassword } = useContext(AuthContext)

     // const emailRef = useRef()

     // passwordShown function start 
     // passwordShown function start 
     const [passwordIcon, setPasswordIcon] = useState(false)
     const [conformPasswordIcon, setConformPasswordIcon] = useState(false)

     const [conformPasswordShown, setConformPasswordShown] = useState(false);

     const togglePassword = () => {
          setPasswordShown(!passwordShown);
          setPasswordIcon(!passwordIcon)
     };
     const toggleConformPassword = () => {
          setConformPasswordShown(!conformPasswordShown);
          setConformPasswordIcon(!conformPasswordIcon)
     }
     // passwordShown function end
     // passwordShown function end

     // main form part start 
     const handelRegister = (event) => {
          event.preventDefault();
          setError('')
          setSuccess('')
          const form = event.target;
          const name = form.name.value;
          const photoUrl = form.photoUrl.value;
          const email = form.email.value;
          const password = form.password.value;
          const conformPassword = form.conformPassword.value;

          // // Signed in part start
          // signIn(email, password)
          //      .then((userCredential) => {
          //           const currentUser = userCredential.user;
          //           form.reset()
          //           navigate(from, { replace: true })
          //           setSuccess('Sign in successFull')
          //      })
          //      .catch((error) => {
          //           const errorMessage = error.message;
          //           setError(errorMessage)
          //      });
          // // Signed in part end
     }
     // main form part end

     // // handelGoogleRegister part start
     // const handelGoogleRegister = () => {
     //      googlSignIn()
     //           .then((result) => {
     //                const user = result.user;
     //                setUser(user)
     //                navigate(from, { replace: true })
     //           }).catch((error) => {
     //                const errorMessage = error.message;
     //                setError(errorMessage)
     //           });
     // }
     // // handelGoogleRegister part end

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

     // // Reset Password part start 
     // const handelResetPassword = () => {
     //      const email = emailRef.current.value;
     //      if (!email) {
     //           alert('Please provide your email')
     //           return
     //      }

     //      resetPassword(email)
     //           .then(() => {
     //                alert('Please check you email')
     //           })
     //           .catch((error) => {
     //                const errorMessage = error.message;
     //                setError(errorMessage)
     //           });

     // }
     // // Reset Password part end

     // console.log(user);
     return (
          <div className='mt-5 py-lg-5 row container'>
               <div className=' col-lg-6 my-lg-5'>
                    <img className=' img-fluid w-100 imgHeight' src={img} alt="" />
               </div>
               <div className=' col-lg-6'>
                    <div className=' my-lg-5'>
                         <Form onSubmit={handelRegister}>
                              <div className='border rounded px-5 py-4'>
                                   <h1 className='text-center my-3'>Register </h1>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name='name' placeholder="Name" required />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Photo URL</Form.Label>
                                        <Form.Control type="text" name='photoUrl' placeholder="Photo URL" />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name='email'
                                             placeholder="Email" required
                                        />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicPassword">
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

                                   <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Conform Password</Form.Label>
                                        <div className='parentPasswordShow position-relative'>
                                             <div>
                                                  <Form.Control type={conformPasswordShown ? "text" : "password"} name='conformPassword' placeholder="Conform Password" required />
                                             </div>
                                             <div className='passwordShow position-absolute'>
                                                  <p className=' fs-5' onClick={toggleConformPassword}>{
                                                       conformPasswordIcon ? <AiFillEye /> : <AiFillEyeInvisible />
                                                  }</p>
                                             </div>
                                        </div>
                                   </Form.Group>

                                   <p className=' text-danger'>{error}</p>
                                   <p className=' text-success'>{success}</p>
                                   <div className="d-grid gap-2 mt-4">
                                        <Button variant="danger" type="submit">
                                             <b>Sign Up</b>
                                        </Button>
                                        {/* <div>
                                        <small>Create your new Password?</small>
                                        <button onClick={handelResetPassword} className='btn btn-link'>Reset Password</button>
                                   </div> */}
                                        {/* <div className="d-grid gap-2 mt-3 mb-2 col-9 mx-auto">
                                        <Button onClick={handelGoogleRegister} className="btn btn-success" type="button"> <span className=' fs-5 text-light'><ImGoogle2 /></span> Sign-in with Google</Button>
                                   </div> */}
                                        {/* <div className="d-grid gap-2 mb-3 col-9 mx-auto">
                                        <Button onClick={handelGitHubRegister} className="btn btn-dark" type="button"> <span className=' fs-5 text-light'><AiOutlineGithub /></span> Sign-in with GitHub</Button>
                                   </div> */}
                                        <div className=' my-3 text-center'>
                                             <small className='me-1 fs-6'>Have an account? </small>
                                             <Link to='/login' className=' text-decoration-none text-danger fw-semibold'>Login</Link>
                                        </div>
                                   </div>
                              </div>
                         </Form>
                    </div>
               </div>
          </div>
     );
};

export default Register;