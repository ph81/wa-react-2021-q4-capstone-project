import React, { useEffect } from 'react';
import { useProductsContext } from '../context/ProductContext';
import { useParams, useHistory } from 'react-router-dom';
import mockdata from '../mocks/es-mx/products.json'
import Loading from '../components/Loading';
import Error from '../components/Error'
import { WZL_API } from '../utils/constants';
import styles from '../styles/ProductView.module.css'
import { FaShoppingCart } from 'react-icons/fa';

const Test = () => {
    const { id } = useParams();
    //console.log(id);
    const history = useHistory();
    const { single_product_loading: loading, 
            single_product_error: error, 
            single_product: product,
            fetchSingleProduct} = useProductsContext();
    const single_url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${id}%22%29+%5D%5D`;
    //console.log(single_url);


    useEffect(() => {
        fetchSingleProduct(single_url);
       
        //console.log(mockdata.results[0]);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (error) {
        setTimeout(() => {
            history.push('/');
        }, 6000);
        }
        // eslint-disable-next-line
    }, [error]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error type='single-product' />;
  }

  const productDef = mockdata.results[0];
  //console.log(product);

  return (
    <div className = {styles["card-wrapper"]}>
      <div className = {styles.card}>
       <div className={styles["card-left"]}>
        <div className = {styles["product-imgs"]}>
            <div className = {styles["img-display"]}>
                <div className = {styles["img-showcase"]}>
                    <img src = "02.webp" alt = "product" className={styles["gallery"]} />
                    <img src = "03.webp" alt = "product" className={styles["gallery"]} />
                    <img src = "04.webp" alt = "product" className={styles["gallery"]} />
                    <img src = "05.webp" alt = "product" className={styles["gallery"]} />
                </div>
            </div>
            <div className={styles["img-select"]}>
                <div className={styles["img-item"]}>
                  <a href = "#f" data-id = "1">
                    <img src = "02.webp" alt = "product" className={styles["gallery"]} />
                  </a>
                </div>
                <div className={styles["img-item"]}>
                  <a href = "#f" data-id = "1">
                    <img src = "03.webp" alt = "product" className={styles["gallery"]} />
                  </a>
                </div>
                <div className={styles["img-item"]}>
                  <a href = "#f" data-id = "1">
                    <img src = "04.webp" alt = "product" className={styles["gallery"]} />
                  </a>
                </div>
                <div className={styles["img-item"]}>
                  <a href = "#f" data-id = "1">
                    <img src = "05.webp" alt = "product" className={styles["gallery"]} />
                  </a>
                </div>
              </div>
        </div>
       </div>
       <div className={styles["card-right"]}>
        <div className={styles["product-content"]}>
            <h2 className ={styles["product-title"]}>{productDef.data.name}</h2>
            <div className={styles["product-price"]}>
                <p>Price: <span>$257.00</span></p>
            </div>
            <div className={styles["product-detail"]}>
                <h2>about this item: </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                <ul>
                  <li>Color: <span>Black</span></li>
                  <li>Available: <span>in stock</span></li>
                  <li>Category: <span>Shoes</span></li>
                  <li>Shipping Area: <span>All over the world</span></li>
                  <li>Shipping Fee: <span>Free</span></li>
                </ul>
            </div>
            <div className={styles["purchase-info"]}>
                <input type = "number" min = "0" value = "1" />
                <button type = "button" className={styles["btn"]}>
                  Add to Cart <FaShoppingCart/>
                </button>
            </div>
            
        </div>
       </div>
      </div>
    </div>
    
  )


}

export default Test;