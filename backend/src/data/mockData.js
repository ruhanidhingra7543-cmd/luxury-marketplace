export const categories = [
  { id: 'rugs', name: 'Rugs', description: 'Handcrafted luxury rugs for living spaces' },
  { id: 'mats', name: 'Mats', description: 'Artisanal door and bath accent mats' },
  { id: 'carpets', name: 'Carpets', description: 'Expansive wall-to-wall and area carpets' },
  { id: 'runners', name: 'Runners', description: 'Hallway and corridor statement runners' },
  { id: 'custom', name: 'Custom Designs', description: 'Bespoke custom commissions' }
];

export const products = [
  {
    id: 1,
    title: 'Atlas Hand-Knotted Wool',
    slug: 'atlas-hand-knotted-wool',
    category: 'Rugs',
    price: 2450,
    priceFormatted: '$2,450',
    origin: 'Moroccan Origin',
    dimensions: "8' x 10'",
    availableDimensions: ["8' x 10'", "9' x 12'", "10' x 14'"],
    rating: 4.9,
    reviewsCount: 28,
    isTrade: true,
    isTrending: true,
    isFeatured: true,
    material: 'Hand-Knotted Wool',
    palette: [
      { name: 'Terracotta Red', hex: '#8B3A2B' },
      { name: 'Deep Navy', hex: '#1A237E' },
      { name: 'Oatmeal Beige', hex: '#D4C4B7' }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy7hWtCsu0B_sbmZcdFZ6URdoKUl4JmRrvV95ANBg3KOlbVPpyH6r_tr8qr8E2LK4VVBYU6XRFm9brZx6inE9V-mvh7saToLy9gn3WcdyprGmbR0hGo-tB6B4XcjeygWFrtlu3fQWQRQcT2ZaN_NHLCRmEA6BtLxEZkxJI8naPu5cqUxnOMXEqL_F8v7LPk36XZn9qwCRDO3QyURS-WRxjY9qNDOWaWKOJDiiUS_Dw_gurQmE3zBozNQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBy7hWtCsu0B_sbmZcdFZ6URdoKUl4JmRrvV95ANBg3KOlbVPpyH6r_tr8qr8E2LK4VVBYU6XRFm9brZx6inE9V-mvh7saToLy9gn3WcdyprGmbR0hGo-tB6B4XcjeygWFrtlu3fQWQRQcT2ZaN_NHLCRmEA6BtLxEZkxJI8naPu5cqUxnOMXEqL_F8v7LPk36XZn9qwCRDO3QyURS-WRxjY9qNDOWaWKOJDiiUS_Dw_gurQmE3zBozNQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeS4VjRzUqKfTxiIp1VzGeP34zg6gYvfW6bqBOxtgCRz2PZenJusAiWcHX6mRMXq1NvOWukIBHTtsAmsUmFUEckWRig3cEHuE8PurGu1piE1hKn5ZJC3ZM5_TRBfNBKNtIcW50futpN4EWC0OGonKsf8sdNCeaMsu-GDfUcXaFBhefjWQ88m0iBABotnxzn4jsnku59ApgrzjzJzIk0dBk6FDoPiSZKzF4KyvPP1HxHUiKEtN0sZAFtg'
    ],
    description: "Hand-knotted in the high Atlas Mountains, this piece embodies centuries of Berber weaving tradition translated for the modern sanctuary. Geometric diamond motifs are rendered in undyed, hand-spun wool, yielding a subtle striation that captures the light.",
    specifications: {
      material: '100% Hand-spun Atlas Highland Wool on Cotton Foundation',
      weave: 'Hand-knotted Berber weave technique (~160 KPSI)',
      pileHeight: '0.45 inches (deep tactile comfort)',
      origin: 'Atlas Mountain Artisans, Morocco',
      care: 'Professional rug cleaning recommended; vacuum regularly on low suction'
    }
  },
  {
    id: 2,
    title: 'Oushak Vintage Silk Runner',
    slug: 'oushak-vintage-silk-runner',
    category: 'Runners',
    price: 1890,
    priceFormatted: '$1,890',
    origin: 'Turkish Origin',
    dimensions: "2.5' x 8'",
    availableDimensions: ["2.5' x 8'", "3' x 10'", "3' x 12' (Custom)"],
    rating: 4.8,
    reviewsCount: 19,
    isTrade: false,
    isTrending: true,
    isFeatured: true,
    material: 'Vintage Silk & Wool Blend',
    palette: [
      { name: 'Oatmeal Beige', hex: '#D4C4B7' },
      { name: 'Terracotta Red', hex: '#8B3A2B' },
      { name: 'Muted Gold', hex: '#735C00' }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAThMGyl_SJtqp4EvBhrk-GVejJRl8w-8EP4YB11K9W5PPiqPoGoUObyOxso3hyeA6wyBNi92rMkd47pkOpNwwWfxjx5XlWv1gnr6OWOlRmG0Ett1nRL61VtAfieNcR4t-NsTgd_rgH9-5biSqhTNgrSnrqVgtw0LQvHXcRlDayYxNGWbz7DKEFRZFjlh6Ep7Haq_khxBSVymNpUlqhhjYJCQbfAOPANyfYb-GhOyu8RnnjUg-SnGk3Mg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDliRFfg-7GuYBE2vUAPwL6CTF5sVRbO1_C7Q7lb3qXGFOtzlGP3vu0-I8QlsI-JJHQJRZ6xYpCP3abYjHvzjXL_ssg6pUzIia-gDujVXRPxpqyKPE7RkFU6kerT-sTfD2F6FlwG-M_29w5qLRD4BnMWskqlwEewxwLguOzSad38VBikCfyn5enAnfwMfd7gPRMvZzhC5h7BogLAO1L6PzSXSrYqbsaf3ynyAMWVZXQChWxXpkVT8FsdQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeS4VjRzUqKfTxiIp1VzGeP34zg6gYvfW6bqBOxtgCRz2PZenJusAiWcHX6mRMXq1NvOWukIBHTtsAmsUmFUEckWRig3cEHuE8PurGu1piE1hKn5ZJC3ZM5_TRBfNBKNtIcW50futpN4EWC0OGonKsf8sdNCeaMsu-GDfUcXaFBhefjWQ88m0iBABotnxzn4jsnku59ApgrzjzJzIk0dBk6FDoPiSZKzF4KyvPP1HxHUiKEtN0sZAFtg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDfBBG91LPxOovy8zLR0owP9UlsdpDE2aEBEMv0Z8m2hWySa1CTmqPbD5vsxx1A8tQUz4Y0DrwMirrAqGANBpORAAUatr-_0xtNZe4-MMitcyr6rpLvJQFsRN42WIXiC7xWG9PEOgvHAhSztNL0w_8eHf6zikX28KcXm5p8xTGwf0DcDs8__BIW0kN_mN_hxTRdcNiYMvQIGVoeQqUjFUrq2rTDZIjfP4B-P3P4nw6ssxJmBf53uVi7-g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtTW3Xn3JtlrW-BWHboKENmfqV2JBLqm7W4KY5F_ROVMlHOVLJBFDE8Aherfu3ALsJCm-jQwjsbkJRpxg4F4JQE5sCpRf89zrGdP7ZicAwaKDnnYyDq16WeSgYn72pulDeKDSB7noQoLzL6xdIIUQSya53SaJNOcXhHQBxZ1xzIcx4BHBxJJSePa0rF0wdH58G7rFbtqbKFjPE1eARlKOnDTJhAdsAKt-N2S56qmR5-H9xfgXr22qN6g'
    ],
    description: "An authentic vintage Turkish runner sourced from Anatolian heritage weavers. Washed to a soft pastel patina, combining hand-spun botanical-dyed wool with silken highlights.",
    specifications: {
      material: 'Organic Anatolian Wool & Mulberry Silk',
      weave: 'Traditional Ghiordes Double Knot',
      pileHeight: '0.20 inches (refined low profile)',
      origin: 'Oushak region, Turkey',
      care: 'Specialist cleaning only; rotate bi-annually'
    }
  },
  {
    id: 3,
    title: 'Kashan Silk Weave',
    slug: 'kashan-silk-weave',
    category: 'Rugs',
    price: 4200,
    priceFormatted: '$4,200',
    origin: 'Persian Heritage',
    dimensions: "8' x 10'",
    availableDimensions: ["8' x 10'", "9' x 12'"],
    rating: 4.9,
    reviewsCount: 34,
    isTrade: true,
    isTrending: false,
    isFeatured: true,
    material: 'Pure Hand-Knotted Silk',
    palette: [
      { name: 'Silk Cream', hex: '#FBFBE2' },
      { name: 'Deep Indigo', hex: '#00003C' }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgEvt6HGDSCwMbUacNmaiTC3uodFq4PDIUvrpAabvUcYs6oRGGPXfJ44G63Ly6fnEitcDnz2LxlNGuHI7--DwGllJdwsdUnytReZ2KG0sWVsQsvBvOuG7Y8mJLdLec_E1B11m4SE2qDzLhADL81y32S-wUNC1gbB3eh33cLcxxB8Yps6xlLrEcmxa3czsdqvLvRrR9R7aiFeVEQ9YKcXaYI9OO4loZykG254Fl3z64Bs1lHd7SJr3zVQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgEvt6HGDSCwMbUacNmaiTC3uodFq4PDIUvrpAabvUcYs6oRGGPXfJ44G63Ly6fnEitcDnz2LxlNGuHI7--DwGllJdwsdUnytReZ2KG0sWVsQsvBvOuG7Y8mJLdLec_E1B11m4SE2qDzLhADL81y32S-wUNC1gbB3eh33cLcxxB8Yps6xlLrEcmxa3czsdqvLvRrR9R7aiFeVEQ9YKcXaYI9OO4loZykG254Fl3z64Bs1lHd7SJr3zVQ'
    ],
    description: "An extraordinary masterwork featuring an ultra-fine knot density in pure mulberry silk. Shimmers dynamically under different ambient lighting angles.",
    specifications: {
      material: '100% Pure Mulberry Silk on Silk Warp',
      weave: 'Senneh Persian Single Knot (~320 KPSI)',
      pileHeight: '0.25 inches',
      origin: 'Kashan, Iran',
      care: 'Museum-grade preservation care recommended'
    }
  },
  {
    id: 4,
    title: 'Azure Flow',
    slug: 'azure-flow',
    category: 'Carpets',
    price: 3850,
    priceFormatted: '$3,850',
    origin: 'Tibetan Contemporary',
    dimensions: "9' x 12'",
    availableDimensions: ["8' x 10'", "9' x 12'", "10' x 14'"],
    rating: 4.7,
    reviewsCount: 15,
    isTrade: false,
    isTrending: false,
    isFeatured: false,
    material: 'Wool & Silk Blend',
    palette: [
      { name: 'Azure Blue', hex: '#1A237E' },
      { name: 'Soft Sand', hex: '#EBEBD2' }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9vGCd3th0h_XslsT-MxaC48W3lIcfz4P6NWIfIjbqIrc7yEvzDQ7zmtOV6N31m6jMlmYMg6029NdcX2_d8wDsx_gfYpqxPDUSU4Z-VZVoe941e3FAkzflr8sfkRP8AI7gKbKVybv7MxIbxLnWd9_9L1sv3AYBTXserzyN23RofOXZTxulznGJeJIN9R5bfdHvHMQaMkW3ZMTZq-txu6w5Id-eN6Q_KSfmPWypGPYSUKRaBNdoeNp4JA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9vGCd3th0h_XslsT-MxaC48W3lIcfz4P6NWIfIjbqIrc7yEvzDQ7zmtOV6N31m6jMlmYMg6029NdcX2_d8wDsx_gfYpqxPDUSU4Z-VZVoe941e3FAkzflr8sfkRP8AI7gKbKVybv7MxIbxLnWd9_9L1sv3AYBTXserzyN23RofOXZTxulznGJeJIN9R5bfdHvHMQaMkW3ZMTZq-txu6w5Id-eN6Q_KSfmPWypGPYSUKRaBNdoeNp4JA'
    ],
    description: "Flowing watercolor-like gradients in calming indigo and stone beige. Hand-carded Himalayan wool blended with Chinese raw silk.",
    specifications: {
      material: '70% Tibetan Highland Wool, 30% Raw Silk',
      weave: 'Hand-knotted Tibetan cross-weave',
      pileHeight: '0.35 inches',
      origin: 'Kathmandu Valley',
      care: 'Professional rug cleaning recommended'
    }
  },
  {
    id: 5,
    title: 'Terracotta Kilim',
    slug: 'terracotta-kilim',
    category: 'Mats',
    price: 1900,
    priceFormatted: '$1,900',
    origin: 'Anatolian Flatweave',
    dimensions: "6' x 9'",
    availableDimensions: ["5' x 7'", "6' x 9'", "8' x 10'"],
    rating: 5.0,
    reviewsCount: 42,
    isTrade: false,
    isTrending: false,
    isFeatured: false,
    material: 'Flatweave Wool',
    palette: [
      { name: 'Warm Terracotta', hex: '#9F402D' },
      { name: 'Oatmeal', hex: '#D4C4B7' }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu5yAiQwFSQeiXiCYhqgbXCEeD0zuHfKvv6wExt-Jk1zbCwfRuVOC-ZbPDjKTuzZA_CIP7PtX4sR8nTy1jn6iTUXE98riX8UDFHVHauhnl7n-YtDhXVSMMuC1joxpSxSbis571BH03IF1U3S29bArXlK4-i2L0M0DqfEdr8dy2tx9Z0DIk90Q3YKUM_J1GUBLmwA3-hlDNEcKW_QHlRtQ8B1t8D3TtKnhA04v1h4vsZNR7AHKdcATrWA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDu5yAiQwFSQeiXiCYhqgbXCEeD0zuHfKvv6wExt-Jk1zbCwfRuVOC-ZbPDjKTuzZA_CIP7PtX4sR8nTy1jn6iTUXE98riX8UDFHVHauhnl7n-YtDhXVSMMuC1joxpSxSbis571BH03IF1U3S29bArXlK4-i2L0M0DqfEdr8dy2tx9Z0DIk90Q3YKUM_J1GUBLmwA3-hlDNEcKW_QHlRtQ8B1t8D3TtKnhA04v1h4vsZNR7AHKdcATrWA'
    ],
    description: "Reversible flatweave tapestry rug created using ancient slit-weave techniques. Organic madder root and pomegranate rind dyes give rich natural tones.",
    specifications: {
      material: '100% Hand-spun Mountain Wool',
      weave: 'Traditional Slit-Weave Flatweave',
      pileHeight: 'Reversible flatweave (~0.12 inches)',
      origin: 'Central Anatolia',
      care: 'Shake outside, spot clean with mild wool detergent'
    }
  },
  {
    id: 6,
    title: 'Atlas Shag',
    slug: 'atlas-shag',
    category: 'Rugs',
    price: 5400,
    priceFormatted: '$5,400',
    origin: 'Moroccan Origin',
    dimensions: "10' x 14'",
    availableDimensions: ["8' x 10'", "10' x 14'"],
    rating: 4.8,
    reviewsCount: 11,
    isTrade: true,
    isTrending: false,
    isFeatured: false,
    material: 'High-Pile Wool',
    palette: [
      { name: 'Natural Cream', hex: '#FBFBE2' },
      { name: 'Charcoal Navy', hex: '#00003C' }
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn_dIizkX-VmqRv200e24e5rES79HZxOgH8mji2WRQnhhmxenMIfHX_Izvdb22MO2JBAC8CCSRUxQhN58EDF7JQ0tTMCZNV-JE_WXjsHP8oBaQVD3Wb4Pg78Lr-3JKdWS2ldY94JwY4TAFlRU6Iot3Xkj5dXpk711gnern9jZUClOoyoivsu5WOVvoHZLqsHa0EsD8q4bZSCbicAqCCeiuHlq-DCX4JXMuOyBeKv3b7qaW79ZnxLAbJg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAn_dIizkX-VmqRv200e24e5rES79HZxOgH8mji2WRQnhhmxenMIfHX_Izvdb22MO2JBAC8CCSRUxQhN58EDF7JQ0tTMCZNV-JE_WXjsHP8oBaQVD3Wb4Pg78Lr-3JKdWS2ldY94JwY4TAFlRU6Iot3Xkj5dXpk711gnern9jZUClOoyoivsu5WOVvoHZLqsHa0EsD8q4bZSCbicAqCCeiuHlq-DCX4JXMuOyBeKv3b7qaW79ZnxLAbJg'
    ],
    description: "Sumptuous high-pile Beni Ourain masterpiece. Exceptionally plush underfoot with loose asymmetric talismanic diamond motifs.",
    specifications: {
      material: '100% Unbleached High-Altitude Sheep Wool',
      weave: 'Long-pile traditional Berber knotting',
      pileHeight: '1.2 inches (ultra-luxurious high pile)',
      origin: 'Middle Atlas, Morocco',
      care: 'Professional wash only'
    }
  }
];

export const userProfile = {
  id: 'usr-8921',
  name: 'Elena Rostova',
  role: 'Interior Architect & Specifier',
  accountType: 'Business Account',
  company: 'Rostova Interior Architecture',
  wholesaleTier: 'Tier 1 Platinum (Active)',
  email: 'elena.rostova@rostovadesign.com',
  discountRate: '25% Trade Discount applied across all catalog orders',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8EE6gAmh0UPcGnwQhQ7hzWQ3o1IDLXpjB8CNgDdCVCXWT-H92lzjduj3er9BfO0vT2g31UXn6796yzv6G8reiqTNixwbjhbk6eOM8gpOYKDvoGRpFWdQxkh8SbYwjKOcgSz-vRyENje0l5FIgbEZhX8No3pSKQzLVP4v_0JkDDiE0e9o5xey2BSCOsVLzw5qGvBa_ySvJA86oPiUQJRgeGcIUXAofmA2BSvclMi5u5edoIg9RdlJQpQ',
  stats: {
    totalOrders: 14,
    activeShipments: 1,
    savedCollections: 8,
    customCommissions: 3
  }
};

export const initialOrders = [
  {
    orderId: 'AUR-8472-X9',
    createdAt: '2023-10-24T09:41:00Z',
    estimatedArrival: 'Today, 2:30 PM',
    status: 'Out for Delivery',
    courier: {
      name: 'James W.',
      company: 'Premium Logistics',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGA3WRibpsBjDIGtVzxT-WK1zcz-BdqARZsNDHhHWyWr44iYM7VUHUcZcl1462USQvmZ4ciVkDWHVEECoCJp1MfKlBCq8MFVAW35VHENe8pMjDA690B-s68WslbfAGVVEEZi9ww_swdWKU2OrD9t9a4UG_o5wmN8CyG03KGjB-dzdzJ1rAcHBrFBl6T78gg_3tbJ7dtc3xW7eD6Vrwl9t9rj4aqoiAwYKBeYtJ-m7iLmqSkR2uRFj5KA'
    },
    items: [
      {
        id: 1,
        title: 'Tabriz Silk Blend',
        dimensions: "8' x 10'",
        origin: 'Iran',
        price: 4200,
        quantity: 1
      },
      {
        id: 2,
        title: 'Oushak Vintage',
        dimensions: "9' x 12'",
        origin: 'Turkey',
        price: 6850,
        quantity: 1
      }
    ],
    timeline: [
      { step: 'Order Placed', timestamp: 'Oct 24, 2023 - 09:41 AM', completed: true },
      { step: 'Processing', timestamp: 'Oct 25, 2023 - 11:20 AM', completed: true },
      { step: 'Shipped', timestamp: 'Oct 26, 2023 - 08:15 AM', completed: true },
      { step: 'Out for Delivery', timestamp: 'Arriving shortly', completed: true, active: true }
    ],
    pricing: {
      subtotal: 11050,
      delivery: 250,
      tax: 884,
      total: 12184
    }
  }
];
