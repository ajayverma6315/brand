/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  Star, 
  ShoppingCart, 
  Smartphone, 
  Laptop, 
  Headphones, 
  Watch, 
  Home, 
  Gamepad2, 
  Cable, 
  Car, 
  Briefcase,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';

const CATEGORY_LIST = [
  { name: 'All Categories', count: 1285, icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Trending', count: 85, icon: <TrendingUp className="w-4 h-4" /> },
  { name: 'Electronics', count: 342, icon: <Laptop className="w-4 h-4" /> },
  { name: 'Gadgets', count: 286, icon: <Smartphone className="w-4 h-4" /> },
  { name: 'Accessories', count: 421, icon: <Cable className="w-4 h-4" /> },
  { name: 'Smart Home', count: 128, icon: <Home className="w-4 h-4" /> },
  { name: 'Audio', count: 162, icon: <Headphones className="w-4 h-4" /> },
  { name: 'Wearables', count: 94, icon: <Watch className="w-4 h-4" /> },
  { name: 'Gaming', count: 87, icon: <Gamepad2 className="w-4 h-4" /> },
];

const TOP_CATEGORIES = [
  { name: 'Trending', count: 85, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=300' },
  { name: 'Electronics', count: 342, image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=300' },
  { name: 'Gadgets', count: 286, image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=300' },
  { name: 'Accessories', count: 421, image: 'https://images.unsplash.com/photo-1619121820556-9d32d0891007?auto=format&fit=crop&q=80&w=300' },
  { name: 'Smart Home', count: 128, image: 'https://images.unsplash.com/photo-1558002038-1037906d9927?auto=format&fit=crop&q=80&w=300' },
  { name: 'Audio', count: 162, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300' },
];

const PRODUCTS = [
  { id: 1, name: 'Velcotte Noise Cancelling Wireless Headphones', price: 59.99, originalPrice: 99.99, sale: '-40%', rating: 4.6, reviews: 1250, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400', category: 'Audio', trending: true },
  { id: 2, name: 'Velcotte Smart Watch X1', price: 64.99, originalPrice: 99.99, sale: '-35%', rating: 4.5, reviews: 856, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400', category: 'Wearables', trending: true },
  { id: 3, name: 'Velcotte Wireless Earbuds Pro', price: 29.99, originalPrice: 59.99, sale: '-50%', rating: 4.7, reviews: 1103, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400', category: 'Audio' },
  { id: 4, name: 'Velcotte Power Bank 10000mAh', price: 21.99, originalPrice: 39.99, sale: '-45%', rating: 4.4, reviews: 742, image: 'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?auto=format&fit=crop&q=80&w=400', category: 'Gadgets', trending: true },
  { id: 5, name: '3-in-1 Wireless Charger', price: 34.99, originalPrice: 49.99, sale: '-30%', rating: 4.2, reviews: 621, image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=400', category: 'Accessories' },
  { id: 6, name: 'Velcotte USB-C to USB-C Cable (1m)', price: 8.99, originalPrice: 11.99, sale: '-25%', rating: 4.8, reviews: 412, image: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=400', category: 'Accessories' },
];

import ProductCard from './ProductCard';

export default function CategoriesPage({ 
  onBack, 
  onProductClick, 
  onAddToCart,
  wishlist = [],
  onToggleWishlist,
  initialCategory = 'All Categories',
  searchQuery = ''
}: { 
  onBack: () => void, 
  onProductClick: (p: any) => void, 
  onAddToCart?: (p: any) => void,
  wishlist?: number[],
  onToggleWishlist?: (id: number) => void,
  initialCategory?: string,
  searchQuery?: string
}) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const productsRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    setTimeout(() => {
      productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'All Categories' 
      ? true 
      : activeCategory === 'Trending'
      ? p.trending
      : p.category === activeCategory;
    
    const matchesSearch = searchQuery 
      ? p.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fcfcfd] font-sans text-gray-950 pb-24">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-2 text-[10px] font-bold text-gray-400">
         <span onClick={onBack} className="cursor-pointer hover:text-blue-600">Home</span>
         <ChevronRight className="w-3 h-3" />
         <span className="text-gray-950">Categories</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-12 pt-8">
         <aside className="space-y-10 hidden lg:block">
            <div className="bg-white/40 backdrop-blur-3xl rounded-[40px] p-8 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]">
               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-blue-600">Explore</h3>
               <div className="space-y-2">
                  {CATEGORY_LIST.map((cat, i) => (
            <div key={i} onClick={() => handleCategoryClick(cat.name)} className={`flex items-center justify-between p-3 rounded-2xl transition-all cursor-pointer group ${cat.name === activeCategory ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'hover:bg-white/60 text-gray-600 hover:text-blue-600'}`}>
                        <div className="flex items-center gap-3">
                           <div className={`p-2 rounded-xl ${cat.name === activeCategory ? 'bg-white/20' : 'bg-blue-50 group-hover:bg-blue-100 transition-colors'}`}>
                              {cat.icon}
                           </div>
                           <span className="text-[11px] font-black uppercase tracking-tight">{cat.name}</span>
                        </div>
                        <span className={`text-[10px] font-black opacity-60 ${cat.name === activeCategory ? 'text-white' : 'text-gray-400'}`}>{cat.count}</span>
                     </div>
                  ))}
               </div>
            </div>


            <div className="bg-white/20 backdrop-blur-2xl rounded-[40px] p-8 border border-white/20">
               <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-gray-500">Refine</h3>
               <div className="space-y-10">
                  <div>
                     <div className="flex items-center justify-between mb-6">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-950">Price Range</span>
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                     </div>
                     <div className="h-1.5 bg-gray-100 rounded-full relative mb-6">
                        <div className="absolute left-0 right-1/4 h-full bg-blue-600 rounded-full" />
                        <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-600 rounded-full shadow-lg" />
                     </div>
                     <div className="flex items-center justify-between text-[11px] font-black italic">
                        <span>$0</span>
                        <span>$500+</span>
                     </div>
                  </div>

                  <div>
                     <div className="flex items-center justify-between mb-6">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-950">Expert Brand</span>
                        <ChevronDown className="w-3 h-3 text-gray-400" />
                     </div>
                     <div className="space-y-3">
                        {['Apple', 'Samsung', 'Sony', 'Anker', 'JBL'].map((brand, i) => (
                           <div key={i} className="flex items-center justify-between group cursor-pointer hover:translate-x-1 transition-transform">
                              <div className="flex items-center gap-4">
                                 <div className="w-5 h-5 border-2 border-gray-100 rounded-lg group-hover:border-blue-600 transition-colors bg-white" />
                                 <span className="text-[11px] font-black text-gray-500 group-hover:text-gray-950 uppercase tracking-tight">{brand}</span>
                              </div>
                              <div className="bg-gray-50 px-2 py-0.5 rounded-md">
                                 <span className="text-[9px] font-bold text-gray-400">{Math.floor(Math.random() * 150) + 30}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </aside>

         <main className="space-y-12">
            <header className="relative">
               <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50/50 rounded-full blur-[80px] -z-10" />
               <h1 className="text-5xl font-black tracking-tighter mb-3 text-gray-950">Discover <span className="text-blue-600 italic">Liquid</span> Tech</h1>
               <p className="text-sm text-gray-400 font-bold max-w-lg leading-relaxed">Explore our modular collection of high-performance gadgets designed for the glass age.</p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
               {TOP_CATEGORIES.map((cat, i) => (
                  <div key={i} onClick={() => handleCategoryClick(cat.name)} className={`bg-white/40 backdrop-blur-xl rounded-[40px] p-5 border border-white shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all group flex flex-col items-center cursor-pointer ${cat.name === activeCategory ? 'ring-2 ring-blue-600 shadow-xl' : ''}`}>
                     <div className="w-full aspect-square relative mb-6 rounded-[32px] overflow-hidden bg-white shadow-inner flex items-center justify-center p-4">
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
                     </div>
                     <h4 className="text-[11px] font-black uppercase mb-1 text-gray-950">{cat.name}</h4>
                     <p className="text-[10px] font-bold text-gray-400 mb-6">{cat.count} Units</p>
                     <div className={`w-10 h-10 rounded-2xl border transition-all shadow-sm flex items-center justify-center ${cat.name === activeCategory ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                        <ChevronRight className="w-5 h-5" />
                     </div>
                  </div>
               ))}
            </div>

            <div className="bg-blue-600 rounded-[56px] p-8 lg:p-14 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden group">
               <div className="relative z-10 flex items-center gap-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">
                     <ShoppingCart className="w-8 h-8" />
                  </div>
                  <div>
                     <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">Live Offers</span>
                     </div>
                     <h2 className="text-3xl lg:text-4xl font-black tracking-tighter mb-2">Save More on Glass Goods</h2>
                     <p className="text-xs font-bold text-blue-100 opacity-70">Premium items starting from $49.00</p>
                  </div>
               </div>
               <div className="flex flex-col lg:flex-row items-center gap-8 pt-10 lg:pt-0 relative z-10">
                   <div className="flex gap-5">
                     <TimerUnit value="08" label="Hrs" />
                     <TimerUnit value="54" label="Min" />
                     <TimerUnit value="21" label="Sec" />
                   </div>
                  <button onClick={() => handleCategoryClick('Trending')} className="bg-white text-blue-600 px-12 py-4.5 rounded-[20px] font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all">
                     View All Deals
                  </button>
               </div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-white/30 transition-colors duration-700" />
               <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl -mb-20" />
            </div>

            <div ref={productsRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 scroll-mt-24">
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
            </div>
         </main>
      </div>
    </div>
  );
}

function TimerUnit({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center">
       <div className="bg-white px-3 py-2 rounded-xl text-sm font-black shadow-sm">{value}</div>
       <span className="text-[8px] font-black uppercase text-gray-400 mt-1 block">{label}</span>
    </div>
  );
}
