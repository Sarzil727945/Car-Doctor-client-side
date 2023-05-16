import React from 'react';
import './SubBookings.css'
import { Button } from 'react-bootstrap';
import { TiDelete } from 'react-icons/ti'
import Swal from 'sweetalert2';

const SubBookings = ({ data, handelDelete, handelUpdate }) => {
     const { img, title, price, date, _id, status } = data;

     return (
          <div>
               <div className='row align-items-center justify-content-end mb-3'>
                    <div className="col-lg-6 d-flex align-items-center">
                         <button onClick={() => handelDelete(_id)} className='subButton'>
                              <span className=' fs-1 me-4'><TiDelete /></span>
                         </button>
                         <div className='me-4 col-lg-6'>
                              <img className=' img-fluid rounded' src={img} alt="" />
                         </div>
                         <div className=' fw-semibold'>
                              <h4>{title}</h4>
                              <p className=' text-muted'>Color : Green</p>
                         </div>
                    </div>
                    <div className="col-lg-2 fw-semibold">{price}</div>
                    <div className="col-lg-2 fw-semibold">{date}</div>
                    <div className="col-lg-2 fw-semibold">
                         {
                              status === 'confirm' ? <span className=' fw-bold text-danger'>Confirmed</span> :
                              <button onClick={() => handelUpdate(_id)} type="button" className="btn btn-danger">Please Confirmed</button>
                         }
                    </div>
               </div>
          </div>
     );
};

export default SubBookings;