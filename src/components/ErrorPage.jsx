import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='my-2'>
      <div className='container px-5 mx-auto my-8'>
        <div className=' text-center'>
          <img src="https://img.freepik.com/free-vector/website-faq-section-user-help-desk-customer-support-frequently-asked-questions-problem-solution-quiz-game-confused-man-cartoon-character_335657-1602.jpg?w=740&t=st=1681273894~exp=1681274494~hmac=51354aabcc78c82f32be13e195341bce57be123fa763f2fd40881807efcdba71" className='w-25' alt="" />
          <h1 className='display-2 fw-bold text-danger'>
            <span>Error</span> {status || 'status code not available'}
          </h1>
          <h3 className=' font-semibold mb-8'>
            {error?.message}
          </h3>
         <Button className='bg-info mt-3'>
         <Link
            to='/'
            className='text-decoration-none'
          >
            Back to HomePage
          </Link>
         </Button>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
