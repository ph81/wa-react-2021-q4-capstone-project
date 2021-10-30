import React, { useEffect } from 'react';
import { useProductsContext } from '../context/ProductContext';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error'
//import { WZL_API } from '../utils/constants';
import styles from '../styles/ProductView.module.css'

const ProductView = () => {
    const { id } = useParams();
    console.log(id);
    const history = useHistory();
    const { single_product_loading: loading, 
            single_product_error: error, 
            single_product: product, 
            fetchSingleProduct } = useProductsContext();
    //const url = WZL_API.SINGLEPRODUCT_URL;
    //console.log(product);

    useEffect(() => {
      console.log(id);
        fetchSingleProduct(id);
        
        // eslint-disable-next-line
    }, [id]);

    useEffect(() => {
        if (error) {
        setTimeout(() => {
            history.push('/');
        }, 3000);
        }
        // eslint-disable-next-line
    }, [error]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error type='single-product' />;
  }

  console.log(product);

  return (
        <div className={styles["product__container"]}>
          <h4>{product.data.name}</h4>
        </div>
  )


}

export default ProductView;