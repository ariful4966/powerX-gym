
import { loadStripe } from '@stripe/stripe-js';
import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";

import './CreditCard.css'
import { Col, Row } from 'react-bootstrap';
export const stripePromise = loadStripe('pk_test_51JM4OyEZ2Er3eAJmVM5XQZh5riwnOfQyhTD6RQHfP94rkWtb2wJiZLBmtNZtNhn6Jd4oat4WRFcnt92NzTwHMLrS005INPWW1a');
const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const CreditCard = () => {
    const [paymentError, setPaymentError] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        })
        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess('')
        } else {
            setPaymentSuccess(paymentMethod);
            setPaymentError('')
            // handlePayment(paymentMethod.id)
        }
    };
    console.log('error:', paymentError ,'success:',paymentSuccess );

    return (
        <form onSubmit={handleSubmit}>

            <Row>
                <Col md={12}>
                    <label className="w-100">
                        Card number
                        <CardNumberElement
                            options={options}
                            onReady={() => {
                                console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                </Col>
                <Col md={6}>
                    <label className="w-100">
                        Name
                        <input name="name" type="text" placeholder="Jenny Rosen" className="w-100" />
                    </label>
                </Col>
                <Col md={3}>
                    <label className="w-100">
                        Expiration date
                        <CardExpiryElement
                            options={options}
                            onReady={() => {
                                console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                </Col>
                <Col md={3}>
                    <label className="w-100">
                        CVC
                        <CardCvcElement
                            options={options}
                            onReady={() => {
                                console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                </Col>
            </Row>



            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>


    );
};

export default CreditCard;