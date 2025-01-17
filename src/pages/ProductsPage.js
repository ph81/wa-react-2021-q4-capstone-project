import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/globals.css";
import PageWrapper from "../components/PageWrapper";
import ProductListView from "../components/ProductListView";

const ProductsPage = () => {
  

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <PageWrapper product />
          <ProductListView product />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
