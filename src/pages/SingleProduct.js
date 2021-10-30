import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/globals.css';
import PageWrapper from '../components/PageWrapper';
import ProductView from '../components/ProductView';


const SingleProduct = () => {

    return (
        <>
        <Header />
        <div className={styles.container}>
          <main> 
            <PageWrapper  product />
                <ProductView />
          </main>
          <Footer />
        </div>
        </>
         
      )
}

export default SingleProduct;