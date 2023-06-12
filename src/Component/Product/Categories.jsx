import { Link, Outlet } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <div>
        
      </div>
      <nav>
        <Link to="featured" className="featured-section">Featured</Link>
        <Link to="new" className="new-section">New</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Categories;
