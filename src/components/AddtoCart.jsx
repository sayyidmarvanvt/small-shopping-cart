import React from "react";
import AddedProduct from "./AddedProduct";

const AddtoCart = ({ open, cart, handleRemove, handleAdd, setOpen }) => {
  return (
    <>
      {open ? (
        <div className="w-[320px] bg-[#353432]  text-[#eee] fixed top-0  right-0 bottom-0 grid grid-rows-[70px_1fr_50px]">
          <h1 className="m-0 p-[20px] font-normal text-2xl">Shopping Cart</h1>
          <AddedProduct
            cart={cart}
            handleRemove={handleRemove}
            handleAdd={handleAdd}
          />
          <div className="grid grid-cols-2 bg-[#eee] text-black cursor-pointer">
            <button onClick={() => setOpen(!open)} className="border-none">
              CLOSE
            </button>
            <button className="bg-[#E8BC0E] border-none">CHECK OUT</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddtoCart;
