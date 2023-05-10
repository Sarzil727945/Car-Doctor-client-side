import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';

const Home = () => {
     return (
          <div className='mt-5 pt-5'>
               <section className=' pt-5 container'>
                    <Banner></Banner>
                    <About></About>
               </section>
          </div>
     );
};

export default Home;