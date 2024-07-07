"use client";

import React, { useState } from "react";
import { Tables } from "../../../types/supabase";

interface AddCartProps {
  product: Tables<"products">;
}

const AddCart = ({ product }: AddCartProps) => {
  const [count, setCount] = useState(1);

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const AddBasket = () => {
    console.log({ product, count });
  };

  return (
    <>
      <div>
        <div>수량 : </div>
        <button onClick={minusCount}>-</button>
        <span>{count}</span>
        <button onClick={plusCount}>+</button>
        <button onClick={AddBasket}>장바구니 추가</button>
      </div>
    </>
  );
};

export default AddCart;
