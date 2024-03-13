import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {
    const notify = () => toast("Order Received ! We will get back to you ASAP");

    const [product, setProduct] = useState(null);
    const [isFormFilled, setIsFormFilled] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await axios.get(`/products/${id}`);
                console.log('API response:', data); // Log the response data
                setProduct(data);
            } catch (error) {
                console.log('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const contact = event.target.contact.value;

        // Form validation
        if (!name || !email || !address || !contact) {
            toast.error("Please fill out all the fields.");
            setIsFormFilled(false); // Update state to show warning
            return;
        }

        if (!validateEmail(email)) {
            toast.error("Please enter a valid email address.");
            setIsFormFilled(false); // Update state to show warning
            return;
        }

        if (!validatePhoneNumber(contact)) {
            toast.error("Please enter a valid phone number.");
            setIsFormFilled(false); // Update state to show warning
            return;
        }

        // Form is valid, proceed with order
        setIsFormFilled(true); // Update state to hide warning
        notify();
    };

    // Email validation function
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // Phone number validation function
    const validatePhoneNumber = (phone) => {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-12">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
                    {/* Customer Information */}
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-2xl font-semibold mb-6">Customer Information</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
                                <input type="text" id="address" name="address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">Contact no</label>
                                <input type="tel" id="contact" name="contact" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                            </div>
                            {!isFormFilled && <p className="text-red-500">Please fill out all fields before checkout.</p>}
                            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full inline-block font-semibold mt-6 hover:bg-blue-600 transition duration-300">Checkout</button>
                        </form>
                    </div>
                    {/* Order Summary */}
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                        {product ? (
                            <div className="bg-gray-200 p-6 rounded-lg">
                                <div className="flex justify-between mb-4">
                                    <span>{product.title}</span>
                                    <span>${product.price}</span>
                                </div>
                                <hr className="my-4" />
                                <div className="flex justify-between">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${product.price}</span>
                                </div>
                            </div>
                        ) : (
                            <div>Loading..</div>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Checkout;
