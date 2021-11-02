import React from 'react'

const Error = ({ type }) => {
  
  if (type === "single-product") {
    return <section>
        <h3>Error getting product</h3>
        <h4>Redirecting...</h4>
      </section>
  }

  if (type === "products") {
    return <section>
      <h3>Error getting products</h3>
      <h4>Redirecting...</h4>
    </section>
  }

  if (type === "categories") {
    return <section>
      <h3>Error getting product categories</h3>
      <h4>Redirecting...</h4>
    </section>
  }

  return <section>
    <h2>Error getting data</h2>
  </section>
}

export default Error;