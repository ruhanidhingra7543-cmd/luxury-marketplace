import React, { useState } from 'react';
import { login, register } from '../services/api';

export default function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await login(email, password);
        if (onAuthSuccess) onAuthSuccess(res.user);
        onClose();
      } else {
        const res = await register({ name, email, password, company });
        if (onAuthSuccess) onAuthSuccess(res.user);
        onClose();
      }
    } catch (err) {
      setError(err.message || 'Authentication failed. Please verify your details.');
    } finally {
      setLoading(false);
    }
  };

  const fillDemoAccount = () => {
    setEmail('elena.rostova@rostovadesign.com');
    setPassword('password123');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-surface-container-low rounded-2xl shadow-lifted p-6 md:p-8 border border-surface-variant/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary p-2 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary mb-3">
            <span className="material-symbols-outlined text-2xl">lock</span>
          </div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">
            {mode === 'login' ? 'Trade Portal Sign In' : 'Create Trade Account'}
          </h2>
          <p className="font-body-sm text-on-surface-variant mt-1">
            {mode === 'login'
              ? 'Access wholesale pricing, client moodboards, and orders.'
              : 'Join our exclusive network of certified interior architects.'}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex border-b border-surface-variant/50 mb-6">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`flex-1 pb-3 text-center font-title-md transition-colors cursor-pointer ${
              mode === 'login'
                ? 'text-primary border-b-2 border-primary -mb-[1px]'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); }}
            className={`flex-1 pb-3 text-center font-title-md transition-colors cursor-pointer ${
              mode === 'register'
                ? 'text-primary border-b-2 border-primary -mb-[1px]'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Register
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 bg-secondary/10 border border-secondary/30 rounded-lg text-secondary text-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-base">error</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <>
              <div>
                <label className="block font-label-caps text-on-surface-variant mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Elena Rostova"
                  className="w-full bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-2 py-2 font-body-lg text-on-surface outline-none"
                />
              </div>
              <div>
                <label className="block font-label-caps text-on-surface-variant mb-1">Firm / Studio Name</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Rostova Interior Architecture"
                  className="w-full bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-2 py-2 font-body-lg text-on-surface outline-none"
                />
              </div>
            </>
          )}

          <div>
            <label className="block font-label-caps text-on-surface-variant mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="designer@studio.com"
              className="w-full bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-2 py-2 font-body-lg text-on-surface outline-none"
            />
          </div>

          <div>
            <label className="block font-label-caps text-on-surface-variant mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-background border-none border-b-2 border-surface-dim focus:border-primary focus:ring-0 px-2 py-2 font-body-lg text-on-surface outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-on-primary font-title-md py-3.5 rounded-full shadow-ambient hover:opacity-90 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer mt-6 disabled:opacity-50"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : mode === 'login' ? (
              <>
                <span>Sign In to Account</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </>
            ) : (
              <>
                <span>Complete Registration</span>
                <span className="material-symbols-outlined text-sm">check</span>
              </>
            )}
          </button>
        </form>

        {/* Demo Account Helper */}
        {mode === 'login' && (
          <div className="mt-4 pt-4 border-t border-surface-variant/40 text-center">
            <button
              type="button"
              onClick={fillDemoAccount}
              className="text-xs text-secondary hover:underline cursor-pointer flex items-center justify-center gap-1 mx-auto"
            >
              <span className="material-symbols-outlined text-xs">key</span>
              Auto-fill Demo Credentials (Elena Rostova)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
