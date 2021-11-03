import React from 'react';
//import { useFilterContext } from '../context/FilterContext';
import { useProductsContext } from '../context/ProductContext';
import { Link, useParams } from 'react-router-dom';
//import Loading from '../components/Loading';
import Error from '../components/Error'
import styles from '../styles/ProductsbyCategory.module.css'

const ProductsbyCategory = () => {

  const {slug} = useParams();
  const {products, products_error} = useProductsContext();
  //const {categories, categories_loading, categories_error} = useFilterContext();
  console.log(slug);

  if (products_error) {
    return <Error type='products' />;
  }



  return (
    <section id="filterbycategory">
          <div className={styles["list__container"]}>
          {
            products
            .filter(product => 
              product.data.category.slug.includes(slug.toLowerCase().replace(/\s+/g, "")))
            .map(product => 
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
       
    
            <div className={styles.pagination}>
                <a href="/">&laquo;</a>
                <a className={styles["active"]} href="/">1</a>
                <a href="/">2</a>
                <a href="/">3</a>
                <a href="/">&raquo;</a>
            </div>
       </div>
    </section>
  )

}

export default ProductsbyCategory;
