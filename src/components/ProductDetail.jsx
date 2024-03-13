
import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css'
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail() {
  const notify = () => toast("Prdouct added to cart! Check cart");

  const [Singleproducts, setSingleproducts] = useState(null);
  const { id } = useParams();

  const getsingleProducts = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setSingleproducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getsingleProducts();
  }, []);

  return Singleproducts ? (
    <div className="w-full min-h-screen bg-zinc-200 p-10  flex justify-center items-center">
      <div className="w-full md:w-[700px] hover:scale-80  p-16 drop-shadow-2xl px-6 md:px-0 bg-white rounded-md shadow-lg">
        <div className="md:flex">
          <div className="md:w-1/3 flex-shrink-0">
            <img
              className="w-full h-auto"
              src={Singleproducts.image}
              alt={Singleproducts.title}
            />
          </div>
          <div className="md:w-2/3 md:pl-6 mt-6 md:mt-0">
            <h1 className="font-semibold text-2xl mb-2">{Singleproducts.title}</h1>
            <h2 className="text-xl mb-3">${Singleproducts.price}</h2>
            <h2 className="text-xl mb-2 text-capitalize ">{Singleproducts.category}</h2>
            <p className="text-xl mb-4 add leading-snug">{Singleproducts.description}</p>
            <div className="flex">
            <Link  onClick={notify} className="px-4 py-4 scale-125 text-sm font-semibold rounded-full text-grey">
            <FaShoppingCart />
            <ToastContainer />

            </Link>
            <Link  to={`/checkout/${id}`} className="px-4 py-2 text-sm font-semibold rounded-full bg-teal-200 text-grey">
              Buy Now
            </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default ProductDetail;