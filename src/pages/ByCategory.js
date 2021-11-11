import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/globals.css";
import PageWrapper from "../components/PageWrapper";
import ProductsbyCategory from "../components/ProductsbyCategory";

const ByCategory = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <PageWrapper product name="Products by Category" />
          <ProductsbyCategory product />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ByCategory;
