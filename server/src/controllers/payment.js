import Stripe from "stripe";
import { logError } from "../util/logging.js";

export const createPayment = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { token, card } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const charge = await stripe.charges.create({
      amount: card.price * 100,
      customer: customer.id,
      currency: "usd",
      description: card.name,
    });

    res.status(200).json({ success: true, result: charge });
  } catch (error) {
    logError(error);
    res
      .status(500)
      .json({ success: false, msg: "Unable to pay now, try again later" });
  }
};
