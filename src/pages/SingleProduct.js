import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/globals.css";
import PageWrapper from "../components/PageWrapper";
import ProductDetail from "../components/ProductDetail";

const SingleProduct = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <PageWrapper product />
          <ProductDetail product />
        </main>
       
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
