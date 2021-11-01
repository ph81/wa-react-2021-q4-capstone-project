import React, {useState} from 'react';
import { useProductsContext } from '../context/ProductContext';
import Loading from './Loading';
import Error from './Error'
import styles from '../styles/SearchProducts.module.css';
import { FaSearch } from 'react-icons/fa';
//import mockdata from '../mocks/es-mx/products.json'
import { Link } from 'react-router-dom';

const SearchProducts = () => {
    const {products, products_loading, products_error} = useProductsContext();
    console.log(products);
    const [searchTerm, setSearchTerm] = useState('');
    //const products = mockdata.results;
     // setting up filter logic
     const [filterArray, setFilterArray] = useState([]);
     const [isSearchDone, setSearchDone] = useState(false);

     const searchFilter = (searchTerm) => {
       filterArray.includes(searchTerm)
         ? setFilterArray(filterArray.filter(x => x !== searchTerm))
         : setFilterArray([...filterArray, searchTerm]);
       console.log(filterArray);
       setSearchDone(true);
     };

  
    if (products_error) {
        return <Error type='products' />;
    }

    const handleSearch = (e) => {
        //e.epreventDefault();
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    }


    return (
        <section>
            <h2>Search our products</h2>
            <form action="#" onSubmit={searchFilter} className={styles["search-form"]}>
                <input type="search" value={searchTerm} className={styles["search-data"]} 
                placeholder="Search" onChange={handleSearch} />
                <button type="submit"><FaSearch/></button>
            </form>

            <div className={styles["product__container"]}>
            {isSearchDone && filterArray.length === 0 
            ?
             <h3>No results matching your search </h3> 
            :
            products
            .filter(product => product.data.name.includes(filterArray))
            .map(product => 
              <div className={styles["product__item"]} key={product.id}>
                <div className={styles["product__image"]}>
                  <Link to={`/products/${product.id}`}>
                    <img src={product.data.mainimage.url} alt={product.data.name}  />
                  </Link>
                </div>   
                <div className={styles["product__slug"]}>{product.data.category.slug}</div> 
                <div className={styles["product__title"]}>{product.data.name}</div>
                <div className={styles["product__price"]}>$ {product.data.price}</div>     
              </div>
            )
          }
          </div>
       
        </section>
    )
}

export default SearchProducts;