import React, { useEffect, useState } from "react";
import { useProductsContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import AddToCart from "./AddToCart";
import ProductGallery from "./ProductGallery";
import styles from "../styles/Testing.module.css";

const Test = () => {
  const { id } = useParams();
  const { products, loading, error } = useProductsContext();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.filter((item) => item.id === id);
    setProduct(product);
  }, [id, products]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error type="single-product" />;
  }

  if (!product) {
    return null;
  } // pull off the props from product

  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles.card}>
        <div className={styles["card-left"]}>
          <ProductGallery images={product[0]?.data?.images} />
        </div>
        <div className={styles["card-right"]}>
          <div className={styles["product-content"]}>
            <h2 className={styles["product-title"]}>
              {product[0]?.data?.name}
            </h2>
            <div className={styles["product-price"]}>
              <p>
                Price: <span>${product[0]?.data?.price}</span>
              </p>
            </div>
            <div className={styles["purchase-info"]}>
              {product[0]?.data?.stock > 0 && (
                <AddToCart product={product} showQuantity={true} />
              )}
            </div>
            <div className={styles["product-detail"]}>
              <h3>About this item: </h3>
              <p>{product[0]?.data?.short_description}</p>
              <ul>
                <li>
                  Category:{" "}
                  <span className={styles["product__slug"]}>
                    {product[0]?.data?.category.slug}
                  </span>
                </li>
                <li>
                  SKU: <span>{product[0]?.data?.sku}</span>
                </li>
                <li>
                  Availability:{" "}
                  <span>
                    {product[0]?.data?.stock > 0 ? `In Stock` : "out of stock"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
