import React, { useContext, useEffect, useState } from 'react';
import './CheckOut.css'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {

     const navigate = useNavigate();
     const { user } = useContext(AuthContext)
     const { id } = useParams();
     const [carData, setCarData] = useState([]);

     useEffect(()=>{
          const carData = async () => {
               const chefData = await fetch('https://car-doctor-server-side-sarzil727945.vercel.app/server')
               const chef = await chefData.json()
     
               if (id) {
                    const foundCar = chef.find(dt => dt?._id === id)
                    setCarData(foundCar)
               }
     
          }
          carData()
     }, [])

     console.log(carData);
     const { _id, img, price, title} = carData;

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
          fetch('https://car-doctor-server-side-sarzil727945.vercel.app/bookings', {
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
               navigate('/bookings')

          })

          form.reset();
         
     }

     return (
          <div className='mt-5 pt-5 container '>
               <div className=' py-5'>
                    <img className='w-100 checkOutStyle rounded' src={img} alt="" />
               </div>
               <div className='checkoutForm rounded'>
                    <form className='p-lg-5 mx-lg-5' onSubmit={formHandel}>
                         <div className="row px-4 pt-4">
                              <div className="col-lg mb-2">
                                   <input type="text" name='fastName' className="form-control py-2" placeholder="First name" aria-label="First name" required />
                              </div>
                              <div className="col-lg">
                                   <input type="text" name='lastName' className="form-control py-2" placeholder="Last name" aria-label="Last name" required />
                              </div>
                         </div>
                         <div className="row px-4 py-4">
                              <div className="col-lg mb-2">
                                   <input type="number" name='number' className="form-control py-2" placeholder="Your Phone" aria-label="First name" required />
                              </div>
                              <div className="col-lg">
                                   <input type="date" name='date' className="form-control py-2" placeholder="date" aria-label="Last name" required />
                              </div>
                         </div>
                         <div className="mb-3 px-4 pb-3">
                              <textarea name='message' className="form-control py-2" id="validationTextarea" placeholder="Your Message" required rows="5"></textarea>
                         </div>
                         <div className='px-4'>
                              <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold">Order Confirm</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default CheckOut;