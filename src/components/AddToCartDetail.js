import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import QuantityBtn from "./QuantityBtn";
import styles from "../styles/AddToCartDetail.module.css";

const AddToCartDetail = ({ product }) => {
  const { addToCartFromDetail } = useCartContext();
  const { id, stock } = product;
  const [amount, setAmount] = useState(1);
  console.log(product);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <>
      <div className={styles["add__container"]}>
          <QuantityBtn
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
        
        <Link
          to="/cart"
          className={styles["detail__cart"]}
          onClick={() => addToCartFromDetail(id, amount, product)}
        >
          Add to cart
        </Link>
      </div>
    </>
  );
};

export default AddToCartDetail;

