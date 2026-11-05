import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import BottomNavBar from '../components/BottomNavBar';

export default function CartCheckoutPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen flex flex-col">
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .icon-fill { font-variation-settings: 'FILL' 1; }
        .lifted-shadow { box-shadow: 0px 10px 30px rgba(0, 0, 60, 0.05); }
      `}</style>

      <TopAppBar />

      <main className="flex-grow pb-[100px] md:pb-section-gap pt-unit px-container-margin md:px-section-gap max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-section-gap">
        {/* Main Content Area: Cart & Checkout Steps */}
        <div className="lg:col-span-8 flex flex-col gap-section-gap">
          {/* Breadcrumbs / Steps */}
          <nav className="flex items-center text-on-surface-variant font-body-sm gap-2">
            <span className="font-bold text-primary">Cart</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span>Shipping</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span>Payment</span>
          </nav>

          {/* Cart Items */}
          <section className="flex flex-col gap-gutter">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">Your Cart</h2>
            <div className="flex flex-col gap-gutter">
              {/* Item 1 */}
              <div className="flex gap-gutter bg-surface-container rounded-lg p-gutter">
                <div className="w-24 h-24 bg-surface-variant rounded-DEFAULT overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    alt="Tabriz Silk Blend rug"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_6NjGkBMKovL3uDgeG6C6BZmy6qwODus9zWMhjcfO3jGx5Ra7i9Wj7PpzpDoC52HaUHPmpZjQMBMSl94fgNd23d9QzbvdhjhtJ507In-kA8c16wyxbsAWksoiOH9e3uc3IVjzXiXH8BfnC3GOAaSrxPVyjhFFyrCqJV9ivvV8Zm191-Z2wL9GDRauFNAiOlpkra_GUxlTK0aVc68F9SPOft7EOefjWtaFnFVfuPs9GhGobNqNafT53A"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-title-md text-on-surface">Tabriz Silk Blend</h3>
                      <p className="font-body-sm text-on-surface-variant">Size: 8' x 10' • Origin: Iran</p>
                    </div>
                    <span className="font-title-md text-primary">$4,200</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-outline-variant rounded-DEFAULT">
                      <button
                        type="button"
                        onClick={() => setQuantity1((q) => Math.max(1, q - 1))}
                        className="p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="px-3 font-body-sm">{quantity1}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity1((q) => q + 1)}
                        className="p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-secondary hover:text-on-secondary-container transition-colors font-label-caps flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-gutter bg-surface-container rounded-lg p-gutter">
                <div className="w-24 h-24 bg-surface-variant rounded-DEFAULT overflow-hidden shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    alt="Oushak Vintage rug"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbqUYjDmlEVXZHsjeehzj4KeK9gZw1Hug7o6l9ZjQYxu2jGW6pA6NOXjcplZG7dWTmvljI3mQBpaPdCgmRs_XnFNaDwSFzHmTOIYObGP4y0UKUnWzShvxO57FKbgg5apaKZbOEzKeFzqwKkrQb2-MM5SNsB_Kqxeo_305wZw4_a0Bhfm5aE20sQQZkIb0lWhAJm6CL491d9mp_2q-LfdMgNBYGXrhV7so8c-xYFXkUquJhTaQcXSvn4w"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-title-md text-on-surface">Oushak Vintage</h3>
                      <p className="font-body-sm text-on-surface-variant">Size: 9' x 12' • Origin: Turkey</p>
                    </div>
                    <span className="font-title-md text-primary">$6,850</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-outline-variant rounded-DEFAULT">
                      <button
                        type="button"
                        onClick={() => setQuantity2((q) => Math.max(1, q - 1))}
                        className="p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="px-3 font-body-sm">{quantity2}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity2((q) => q + 1)}
                        className="p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-secondary hover:text-on-secondary-container transition-colors font-label-caps flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">delete</span>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Shipping Address Form */}
          <section className="flex flex-col gap-gutter">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">Shipping Information</h2>
            <div className="bg-surface-container p-gutter md:p-container-margin rounded-lg flex flex-col gap-gutter">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant">First Name</label>
                  <input className="bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-0 py-2 font-body-lg" placeholder="Jane" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant">Last Name</label>
                  <input className="bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-0 py-2 font-body-lg" placeholder="Doe" type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-on-surface-variant">Address</label>
                <input className="bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-0 py-2 font-body-lg" placeholder="123 Luxury Lane" type="text" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-gutter">
                <div className="flex flex-col gap-2 md:col-span-1">
                  <label className="font-label-caps text-on-surface-variant">City</label>
                  <input className="bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-0 py-2 font-body-lg" placeholder="New York" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant">State</label>
                  <input className="bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-0 py-2 font-body-lg" placeholder="NY" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant">ZIP Code</label>
                  <input className="bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-0 py-2 font-body-lg" placeholder="10001" type="text" />
                </div>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="flex flex-col gap-gutter">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <label
                onClick={() => setPaymentMethod('credit_card')}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors relative ${
                  paymentMethod === 'credit_card'
                    ? 'border-primary bg-primary-fixed/20'
                    : 'border-outline-variant hover:border-primary/50 bg-surface-container opacity-70 hover:opacity-100'
                }`}
              >
                <input
                  checked={paymentMethod === 'credit_card'}
                  onChange={() => setPaymentMethod('credit_card')}
                  className="sr-only"
                  name="payment"
                  type="radio"
                />
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${paymentMethod === 'credit_card' ? 'text-primary' : 'text-on-surface-variant'}`}>
                    credit_card
                  </span>
                  <span className={`font-title-md ${paymentMethod === 'credit_card' ? 'text-primary' : 'text-on-surface'}`}>
                    Credit Card
                  </span>
                </div>
                {paymentMethod === 'credit_card' && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
                )}
              </label>

              <label
                onClick={() => setPaymentMethod('paypal')}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors relative ${
                  paymentMethod === 'paypal'
                    ? 'border-primary bg-primary-fixed/20'
                    : 'border-outline-variant hover:border-primary/50 bg-surface-container opacity-70 hover:opacity-100'
                }`}
              >
                <input
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="sr-only"
                  name="payment"
                  type="radio"
                />
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${paymentMethod === 'paypal' ? 'text-primary' : 'text-on-surface-variant'}`}>
                    account_balance_wallet
                  </span>
                  <span className={`font-title-md ${paymentMethod === 'paypal' ? 'text-primary' : 'text-on-surface'}`}>
                    PayPal
                  </span>
                </div>
                {paymentMethod === 'paypal' && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
                )}
              </label>

              <label
                onClick={() => setPaymentMethod('apple_pay')}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors relative ${
                  paymentMethod === 'apple_pay'
                    ? 'border-primary bg-primary-fixed/20'
                    : 'border-outline-variant hover:border-primary/50 bg-surface-container opacity-70 hover:opacity-100'
                }`}
              >
                <input
                  checked={paymentMethod === 'apple_pay'}
                  onChange={() => setPaymentMethod('apple_pay')}
                  className="sr-only"
                  name="payment"
                  type="radio"
                />
                <div className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${paymentMethod === 'apple_pay' ? 'text-primary' : 'text-on-surface-variant'}`}>
                    phone_iphone
                  </span>
                  <span className={`font-title-md ${paymentMethod === 'apple_pay' ? 'text-primary' : 'text-on-surface'}`}>
                    Apple Pay
                  </span>
                </div>
                {paymentMethod === 'apple_pay' && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
                )}
              </label>
            </div>

            {/* Credit Card Details */}
            <div className="bg-surface-container p-gutter md:p-container-margin rounded-lg flex flex-col gap-gutter mt-2">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-on-surface-variant">Card Number</label>
                <div className="relative">
                  <input
                    className="bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-0 py-2 font-body-lg w-full"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-outline-variant">
                    credit_score
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-gutter">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant">Expiry Date</label>
                  <input
                    className="bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-0 py-2 font-body-lg"
                    placeholder="MM/YY"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant">CVC</label>
                  <input
                    className="bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-0 py-2 font-body-lg"
                    placeholder="123"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Order Summary Sidebar */}
        <aside className="lg:col-span-4">
          <div className="bg-surface-container-low rounded-xl p-container-margin lifted-shadow sticky top-[100px] flex flex-col gap-gutter">
            <h2 className="font-title-md text-primary border-b border-surface-variant pb-4">Order Summary</h2>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex justify-between font-body-lg text-on-surface">
                <span>Subtotal (2 items)</span>
                <span>$11,050</span>
              </div>
              <div className="flex justify-between font-body-lg text-on-surface">
                <span>White Glove Delivery</span>
                <span>$250</span>
              </div>
              <div className="flex justify-between font-body-lg text-on-surface">
                <span>Estimated Tax</span>
                <span>$884</span>
              </div>
            </div>
            <div className="flex justify-between font-headline-lg-mobile text-primary border-t border-surface-variant pt-4 pb-6">
              <span>Total</span>
              <span>$12,184</span>
            </div>
            <button
              type="button"
              onClick={() => navigate('/order-tracking')}
              className="bg-primary text-on-primary font-title-md py-4 rounded-full w-full lifted-shadow hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined icon-fill">lock</span>
              Secure Checkout
            </button>
            <p className="font-body-sm text-center text-on-surface-variant mt-2 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Encrypted and secure payment
            </p>
          </div>
        </aside>
      </main>

      <BottomNavBar activeTab="cart" />
    </div>
  );
}
