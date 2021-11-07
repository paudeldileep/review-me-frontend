import React, { useEffect } from "react";
import FeaturedProduct from "../../components/Index/FeaturedProduct";
import { useAPI } from "../../utils/fetchHelper";

const FeaturedProducts = () => {
  const [featured, setFeatured] = useAPI("/product/featured/all");

  useEffect(() => {
    setFeatured("/product/featured/all");
  }, []);

  const renderFeatured =
    featured.data &&
    featured.data.map((product) => <FeaturedProduct product={product} />);
  return (
    <div className="py-1 h-40 overflow-x-scroll scrollbar-hide flex items-center">
      
      {featured.error && <p className="text-lg text-center text-red-500">No Featured Items Yet!</p>}
      {renderFeatured}
    </div>
  );
};

export default FeaturedProducts;
