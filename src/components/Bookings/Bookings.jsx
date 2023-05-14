import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import SubBookings from './SubBookings/SubBookings';

const Bookings = () => {
     const { user } = useContext(AuthContext);
     const [bookings, setBookings] = useState([])

     const url = `https://mren-server-project.vercel.app/bookings?email=${user.email}`;
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => setBookings(data))
     }, []);

     // server data delete start
     const handelDelete = (id) => {
          const proceed = confirm('are you sure')
          if (proceed) {
               fetch(`https://mren-server-project.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
               })
                    .then(res => res.json())
                    .then(data => {
                         console.log(data)
                         if (data.deletedCount > 0) {
                            alert('delete successful');
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining);
                         }
                    })

          }
     }
     // server data delete end

     // server data update start
     const handelUpdate = (id) =>{
          fetch(`https://mren-server-project.vercel.app/bookings/${id}`, {
               method: 'PATCH',
               headers:{
                    'content-type':'application/json'
               },
               body: JSON.stringify({status: 'confirm'})
          })
          .then(res => res.json())
          .then(data =>{
               console.log(data);
               if (data.modifiedCount > 0) {
                   const remaining = bookings.filter(booking => booking._id !== id);
                   const updated = bookings.find(booking => booking._id === id);
                   updated.status= 'confirm'
                   const newBookings = [updated, ...remaining];
                   setBookings(newBookings);
               }
          })
     }
     // server data update end

     return (
          <div className='mt-5 pt-5 container'>
               <h1 className='mt-5'>booking</h1>

               <section>
                    <div className="row my-5 bg-light p-4 fw-semibold">
                         <div className="col-lg-6">PRODUCT</div>
                         <div className="col-lg-2">PRICE</div>
                         <div className="col-lg-2">DATE</div>
                         <div className="col-lg-2">STATUS</div>
                    </div>
                    {
                         bookings.map(data => <SubBookings
                              key={data._id}
                              data={data}
                              handelDelete={handelDelete}
                              handelUpdate={handelUpdate}
                         ></SubBookings>)
                    }
               </section>
          </div>
     );
};

export default Bookings;