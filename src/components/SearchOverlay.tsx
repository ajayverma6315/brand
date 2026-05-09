/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  ChevronRight,
  Star,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SearchOverlayProps {
  isVisible: boolean;
  query: string;
  onClose: () => void;
  onProductClick: (p: any) => void;
  onSearch: (q: string) => void;
  onQueryChange: (q: string) => void;
  onCategoryClick: (cat: string) => void;
}

const SUGGESTIONS = [
  "wireless headphones",
  "wireless headphones for gaming",
  "wireless headphones with mic",
  "wireless headphones bluetooth",
  "noise cancelling wireless headphones",
  "best wireless headphones",
  "wireless headphones under 2000",
  "wireless headphones over ear"
];

const POPULAR_PRODUCTS = [
  { id: 1, name: 'Velcotte Noise Cancelling Wireless Headphones', price: 59.99, originalPrice: 99.99, sale: '40% OFF', rating: 4.6, reviews: 1250, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=100' },
  { id: 2, name: 'Velcotte Bass+ Wireless Headphones', price: 49.99, originalPrice: 89.99, sale: '44% OFF', rating: 4.5, reviews: 890, image: 'https://images.unsplash.com/photo-1583394838336-acd977730f90?auto=format&fit=crop&q=80&w=100' },
  { id: 3, name: 'Velcotte Studio Wireless Headphones', price: 79.99, originalPrice: 129.99, sale: '38% OFF', rating: 4.7, reviews: 650, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=100' },
];

const CATEGORIES = [
  { name: 'Over Ear Headphones', count: 32 },
  { name: 'On Ear Headphones', count: 28 },
  { name: 'In Ear Headphones', count: 38 },
  { name: 'Neckband Headphones', count: 12 },
  { name: 'Gaming Headphones', count: 18 },
];

const BRANDS = [
  { name: 'Velcotte', count: 45 },
  { name: 'Sony', count: 18 },
  { name: 'boAt', count: 14 },
  { name: 'JBL', count: 12 },
];

export default function SearchOverlay({ isVisible, query, onClose, onProductClick, onSearch, onQueryChange, onCategoryClick }: SearchOverlayProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="search-container fixed inset-0 lg:absolute lg:top-full lg:left-0 lg:right-0 mt-0 lg:mt-4 z-[100] px-0 lg:px-6">
          {/* Mobile Overlay Backdrop */}
          <div className="lg:hidden fixed inset-0 bg-white z-[-1]" onClick={onClose} />
          
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="bg-white lg:bg-white/40 backdrop-blur-3xl lg:rounded-[48px] shadow-[0_32px_84px_-12px_rgba(31,38,135,0.25)] border-0 lg:border lg:border-white/40 overflow-y-auto lg:overflow-hidden max-w-7xl mx-auto flex flex-col lg:flex-row h-screen lg:h-auto"
          >
            {/* Mobile Header */}
            <div className="lg:hidden p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-20">
               <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-2xl flex-grow mr-4">
                  <Search className="w-4 h-4 text-gray-400" />
                  <input 
                    autoFocus
                    type="text" 
                    placeholder="Search premium tech..." 
                    className="bg-transparent border-none outline-none text-xs font-bold w-full"
                    onChange={(e) => onQueryChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={query}
                  />
               </div>
               <button onClick={onClose} className="text-xs font-black uppercase text-blue-600">Cancel</button>
            </div>

            {/* Left: Suggestions */}
            <div className="w-full lg:w-1/4 p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/20">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-6 lg:mb-8">Suggestions</h3>
               <motion.div 
                 initial="initial"
                 animate="animate"
                 variants={{
                   animate: { transition: { staggerChildren: 0.03 } }
                 }}
                 className="grid grid-cols-1 gap-1"
               >
                  {SUGGESTIONS.map((s, i) => (
                    <motion.div 
                      key={i} 
                      variants={{
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0 }
                      }}
                      onClick={() => { onSearch(s); onClose(); }}
                      className="flex items-center gap-4 p-3 lg:p-3.5 rounded-2xl hover:bg-gray-50 lg:hover:bg-white/60 cursor-pointer group transition-all"
                    >
                       <Search className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                       <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-tight text-gray-500 group-hover:text-gray-950 transition-colors">{s}</span>
                    </motion.div>
                  ))}
               </motion.div>
            </div>

            {/* Center: Popular Products */}
            <div className="flex-grow p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/20 lg:bg-white/10">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-6 lg:mb-8">Popular Products</h3>
               <motion.div 
                 initial="initial"
                 animate="animate"
                 variants={{
                   animate: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
                 }}
                 className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8"
               >
                  {POPULAR_PRODUCTS.map((p) => (
                    <motion.div 
                      key={p.id} 
                      variants={{
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 }
                      }}
                      className="flex gap-4 lg:gap-6 group cursor-pointer bg-white lg:bg-white/40 lg:backdrop-blur-md p-4 lg:p-5 rounded-3xl lg:rounded-[32px] border border-gray-100 lg:border-white/40 shadow-sm hover:shadow-xl hover:bg-white transition-all" onClick={() => { onProductClick(p); onClose(); }}
                    >
                       <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gray-50 lg:bg-white rounded-xl lg:rounded-2xl flex items-center justify-center p-2 lg:p-4 group-hover:scale-105 transition-transform">
                          <img src={p.image} alt={p.name} className="w-full h-full object-contain mix-blend-multiply" />
                       </div>
                       <div className="flex-grow flex flex-col justify-center">
                          <h4 className="text-[10px] lg:text-xs font-black mb-1 lg:mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight text-gray-950">{p.name}</h4>
                          <div className="flex items-center gap-2 mb-2 lg:mb-3">
                             <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className={`w-2.5 h-2.5 lg:w-3 lg:h-3 ${i <= 4 ? 'fill-current' : 'text-gray-200'}`} />)}
                             </div>
                             <span className="text-[8px] lg:text-[9px] font-black text-gray-400 uppercase">({p.reviews})</span>
                          </div>
                          <div className="flex items-baseline gap-2 lg:gap-3">
                            <span className="text-sm lg:text-lg font-black tracking-tighter text-gray-950">${p.price}</span>
                            <span className="text-[8px] lg:text-xs font-black text-red-500 bg-red-50 px-1.5 py-0.5 rounded-lg">{p.sale}</span>
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </motion.div>
               <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => { onSearch(query || 'wireless headphones'); onClose(); }}
                  className="mt-8 lg:mt-10 w-full bg-blue-600 text-white rounded-2xl py-4 lg:py-5 flex items-center justify-center gap-3 group font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
               >
                  View all results for "{query || 'wireless headphones'}"
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </motion.button>
            </div>

            {/* Right: Categories & Brands (Hidden on small mobile) */}
            <div className="w-full lg:w-1/4 p-6 lg:p-10 space-y-10 lg:space-y-12">
               <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-6 lg:mb-8">Categories</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-3">
                     {CATEGORIES.map((c, i) => (
                        <div key={i} onClick={() => onCategoryClick(c.name)} className="flex items-center justify-between group cursor-pointer bg-gray-50 lg:bg-white/20 hover:bg-blue-600 hover:text-white lg:hover:bg-white/60 lg:hover:text-inherit p-3 rounded-xl transition-all">
                           <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-tight group-hover:text-white lg:group-hover:text-gray-950 text-gray-600">{c.name}</span>
                           <span className="hidden lg:block text-[9px] font-black text-gray-300 group-hover:text-blue-600 transition-colors">({c.count})</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-6 lg:mb-8">Verified Brands</h3>
                  <div className="flex flex-wrap gap-2">
                     {BRANDS.map((b, i) => (
                        <div key={i} onClick={() => onCategoryClick('All Categories')} className="bg-gray-50 lg:bg-white/40 border border-transparent lg:border-white px-3 lg:px-4 py-2 rounded-xl group cursor-pointer hover:bg-blue-600 lg:hover:bg-white hover:shadow-sm transition-all">
                           <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white lg:group-hover:text-blue-600">{b.name}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
