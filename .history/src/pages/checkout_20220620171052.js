import React from 'react'
import Header from '../components/Header';

function Checkout() {
  return (
    <div className='bg-gray-100'>
      <Header/>

      <main className="lg:flex max-w-screen-lg mx-auto">
         {/* Left Hand Section */}
        <div>
          <new Image src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div></div>

        </div>
          

         {/* Right Hand Section */}
      </main>
    </div>
  );
}

export default Checkout;