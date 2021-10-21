import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList'
import styles from '../styles/globals.css';

const AllProducts =()  => {
  return (
    <>
    <Header />
    <div className={styles.container}>
      
      <main> 
        <ProductList />
      </main>
      <Footer />
      
    </div>
    </>
     
  );
}

export default AllProducts;