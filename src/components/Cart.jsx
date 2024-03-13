import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cart() {
    const [singleProduct, setSingleProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getSingleProduct = async () => {
            try {
                const { data } = await axios.get(`/products/${id}`);
                setSingleProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        getSingleProduct();
    }, [id]);

    const addToCart = () => {
        // Add logic to add the product to the cart
        console.log('Product added to cart:', singleProduct);
        // You can store the product in state, context, or send a request to the server to add it to the user's cart
    };

    return singleProduct ? (
        <div>
            <h2>{singleProduct.title}</h2>
            <p>{singleProduct.description}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    ) : <div>Loading...</div>;
}
