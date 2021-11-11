import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
//import Loading from '../components/Loading';
import styles from "../styles/globals.css";
import PageWrapper from "../components/PageWrapper";

const AllProducts = () => {
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
          <PageWrapper />
          <ProductList />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AllProducts;
