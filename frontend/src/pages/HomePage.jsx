import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import BottomNavBar from '../components/BottomNavBar';

export default function HomePage() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Rugs');
  const [favorites, setFavorites] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll effect for top app bar shadow
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
      const topAppBar = document.getElementById('topAppBar');
      if (topAppBar) {
        if (scrolled) {
          topAppBar.classList.add('shadow-ambient');
        } else {
          topAppBar.classList.remove('shadow-ambient');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { name: 'Rugs', path: '/products' },
    { name: 'Mats', path: '/products' },
    { name: 'Carpets', path: '/products' },
    { name: 'Runners', path: '/products' },
    { name: 'Custom Designs', path: '/custom-order' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen flex flex-col overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container pb-24">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Top App Bar */}
      <TopAppBar isScrolled={isScrolled} />

      {/* Search Bar */}
      <div className="px-container-margin py-4 w-full">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative bg-surface-container rounded-full flex items-center px-4 py-3 shadow-ambient transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-container">
            <span className="material-symbols-outlined text-outline mr-3">search</span>
            <input
              className="bg-transparent border-none outline-none w-full text-body-lg text-on-surface placeholder-outline focus:ring-0"
              placeholder="Search textures, styles, origins..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="ml-2 text-primary p-1 rounded-full hover:bg-surface-variant transition-colors flex items-center justify-center"
              aria-label="Filter"
            >
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </form>
      </div>

      {/* Main Canvas */}
      <main className="flex-grow flex flex-col gap-section-gap pt-4">
        {/* Featured Banner */}
        <section className="px-container-margin w-full">
          <div
            onClick={() => navigate('/products')}
            className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-ambient group cursor-pointer"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDO8PLm2bb7FOgEIPpxUNlaC3otuQ2qRvb2mouSTCK91AFns6x40EDVw6Zv7Jbc7fal49YZBYigh7sF2-TIKrP3cqtLm0jeJFuQbhwXmM8frbZBmAVbvlCfEKtRTxfK54fZhpY4XeRZhHxwA4dpSF68iY5PJop_pEUnwVC8zwt4DkV3nVyLJ5n_V3-2SUHKwDP9hWcfQ6Mm9FmZ1gB9nZaOpJIxhWSjlg17Sfq5bpWlOC_JDFdrKZZFoQ')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <span className="text-label-caps font-label-caps text-tertiary-fixed mb-2 uppercase tracking-widest">
                New Arrival
              </span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary mb-4 leading-tight">
                The Silk Road
                <br />
                Collection
              </h2>
              <p className="font-body-lg text-body-lg text-primary-fixed mb-6 max-w-md hidden md:block">
                Discover the ancient artistry of hand-spun silk, reimagined for the modern sanctuary.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/products');
                }}
                className="bg-secondary text-on-secondary font-title-md text-title-md py-4 px-8 rounded-lg shadow-ambient hover:bg-on-secondary-fixed transition-colors w-max active:scale-95 duration-200"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="w-full">
          <div className="px-container-margin mb-4 flex justify-between items-end">
            <h3 className="font-title-md text-title-md text-primary">Curated Categories</h3>
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-gutter px-container-margin pb-4 snap-x snap-mandatory">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    if (cat.name === 'Custom Designs') {
                      navigate(cat.path);
                    }
                  }}
                  className={
                    isActive
                      ? 'snap-start shrink-0 bg-secondary text-on-secondary border-none rounded-full px-6 py-3 font-title-md text-title-md flex items-center gap-2 shadow-sm transition-all active:scale-95'
                      : 'snap-start shrink-0 bg-transparent text-primary border border-primary/20 rounded-full px-6 py-3 font-title-md text-title-md flex items-center gap-2 hover:border-primary/50 transition-all active:scale-95'
                  }
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* Trending */}
        <section className="w-full">
          <div className="px-container-margin mb-6 flex justify-between items-center">
            <h3 className="font-title-md text-title-md text-primary">Trending Textiles</h3>
            <Link
              to="/products"
              className="text-secondary font-label-caps text-label-caps uppercase tracking-widest hover:underline flex items-center gap-1"
            >
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-container-margin px-container-margin">
            {/* Product Card 1 */}
            <Link
              to="/product/1"
              className="group cursor-pointer flex flex-col gap-3 rounded-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container shadow-ambient">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Atlas Hand-Knotted Wool rug"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy7hWtCsu0B_sbmZcdFZ6URdoKUl4JmRrvV95ANBg3KOlbVPpyH6r_tr8qr8E2LK4VVBYU6XRFm9brZx6inE9V-mvh7saToLy9gn3WcdyprGmbR0hGo-tB6B4XcjeygWFrtlu3fQWQRQcT2ZaN_NHLCRmEA6BtLxEZkxJI8naPu5cqUxnOMXEqL_F8v7LPk36XZn9qwCRDO3QyURS-WRxjY9qNDOWaWKOJDiiUS_Dw_gurQmE3zBozNQ"
                />
                <button
                  type="button"
                  onClick={(e) => toggleFavorite('trend-1', e)}
                  aria-label="Add to Wishlist"
                  className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-secondary transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ fontVariationSettings: favorites['trend-1'] ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    favorite
                  </span>
                </button>
                <div className="absolute bottom-3 left-3 bg-tertiary-fixed/90 backdrop-blur-sm text-on-tertiary-fixed px-3 py-1 rounded-sm font-label-caps text-label-caps border border-tertiary-fixed-dim shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">verified</span> Trade
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-start">
                  <h4 className="font-title-md text-title-md text-primary group-hover:text-primary-container transition-colors">
                    Atlas Hand-Knotted Wool
                  </h4>
                  <span className="bg-surface-container-high text-primary px-3 py-1 rounded-full font-title-md text-title-md shadow-sm">
                    $2,450
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Moroccan Origin • 8' x 10'
                </p>
              </div>
            </Link>

            {/* Product Card 2 */}
            <Link
              to="/product/2"
              className="group cursor-pointer flex flex-col gap-3 rounded-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container shadow-ambient">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Oushak Vintage Silk Runner"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAThMGyl_SJtqp4EvBhrk-GVejJRl8w-8EP4YB11K9W5PPiqPoGoUObyOxso3hyeA6wyBNi92rMkd47pkOpNwwWfxjx5XlWv1gnr6OWOlRmG0Ett1nRL61VtAfieNcR4t-NsTgd_rgH9-5biSqhTNgrSnrqVgtw0LQvHXcRlDayYxNGWbz7DKEFRZFjlh6Ep7Haq_khxBSVymNpUlqhhjYJCQbfAOPANyfYb-GhOyu8RnnjUg-SnGk3Mg"
                />
                <button
                  type="button"
                  onClick={(e) => toggleFavorite('trend-2', e)}
                  aria-label="Add to Wishlist"
                  className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-secondary transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ fontVariationSettings: favorites['trend-2'] ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    favorite
                  </span>
                </button>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-start">
                  <h4 className="font-title-md text-title-md text-primary group-hover:text-primary-container transition-colors">
                    Oushak Vintage Silk Runner
                  </h4>
                  <span className="bg-surface-container-high text-primary px-3 py-1 rounded-full font-title-md text-title-md shadow-sm">
                    $1,890
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Turkish Origin • 2.5' x 8'
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Bottom Nav Bar */}
      <BottomNavBar activeTab="home" />
    </div>
  );
}
