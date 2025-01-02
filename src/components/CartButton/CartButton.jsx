import React from "react";
import { BsCart } from "react-icons/bs";
import "./CartButton.css";

function CartButton() {
  return (
    <button type="button" className="cart_button">
      <BsCart />
      <span className="cart_quantity">3</span>
    </button>
  );
}

export default CartButton;
