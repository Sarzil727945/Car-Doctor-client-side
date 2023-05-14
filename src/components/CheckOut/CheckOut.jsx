import React, { useContext } from 'react';
import './CheckOut.css'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {

     const { user } = useContext(AuthContext)
     const car = useLoaderData();
     const { _id, img, price, title} = car;

     const formHandel = (event) => {
          event.preventDefault();
          const form = event.target;
          const fastName = form.fastName.value;
          const lastName = form.lastName.value;
          const number = form.number.value;
          const email = user?.email;
          const date = form.date.value;
          const message = form.message.value;

          const order = {
               productId: _id,
               price: `$${price}`,
               fastName,
               lastName,
               number,
               email,
               date,
               message,
               img,
               title,
          }

          // server data post 
          fetch('http://localhost:5000/bookings', {
               method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(order)
          })
          .then(res=>res.json())
          .then(data=>{
               if (data.insertedId) {
                    Swal.fire({
                         title: 'Success!',
                         text: 'Your Order Success !!',
                         icon: 'success',
                         confirmButtonText: 'Ok'
                    }) 
               }
          })

          form.reset();
         
          console.log(order);

     }

     return (
          <div className='mt-5 pt-5 container '>
               <div className=' py-5'>
                    <img className='w-100 checkOutStyle rounded' src={img} alt="" />
               </div>
               <div className='checkoutForm rounded'>
                    <form className='p-lg-5 mx-lg-5' onSubmit={formHandel}>
                         <div class="row px-4 pt-4">
                              <div class="col-lg mb-2">
                                   <input type="text" name='fastName' class="form-control py-2" placeholder="First name" aria-label="First name" required />
                              </div>
                              <div class="col-lg">
                                   <input type="text" name='lastName' class="form-control py-2" placeholder="Last name" aria-label="Last name" required />
                              </div>
                         </div>
                         <div class="row px-4 py-4">
                              <div class="col-lg mb-2">
                                   <input type="number" name='number' class="form-control py-2" placeholder="Your Phone" aria-label="First name" required />
                              </div>
                              <div class="col-lg">
                                   <input type="date" name='date' class="form-control py-2" placeholder="date" aria-label="Last name" required />
                              </div>
                         </div>
                         <div class="mb-3 px-4 pb-3">
                              <textarea name='message' class="form-control py-2" id="validationTextarea" placeholder="Your Message" required rows="5"></textarea>
                         </div>
                         <div className='px-4'>
                              <button type="submit" class="btn btn-danger w-100 py-2 fw-semibold">Order Confirm</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default CheckOut;