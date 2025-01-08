"use client";

import { Button } from "@/app/_components/ui/button";
import { craeteStripeCheckout } from "../_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";

const AcquirePlanbutton = () => {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await craeteStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key not found");
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    if (!stripe) {
      throw new Error("Stripe instance not found");
    }
    await stripe.redirectToCheckout({ sessionId });
  };
  return (
    <Button
      className="w-full rounded-full font-bold"
      onClick={handleAcquirePlanClick}
    >
      Adquirir plano
    </Button>
  );
};

export default AcquirePlanbutton;
