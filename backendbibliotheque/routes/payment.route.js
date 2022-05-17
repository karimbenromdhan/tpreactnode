import express from 'express';
const router = express.Router();
import stripe from 'stripe';
const Stripe = stripe('sk_test_51Kzzw8GqOziob2ebqk3cHMwTRjiwpF5Ux754DlG0t9mROv1eFWjc0MR1ggL105TtsWtERScMWzSe0hJ0d1ObS6Ct00e62QLkbg');
router.post('/', async (req, res) => { console.log(req.body)
 let status, error;
 const { token, amount } = req.body;
 try {
 await Stripe.charges.create({
 source: token.id,
 amount,
 currency: 'usd',
 });
 status = 'success';
 } catch (error) {
 console.log(error);
 status = 'Failure';
 }
 res.json({ error, status });
 }); 
 export default router; 
