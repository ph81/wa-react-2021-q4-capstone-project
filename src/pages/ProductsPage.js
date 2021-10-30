import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/globals.css';
import PageWrapper from '../components/PageWrapper';
import ProductListView from '../components/ProductListView';

const ProductsPage =()  => {

  //setting up loader

  //const [isLoading, setIsLoading] = useState(true);
  //useEffect(() => {
  //  setTimeout(() => {
  //    setIsLoading(false);
  //  }, 2000);
  //});
  


  return (
    <>
    <Header />
    <div className={styles.container}>
      <main> 
      <PageWrapper product />
        <ProductListView product  />
      </main>
      <Footer />
    </div>
    </>
     
  )
}

export default ProductsPage;