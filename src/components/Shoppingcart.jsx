import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Product from "./Product";
import AddtoCart from "./AddtoCart";

const Shoppingcart = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleClick = (product) => {
    const exist = cart.find((cart) => cart.id === product.id);
    if (exist) {
      setCart(
        cart.map((cart) =>
          cart.id === product.id
            ? {
                ...exist,
                qty: exist.qty + 1,
                totalprice: (exist.qty + 1) * exist.price,
              }
            : cart
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1, totalprice: product.price }]);
    }
  };

  const handleRemove = (product) => {
    const exist = cart.find((cart) => cart.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((cart) => cart.id !== product.id));
    } else {
      setCart(
        cart.map((cart) =>
          cart.id === product.id
            ? {
                ...exist,
                qty: exist.qty - 1,
                totalprice: (exist.qty - 1) * exist.price,
              }
            : cart
        )
      );
    }
  };
  return (
    <>
      <div className="m-auto w-[900px] max-w-[90vw] text-center pt-[10px]">
        <div className="flex flex-row justify-between items-center py-[20px]">
          <div className="text-xl">PRODUCT LIST</div>
          <div className="relative">
            <MdOutlineShoppingCart
              onClick={() => setOpen(!open)}
              className=" w-[30px]  h-[20px] "
            />
            <span className="bg-red-500 h-[30px] w-[30px] rounded-full text-white absolute flex justify-center items-center top-[50%] -right-[15px] ">
              {cart.length}
            </span>
          </div>
        </div>
        <Product 
        data={data} 
        handleClick={handleClick}/>
      </div>
        <AddtoCart 
        open={open} 
        setOpen={setOpen}
        cart={cart} 
        handleRemove={handleRemove}
        handleAdd={handleClick}/>
     
    </>
  );
};

export default Shoppingcart;
