import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useState } from "react";
import SSLCommerzForm from "./SSLCommerzForm";

//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('stripe');
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat">
            </SectionTitle>
            <select className="select select-bordered w-full max-w-xs mb-12"
                value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value='stripe'>Stripe</option>
                <option value='ssl-commerz'>SSLCommerz</option>
            </select>

            <div>
                {
                    paymentMethod === 'stripe' ? (
                        <div>
                            <Elements stripe={stripePromise}>
                                <CheckOutForm></CheckOutForm>
                            </Elements>
                        </div>
                    ): <SSLCommerzForm></SSLCommerzForm>
                }
            </div>

        </div>
    );
};

export default Payment;