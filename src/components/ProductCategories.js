import React from 'react';
import dataCategories from '../mocks/en-us/product-categories.json';
import  styles from '../styles/ProductCategories.module.css'

const ProductCategories = () => {

    const gridCategories = dataCategories.results;

    return (
        <section>
            <h2>Our departments</h2>
               <div className={styles["grid__container"]}>
               {gridCategories.map(category => 
                   <div className={styles["grid__item"]} key={category.id}>
                       <img src={category.data.main_image.url} alt={category.data.name} />
                       <p>{category.data.name}</p>
                   </div>    
                
            
            )}
            
        </div>
        </section>
        
    )
}

export default ProductCategories;