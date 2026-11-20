import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import BottomNavBar from '../components/BottomNavBar';
import { getOrder } from '../services/api';

const defaultOrder = {
  orderId: 'AUR-8472-X9',
  estimatedArrival: 'Today, 2:30 PM',
  status: 'Out for Delivery',
  courier: {
    name: 'James W.',
    company: 'Premium Logistics',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGA3WRibpsBjDIGtVzxT-WK1zcz-BdqARZsNDHhHWyWr44iYM7VUHUcZcl1462USQvmZ4ciVkDWHVEECoCJp1MfKlBCq8MFVAW35VHENe8pMjDA690B-s68WslbfAGVVEEZi9ww_swdWKU2OrD9t9a4UG_o5wmN8CyG03KGjB-dzdzJ1rAcHBrFBl6T78gg_3tbJ7dtc3xW7eD6Vrwl9t9rj4aqoiAwYKBeYtJ-m7iLmqSkR2uRFj5KA'
  },
  timeline: [
    { step: 'Order Placed', timestamp: 'Oct 24, 2023 - 09:41 AM', completed: true },
    { step: 'Processing', timestamp: 'Oct 25, 2023 - 11:20 AM', completed: true },
    { step: 'Shipped', timestamp: 'Oct 26, 2023 - 08:15 AM', completed: true },
    { step: 'Out for Delivery', timestamp: 'Arriving shortly', completed: true, active: true }
  ]
};

export default function OrderTrackingPage() {
  const [searchParams] = useSearchParams();
  const orderIdParam = searchParams.get('orderId') || 'AUR-8472-X9';
  const [order, setOrder] = useState(defaultOrder);

  useEffect(() => {
    if (orderIdParam) {
      getOrder(orderIdParam)
        .then(res => {
          if (res && res.data) {
            setOrder(res.data);
          }
        })
        .catch(() => {});
    }
  }, [orderIdParam]);

  return (
    <div className="bg-background text-on-background min-h-screen pb-32">
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .fill-icon { font-variation-settings: 'FILL' 1; }
        .shadow-lifted { box-shadow: 0px 10px 30px rgba(0, 0, 60, 0.05); }
      `}</style>

      <TopAppBar />

      <main className="px-container-margin max-w-5xl mx-auto pt-8">
        {/* Header Section */}
        <div className="mb-section-gap">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
            Track Order
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Order #{order.orderId}</p>
        </div>

        {/* Tracking Map & Status Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-container-margin mb-section-gap">
          {/* Map View */}
          <div className="rounded-xl overflow-hidden shadow-lifted bg-surface-container relative h-80 lg:h-full min-h-[320px]">
            <img
              alt="Map tracking shipment"
              className="w-full h-full object-cover absolute inset-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAic9_h7URxFCPz_HnbwLnxTzMbKdEJnRI9gV5qwHPiUWBnNWMlFpGesK8LeULEHtsWwZ_hsc3iLUeKC2kdQQCzeC--dyhC32LPmWKbUgQy2PVZ3GMRYPEPV3M2o6AMB-8ElHsDBD9c4B9UNL0FpBkHwHJ5CFhanWXPjlGvmTD40tSLZqD1lI8NPt9o2cJAIcuo39ruLN0udifkPINEghCkHhgPZQmIia-9Vr0aTKIpfReaCX9JOEwYQA"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-sm p-4 rounded-lg flex items-center justify-between shadow-lifted border border-surface-variant">
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase tracking-widest">
                  Est. Arrival
                </p>
                <p className="font-title-md text-title-md text-primary">{order.estimatedArrival}</p>
              </div>
              <div className="bg-primary-container text-on-primary-container p-2 rounded-full">
                <span className="material-symbols-outlined fill-icon">local_shipping</span>
              </div>
            </div>
          </div>

          {/* Status & Details */}
          <div className="flex flex-col gap-container-margin">
            {/* Status Timeline */}
            <div className="bg-surface-container-low rounded-xl p-6 shadow-lifted">
              <h2 className="font-title-md text-title-md text-primary mb-6">Delivery Status</h2>
              <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-surface-variant">
                {order.timeline.map((step, idx) => {
                  const isCompleted = step.completed;
                  const isActive = step.active;

                  return (
                    <div key={idx} className="relative z-10 flex items-start group">
                      {isCompleted && !isActive && (
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center absolute -left-[29px] ring-4 ring-surface-container-low">
                          <span className="material-symbols-outlined text-white text-[14px]">check</span>
                        </div>
                      )}
                      {isActive && (
                        <div className="w-6 h-6 rounded-full bg-surface-container-low border-2 border-secondary flex items-center justify-center absolute -left-[29px] ring-4 ring-surface-container-low">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        </div>
                      )}
                      {!isCompleted && !isActive && (
                        <div className="w-6 h-6 rounded-full bg-surface-container border-2 border-outline-variant flex items-center justify-center absolute -left-[29px] ring-4 ring-surface-container-low">
                          <div className="w-2 h-2 bg-outline-variant rounded-full"></div>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className={`font-body-lg text-body-lg font-semibold ${isActive ? 'text-secondary' : 'text-primary'}`}>
                          {step.step}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">{step.timestamp}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Courier Info */}
            <div className="bg-surface-container-low rounded-xl p-6 shadow-lifted">
              <h2 className="font-title-md text-title-md text-primary mb-4">Courier Information</h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden flex-shrink-0">
                  <img
                    alt="Courier Photo"
                    className="w-full h-full object-cover"
                    src={order.courier?.photo || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGA3WRibpsBjDIGtVzxT-WK1zcz-BdqARZsNDHhHWyWr44iYM7VUHUcZcl1462USQvmZ4ciVkDWHVEECoCJp1MfKlBCq8MFVAW35VHENe8pMjDA690B-s68WslbfAGVVEEZi9ww_swdWKU2OrD9t9a4UG_o5wmN8CyG03KGjB-dzdzJ1rAcHBrFBl6T78gg_3tbJ7dtc3xW7eD6Vrwl9t9rj4aqoiAwYKBeYtJ-m7iLmqSkR2uRFj5KA'}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-body-lg text-body-lg text-primary font-semibold">{order.courier?.name || 'James W.'}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{order.courier?.company || 'Premium Logistics'}</p>
                </div>
                <a
                  href="tel:+18005550199"
                  aria-label="Contact Courier"
                  className="bg-primary text-white p-3 rounded-full hover:bg-primary-fixed-variant transition-colors shadow-lifted flex items-center justify-center cursor-pointer no-underline"
                >
                  <span className="material-symbols-outlined">call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNavBar activeTab="profile" />
    </div>
  );
}
