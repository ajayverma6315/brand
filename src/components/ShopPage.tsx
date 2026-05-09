/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Filter, 
  ArrowUpDown, 
  LayoutGrid, 
  List,
  ChevronDown,
  Heart,
  Star,
  ChevronLeft,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

const CATEGORY_PILLS = [
  { id: 'all', name: 'All', active: true },
  { id: 'electronics', name: 'Electronics' },
  { id: 'wearables', name: 'Wearables' },
  { id: 'audio', name: 'Audio' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'smart-home', name: 'Smart Home' },
];

const PRODUCTS = [
  { id: 1, name: 'Velcotte Noise Cancelling Headphones', price: 59.99, originalPrice: 99.99, sale: '-40%', rating: 4, reviews: 1250, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Velcotte Smart Watch X1', price: 64.99, originalPrice: 99.99, sale: '-35%', rating: 4.5, reviews: 856, badge: 'Trending', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Velcotte Wireless Earbuds Pro', price: 29.99, originalPrice: 59.99, sale: '-50%', rating: 5, reviews: 1103, badge: 'Hot Deal', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Velcotte Power Bank 10000mAh', price: 21.99, originalPrice: 39.99, sale: '-45%', rating: 4, reviews: 742, badge: 'Limited Stock', image: 'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?auto=format&fit=crop&q=80&w=400' },
  { id: 5, name: '3-in-1 Wireless Mag Charger', price: 34.99, originalPrice: 49.99, sale: '-30%', rating: 4, reviews: 520, image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400' },
  { id: 6, name: 'Premium Braided USB-C Cable', price: 14.99, originalPrice: 19.99, sale: '-25%', rating: 4, reviews: 310, image: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=400' },
];

import ProductCard from './ProductCard';

export default function ShopPage({ 
  onBack, 
  onProductClick, 
  onAddToCart,
  wishlist = [],
  onToggleWishlist,
  searchQuery = ''
}: { 
  onBack: () => void, 
  onProductClick: (p: any) => void, 
  onAddToCart?: (p: any) => void,
  wishlist?: number[],
  onToggleWishlist?: (id: number) => void,
  searchQuery?: string
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured'); // Featured, LowToHigh, HighToLow, Rating

  const filteredProducts = PRODUCTS
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || 
        (selectedCategory === 'Electronics' && [1, 2, 3, 4, 5].includes(p.id)) || // Default mapping for demo
        (selectedCategory === 'Wearables' && [2].includes(p.id)) ||
        (selectedCategory === 'Audio' && [1, 3].includes(p.id)) ||
        (selectedCategory === 'Accessories' && [4, 5, 6].includes(p.id)) ||
        (selectedCategory === 'Smart Home' && [5].includes(p.id));
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'LowToHigh') return a.price - b.price;
      if (sortBy === 'HighToLow') return b.price - a.price;
      if (sortBy === 'Rating') return b.rating - a.rating;
      return 0; // Featured
    });

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
      {/* Background Blobs for Glass depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -mr-40 -mt-20 -z-10" />
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-purple-50/50 rounded-full blur-[100px] -ml-20 -z-10" />

      {/* Mobile Top Nav */}
      <div className="lg:hidden sticky top-0 bg-white/40 backdrop-blur-2xl z-50 px-6 py-5 flex items-center justify-between border-b border-white/20">
         <div className="flex items-center gap-4">
            <button onClick={onBack} className="w-10 h-10 rounded-2xl bg-white/60 flex items-center justify-center hover:bg-white active:scale-95 transition-all shadow-sm border border-white">
               <ChevronLeft className="w-6 h-6 text-gray-400" />
            </button>
            <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
               <div className="bg-blue-600 text-white p-1 rounded-lg shadow-lg shadow-blue-200">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
               </div>
               <span className="font-black text-xl tracking-tighter uppercase italic text-gray-950">Velcotte</span>
            </div>
         </div>
      </div>

      <main className="px-6 py-10 max-w-7xl mx-auto">
         {/* Deals Headline Banner */}
         {!searchQuery && (
           <section className="mb-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[56px] p-10 lg:p-14 text-white relative overflow-hidden group shadow-2xl shadow-blue-200">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                 <div>
                    <div className="flex items-center gap-2 mb-6">
                       <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-100">Flash Sale Ending</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] mb-8 tracking-tighter">Grab Your Favorites <br /> <span className="text-blue-100/50 italic font-medium tracking-tight">Before They're Gone!</span></h2>
                    <div className="flex gap-4">
                       <div className="bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/20 flex flex-col items-center min-w-[70px] shadow-2xl">
                          <span className="text-2xl font-black">08</span>
                          <span className="text-[9px] font-black uppercase opacity-60 tracking-widest">Hrs</span>
                       </div>
                       <div className="bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/20 flex flex-col items-center min-w-[70px] shadow-2xl">
                          <span className="text-2xl font-black">45</span>
                          <span className="text-[9px] font-black uppercase opacity-60 tracking-widest">Min</span>
                       </div>
                       <div className="bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/20 flex flex-col items-center min-w-[70px] shadow-2xl">
                          <span className="text-2xl font-black">12</span>
                          <span className="text-[9px] font-black uppercase opacity-60 tracking-widest">Sec</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="w-full lg:w-auto h-px lg:h-20 lg:w-px bg-white/20 shrink-0" />

                 <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all w-full lg:w-auto">
                    Claim Discount
                 </button>
              </div>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-40 -mt-40 blur-[100px] pointer-events-none group-hover:bg-white/20 transition-colors duration-1000" />
              <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
           </section>
         )}

         {/* Page Title */}
         <section className="mb-12">
            <h1 className="text-5xl font-black tracking-tighter mb-4 text-gray-950 italic">
               {searchQuery ? `Search: ${searchQuery}` : 'Hot Deals'}
            </h1>
            <p className="text-gray-400 text-sm font-bold leading-relaxed max-w-sm">
               {searchQuery ? `Showing results for your hardware search.` : 'Exclusive discounts on our top-tier performance modular gear. Craft your setup today.'}
            </p>
         </section>

         {/* Filter/Sort Bar */}
         <section className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
               {CATEGORY_PILLS.map((pill) => (
                  <button 
                    key={pill.id}
                    onClick={() => setSelectedCategory(pill.name)}
                    className={`shrink-0 px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border ${selectedCategory === pill.name ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-200' : 'bg-white/60 backdrop-blur-xl text-gray-400 border-white hover:bg-white hover:text-gray-950 shadow-sm'}`}
                  >
                     {pill.name}
                  </button>
               ))}
            </div>
            
            <div className="flex items-center gap-3">
               <div className="relative group">
                  <button className="bg-white/60 backdrop-blur-xl border border-white px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm flex items-center gap-2 hover:bg-white transition-all">
                     <Filter className="w-4 h-4" /> {sortBy === 'Featured' ? 'Filter' : `Sort: ${sortBy}`}
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white/90 backdrop-blur-xl border border-white rounded-3xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                     {[
                        { label: 'Featured', value: 'Featured' },
                        { label: 'Price: Low to High', value: 'LowToHigh' },
                        { label: 'Price: High to Low', value: 'HighToLow' },
                        { label: 'Rating', value: 'Rating' }
                     ].map((item) => (
                        <button
                           key={item.value}
                           onClick={() => setSortBy(item.value)}
                           className={`w-full text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors ${sortBy === item.value ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                        >
                           {item.label}
                        </button>
                     ))}
                  </div>
               </div>
               <button 
                  onClick={() => setSortBy(sortBy === 'LowToHigh' ? 'HighToLow' : 'LowToHigh')}
                  className="bg-white/60 backdrop-blur-xl border border-white p-3.5 rounded-2xl shadow-sm hover:bg-white transition-all"
               >
                  <ArrowUpDown className="w-4 h-4" />
               </button>
            </div>
         </section>

         {/* Results Count */}
         <section className="flex justify-between items-center mb-10 border-b border-gray-50 pb-6">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Found {filteredProducts.length} Items</span>
            <div className="hidden sm:flex items-center gap-2 bg-gray-50/50 px-4 py-2 rounded-xl border border-gray-100 cursor-pointer hover:bg-white transition-all group">
               <span className="text-[10px] font-black text-gray-950 uppercase tracking-widest">{sortBy} First</span>
               <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
            </div>
         </section>

         {/* Product Grid */}
         <section className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
               <ProductCard 
                 key={prod.id} 
                 product={prod} 
                 onClick={() => onProductClick(prod)} 
                 onAddToCart={() => onAddToCart?.(prod)}
                 isWishlisted={wishlist.includes(prod.id)}
                 onToggleWishlist={() => onToggleWishlist?.(prod.id)}
               />
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                 <p className="text-gray-400 font-black uppercase tracking-widest">No matching hardware found.</p>
              </div>
            )}
         </section>
      </main>
    </div>
  );
}
