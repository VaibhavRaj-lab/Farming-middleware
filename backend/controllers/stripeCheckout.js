import stripe from 'stripe';
const stripeInstance = stripe('sk_test_51JLu3rSEkHF4thg0cL2PLK420SgI0t1UFpTLQUUQXtxVbct5M7rjMhrNaJm19wRWKPmw28RLxlYInX9DXepKOAVP00Hm26rJVD');

const stripeCheckout = async (req, res) => {

    const { items, totalPrice } = req.body;

    try {
        // Create a new Stripe Checkout Session
        const session = await stripeInstance.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map((item) => ({
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.name,
                        images: [item.image],
                    },
                    unit_amount: item.price * 100,
                },
                quantity: 1,
            })),
            mode: 'payment',
            success_url: 'http://localhost:3000/customerOrder', // Replace with your success URL
            cancel_url: 'http://your-website.com/cancel', // Replace with your cancel URL
        });

        res.json({ redirectUrl: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'An error occurred during checkout' });
    }
}

export { stripeCheckout }