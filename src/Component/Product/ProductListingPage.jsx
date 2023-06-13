import {useEffect,useState} from "react";
const ProductListingPage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Fetch the product data from an API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductList(data))
      .catch((error) => console.log(error));
  }, []);


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
