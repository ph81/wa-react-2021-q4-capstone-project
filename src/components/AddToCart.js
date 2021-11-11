import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useCartContext } from "../context/CartContext";
import QuantityBtn from "./QuantityBtn";
import styles from "../styles/AddToCart.module.css";

const AddToCart = ({ product, showQuantity }) => {
  const { addToCart } = useCartContext();
  const { id, stock } = product;
  const [amount, setAmount] = useState(1);

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
        {showQuantity ? (
          <QuantityBtn
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
        ) : (
          ""
        )}
        <Link
          to="/cart"
          className={styles["list__cart"]}
          onClick={() => addToCart(id, amount, product)}
        >
          Add to cart
        </Link>
      </div>
    </>
  );
};

export default AddToCart;

AddToCart.propTypes = {
  product: PropTypes.array,
  showQuantity: PropTypes.bool,
};
