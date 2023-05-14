import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import SubBookings from './SubBookings/SubBookings';

const Bookings = () => {
     const { user } = useContext(AuthContext);
     const [bookings, setBookings] = useState([])

     const url = `http://localhost:5000/bookings?email=${user.email}`;
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => setBookings(data))
     }, []);

     // server data delete 
     const handelDelete = (id) => {
          const proceed = confirm('are you sure')
          if (proceed) {
               fetch(`http://localhost:5000/bookings/${id}`, {
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
                         ></SubBookings>)
                    }
               </section>
          </div>
     );
};

export default Bookings;