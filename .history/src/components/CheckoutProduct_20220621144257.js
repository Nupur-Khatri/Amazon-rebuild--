import React from 'react'
import Image from "next/image";

function CheckoutProduct({ id, title, price,description, category, image, hasPrime}) {
  return (
    <div className='grid grid-cols-5'>
        <Image
            src={image}
            height={2000}
            width={2000}
            objectFit="contain"
        />
    </div>
  )
}

export default CheckoutProduct