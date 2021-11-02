import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/globals.css';
import PageWrapper from '../components/PageWrapper';
import Test from '../components/Test'


const SingleProduct = () => {


    return (
        <>
        <Header />
        <div className={styles.container}>
          <main> 
            <PageWrapper  product />
              <Test />
          </main>
          <Footer />
        </div>
        </>
         
      )
}

export default SingleProduct;