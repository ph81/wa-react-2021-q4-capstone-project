import React, {useState} from "react";
import { Link } from "react-router-dom";
import {useCartContext} from '../context/CartContext';
import QuantityBtn from './QuantityBtn';
import styles from '../styles/AddToCart.module.css';

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
        {showQuantity ? <QuantityBtn amount={amount} increase={increase} decrease={decrease} /> : ""} 
        <div className={styles["list__cart"]}>
        <Link to='/cart' className='btn' 
            onClick={() => addToCart(id, amount, product)}>
          Add to cart
        </Link>
        </div> 
        </>
    )
}

export default AddToCart;
