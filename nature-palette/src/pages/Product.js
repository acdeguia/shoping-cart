import React from 'react';

const Product = ({ productId }) => {
  // Fetch the product details using the `productId`

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      {/* Render the rest of the product details */}
    </div>
  );
};

export default Product;