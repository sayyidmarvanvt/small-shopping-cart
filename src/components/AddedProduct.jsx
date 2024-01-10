import React from "react";

const AddedProduct = ({ cart, handleRemove, handleAdd }) => {
  return (
    <div className="mb-2">
      {cart.map((cart, index) => (
        <div
          key={index}
          className="grid grid-cols-[70px_120px_50px_1fr] text-center items-center mb-2 even:bg-[#eee1] "
        >
          <div>
            <img src={cart.image} alt="product" className="w-full h-[70px]" />
          </div>
          <div className="line-clamp-1 ">{cart.title}</div>
          <div>${cart.totalprice}</div>
          <div className="flex justify-center">
            <span
              onClick={() => handleRemove(cart)}
              className="size-5 bg-[#eee] text-[#555] rounded-[50%]  flex items-center justify-center cursor-pointer"
            >
              -
            </span>
            <span className="size-5 text-[#eee] rounded-[50%]  flex items-center justify-center">
              {cart.qty}
            </span>
            <span
              onClick={() => handleAdd(cart)}
              className="size-5 bg-[#eee] text-[#555] rounded-[50%]  flex items-center justify-center cursor-pointer"
            >
              +
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedProduct;
