import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      [image1, image2, image3, image4].forEach((img, index) => {
        if (img) formData.append(`image${index + 1}`, img);
      });

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        // Clear form
        setName('');
        setDescription('');
        setPrice('');
        setCategory('Men');
        setSubCategory('Topwear');
        setBestseller(false);
        setSizes([]);
        [setImage1, setImage2, setImage3, setImage4].forEach(fn => fn(false));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  const toggleSize = size => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      {/* Image Upload Section */}
      <div className='w-full'>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          {[image1, image2, image3, image4].map((img, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img className='w-20 h-20 object-cover' src={img ? URL.createObjectURL(img) : assets.upload_area} alt={`Upload Image ${index + 1}`} />
              <input type='file' id={`image${index + 1}`} hidden onChange={(e) => eval(`setImage${index + 1}`)(e.target.files[0])} />
            </label>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className='w-full'>
        <input className='w-full max-w-md px-3 py-2' type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea className='w-full max-w-md px-3 py-2' placeholder='Product Description' value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>

      {/* Category and Pricing */}
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <select className='w-full px-3 py-2' value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
        <select className='w-full px-3 py-2' value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
        <input className='w-full sm:w-[120px] px-3 py-2' type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      {/* Sizes Section */}
      <div className='w-full'>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex flex-wrap gap-3'>
          {['S', 'M', 'L', 'XL', 'XXL', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5'].map(size => (
            <div key={size} onClick={() => toggleSize(size)} className={`${sizes.includes(size) ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox */}
      <div className='flex gap-2 mt-2'>
        <input type='checkbox' id='bestseller' checked={bestseller} onChange={() => setBestseller(!bestseller)} />
        <label htmlFor='bestseller'>Add to bestseller</label>
      </div>

      {/* Submit Button */}
      <button type='submit' className='w-full sm:w-auto px-6 py-3 mt-4 bg-black text-white'>Add Product</button>
    </form>
  );
}

export default Add;
