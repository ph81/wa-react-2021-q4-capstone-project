import React from "react";
import { useProductsContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { usePagination } from "../utils/hooks/usePagination";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";
import styles from "../styles/ProductsbyCategory.module.css";

const ProductsbyCategory = () => {
  const { slug } = useParams();
  const { products, products_error } = useProductsContext();
  
  //pagination
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 12,
    count: products.length,
  });

  if (products_error) {
    return <Error type="products" />;
  }

  return (
    <section id="filterbycategory">
      <div className={styles["list__container"]}>
        {products
          .slice(firstContentIndex, lastContentIndex)
          .filter((product) =>
            product.data.category.slug.includes(
              slug.toLowerCase().replace(/\s+/g, "")
            )
          )
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}

        
        <div className={"pagination"}>
          <button
            onClick={prevPage}
            className={`page ${page === 1 && "disabled"}`}
          >
            &larr;
          </button>
          {[...Array(totalPages).keys()].map((el) => (
            <button
              onClick={() => setPage(el + 1)}
              key={el}
              className={`page ${page === el + 1 ? "active" : ""}`}
            >
              {el + 1}
            </button>
          ))}
          <button
            onClick={nextPage}
            className={`page ${page === totalPages && "disabled"}`}
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsbyCategory;
