import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { id: 'home', label: 'Home', icon: 'home', path: '/home' },
  { id: 'search', label: 'Search', icon: 'search', path: '/products' },
  { id: 'cart', label: 'Cart', icon: 'shopping_bag', path: '/cart' },
  { id: 'profile', label: 'Profile', icon: 'person', path: '/profile' },
];

export default function BottomNavBar({ activeTab }) {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-surface-variant/50 z-40 md:hidden">
      <div className="flex items-center justify-around py-2 px-container-margin">
        {navItems.map((item) => {
          const isActive = activeTab === item.id || location.pathname === item.path;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-200 no-underline ${
                isActive
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <span
                className="material-symbols-outlined text-[24px]"
                style={{
                  fontVariationSettings: isActive
                    ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {item.icon}
              </span>
              <span className={`text-[10px] font-medium ${isActive ? 'text-primary' : ''}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -bottom-0 w-8 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
