import React from "react";
import { Link } from 'react-router-dom';
import styles from '../styles/ProductCard.module.css';

const ProductCard = (product) => {

    return (
      <div className={styles["list__item"]} key={product.id}>
        <div className={styles["list__image"]}>
          <Link to={`/products/${product.id}`}>
            <img src={product.data.mainimage.url} alt={product.data.name}  />
          </Link>
        </div>
        <div className={styles["list__slug"]}>{product.data.category.slug}</div> 
        <div className={styles["list__title"]}>{product.data.name}</div>
        <div className={styles["list__price"]}>$ {product.data.price}</div>  
    </div>
    )
}

export default ProductCard;