import React, { useContext } from "react";
import { userContext } from "../utils/Context";
import { Link } from "react-router-dom";


function Products() {
  const [products] = useContext(userContext);
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-gray-800 ml-[80vh] mb-6">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {products.map((elem, index) => (
            <Link
              to={`/productdetail/${elem.id}`}
              key={index}
              className="bg-white rounded-lg flex shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={elem.image}
                alt="Product Image"
                className="w-52 h-52 rounded-sm object-cover fit-content"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {elem.title}
                </h3>
                <p className="text-gray-600">${elem.price * 2}</p>

                <div className="px-6 py-4">
                  <button className="bg-white text-sky-400 hover:bg-blue-400  hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                    Buy Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
