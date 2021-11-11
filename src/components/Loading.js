import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <h3>Loading products...</h3>
      <Loader
        type="Grid"
        color="#1e232b"
        height={100}
        width={100}
        timeout={2000} //1.5 secs
      />
    </div>
  );
};

export default Loading;
