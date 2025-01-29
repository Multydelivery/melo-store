# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. create project folder in your desire location.

2. npm create vite@latest
3. name your folder frontend.
4. select React.
5. select JavaScript.
6. cd frontend.
7. npm install
8. npm install react-router-dom react-toastify
9. npm run dev
10. delete App.css
11. select App.jsx clear all the code
12. Download rafce snippet in App.jsx (ES7 extension)
13. delete react.svg from assets
14. clear code from index.css
15. update title in index.html
16. add files/pictures and assets.js folder to import and export to assets folder and use in other components. This folder located in src folder.
17. configure tailwind css
18. npm install -D tailwindcss postcss autoprefixer
19. npx tailwindcss init -p
20. /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 
// insert this in tailwind.config.js
21. @tailwind base;
@tailwind components;
@tailwind utilities; // in index.css
22. npm run dev
23. create pages folder inside src folder
24. create components folder inside src folder
25. create context folder inside src folder
26. create file in pages, Home.jsx, Collection.jsx, About.jsx, Contact.jsx, Product.jsx, Cart.jsx, Login.jsx, PlaceOrder.jsx, Orders.jsx
27. create routers in main.jsx
28. remove <React.StrictMode> and import and add <BrowserRouter> instead.
29. create multiples routes for all the pages
30. import {routes} from 'react-router-dom  to App.jsx  <Routes></Routes>
31. create Navbar.jsx in components
32. import Navbar to App.jsx
33. import assets
34. import {NavLink} from 'react-route-dom
35. create state variable [visible, SetVisible] in Navbar component
36. create menu
37. create Hero.jsx
38. import/ mounted Hero componet to Home.jsx
39. add google fonts outfit and prata, selecting import line code and paste in index.css
40. create a ShopContext.jsx file in context folder to save all the state variable
41. import { createContex } from 'react'
42. create LatestCollection.jsx in components and mounted in Home.jsx
43. import ShopContextProvider in main.jsx, and add it between <browserRouter><ShopContextProvider><App /></ShopContextProvider></BrowserRouter> this to use ShopConntest provider in any component
44. create Title File.jsx components and mounted in LatestCollection.jsx
45. add const [latestProducts, setLatestProducts] = useState([]) to add first 10 products
46. useEffect()
47. create ProductItem.jsx in components
49. render products in latestCollection.jsx mounting ProductItem and maping products.
50. Add logic to the img logo and wrapping it in a <Link></Link> tags path to='/'(home) in the Navbar component
51. create BestSeller.jsx in components and mount it in Home.jsx
52. create OurPolicy.jsx file in components and then mounted in Home.jsx
53. create NewsLetterBox.jsx in components and mounted in Home.jsx.
54. create the Footer.jsx file component and mount it in the App.jsx
## Front UI done.
55. now Collection.jsx for filter products
56. add search feature creating states variables in ShopContext.jsx const [search, setSearch] = useState('') 
const [showSearch, setShowSearch] = useState(true);
57. create SearchBar.jsx in components and mount it in App.jsx below <Navbar />
58. add logig for [search] input Search.jsz
59. add product id
57. create RelatedProducts.jsx file in components and mount it in Product.jsx.
58. add funcionality to addcart button adding state and async funtion to ShopContext.jsx
59. import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; in App.jsx
60. add <ToastContainer /> above <NavBar />
61.start building the Cart.jsx
62. create CarTotal.jsx file in components and mount it in Cart.jsx
63. create Order.jsx UI
64. create logic for profile icom wraping img with src asseets.profile_icon with <Link></Link>
65. create UI for Login.jsx
67. create UI for About.jsx and mount NewsLetterBox.jsx
68. create UI for Contact.jsx and mount NewsLetterBox.jsx
69. close all file in front and folder the create a backend folder.
-----------------------------------------------------
## Backend 
70. right click in backend folder and select open an itegrated terminal and rename backend
71. in the terminal npm init, after installed (backend) press enter multiple times
72. go to package.json and remove test and the line from script
73. go to server.js and install some dependecies npm i cors dotenv express jsonwebtoken mongoose multer nodemon razorpay stripe validator cloudinary bcrypt
74. in backend folder, create 5 folders named config, middleware, models, controllers, routes 
75. open package.json file and in scripts add "server": "nodemon server.js"
76. above add "type": "module",
77. open server.js and create a basic server
import this 3
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
78. create .env file in backend folder
79. download thunder client extension to check API status
80. config for database conectivity with mongoDB atlas, click new project, named and create cluster, create user, connect to cluster, drivers, copy string up tp ...net and paste in s env MONGODB_URI = "the string with quotations"
81.  click network access, +ADD IP ADDRESS to allow access from anywhere
82. create mongodb.js file in config folder and in server.js import MONGODB from '.config/mongodb.js' to conect
83. create cloudinary.js file for images and videos in config folder and get the api from cloudinary.com and paste in .env CLOUDINARY_API_KEY = "", 
after that copy the secret key and paste .env CLOUDINARY_SECRET_KEY = "", after that copy cloud name and paste CLOUDINARY_NAME = ""
84. config cloudinary.js after that import and connect the connectCloudinary(); in server.js
85. create productModel.js in models folder for mongoose model to store data in digital base/structure
86. create userModel.js file in models folder and config
87. create userController.js file in controllers folder and config the routes and the logic to create an acoount or login 
88. create userRoute.js file in routes folder 
89. after that create the end points in server.js
90. create JWT_SECRET in .env 
91. create productController.js in controller folder to add the products, in this file will create four controller functions
92. create productRoute.js file in routes folder after adding routes
93. in server.js add the end points for productRouter
94.create multer.js file in middleware folder to use it in ProductRouter.js at line 6
94. create admin authentication stystem
95. Add ADMIN_EMAIL = "admin@forever.com" in .env
96. Add ADMIN_PASSWORD = "querty123" in .env
97. create adminAuth.js file in middleware folder after config export and added to the productRoute.js
98. close backend files and add a global admin folder
99. right click in admin folder and open a integrated terminal
100. npm create vite@latest .  
select (y)
React
javaScript
101. npm install
102. npm install axios react-router-dom react-toastify
103. npm run dev  // started at port 5174 to make sure it start at diferent than 5173 at frontend folde, go to vite.config.js in admin and add property
server: {port: 5174}
104. open assets folder in admin folder and remove react.svg
105. open App.jsx and clear the file 
106. delete App.css file
107. open index.css and clear it
108. npm install -D tailwindcss postcss autoprefixer
109. npx tailwindcss init -p
110. /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 
// insert this in tailwind.config,js
111. @tailwind base;
@tailwind components;
@tailwind utilities; // in index.css
112. npm run dev
113. create page folder in src folder
114. create components folder in src folder
115. download assets admin folder copy and paste in assets folder in src
116. crete Add.jsx, List.jsx, Order,jsx in pages folder and add it to the main.jsx using react router 
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
)


117. create Navbar.jsx in components and mount it in App.jsx
118. create Sidebar.jsx file in components folder 
119 search outfit google font import and paste in index.css
120. setup the routes for the pages in App.jsx
121. create Login.jsx file in components to create authentication, create the logic in App.jsx
122. design login component and add logic
123. const backendUrl in App.jsx with the with the value from .env, so create in there 
125. in the else stament display a toast notification and import { ToastContainer, toast } from 'react-toastify:
import 'react-toastify/dist/ReactToastify.css'; in App.jsx and add logig and local storage to stay log when refreshing page
126. crete UI for Add.jsx logic 
127. create logic to clear fields after you add product in Add.jsx 
128. create the UI for List.jsx to add the list of the added products
129. export and declare currency in App.jsx to work in List.jsx 
129. add all products to the database.
130. connect frontend with backend
131. in frontend folder- src - create .env, and add VITE_BACKEND-URL = ''
132. navigate to context - ShopContext.jsx, then after delivery fee create const backendUrl = import.meta.env.VITE_BACKEND_URL
133. add variable backendUrl in the value object.
134. before the products were displaying from products at assets folder, but now will get the product data from the api, so remove import { products } from "../assets/assets";
135. create const [product, setProduct] = useState([])
136. create before value object a const getProductsData = async () => {
  try {


  } catch (error)
}
134. to call the api in the try, we need to install axios in the frontend terminal npm i axios, and dont forget to import axios from axios;
135. useEffect to call getProductsData()
136. in backen we had create userController.js, inside the function loginUser and refister user now add thsi functionality in the frontend
137. frontend folder - open pages - Login.jsx file to add the ogin api frist create in Shopcontext.jsx state variable const [token, setToken] = useState('')
138. added login , logout functionality between ShopContext.jsx Login.jsx, Navbar.jsx
139. create api to save product from cart in our database, so in backend - controllers folder create cartController.js with functions
139. create cartRoute.js in routes, import express, import { addToCart, getUserCart, updateCart } from '../controllers/cartController.js', add routers
140. server.js import app.use('/api/cart)
141. create auth.js middleware to authenticate user then added to the cartRoute.js
142. updateQuantity, add if statement,
143. add orderController.js file in controllers folder
144. add orderModel.js file in models folder
145. add orderRoute.js file in routes folder
146. integrate orderController with frontend PlaceOrder.jsx
147. display userOrders in order controller.js
148. add the orders to be display in orders at the admin panel 
149. remember to update in controllers.js updateOrder function 
150. create stripe account and import Stripe from stripe in orderController.js


