import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/assets';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({ ...data, [name]: value }));

  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();


  // Ensure a payment method is selected; specifically check for 'stripe' if necessary
  if (!method) {
    toast.error("Please select a payment method.");
    return; // Prevent form submission if no payment method is selected
  }

    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {

        // // API Calls for COD
        // case 'cod':
        //   const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
        //   if (response.data.success) {
        //     setCartItems()
        //   } else {
        //     console.log(error)
        //     toast.error(response.message)
        //   }
        //   navigate('/orders')
        //   setCartItems('')
        //   break;
        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }

          break;

          default:
            toast.error("Invalid payment method. Please select a valid option.");
            break;
      }

    } catch (error) {
      console.error(error);
      toast.error("An error occurred while placing the order.");
    }

  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Text Left */}
      <section className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name='firstName'
            value={formData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
            aria-label="First Name"
          />
          <input
            required
            onChange={onChangeHandler}
            name='lastName'
            value={formData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
            aria-label="Last Name"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name='email'
          value={formData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
          aria-label="Email address"
        />
        <input
          required
          onChange={onChangeHandler}
          name='street'
          value={formData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
          aria-label="Street"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name='city'
            value={formData.city}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
            aria-label="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name='state'
            value={formData.state}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
            aria-label="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name='zipcode'
            value={formData.zipcode}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
            aria-label="Zipcode"
          />
          <input
            required
            onChange={onChangeHandler}
            name='country'
            value={formData.country}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
            aria-label="Country"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name='phone'
          value={formData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
          aria-label="Phone"
        />
      </section>

      {/* Text Right */}
      <section className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'stripe' ? 'bg-gray-100' : ''
                }`}
            required>
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''
                  }`}
              ></span>
              <img
                className="h-5 mx-4"
                src={assets.stripe_logo}
                alt="Stripe Logo"
              />
            </div>
            {/* <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'razorpay' ? 'bg-gray-100' : ''
                }`}
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''
                  }`}
              ></span>
              <img
                className="h-5 mx-4"
                src={assets.razorpay_logo}
                alt="Razorpay Logo"
              />
            </div>
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'cod' ? 'bg-gray-100' : ''
                }`}
            >
              <span
                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''
                  }`}
              ></span>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div> */}
          </div>
          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </section>
    </form>
  );
};

export default PlaceOrder;
