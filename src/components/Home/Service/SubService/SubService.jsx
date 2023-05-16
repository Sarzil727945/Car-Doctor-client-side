import React from 'react';
import './SubService.css'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const SubService = ({ data }) => {
     const {_id, img, title, price } = data
     return (
          <div className='col-lg-4 mb-3'>
               <div>
                    <Card className='mt-5'>
                         <Card.Body>
                              <img className=' w-100 rounded imageStyle' src={img} alt="" />
                              <h5 className="card-title  my-3 fw-semibold fs-3">{title}</h5>
                              <div className=' d-flex justify-content-between align-content-center'>
                              <Card.Title className=' text-danger'>Price: ${price}</Card.Title>
                                   <Button variant=" light">
                                        <Link to={`/checkout/${_id}`} className='text-decoration-none fs-5 text-danger' > <AiOutlineArrowRight/> </Link>
                                   </Button>
                              </div>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default SubService;