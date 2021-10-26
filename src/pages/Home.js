import React from 'react';
import Header from '../components/Header';
import FeaturedContent from '../components/FeaturedContent';
import ProductCategories from '../components/ProductCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import styles from '../styles/globals.css';

const Home =()  => {
  return (
    <>
    <Header />
    <div className={styles.container}>
      
      <main> 
        <FeaturedContent />
        <ProductCategories />
        <FeaturedProducts />
      </main>
      <Footer />
      
    </div>
    </>
     
  );
}

export default Home;