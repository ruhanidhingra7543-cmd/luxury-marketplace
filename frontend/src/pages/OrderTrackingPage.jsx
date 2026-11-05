import React from 'react';
import { Link } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import BottomNavBar from '../components/BottomNavBar';

export default function OrderTrackingPage() {
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
          <p className="font-body-lg text-body-lg text-on-surface-variant">Order #AUR-8472-X9</p>
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
                <p className="font-title-md text-title-md text-primary">Today, 2:30 PM</p>
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
                {/* Step 1: Ordered (Completed) */}
                <div className="relative z-10 flex items-start group">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center absolute -left-[29px] ring-4 ring-surface-container-low">
                    <span className="material-symbols-outlined text-white text-[14px]">check</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body-lg text-body-lg text-primary font-semibold">Order Placed</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 24, 2023 - 09:41 AM</p>
                  </div>
                </div>

                {/* Step 2: Processing (Completed) */}
                <div className="relative z-10 flex items-start group">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center absolute -left-[29px] ring-4 ring-surface-container-low">
                    <span className="material-symbols-outlined text-white text-[14px]">check</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body-lg text-body-lg text-primary font-semibold">Processing</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 25, 2023 - 11:20 AM</p>
                  </div>
                </div>

                {/* Step 3: Shipped (Completed) */}
                <div className="relative z-10 flex items-start group">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center absolute -left-[29px] ring-4 ring-surface-container-low">
                    <span className="material-symbols-outlined text-white text-[14px]">check</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body-lg text-body-lg text-primary font-semibold">Shipped</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Oct 26, 2023 - 08:15 AM</p>
                  </div>
                </div>

                {/* Step 4: Out for Delivery (Active) */}
                <div className="relative z-10 flex items-start group">
                  <div className="w-6 h-6 rounded-full bg-surface-container-low border-2 border-secondary flex items-center justify-center absolute -left-[29px] ring-4 ring-surface-container-low">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-body-lg text-body-lg text-secondary font-semibold">Out for Delivery</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Arriving shortly</p>
                  </div>
                </div>
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGA3WRibpsBjDIGtVzxT-WK1zcz-BdqARZsNDHhHWyWr44iYM7VUHUcZcl1462USQvmZ4ciVkDWHVEECoCJp1MfKlBCq8MFVAW35VHENe8pMjDA690B-s68WslbfAGVVEEZi9ww_swdWKU2OrD9t9a4UG_o5wmN8CyG03KGjB-dzdzJ1rAcHBrFBl6T78gg_3tbJ7dtc3xW7eD6Vrwl9t9rj4aqoiAwYKBeYtJ-m7iLmqSkR2uRFj5KA"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-body-lg text-body-lg text-primary font-semibold">James W.</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Premium Logistics</p>
                </div>
                <button
                  aria-label="Contact Courier"
                  className="bg-primary text-white p-3 rounded-full hover:bg-primary-fixed-variant transition-colors shadow-lifted flex items-center justify-center cursor-pointer"
                >
                  <span className="material-symbols-outlined">call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNavBar activeTab="profile" />
    </div>
  );
}
