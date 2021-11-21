import React from "react";
import { useFeaturedProducts } from "../utils/hooks/useFeaturedProducts";
import Loading from "../components/Loading";
import ProductCard from "./ProductCard";
import styles from "../styles/FeaturedProducts.module.css";

const FeaturedProducts = () => {
  const { data: { results: featuredList }, isLoading }= useFeaturedProducts();
  
  if (isLoading) {
    return <Loading />;
  }


  return (
    <section id="collection">
      <h2>New collection</h2>
      <div className={styles["product__container"]}>
        {featuredList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className={styles["view__products"]}>
        <a href="/products">
          <span>View all our products</span>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
