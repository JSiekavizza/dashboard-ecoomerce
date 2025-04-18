import React from "react";

const Card = (props) => {
  const { img, tittle, description, price, inventory } = props;

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-lg flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        className="w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full"
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">${price}</span>
      <p className="text-gray-600">{inventory}</p>
    </div>
  );
};

export default Card;
