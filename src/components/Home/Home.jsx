import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Service from './Service/Service';

const Home = () => {
     return (
          <div className='mt-5 pt-5'>
               <section className=' pt-5 container'>
                    <Banner></Banner>
                    <About></About>
                    <Service></Service>
               </section>
          </div>
     );
};

export default Home;