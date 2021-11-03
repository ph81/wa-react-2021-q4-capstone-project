import React, { useState } from 'react';
import { useFilterContext } from '../context/FilterContext';
import { useProductsContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import Loading from '../components/Loading';
import Error from '../components/Error'
import styles from '../styles/ProductListView.module.css'

const ProductListView = () => {
    const {products} = useProductsContext();
    const {categories, categories_loading, categories_error} = useFilterContext();
    // setting up filter logic
    const [filterArray, setFilterArray] = useState([]);



    const categoryFilter = (id) => {
        filterArray.includes(id)
        ? setFilterArray(filterArray.filter(x => x !== id))
        : setFilterArray([...filterArray, id]);
    };

  if (categories_loading) {
    return <Loading />
  }

  if (categories_error) {
    return <Error type='categories' />;
  }


   
      return (
        <section id="filterbycategory">
          
          <div className={styles["filter__container"]}>
            <h4>Filter by category</h4>
            <div className={styles["filter__category"]}>
              {categories.map(category => 
                  <div className={styles["filter__item"]} key={category.id}>
                    <label>
                        <input type="checkbox"
                        value={category.data.name} onChange={() => categoryFilter(category.id)} />
                        {category.data.name}        
                      </label>
                  </div> 
              )}
                   <div className={styles["filter__item"]}>
                    <label>
                        <input type="checkbox" value={''}
                         onChange={() => categoryFilter('')} />
                        Clear all filters        
                      </label>
                  </div>
            </div>
          </div>
     
        <div className={styles["list__container"]}>
          {filterArray.length === 0 
            ?
              products
              .map(product => 
                <ProductCard key={product.id} {...product} />
              )
            :
            products
            .filter(product => product.data.category.id.includes(filterArray))
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

export default ProductListView;