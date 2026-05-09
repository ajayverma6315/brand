/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  ChevronLeft, 
  Filter, 
  ChevronDown, 
  Star, 
  CircleCheck,
  ChevronRight,
  ShoppingBag,
  Bell,
  Trash2,
} from 'lucide-react';
import { motion } from 'motion/react';

const WISHLIST_ITEMS = [
  { id: 1, name: 'Velcotte Noise Cancelling Wireless Headphones', price: 59.99, originalPrice: 99.99, sale: '40% OFF', rating: 4.6, reviews: 1250, badge: 'Price Dropped', colors: ['black', 'beige', 'navy', 'green'], image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400' },
  { id: 2, name: 'Velcotte Smart Watch X1', price: 64.99, originalPrice: 119.99, sale: '46% OFF', rating: 4.5, reviews: 890, badge: 'Trending', colors: ['black', 'pink', 'gray'], image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400' },
  { id: 3, name: 'Velcotte Wireless Earbuds Pro', price: 29.99, originalPrice: 59.99, sale: '50% OFF', rating: 4.7, reviews: 650, badge: 'New Arrival', colors: ['white', 'black'], image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400' },
  { id: 4, name: 'Velcotte Power Bank 10000mAh', price: 21.99, originalPrice: 39.99, sale: '45% OFF', rating: 4.4, reviews: 420, colors: ['black'], image: 'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?auto=format&fit=crop&q=80&w=400' },
];

export default function WishlistPage({ 
  items = [], 
  onBack, 
  onProductClick, 
  onAddToCart,
  onToggleWishlist
}: { 
  items: any[],
  onBack: () => void, 
  onProductClick: (p: any) => void, 
  onAddToCart?: (p: any) => void,
  onToggleWishlist?: (id: number) => void
}) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        {/* Liquid Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-[100px] -mr-20 -mt-20 -z-10" />
        <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[100px] -ml-20 -z-10" />

       {/* Back Button positioned lower as requested */}
       <div className="max-w-2xl mx-auto px-6 pt-10 pb-0 flex lg:hidden">
          <button 
            onClick={onBack} 
            className="p-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-white shadow-xl shadow-blue-100/20 active:scale-95 transition-all text-gray-900 hover:bg-blue-600 hover:text-white group"
          >
             <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
       </div>

       <main className="p-6 space-y-8 max-w-2xl mx-auto">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-6">
                <div className="w-24 h-24 bg-white/40 backdrop-blur-3xl rounded-[32px] border border-white flex items-center justify-center mx-auto shadow-sm">
                   <Heart className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter italic">Your Loop is <span className="text-blue-600 not-italic">Empty</span></h3>
                <p className="text-gray-400 text-[11px] font-black uppercase tracking-widest max-w-[200px] mx-auto leading-relaxed">No hardware detected in saved registry.</p>
                <button onClick={onBack} className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-black transition-all">Start Exploring</button>
            </div>
          ) : (
            <>
              {/* Price Drop Alert (Frosted Glass) */}
              <div className="bg-white/40 backdrop-blur-xl rounded-[32px] p-6 flex items-center justify-between border border-white/60 shadow-sm relative overflow-hidden group">
                 <div className="flex items-center gap-5 relative z-10">
                    <div className="bg-red-500 text-white p-3 rounded-2xl shadow-lg shadow-red-100">
                       <Bell className="w-6 h-6 animate-swing origin-top" />
                    </div>
                    <div>
                       <h4 className="text-[11px] font-black text-gray-950 uppercase tracking-widest mb-1">Energy Drop Alert</h4>
                       <p className="text-[10px] font-bold text-red-500 uppercase tracking-tight">Price drops on tracked units.</p>
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Wishlist Items (Frosted Grid) */}
              <section className="space-y-6">
                {items.map((item) => (
                   <WishlistItemCard 
                     key={item.id} 
                     item={item} 
                     onClick={() => onProductClick(item)} 
                     onAddToCart={() => onAddToCart?.(item)}
                     onRemove={() => onToggleWishlist?.(item.id)}
                   />
                ))}
              </section>
            </>
          )}

          {/* Shipping Progress (Dark Glass) */}
          <div className="bg-[#0c0c0d] rounded-[48px] p-10 flex flex-col sm:flex-row items-center justify-between border border-white/5 relative overflow-hidden group">
             <div className="flex items-center gap-8 relative z-10 text-center sm:text-left mb-8 sm:mb-0">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center text-white shadow-2xl border border-white/10 group-hover:rotate-6 transition-all">
                   <ShoppingBag className="w-10 h-10" />
                </div>
                <div>
                   <h4 className="text-xl font-black tracking-tighter text-white mb-2 italic">Fluid <span className="text-blue-500 not-italic">Shipping</span></h4>
                   <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-relaxed">Add more for 0-cost<br />hardware energy transfer.</p>
                </div>
             </div>
             <button onClick={onBack} className="bg-white text-black px-10 py-5 rounded-[24px] font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-600 hover:text-white transition-all group flex items-center gap-3 relative z-10 active:scale-95">
                Explore Hardware
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
       </main>
    </div>
  );
}

const WishlistItemCard: React.FC<{ item: any, onClick: () => void, onAddToCart?: () => void, onRemove?: () => void }> = ({ item, onClick, onAddToCart, onRemove }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="bg-white/40 backdrop-blur-2xl rounded-[48px] p-8 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] relative group overflow-hidden hover:shadow-2xl hover:bg-white transition-all cursor-pointer"
    >
       <div className="absolute top-8 right-8 z-20">
          <button onClick={(e) => { e.stopPropagation(); onRemove?.(); }} className="bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-white text-red-500 shadow-sm hover:scale-110 active:scale-90 transition-all">
            <Heart className="w-6 h-6 fill-current" />
          </button>
       </div>

       <div className="flex flex-col sm:flex-row gap-10">
          <div className="w-full sm:w-48 h-48 bg-white rounded-[40px] flex items-center justify-center p-8 shrink-0 relative overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
             <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply transition-transform" />
          </div>
          
          <div className="flex-grow space-y-4">
             <div className="flex flex-wrap gap-2">
                {(item.badge || item.sale) && (
                   <span className={`inline-block px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white shadow-lg shadow-blue-100`}>
                      {item.badge || 'On Sale'}
                   </span>
                )}
             </div>
             <h3 className="font-black text-xl leading-[1.1] tracking-tighter text-gray-950 pr-12 group-hover:text-blue-600 transition-colors">{item.name}</h3>
             
             <div className="flex items-center gap-4">
                <div className="flex text-yellow-400">
                   {[1,2,3,4,5].map(i => <Star key={i} className={`w-3.5 h-3.5 ${i <= 4 ? 'fill-current' : 'text-gray-100'}`} />)}
                </div>
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{item.rating || 4.8} • {item.reviews || 120} tests</span>
             </div>

             <div className="flex items-end gap-3">
                <span className="text-3xl font-black text-gray-950 tracking-tighter">₹{item.price}</span>
                {item.originalPrice && <span className="text-sm font-black text-gray-400 line-through tracking-tight mb-1">₹{item.originalPrice}</span>}
                {item.sale && <span className="text-red-500 text-[10px] font-black uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded ml-2 mb-1">{item.sale}</span>}
             </div>
          </div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <button 
             onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
             className="bg-white/60 backdrop-blur-md text-gray-400 py-5 rounded-[24px] text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 border border-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
             <Trash2 className="w-5 h-5" />
             Delete Loop
          </button>
          <button 
             onClick={(e) => { e.stopPropagation(); onAddToCart?.(item); }}
             className="bg-blue-600 text-white py-5 rounded-[24px] text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-blue-100 hover:bg-black transition-all duration-300"
          >
             <ShoppingCart className="w-5 h-5" />
             Initialize Unit
          </button>
       </div>
    </motion.div>
  );
}
