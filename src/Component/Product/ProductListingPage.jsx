import { FeaturedProduct } from "./FeaturedProduct";
export const ProductListingPage = () => {
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>

          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">tshirt</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="1">top</label>
          </div>
        </div>

        <div className="inputItem">
              <input type="checkbox" id="3" value={3}/>
              <label htmlFor="1" >shoes</label>
             </div>

             
        <div className="FilterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000}/>
            <span>1000</span>

          </div>
        </div>

        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price"/>
            <label htmlFor="asc">{}Low to High</label>
          </div>

          <div className="inputItem">
            <input type="radio" id="dsc" value="asc" name="price"/>
            <label htmlFor="desc">High to low</label>
          </div>

          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price"/>
            <label htmlFor="asc">Highest first</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price"/>
            <label htmlFor="asc">Lowest first</label>
          </div>
        </div>

      </div>
      {/* <div className="right">
           <img className="" src="https://img.freepik.com/premium-vector/modern-poster-with-statue-david-with-luminous-eyes-drops-tears-techno-style-print_657953-81.jpg?w=1380" alt=" "/>
      </div> */}
      <FeaturedProduct/>
    </div>
  );
};

export default ProductListingPage;
