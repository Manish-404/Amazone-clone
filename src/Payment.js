import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./firebase";

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect (() => {
        //generate the special stripe secret whih allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies subunits like 1rs  = 100 paise like 1$=100 cents like wise 
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('💰', user)

    const handleSubmit = async (event) => {
        //stripe magic here 
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
           //paymentIntent = Payment confirmation

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    ceated: paymentIntent.created
                })

           setSucceeded(true);
           setError(null)
           setProcessing(false)

           dispatch({
               type: 'EMPTY_BASKET'
           })

           history.replace('/orders')
        })
    }

    const handleChange = event => {
        //Listen for changes in the CardElement
        //display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message: "");
    }

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>

                {/* delivery address */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address :</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>First Cross Street,Dubey baug road,</p>
                        <p>Chennai, Tamil Nadu</p>
                    </div>
                </div>
                {/* review Items */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery :</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* payment method */}
                <div className='payment_section'>
                   <div className='payment_title'>
                        <h3>Payment Method :</h3>
                    </div>
                    <div className='payment_details'>
                        {/* Stripe code here */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment_priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;

