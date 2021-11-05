import React from 'react';
import { useCartContext } from '../context/CartContext';
//import {formatPrice} from '../utils/helpers';
import QuantityBtn from './QuantityBtn';
import { FiTrash } from 'react-icons/fi';
import styles from '../styles/CartItem.module.css';

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
     <section>
      <div className={styles.title}>
        <img src={image} alt={name} />
        <div>
          <h5 className={styles.name}>{name}</h5>
          <h5 className={styles["price__small"]}>{price}</h5>
        </div>
      </div>
      <h5 className={styles.price}>{price}</h5>
      <QuantityBtn amount={amount} increase={increase} decrease={decrease} />
      <h5 className={styles.subtotal}>{(price * amount)}</h5>
      <button type='button' className={styles["remove__btn"]} onClick={() => removeItem(id)}>
        <FiTrash />
      </button>
     </section>
  )
}

export default CartItem;