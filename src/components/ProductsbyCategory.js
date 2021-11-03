import React from 'react';
//import { useFilterContext } from '../context/FilterContext';
import { useProductsContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';
//import Loading from '../components/Loading';
import Error from '../components/Error'
import ProductCard from '../components/ProductCard'
import styles from '../styles/ProductsbyCategory.module.css'

const ProductsbyCategory = () => {

  const {slug} = useParams();
  const {products, products_error} = useProductsContext();
  //const {categories, categories_loading, categories_error} = useFilterContext();
  //console.log(slug);

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
                <ProductCard key={product.id} {...product} />
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
