import React, { useState } from 'react';
//import { useFilterContext } from '../context/FilterContext';
import { useProductsContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error'
import styles from '../styles/SearchProducts.module.css';

const SearchProducts = () => {
    const {products, products_loading, products_error} = useProductsContext();

    if (products_loading) {
        return <Loading />
    }
    
    if (products_error) {
        return <Error type='products' />;
    }

    return (
        <section>
            <h2>New collection</h2>
               <div className={styles["product__container"]}>
                {products &&
                    products.results.map((item, idx) => {
                        return (
                        <div className={styles["product__item"]} key={item.id}>    
                            <div className={styles["product__image"]}>
                                <img src={item.data.mainimage.url} alt={item.data.name}  />
                            </div>
                            <div className={styles["product__title"]}>{item.data.name}</div>
                            <div className={styles["product__price"]}>$ {item.data.price}</div>
                                    
                        </div>
                        )
                    })}
                </div>
        <div className={styles["view__products"]}><a href="/products"><span>View all our products</span></a></div>
        </section>
    )
}

export default SearchProducts;