import React, { useState, useEffect } from "react";
import useFetchData from "../utils/hooks/useFetchData";
import { WZL_API } from "../utils/constants";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ProductCard from "./ProductCard";
import styles from "../styles/FeaturedProducts.module.css";

const FeaturedProducts = () => {
  //fetching data
  const url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=${WZL_API.FEATURED_URL}`;
  console.log(url);
  const [shouldCall, setShouldCall] = useState(false);
  const {
    data: featuredList,
    isError,
    isLoading,
  } = useFetchData(url, shouldCall);

  useEffect(() => {
    setShouldCall(true);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section id="collection">
      <h2>New collection</h2>
      <div className={styles["product__container"]}>
        {featuredList.results.map((product) => (
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
