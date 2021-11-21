import React, { useState } from "react";
import { useFilterContext } from "../context/FilterContext";
import { useProductsContext } from "../context/ProductContext";
import { usePagination } from "../utils/hooks/usePagination";
import ProductCard from "./ProductCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import styles from "../styles/ProductListView.module.css";

const ProductListView = () => {
  const { products } = useProductsContext();
  const { categories, categories_loading, categories_error } =
    useFilterContext();
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

  // setting up filter logic
  const [filterArray, setFilterArray] = useState([]);

  const categoryFilter = (id) => {
    filterArray.includes(id)
      ? setFilterArray(filterArray.filter((x) => x !== id))
      : setFilterArray([...filterArray, id]);
  };

  if (categories_loading) {
    return <Loading />;
  }

  if (categories_error) {
    return <Error type="categories" />;
  }

  if (!products) {
    return null;
  } // pull off the props from product

  return (
    <section id="filterbycategory">
      <div className={styles["filter__container"]}>
        <h4>Filter by category</h4>
        <div className={styles["filter__category"]}>
          {categories.map((category) => (
            <div className={styles["filter__item"]} key={category.id}>
              <label>
                <input
                  type="checkbox"
                  value={category.data.name}
                  onChange={() => categoryFilter(category.id)}
                />
                {category.data.name}
              </label>
            </div>
          ))}
          <div className={styles["filter__item"]}>
            <label>
              <input
                type="checkbox"
                value={""}
                onChange={() => categoryFilter("")}
              />
              Clear all filters
            </label>
          </div>
        </div>
      </div>

      <div className={styles["list__container"]}>
        {filterArray.length === 0
          ? products
              
              .map((product) => <ProductCard key={product.id} {...product} />)
              .slice(firstContentIndex, lastContentIndex)
          : products
              .filter((product) =>
                product.data.category.id.includes(filterArray)
              )
              
              .map((product) => <ProductCard key={product.id} {...product} />)
              .slice(firstContentIndex, lastContentIndex)
        }


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

export default ProductListView;
