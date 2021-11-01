import React, {useState} from 'react';
import { useProductsContext } from '../context/ProductContext';
import Loading from './Loading';
import Error from './Error'
import styles from '../styles/SearchProducts.module.css';
import { FaSearch } from 'react-icons/fa';
//import mockdata from '../mocks/es-mx/products.json'
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';

const SearchProducts = () => {
    const {products, products_loading, products_error} = useProductsContext();
    const [query, updateQuery] = useState('');
    //console.log(products);
  
  if (products_loading) {
      return <Loading />
  }
  
  if (products_error) {
      return <Error type='categories' />;
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
    const results = fuse.search(query);
    let productResults = results.filter(result => result.score < 0.5);

  const onSearch = ({ currentTarget }) => {
    updateQuery(currentTarget.value);
  }

  const SearchTerm = () => {
      
      console.log(productResults);
      console.log(productResults.length);
  }


    return (
        <section>
            <h2>Search our products</h2>
            <form action="#" className={styles["search-form"]}>
                <input type="text" value={query} onChange={onSearch} className={styles["search-data"]} 
                placeholder="Search"  />
                <button onClick={SearchTerm} type="submit"><FaSearch/></button>
            </form>

            <div className={styles["product__container"]}>
              {productResults.length === 0 ?
              ""
              :
              productResults.map(product => 
                <div className={styles["product__item"]} key={product.item.id}>
                <div className={styles["product__image"]}>
                  <Link to={`/products/${product.item.id}`}>
                    <img src={product.item.data.main_image.url} alt={product.item.data.name}  />
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