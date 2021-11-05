import React from 'react';
import styles from '../styles/QuantityBtn.module.css';
import {FiMinus, FiPlus} from 'react-icons/fi';

const QuantityBtn = ({increase, decrease, amount}) => {

    return (
    <div className={styles.quantity}>
      <button type='button' onClick={decrease}>
        <FiMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' onClick={increase}>
        <FiPlus />
      </button>
    </div>
    )
}

export default QuantityBtn;