import React from 'react';
import { Container, Button } from 'react-bootstrap';
import amex from '../../../images/credit-cards_amex.png';
import master from '../../../images/credit-cards_mastercard.png';
import visa from '../../../images/credit-cards_visa.png';
import paypal from '../../../images/Bitmap.png';
import { Elements } from '@stripe/react-stripe-js';
import CreditCard, { stripePromise } from '../CreditCard/CreditCard';
import './PaymentMethod.css'

const PaymentMethod = () => {
    return (
        <section className="paymentMethod_area py-5">
            <Container>
                <div className="creaditCard_area mb-5">
                    <div className="cardHeading d-flex justify-content-between">
                        <div>
                            <h2>
                                <label htmlFor="cardPay">
                                    <input type="radio" name="payment" id="cardPay" /> Credit Card
                                </label>

                            </h2>
                            <p>Safe mony transfer using your bank account, Visa, Meastro, Discover, American Express</p>
                        </div>
                        <div className="paymentLogo">
                            <img className="ms-1" src={amex} alt="American Express" />
                            <img className="ms-1" src={master} alt="Master Card" />
                            <img className="ms-1" src={visa} alt="Visa Card" />
                        </div>
                    </div>
                    <div className="cardContent">
                        <Elements stripe={stripePromise}>
                            <CreditCard />
                        </Elements>
                    </div>

                </div>
                <div className="paypal_area">
                    <div className="cardHeading d-flex justify-content-between">
                        <div>
                            <h2>
                                <label htmlFor="paypalPay">
                                    <input type="radio" name="payment" id="paypalPay" /> Paypal
                                </label>
                            </h2>
                            <p>You Will Redirected to Paypal website to complite our purses sucutiry</p>
                        </div>
                        <div className="paymentLogo">
                            <img src={paypal} alt="Paypal" />
                        </div>
                    </div>

                </div>
                <div className="d-flex w-100">
                    <Button className="brand_bg ms-auto">Next</Button>
                </div>
            </Container>
        </section>
    );
};

export default PaymentMethod;