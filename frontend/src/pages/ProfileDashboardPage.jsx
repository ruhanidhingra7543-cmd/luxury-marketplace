import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import BottomNavBar from '../components/BottomNavBar';
import AuthModal from '../components/AuthModal';
import { getUserProfile, getCurrentUser, logout } from '../services/api';

const defaultProfile = {
  name: 'Elena Rostova',
  accountType: 'Business Account',
  company: 'Rostova Interior Architecture',
  wholesaleTier: 'Wholesale tier active',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8EE6gAmh0UPcGnwQhQ7hzWQ3o1IDLXpjB8CNgDdCVCXWT-H92lzjduj3er9BfO0vT2g31UXn6796yzv6G8reiqTNixwbjhbk6eOM8gpOYKDvoGRpFWdQxkh8SbYwjKOcgSz-vRyENje0l5FIgbEZhX8No3pSKQzLVP4v_0JkDDiE0e9o5xey2BSCOsVLzw5qGvBa_ySvJA86oPiUQJRgeGcIUXAofmA2BSvclMi5u5edoIg9RdlJQpQ'
};

export default function ProfileDashboardPage() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(defaultProfile);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then(res => {
        if (res && res.authenticated) {
          setIsAuthenticated(true);
          setProfile(res.user);
        } else {
          getUserProfile()
            .then(pRes => {
              if (pRes && pRes.data) setProfile(pRes.data);
            })
            .catch(() => {});
        }
      })
      .catch(() => {
        getUserProfile()
          .then(pRes => {
            if (pRes && pRes.data) setProfile(pRes.data);
          })
          .catch(() => {});
      });
  }, []);

  const handleSignOut = async () => {
    await logout();
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="bg-background text-on-background min-h-screen">
      <style>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
      `}</style>

      <TopAppBar />

      <main className="px-container-margin pb-section-gap md:max-w-4xl md:mx-auto">
        {/* User Profile Header */}
        <section className="mt-section-gap flex flex-col items-center justify-center text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 shadow-[0px_10px_30px_rgba(0,0,60,0.05)] border-4 border-surface-container-low">
            <img
              alt="Profile Picture"
              className="w-full h-full object-cover"
              src={profile.avatar || defaultProfile.avatar}
            />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">{profile.name}</h2>
          <div className="inline-flex items-center px-3 py-1 border border-tertiary text-tertiary rounded-full font-label-caps text-label-caps uppercase bg-tertiary-container/10">
            <span className="material-symbols-outlined text-[16px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>
              storefront
            </span>
            {profile.accountType || 'Business Account'}
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 max-w-sm">
            Managing procurement for {profile.company || 'Rostova Interior Architecture'}. {profile.wholesaleTier || 'Wholesale tier active.'}
          </p>
          {!isAuthenticated && (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="mt-4 px-6 py-2 bg-secondary text-on-secondary rounded-full font-label-caps text-xs tracking-wider uppercase shadow-ambient hover:opacity-90 transition-all cursor-pointer"
            >
              Sign In to Your Account
            </button>
          )}
        </section>

        {/* Dashboard Grid */}
        <section className="mt-section-gap grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Order History */}
          <Link
            to="/order-tracking"
            className="group block bg-surface-container rounded-xl p-6 shadow-[0px_10px_30px_rgba(0,0,60,0.05)] hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                  history
                </span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                arrow_forward
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-1">Order History</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              View past wholesale orders and track current shipments.
            </p>
          </Link>

          {/* Saved Products */}
          <Link
            to="/products"
            className="group block bg-surface-container rounded-xl p-6 shadow-[0px_10px_30px_rgba(0,0,60,0.05)] hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                  favorite
                </span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                arrow_forward
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-1">Saved Collections</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Manage mood boards and curated client selections.
            </p>
          </Link>

          {/* Measurement Guides */}
          <Link
            to="/custom-order"
            className="group block bg-surface-container rounded-xl p-6 shadow-[0px_10px_30px_rgba(0,0,60,0.05)] hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                  square_foot
                </span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                arrow_forward
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-1">Measurement Specs</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Access detailed technical guides for bespoke commissions.
            </p>
          </Link>

          {/* Tax Information */}
          <div className="group block bg-surface-container rounded-xl p-6 shadow-[0px_10px_30px_rgba(0,0,60,0.05)] hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-tertiary/5 rounded-full flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                  receipt_long
                </span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-tertiary transition-colors">
                arrow_forward
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-1">Tax Documents</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Update resale certificates and download invoices.
            </p>
          </div>

          {/* Settings */}
          <div className="group block bg-surface-container rounded-xl p-6 shadow-[0px_10px_30px_rgba(0,0,60,0.05)] hover:-translate-y-1 transition-transform duration-300 md:col-span-2 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                  settings
                </span>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                arrow_forward
              </span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-1">Account Settings</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Manage team access, shipping addresses, and payment methods.
            </p>
          </div>
        </section>

        {/* Logout Action */}
        <div className="mt-8 flex justify-center pb-24 md:pb-8">
          <button
            type="button"
            onClick={handleSignOut}
            className="px-8 py-4 bg-transparent border-none text-secondary font-label-caps text-label-caps uppercase hover:opacity-70 transition-opacity flex items-center cursor-pointer"
          >
            <span className="material-symbols-outlined mr-2" style={{ fontVariationSettings: "'FILL' 0" }}>
              logout
            </span>
            Sign Out
          </button>
        </div>
      </main>

      <BottomNavBar activeTab="profile" />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={(user) => {
          setIsAuthenticated(true);
          setProfile(user);
        }}
      />
    </div>
  );
}
