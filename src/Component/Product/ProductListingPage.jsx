// import {useEffect,useState} from "react";
const ProductListingPage = () => {
  const productList = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];


  return (
    <div>
    <h1>Product Listing Page</h1>

    {/* Display product list */}
    <div className="product-list">
      {productList.map((product) => (
        <div className="product-card" key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => console.log('View details clicked')}>View Details</button>
          <button onClick={() => console.log('Add to cart clicked')}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>

    
  );
};

export default ProductListingPage;
