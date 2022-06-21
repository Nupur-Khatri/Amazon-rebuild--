import React from 'react'
import Header from '../components/Header';
import CheckoutProduct from '../components/CheckoutProduct';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <div className='bg-gray-100'>
      <Header/>

      <main className="lg:flex max-w-screen-lg mx-auto">
         {/* Left Hand Section */}
        <div className='flex-grow m-5 shadow-sm '>
          <Image src="https://links.papareact.com/ikj"
            width={700}
            height={250}
            objectFit="contain"
          />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
          <h1 className='text-3xl border-b pb-4'>
            {items.length === 0 
            ? "Your Amazon Basket is empty."
            : "Shopping Basket" }
          </h1>

          {items.map((items, i) => {
            <CheckoutProduct 
              key={i}
              id={items.id} 
              title={items.title} 
              price={items.price}
              description={items.description}
              category={items.category}
              image={items.image}
              hasPrime={items.hasPrime}
            />
          })}
          </div>
        </div>
          

         {/* Right Hand Section */}
      </main>
    </div>
  );
}

export default Checkout;