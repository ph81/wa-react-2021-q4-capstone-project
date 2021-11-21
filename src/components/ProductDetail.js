import React, { useEffect, useRef } from "react";
import { useProductsContext } from "../context/ProductContext";
import { useParams, useHistory } from "react-router-dom";
import { WZL_API } from "../utils/constants";
import Loading from "./Loading";
import Error from "./Error";
import AddToCartDetail from "./AddToCartDetail";
import styles from "../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  //const { products, loading, error } = useProductsContext();
  const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct } = useProductsContext();
  //fetching data
  const single_url = `${WZL_API.API_BASE_URL}/documents/search?ref=${WZL_API.API_ID}&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22${id}%22%29+%5D%5D`;
  //console.log(single_url);
  
  useEffect(() => {
    fetchSingleProduct(single_url);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  const selectedImage = useRef();
  const transformImage = useRef();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error type="single-product" />;
  }

  if (!product) {
    return null;
  } // pull off the props from product
  

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
                <AddToCartDetail product={product}  />
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
