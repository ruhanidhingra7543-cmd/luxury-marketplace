import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';
import BottomNavBar from '../components/BottomNavBar';
import { getProducts } from '../services/api';

const initialProducts = [
  {
    id: 1,
    title: 'Atlas Hand-Knotted Wool',
    rating: '4.9',
    subtitle: "Moroccan Origin • 8' x 10'",
    price: '$2,450',
    badge: 'Trade',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy7hWtCsu0B_sbmZcdFZ6URdoKUl4JmRrvV95ANBg3KOlbVPpyH6r_tr8qr8E2LK4VVBYU6XRFm9brZx6inE9V-mvh7saToLy9gn3WcdyprGmbR0hGo-tB6B4XcjeygWFrtlu3fQWQRQcT2ZaN_NHLCRmEA6BtLxEZkxJI8naPu5cqUxnOMXEqL_F8v7LPk36XZn9qwCRDO3QyURS-WRxjY9qNDOWaWKOJDiiUS_Dw_gurQmE3zBozNQ',
  },
  {
    id: 2,
    title: 'Oushak Vintage Silk Runner',
    rating: '4.8',
    subtitle: "Turkish Origin • 2.5' x 8'",
    price: '$1,890',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAThMGyl_SJtqp4EvBhrk-GVejJRl8w-8EP4YB11K9W5PPiqPoGoUObyOxso3hyeA6wyBNi92rMkd47pkOpNwwWfxjx5XlWv1gnr6OWOlRmG0Ett1nRL61VtAfieNcR4t-NsTgd_rgH9-5biSqhTNgrSnrqVgtw0LQvHXcRlDayYxNGWbz7DKEFRZFjlh6Ep7Haq_khxBSVymNpUlqhhjYJCQbfAOPANyfYb-GhOyu8RnnjUg-SnGk3Mg',
  },
  {
    id: 3,
    title: 'Kashan Silk Weave',
    rating: '4.9',
    subtitle: "Hand-knotted Silk • 8' x 10'",
    price: '$4,200',
    badge: 'Trade',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgEvt6HGDSCwMbUacNmaiTC3uodFq4PDIUvrpAabvUcYs6oRGGPXfJ44G63Ly6fnEitcDnz2LxlNGuHI7--DwGllJdwsdUnytReZ2KG0sWVsQsvBvOuG7Y8mJLdLec_E1B11m4SE2qDzLhADL81y32S-wUNC1gbB3eh33cLcxxB8Yps6xlLrEcmxa3czsdqvLvRrR9R7aiFeVEQ9YKcXaYI9OO4loZykG254Fl3z64Bs1lHd7SJr3zVQ',
  },
  {
    id: 4,
    title: 'Azure Flow',
    rating: '4.7',
    subtitle: "Wool & Silk Blend • 9' x 12'",
    price: '$3,850',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9vGCd3th0h_XslsT-MxaC48W3lIcfz4P6NWIfIjbqIrc7yEvzDQ7zmtOV6N31m6jMlmYMg6029NdcX2_d8wDsx_gfYpqxPDUSU4Z-VZVoe941e3FAkzflr8sfkRP8AI7gKbKVybv7MxIbxLnWd9_9L1sv3AYBTXserzyN23RofOXZTxulznGJeJIN9R5bfdHvHMQaMkW3ZMTZq-txu6w5Id-eN6Q_KSfmPWypGPYSUKRaBNdoeNp4JA',
  },
  {
    id: 5,
    title: 'Terracotta Kilim',
    rating: '5.0',
    subtitle: "Flatweave Wool • 6' x 9'",
    price: '$1,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu5yAiQwFSQeiXiCYhqgbXCEeD0zuHfKvv6wExt-Jk1zbCwfRuVOC-ZbPDjKTuzZA_CIP7PtX4sR8nTy1jn6iTUXE98riX8UDFHVHauhnl7n-YtDhXVSMMuC1joxpSxSbis571BH03IF1U3S29bArXlK4-i2L0M0DqfEdr8dy2tx9Z0DIk90Q3YKUM_J1GUBLmwA3-hlDNEcKW_QHlRtQ8B1t8D3TtKnhA04v1h4vsZNR7AHKdcATrWA',
  },
  {
    id: 6,
    title: 'Atlas Shag',
    rating: '4.8',
    subtitle: "High-Pile Wool • 10' x 14'",
    price: '$5,400',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn_dIizkX-VmqRv200e24e5rES79HZxOgH8mji2WRQnhhmxenMIfHX_Izvdb22MO2JBAC8CCSRUxQhN58EDF7JQ0tTMCZNV-JE_WXjsHP8oBaQVD3Wb4Pg78Lr-3JKdWS2ldY94JwY4TAFlRU6Iot3Xkj5dXpk711gnern9jZUClOoyoivsu5WOVvoHZLqsHa0EsD8q4bZSCbicAqCCeiuHlq-DCX4JXMuOyBeKv3b7qaW79ZnxLAbJg',
  }
];

export default function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedFilter, setSelectedFilter] = useState('Material');
  const [activeFilterTag, setActiveFilterTag] = useState(initialCategory ? `Category: ${initialCategory}` : 'Material: Silk');
  const [favorites, setFavorites] = useState({ 3: true });
  const [visibleCount, setVisibleCount] = useState(6);
  const [productsList, setProductsList] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch products from backend
  useEffect(() => {
    setIsLoading(true);
    const params = {};
    if (searchQuery.trim()) params.search = searchQuery.trim();
    if (initialCategory) params.category = initialCategory;
    if (activeFilterTag.includes('Material: Silk')) params.material = 'Silk';

    getProducts(params)
      .then(res => {
        if (res && res.data && res.data.length > 0) {
          const mapped = res.data.map(p => ({
            id: p.id,
            title: p.title,
            rating: String(p.rating),
            subtitle: `${p.material} • ${p.dimensions}`,
            price: p.priceFormatted || `$${p.price.toLocaleString()}`,
            badge: p.isTrade ? 'Trade' : null,
            image: p.image,
            alt: p.description
          }));
          setProductsList(mapped);
        }
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [searchQuery, initialCategory, activeFilterTag]);

  const toggleFavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filterButtons = ['Color', 'Size', 'Material', 'Price', 'Style', 'Origin'];

  return (
    <div className="bg-background text-on-background min-h-screen font-body-lg flex flex-col pb-[88px] md:pb-0">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.fill {
          font-variation-settings: 'FILL' 1;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Top App Bar */}
      <TopAppBar />

      {/* Desktop Nav Cluster */}
      <nav className="hidden md:flex justify-center gap-8 py-4 px-container-margin w-full max-w-7xl mx-auto border-t border-surface-variant/30">
        <Link
          to="/home"
          className="font-label-caps text-label-caps text-on-surface-variant hover:opacity-80 transition-opacity"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="font-label-caps text-label-caps text-primary border-b-2 border-primary pb-1"
        >
          Search
        </Link>
        <Link
          to="/cart"
          className="font-label-caps text-label-caps text-on-surface-variant hover:opacity-80 transition-opacity"
        >
          Cart
        </Link>
        <Link
          to="/profile"
          className="font-label-caps text-label-caps text-on-surface-variant hover:opacity-80 transition-opacity"
        >
          Profile
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-container-margin pb-section-gap">
        {/* Page Header & Search */}
        <div className="pt-unit pb-6 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Luxury Rugs
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Explore our curated collection of handcrafted textiles.
            </p>
          </div>

          {/* Integrated Search Bar */}
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="w-full bg-surface-container rounded-full py-4 pl-12 pr-4 text-body-lg font-body-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-surface-tint border-none placeholder:text-outline"
              placeholder="Search by style, material, or origin..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-on-primary rounded-full p-2 hover:opacity-90 transition-opacity flex items-center justify-center cursor-pointer"
              aria-label="Search filter"
            >
              <span className="material-symbols-outlined text-sm">tune</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto no-scrollbar gap-gutter pb-6 -mx-container-margin px-container-margin">
          {filterButtons.map((filter) => {
            const isSelected = selectedFilter === filter;
            if (isSelected) {
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className="flex-shrink-0 px-6 py-2 rounded-full border-none bg-secondary text-on-secondary font-label-caps text-label-caps shadow-sm cursor-pointer"
                >
                  {filter}
                </button>
              );
            }
            const isBorderOutline = filter === 'Style' || filter === 'Origin';
            return (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilter(filter);
                  if (filter === 'Material') setActiveFilterTag('Material: Silk');
                }}
                className={`flex-shrink-0 px-6 py-2 rounded-full cursor-pointer ${
                  isBorderOutline
                    ? 'border border-outline text-on-surface-variant'
                    : 'border border-primary text-primary'
                } font-label-caps text-label-caps hover:bg-surface-container-low transition-colors`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Active Filter */}
        {activeFilterTag && (
          <div className="flex items-center gap-2 pb-6">
            <span className="font-body-sm text-body-sm text-on-surface-variant">Active:</span>
            <div className="flex items-center gap-1 bg-surface-container-high px-3 py-1 rounded-full">
              <span className="font-body-sm text-body-sm text-on-surface">{activeFilterTag}</span>
              <button
                type="button"
                onClick={() => setActiveFilterTag('')}
                className="flex items-center justify-center cursor-pointer"
                aria-label="Remove filter"
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                  close
                </span>
              </button>
            </div>
            <button
              type="button"
              onClick={() => setActiveFilterTag('')}
              className="font-label-caps text-label-caps text-secondary ml-auto hover:underline cursor-pointer"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          {productsList.slice(0, visibleCount).map((product) => {
            const isFav = !!favorites[product.id];
            return (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group flex flex-col gap-3 cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-surface-container-low">
                  <img
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt={product.alt || product.title}
                    src={product.image}
                  />
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(product.id, e)}
                    aria-label="Add to Wishlist"
                    className={`absolute top-3 right-3 p-1.5 rounded-full bg-surface/80 backdrop-blur-sm ${
                      isFav ? 'text-secondary' : 'text-on-surface hover:text-secondary'
                    } transition-colors`}
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${isFav ? 'fill' : ''}`}
                    >
                      favorite
                    </span>
                  </button>
                  {product.badge && (
                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-surface/90 border border-tertiary text-tertiary font-label-caps text-[10px] rounded backdrop-blur-sm shadow-sm">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-title-md text-title-md text-on-surface line-clamp-1">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-0.5 mt-1">
                      <span className="material-symbols-outlined fill text-[14px] text-tertiary-container">
                        star
                      </span>
                      <span className="font-body-sm text-[12px] text-on-surface-variant">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                    {product.subtitle}
                  </p>
                  <div className="mt-1 flex items-center bg-tertiary-container/10 w-fit px-2 py-0.5 rounded">
                    <span className="font-title-md text-[16px] text-primary">{product.price}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Load More Button */}
        {visibleCount < productsList.length && (
          <div className="w-full flex justify-center mt-section-gap">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-8 py-4 bg-primary text-on-primary font-title-md text-title-md rounded shadow-[0px_10px_30px_rgba(0,0,60,0.08)] hover:opacity-90 transition-opacity active:scale-95 transition-transform cursor-pointer"
            >
              Load More Textures
            </button>
          </div>
        )}
      </main>

      {/* Bottom Nav Bar (Mobile) */}
      <BottomNavBar activeTab="search" />
    </div>
  );
}
