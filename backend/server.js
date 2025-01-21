import express from 'express'
const cors = require('cors')
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
// Specify CORS options
const corsOptions = {
    origin: 'https://melo-store-e965.vercel.app',  // Specify the allowed origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Make sure to include OPTIONS if you're handling preflights manually
    allowedHeaders: ['Content-Type', 'Authorization'],  // Any other headers your client might send
    credentials: true,  // Include this if your requests involve credentials such as cookies, authorization headers or TLS client certificates
    optionsSuccessStatus: 200  // Some legacy browsers (IE11, various SmartTVs) choke on status 204
};

app.use(cors(corsOptions));

// To handle OPTIONS for all routes, you can use the following:
app.options('*', cors(corsOptions)); // This will enable pre-flight across-the-board

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log('Server started on PORT : '+ port))