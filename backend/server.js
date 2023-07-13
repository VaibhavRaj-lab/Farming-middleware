import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config/db.js';
import colors from 'colors'

import { notFound, errorHandler } from './middleware/errorMiddlware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import supplierRoutes from './routes/supplierRoutes.js'
import cors from "cors"
dotenv.config('./../.env');
import stripe from 'stripe';
const stripeInstance = stripe('process.env.StripeKey');


connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cors());
app.use(express.json())

app.use('/api', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/supplier', supplierRoutes);
app.post('/checkout', async (req, res) => {
    const { items, totalPrice } = req.body;
    console.log(items, totalPrice)
    try {
        // Create a new Stripe Checkout Session
        console.log(stripeInstance.checkout.sessions)
        const session = await stripeInstance.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map((item) => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.name,

                    },
                    unit_amount: totalPrice.toString(),
                },
                quantity: 1,
            })),
            mode: 'payment',
            success_url: 'http://localhost:3000/profile', // Replace with your success URL
            cancel_url: 'http://your-website.com/cancel', // Replace with your cancel URL
        });

        res.json({ redirectUrl: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'An error occurred during checkout' });
    }
});
// PAYPAL 
app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send("API is running");
    })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
);
