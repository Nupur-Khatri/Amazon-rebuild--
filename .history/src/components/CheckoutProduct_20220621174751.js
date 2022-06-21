import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  return (
    <div className="grid grid-cols-6">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* MIddlesection  */}
      <div className="">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <div className="text-xs my-2 line-clamp-3">{description}</div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
