import React, { useEffect, useState } from 'react';
//import { useProductsContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';
import useFetchData from '../utils/hooks/useFetchData';
import Loading from '../components/Loading';
import Error from '../components/Error'
import { WZL_API } from '../utils/constants';
import styles from '../styles/ProductView.module.css'
import { FaShoppingCart } from 'react-icons/fa';

const ProductView = () => {
    const { id } = useParams();
    //const history = useHistory();
    const single_url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${id}%22%29+%5D%5D`;
    const [shouldCall, setShouldCall] = useState(false);
    const {data: product, loading, error} = useFetchData(single_url, shouldCall);
   
    
    useEffect(() => {    
      setShouldCall(true); 
    }, []);


  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error type='single-product' />;
  }


  return (
    <div className = {styles["card-wrapper"]}>
    <div className = {styles.card}>
     <div className={styles["card-left"]}>
      <div className = {styles["product-imgs"]}>
          <div className = {styles["img-display"]}>
              <div className = {styles["img-showcase"]}>
                {product?.results?.[0]?.data?.images.forEach(element => {
                  <img src={element.image.url} alt = "product" className={styles["gallery"]} />
                })}
              </div>
          </div>
          <div className={styles["img-select"]}>
          {product?.results?.[0]?.data?.images.forEach(element => {
             <div className={styles["img-item"]}>
               <p>{element.image.url}</p>
             <a href = "#f" data-id = "1">
               <img src={element.image.url} alt = "product" className={styles["gallery"]} />
             </a>
           </div>
          })}
        </div>
      </div>
     </div>
     <div className={styles["card-right"]}>
      <div className={styles["product-content"]}>
          <h2 className ={styles["product-title"]}>{product?.results?.[0]?.data?.name}</h2>
          <div className={styles["product-price"]}>
              <p>Price: <span>${product?.results?.[0]?.data?.price}</span></p>
          </div>
          <div className={styles["product-detail"]}>
              <h3>About this item: </h3>
              <p>{product?.results?.[0]?.data?.short_description}</p>
              <ul>
                <li>Category: <span className={styles["product__slug"]}>{product?.results?.[0]?.data?.category.slug}</span></li>
                <li>SKU: <span>{product?.results?.[0]?.data?.sku}</span></li>
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

export default ProductView;