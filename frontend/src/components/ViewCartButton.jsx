import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ViewCartButton = () => {
    const { cartCount } = useContext(ShopContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Determine if the current page is the cart page
    const isCartPage = location.pathname === '/cart';

    if (isCartPage || cartCount === 0) {
        return null; // Do not display the button on the cart page or if the cart is empty
    }

    return (
        <button
            className="fixed inset-x-0 bottom-10 mx-auto bg-gradient-to-br from-green-500 to-blue-500 opacity- backdrop-blur-3xl px-6 py-3 text-white font-semibold rounded-lg w-max"
            onClick={() => navigate('/cart')}
        >
            View Cart ({cartCount})
        </button>





    );
};

export default ViewCartButton;
