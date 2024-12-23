import SingleProduct from "../components/product/SingleProduct";
import { useGetProducts } from "../services/services";

const Home = () => {
  const { data: products, isLoading } = useGetProducts();

  return (
    <div className="container-box py-8">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {isLoading ? (
          <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
            <div className="p-2 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
              <div className="bg-white rounded-full">
                <div className="w-8 h-8 rounded-full"></div>
              </div>
            </div>
          </div>
        ) : (
          products &&
          products?.products.length > 0 &&
          products.products.map((product) => (
            <SingleProduct key={product?.id} product={product} />
          ))
        )}
      </div> */}
      <h3>Home</h3>
    </div>
  );
};

export default Home;
