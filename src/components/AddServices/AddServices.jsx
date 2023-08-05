import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import bannerImg from '../../assets/images/banner/4.jpg'

const AddServices = () => {
     const navigate = useNavigate();
     const { user } = useContext(AuthContext)

     const formHandel = (event) => {

          event.preventDefault();
          const form = event.target;
          const img = form.img.value;
          const title = form.serviceName.value;
          const price = form.servicePrice.value;
          const serviceType = form.serviceType.value;
          const email = user?.email;
          const description = form.message.value;

          const add = {
               title,
               price,
               email,
               serviceType,
               description,
               img,
          }
          
          // server data post 
          fetch('https://car-doctor-server-side-sarzil727945.vercel.app/server', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(add)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         Swal.fire({
                              title: 'Success!',
                              text: 'Your Add Services Success !!',
                              icon: 'success',
                              confirmButtonText: 'Ok'
                         })
                    }
                    navigate('/')
               })
          form.reset();
     }
     return (
          <div className='mt-5 pt-5 container '>
               <div className=' py-5'>
                    <img className='w-100 checkOutStyle rounded' src={bannerImg} alt="" />
               </div>
               <div className='checkoutForm rounded'>
                    <form className='p-lg-5 mx-lg-5' onSubmit={formHandel}>
                         <div className="row px-4 pt-4">
                              <div className="col-lg mb-2">
                                   <input type="text" name='serviceName' className="form-control py-2" placeholder="Service Name" aria-label="Service Name" required />
                              </div>
                              <div className="col-lg">
                                   <input type="text" name='servicePrice' className="form-control py-2" placeholder="Service Price" aria-label="Service Price" required />
                              </div>
                         </div>
                         <div className="row px-4 py-4">
                              <div className="col-lg mb-2">
                                   <input type="text" name='img' className="form-control py-2" placeholder="Text here" aria-label="Text here" required />
                              </div>
                              <div className="col-lg">
                                   <input type=" text" name='serviceType' className="form-control py-2" placeholder="Service Type" aria-label="Service Type" required />
                              </div>
                         </div>
                         <div className="mb-3 px-4 pb-3">
                              <textarea name='message' className="form-control py-2" id="validationTextarea" placeholder="Your Message" required rows="5"></textarea>
                         </div>
                         <div className='px-4'>
                              <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold">Submit</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default AddServices;