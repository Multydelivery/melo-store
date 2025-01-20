import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever was born out of passion for innovation and a desire to revolutionize the way our world shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore and purchase a wide range of products from the comfort of their devices.</p>
        <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and perfomance. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brans and suppliers.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to provide an exceptional shopping experience that exceeds the expectations of our customers. We achieve this by offering high-quality products, fast delivery, and excellent customer service.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'WHY CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We source our products from trusted brands and suppliers to ensure that you receive only the best quality products.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience::</b>
          <p className='text-gray-600'>Shop from the comfort of your home and have your products delivered to your doorstep.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated customer service representatives are always available to assist you with any inquiries or concerns.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About