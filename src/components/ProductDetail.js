import React, { useEffect, useState, useRef } from "react";
import { useProductsContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import AddToCart from "./AddToCart";
import styles from "../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, loading, error } = useProductsContext();
  const [product, setProduct] = useState(null);

  const selectedImage = useRef();
  const transformImage = useRef();

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
  //console.log(product[0].id);

  /*
  const resizeImage = (idx) => {
    let imageWidth = (idx-1) * 537;
    transformImage.current.style = `translateX(${imageWidth}px)`;
  }
*/

  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles.card}>
        <div className={styles["card-left"]}>
          <div className={styles["product-imgs"]}>
            <div className={styles["img-display"]}>
              <div className={styles["img-showcase"]} ref={transformImage}>
                {product[0]?.data?.images.map(({ image, idx }) => (
                  <img
                    key={idx}
                    src={image.url}
                    alt="product"
                    className={styles["gallery"]}
                  />
                ))}
              </div>
            </div>
            <div className={styles["img-select"]}>
              {product[0]?.data?.images.map(({ image, idx }) => (
                <div className={styles["img-item"]} key={idx}>
                  <a href={image.url} data-id={idx} ref={selectedImage}>
                    <img
                      key={idx}
                      src={image.url}
                      alt={product[0]?.data?.name}
                      className={styles["gallery"]}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
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

export default ProductDetail;
