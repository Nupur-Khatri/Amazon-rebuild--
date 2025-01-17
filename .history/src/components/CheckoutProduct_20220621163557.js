import React from 'react'
import Image from "next/image";

function CheckoutProduct({ 
    id, 
    title, 
    price,
    description, 
    category, 
    image, 
    hasPrime
}) {
  return (
    <div className='grid grid-cols-5'>
        <img src={item.image} height={200} width={200} objectFit="contain" />
    </div>
  );
}

export default CheckoutProduct