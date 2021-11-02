import React from 'react';
import { useProductsContext } from '../context/ProductContext';
import Error from './Error'
import styles from '../styles/SearchProducts.module.css';
import { Link, useLocation } from 'react-router-dom';
import Fuse from 'fuse.js';

const SearchProducts = () => {

  const search = useLocation().search;  
  const searchTerm = new URLSearchParams(search).get('q');
  const {products, products_error} = useProductsContext();
  
  
  if (products_error) {
      return <Error type='products' />;
  }
    
  
  const fuse = new Fuse(products, {
    keys: [
      'name',
      'description',
      'slugs'
    ],
    includeScore: true
  })
    //With fuse.js, a lower score means it's closer to an exact match
    const results = fuse.search(searchTerm);
    const productResults = results.filter(result => result.score < 0.5);


    return (
        <section>
            <h2>Search results</h2>
            <div className={styles["product__container"]}>
              {productResults.length === 0 ?
              <h3>No products matching your search.</h3>
              :
              productResults.map(product => 
                <div className={styles["product__item"]} key={product.item.id}>
                <div className={styles["product__image"]}>
                  <Link to={`/products/${product.item.id}`}>
                    <img src={product.item.data.mainimage.url} alt={product.item.data.name}  />
                  </Link>
                </div>
                <div className={styles["product__slug"]}>{product.item.data.category.slug}</div> 
                <div className={styles["product__title"]}>{product.item.data.name}</div>
                <div className={styles["product__price"]}>$ {product.item.data.price}</div>
                  
              </div>
    
              )
            }
            
            </div>
          
           
       
        </section>
    )
}

export default SearchProducts;