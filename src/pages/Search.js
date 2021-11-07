import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/globals.css';
import SearchProducts from '../components/SearchProducts';
import PageWrapper from '../components/PageWrapper';

const Search =()  => {
  return (
    <>
    <Header />
    <div className={styles.container}>
      
      <main> 
        <PageWrapper name="Search results" />
        <SearchProducts />
      </main>
      <Footer />
      
    </div>
    </>
     
  );
}

export default Search;