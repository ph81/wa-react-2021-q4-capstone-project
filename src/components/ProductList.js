import React, { useEffect, useState } from 'react'
import data from '../mocks/es-mx/products.json'
import dataFilter from '../mocks/es-mx/product-categories.json';
import styles from '../styles/ProductList.module.css'


const ProductList = () => {


    const categories = dataFilter.results;
    const productList = data.results;

    // setting up filter logic
    const [filterArray, setFilterArray] = useState([]);
    const [products, setProducts] = useState('');

    const onChangeHandler = (id) => {
      filterArray.includes(id)
        ? setFilterArray(filterArray.filter(x => x !== id))
        : setFilterArray([...filterArray, id]);
    };
   

    useEffect(() => {
      setProducts(products);
    }, [products]);
  
    useEffect(() => {
      setProducts([]);
  
      console.log(filterArray);
  
      const filtered = productList.map((p) => ({
        ...p, filtered: p.data.category.id.includes(filterArray)
      }));
      //console.log(filtered);
      setProducts(filtered);
    }, [filterArray, productList]);

   
    return (
      <section id="filterbycategory">
        <div className={styles["filter__container"]}>
        {categories.map(category => 
            <div className={styles["filter__item"]} key={category.id}>
               <label>
                  <input type="checkbox" value={category.data.name} onChange={() => onChangeHandler(category.id)} />
                  {category.data.name}        
                </label>
            </div>    
      )}
      
        </div>
   
        <div className={styles["list__container"]}>
        {filterArray.length === 0 
		      ?
			      productList
            .map(product => 
              <div className={styles["list__item"]} key={product.id}>
                  
                <div className={styles["list__image"]}>
                  <img src={product.data.mainimage.url} alt={product.data.name}  />
                </div>
                <div className={styles["list__title"]}>{product.data.name}</div>
                <div className={styles["list__title"]}>{product.data.category.slug}</div>
                <div className={styles["list__price"]}>$ {product.data.price}</div>
                   
              </div>
            )
		      :
		       productList
		       .filter(product => product.data.category.id.includes(filterArray))
           .map(product => 
              <div className={styles["list__item"]} key={product.id}>
                  
                <div className={styles["list__image"]}>
                  <img src={product.data.mainimage.url} alt={product.data.name}  />
                </div>
                <div className={styles["list__title"]}>{product.data.name}</div>
                <div className={styles["list__title"]}>{product.data.category.slug}</div>
                <div className={styles["list__price"]}>$ {product.data.price}</div>
                   
              </div>
           )
		    }
       </div>
    </section>  
    )
}

export default ProductList;