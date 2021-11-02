import React from 'react'
import { Link } from 'react-router-dom'
import  styles from '../styles/PageWrapper.module.css'

const PageWrapper = ({name, product}) => {

  return (
    
    <div className={styles.wrapper}>
 
        <h3>
          <Link to="/">Home</Link>{product && <Link to="/products">/ Products</Link>}/ {name}
        </h3>

    </div>
    
  )
}


export default PageWrapper;