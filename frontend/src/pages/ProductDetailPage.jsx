import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TopAppBar from '../components/TopAppBar';

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDliRFfg-7GuYBE2vUAPwL6CTF5sVRbO1_C7Q7lb3qXGFOtzlGP3vu0-I8QlsI-JJHQJRZ6xYpCP3abYjHvzjXL_ssg6pUzIia-gDujVXRPxpqyKPE7RkFU6kerT-sTfD2F6FlwG-M_29w5qLRD4BnMWskqlwEewxwLguOzSad38VBikCfyn5enAnfwMfd7gPRMvZzhC5h7BogLAO1L6PzSXSrYqbsaf3ynyAMWVZXQChWxXpkVT8FsdQ',
      alt: 'Persian Heritage Runner rug main view',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeS4VjRzUqKfTxiIp1VzGeP34zg6gYvfW6bqBOxtgCRz2PZenJusAiWcHX6mRMXq1NvOWukIBHTtsAmsUmFUEckWRig3cEHuE8PurGu1piE1hKn5ZJC3ZM5_TRBfNBKNtIcW50futpN4EWC0OGonKsf8sdNCeaMsu-GDfUcXaFBhefjWQ88m0iBABotnxzn4jsnku59ApgrzjzJzIk0dBk6FDoPiSZKzF4KyvPP1HxHUiKEtN0sZAFtg',
      alt: 'Persian Heritage Runner - View 1',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfBBG91LPxOovy8zLR0owP9UlsdpDE2aEBEMv0Z8m2hWySa1CTmqPbD5vsxx1A8tQUz4Y0DrwMirrAqGANBpORAAUatr-_0xtNZe4-MMitcyr6rpLvJQFsRN42WIXiC7xWG9PEOgvHAhSztNL0w_8eHf6zikX28KcXm5p8xTGwf0DcDs8__BIW0kN_mN_hxTRdcNiYMvQIGVoeQqUjFUrq2rTDZIjfP4B-P3P4nw6ssxJmBf53uVi7-g',
      alt: 'Persian Heritage Runner - View 2',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtTW3Xn3JtlrW-BWHboKENmfqV2JBLqm7W4KY5F_ROVMlHOVLJBFDE8Aherfu3ALsJCm-jQwjsbkJRpxg4F4JQE5sCpRf89zrGdP7ZicAwaKDnnYyDq16WeSgYn72pulDeKDSB7noQoLzL6xdIIUQSya53SaJNOcXhHQBxZ1xzIcx4BHBxJJSePa0rF0wdH58G7rFbtqbKFjPE1eARlKOnDTJhAdsAKt-N2S56qmR5-H9xfgXr22qN6g',
      alt: 'Persian Heritage Runner - View 3',
    },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedDimension, setSelectedDimension] = useState("2.5' x 8'");
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const colors = [
    { name: 'Terracotta Red', bg: 'bg-[#8B3A2B]' },
    { name: 'Deep Navy', bg: 'bg-[#1A237E]' },
    { name: 'Oatmeal Beige', bg: 'bg-[#D4C4B7]' },
  ];

  return (
    <div className="bg-background text-on-surface font-body-lg min-h-screen pb-32">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Top App Bar */}
      <TopAppBar />

      <main className="max-w-7xl mx-auto px-container-margin pt-6 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-section-gap">
          {/* Image Gallery Column */}
          <div className="flex flex-col gap-4">
            <div className="relative bg-surface-container-low rounded-xl overflow-hidden aspect-[3/4] md:aspect-square shadow-[0px_10px_30px_rgba(0,0,60,0.05)]">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-crosshair"
                alt={galleryImages[activeImageIndex].alt}
                src={galleryImages[activeImageIndex].src}
              />
              <button
                aria-label="Zoom Image"
                type="button"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-3 rounded-full text-primary hover:opacity-80 transition-opacity shadow-sm"
              >
                <span className="material-symbols-outlined">zoom_in</span>
              </button>
              {/* Swipe Indicator */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeImageIndex === i ? 'bg-primary w-4' : 'bg-primary/30'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails (Desktop) */}
            <div className="hidden md:grid grid-cols-4 gap-4">
              {galleryImages.map((img, index) => {
                const isActive = activeImageIndex === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`aspect-square bg-surface-container-low rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                      isActive
                        ? 'border-primary opacity-100'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      alt={img.alt}
                      src={img.src}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product Details Column */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
                Persian Heritage Runner
              </h2>
              <div className="flex items-center gap-4">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-title-md px-4 py-1 rounded-full shadow-sm">
                  $2,450
                </span>
                <span className="text-on-surface-variant font-body-sm text-body-sm">
                  Free Global Shipping
                </span>
              </div>
            </div>

            {/* Selection */}
            <div className="flex flex-col gap-6">
              {/* Size */}
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Dimensions
                </label>
                <div className="relative">
                  <select
                    value={selectedDimension}
                    onChange={(e) => setSelectedDimension(e.target.value)}
                    className="w-full appearance-none bg-surface-container rounded-lg border-0 text-on-surface font-body-lg py-4 pl-4 pr-12 focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                  >
                    <option>2.5' x 8'</option>
                    <option>3' x 10'</option>
                    <option>3' x 12' (Custom)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Color Swatches */}
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  Color Palette
                </label>
                <div className="flex gap-4">
                  {colors.map((color, idx) => {
                    const isSelected = selectedColorIndex === idx;
                    return (
                      <button
                        key={color.name}
                        aria-label={color.name}
                        type="button"
                        onClick={() => setSelectedColorIndex(idx)}
                        className={`w-10 h-10 rounded-full ${color.bg} border-2 ${
                          isSelected
                            ? 'border-primary ring-2 ring-transparent ring-offset-2 ring-offset-background'
                            : 'border-transparent hover:border-outline-variant'
                        } transition-colors shadow-sm`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Info Tabs */}
            <div className="mt-4">
              <div className="flex gap-8 border-b border-outline-variant/30 mb-6 relative">
                <button
                  type="button"
                  onClick={() => setActiveTab('description')}
                  className={`pb-3 font-title-md text-title-md transition-colors ${
                    activeTab === 'description'
                      ? 'text-primary border-b-2 border-primary -mb-[1px]'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  Description
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('specifications')}
                  className={`pb-3 font-title-md text-title-md transition-colors ${
                    activeTab === 'specifications'
                      ? 'text-primary border-b-2 border-primary -mb-[1px]'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  Specifications
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('shipping')}
                  className={`pb-3 font-title-md text-title-md transition-colors ${
                    activeTab === 'shipping'
                      ? 'text-primary border-b-2 border-primary -mb-[1px]'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  Shipping
                </button>
              </div>

              <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-4">
                {activeTab === 'description' && (
                  <>
                    <p>
                      Hand-knotted in the heart of the Zagros Mountains, this runner embodies centuries of weaving
                      tradition translated for the modern sanctuary. The geometric motifs are rendered in undyed,
                      hand-spun wool, yielding a subtle striation that captures the light.
                    </p>
                    <p>
                      Its low pile and dense knotting make it exceptionally durable, ideal for high-traffic corridors
                      while maintaining a soft, tactile warmth underfoot. A quiet statement piece that anchors any
                      minimalist interior.
                    </p>
                  </>
                )}
                {activeTab === 'specifications' && (
                  <div className="space-y-2">
                    <p><strong className="text-on-surface">Material:</strong> 100% Hand-spun Zagros Highland Wool on Cotton Foundation</p>
                    <p><strong className="text-on-surface">Weave:</strong> Hand-knotted Tibetan weave technique (~160 KPSI)</p>
                    <p><strong className="text-on-surface">Pile Height:</strong> 0.25 inches (low-profile luxury)</p>
                    <p><strong className="text-on-surface">Origin:</strong> Zagros Mountain Artisans, Handcrafted</p>
                    <p><strong className="text-on-surface">Care:</strong> Professional rug cleaning recommended; vacuum regularly on low suction without beater bar</p>
                  </div>
                )}
                {activeTab === 'shipping' && (
                  <div className="space-y-2">
                    <p><strong className="text-on-surface">Global Delivery:</strong> Complimentary insured white-glove shipping on all orders.</p>
                    <p><strong className="text-on-surface">Timeline:</strong> 5–8 business days worldwide with tracked climate-controlled courier.</p>
                    <p><strong className="text-on-surface">Returns:</strong> 30-day in-home trial. Complimentary pickup and full refund if not completely captivated.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-surface-variant px-container-margin py-4 z-40 shadow-[0px_-10px_30px_rgba(0,0,60,0.03)]">
        <div className="max-w-7xl mx-auto flex gap-4">
          <button
            type="button"
            aria-label="Add to Wishlist"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`flex items-center justify-center p-4 rounded-lg border border-tertiary ${
              isWishlisted ? 'bg-tertiary text-on-tertiary' : 'text-tertiary hover:bg-tertiary/5'
            } transition-colors shadow-sm`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
            >
              {isWishlisted ? 'favorite' : 'favorite_border'}
            </span>
          </button>
          <Link
            to="/cart"
            className="flex-1 bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-widest py-4 px-8 rounded-lg shadow-[0px_10px_30px_rgba(0,0,60,0.05)] hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Add to Cart</span>
            <span className="font-title-md text-title-md">·</span>
            <span>$2,450</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
