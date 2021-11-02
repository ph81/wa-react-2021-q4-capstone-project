import React, {useState, useEffect} from 'react';
import useFetchData from '../utils/hooks/useFetchData';
import { WZL_API } from '../utils/constants';
import Loading from '../components/Loading';
import Error from '../components/Error';
import styles from '../styles/FeaturedProducts.module.css'

const FeaturedProducts = () => {

    //fetching data
    const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.FEATURED_URL}`;
    const [shouldCall, setShouldCall] = useState(false);
    const { data: featuredList, isError, isLoading } = useFetchData(url, shouldCall);
    
    useEffect(() => {    
      setShouldCall(true); 
    }, []);

    if (isLoading) {
      return <Loading />
    }

    if (isError) {
      return <Error />
    }



    return (
        <section id="collection">
            <h2>New collection</h2>
               <div className={styles["product__container"]}>
               {
               featuredList.results.map((product) => 
                    <div className={styles["product__item"]} key={product.id}>
                   
                      <div className={styles["product__image"]}>
                        <img src={product.data.mainimage.url} alt={product.data.name}  />
                      </div>
                      <div className={styles["product__title"]}>{product.data.name}</div>
                      <div className={styles["product__price"]}>$ {product.data.price}</div>
                    
                  </div>
            )}
        </div>
        <div className={styles["view__products"]}><a href="/products"><span>View all our products</span></a></div>
        </section>
        
    )
}

export default FeaturedProducts;