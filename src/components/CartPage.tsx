/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Trash2, 
  Heart, 
  Minus, 
  Plus, 
  ChevronLeft,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones as HeadphonesIcon,
  Info,
  ShoppingCart,
} from 'lucide-react';
import { motion } from 'motion/react';

interface CartItem {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

const INITIAL_CART: CartItem[] = [
  {
    id: 1,
    name: 'Velcotte Noise Cancelling Headphones',
    color: 'Midnight Black',
    price: 69.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    name: 'Velcotte Smart Watch X1',
    color: 'Black',
    price: 39.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 3,
    name: 'Wireless Earbuds Pro',
    color: 'White',
    price: 24.99,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=200',
  },
];

export default function CartPage({ 
  onBack, 
  onCheckout,
  items,
  onRemove,
  onUpdateQuantity
}: { 
  onBack: () => void, 
  onCheckout?: () => void,
  items: any[],
  onRemove: (id: number) => void,
  onUpdateQuantity: (id: number, delta: number) => void
}) {
  const subtotal = items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const discount = items.length > 0 ? 13.50 : 0;
  const shipping = 0;
  const total = Math.max(0, subtotal - discount + shipping);

  const handleCheckout = () => {
    onCheckout?.();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white font-sans text-gray-950 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px] -ml-20 -mt-20 -z-10" />
        <div className="text-center space-y-6">
           <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-100">
             <ShoppingCart className="w-10 h-10" />
           </div>
           <h2 className="text-4xl font-black italic tracking-tighter uppercase">Cart Empty.</h2>
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">No hardware registry found in current loop.</p>
           <button 
             onClick={onBack}
             className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-black transition-all flex items-center gap-2 mx-auto mt-10"
           >
              Resume Exploring
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 flex flex-col relative overflow-hidden">
       {/* Liquid Background Blobs */}
       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px] -ml-20 -mt-20 -z-10" />
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[100px] -mr-20 -mb-20 -z-10" />

       {/* Breadcrumbs */}
       <div className="max-w-7xl mx-auto px-6 w-full pt-8 pb-4">
          <div className="flex items-center gap-3 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">
            <span className="cursor-pointer hover:text-blue-600 transition-colors" onClick={onBack}>Home</span>
            <span className="text-gray-300 opacity-50">/</span>
            <span className="text-gray-950">Modular Cart</span>
          </div>
       </div>

       <main className="max-w-7xl mx-auto px-6 w-full mb-32 flex-grow">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
            <div className="space-y-4">
               <h1 className="text-5xl lg:text-7xl font-black tracking-tighter text-gray-950 italic">Modular <span className="text-blue-600 not-italic">Cart</span></h1>
               <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] flex items-center gap-3">
                  <span className="w-12 h-px bg-blue-100" /> {items.length} Hardware Units Ready
               </p>
            </div>
            <button 
              onClick={onBack}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-gray-950 hover:bg-black hover:text-white transition-all shadow-sm group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Keep Exploring
            </button>
          </div>

          <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12">
            {/* Cart Items List */}
            <div className="space-y-6">
              <div className="hidden md:grid grid-cols-6 pb-6 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 px-6">
                <div className="col-span-3">Unit Identity</div>
                <div className="text-center">Energy Cost</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total Flow</div>
              </div>

              {items.map((item) => (
                <div key={item.id} className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-6 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] grid md:grid-cols-6 items-center gap-8 group hover:shadow-2xl hover:bg-white transition-all">
                  <div className="col-span-3 flex items-center gap-6">
                    <div className="relative group/check">
                       <input type="checkbox" defaultChecked className="w-6 h-6 rounded-xl border-2 border-white bg-white/40 text-blue-600 focus:ring-blue-600 shadow-sm cursor-pointer appearance-none checked:bg-blue-600 checked:border-blue-600 transition-all" />
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white opacity-0 group-has-[:checked]/check:opacity-100">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                       </div>
                    </div>
                    <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center overflow-hidden flex-shrink-0 p-4 shadow-sm group-hover:scale-105 transition-transform">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-black text-xs uppercase tracking-tight text-gray-950 truncate mb-1 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Identity: {item.color || 'Velcotte Original'}</p>
                      <div className="flex items-center gap-5">
                        <button className="flex items-center gap-2 text-[9px] font-black text-gray-400 hover:text-blue-600 uppercase tracking-widest transition-colors">
                          <Heart className="w-3.5 h-3.5" />
                          Save
                        </button>
                        <div className="w-1 h-1 rounded-full bg-gray-100" />
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="flex items-center gap-2 text-[9px] font-black text-gray-400 hover:text-red-500 uppercase tracking-widest transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Purge
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center font-black text-sm text-gray-950 tracking-tighter">₹{item.price}</div>
                  
                  <div className="flex justify-center">
                    <div className="flex items-center bg-white border border-gray-100 rounded-2xl p-1.5 shadow-sm">
                      <button 
                         onClick={() => onUpdateQuantity(item.id, -1)}
                         className="p-2 hover:bg-gray-50 rounded-xl transition-all active:scale-90"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-10 text-center text-xs font-black tracking-tighter">{item.quantity || 1}</span>
                      <button 
                         onClick={() => onUpdateQuantity(item.id, 1)}
                         className="p-2 hover:bg-gray-50 rounded-xl transition-all active:scale-90"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right font-black text-lg text-gray-950 tracking-tighter">₹{(item.price * (item.quantity || 1)).toFixed(2)}</div>
                </div>
              ))}

              <div className="flex justify-between items-center bg-white/40 backdrop-blur-xl p-6 rounded-[32px] border border-white/60 shadow-sm">
                <div className="flex items-center gap-4">
                   <div className="relative group/checkall">
                      <input type="checkbox" defaultChecked className="w-5 h-5 rounded-lg border-2 border-white bg-white text-blue-600 focus:ring-blue-600 shadow-sm cursor-pointer appearance-none checked:bg-blue-600 checked:border-blue-600 transition-all" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white opacity-0 group-has-[:checked]/checkall:opacity-100">
                         <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                   </div>
                   <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em]">Select All Hardware</span>
                </div>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                    Purge All
                  </button>
                  <button className="flex items-center gap-2 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-xl border border-blue-100 transition-all">
                    <RotateCcw className="w-4 h-4" />
                    Update Sync
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Summary */}
            <div className="space-y-8">
              <div className="bg-[#0c0c0d] rounded-[48px] p-10 shadow-2xl shadow-blue-100 relative overflow-hidden group">
                <h3 className="text-2xl font-black mb-10 tracking-tighter text-white">Order <span className="text-blue-500 italic">Sync</span></h3>
                
                <div className="space-y-5 mb-10">
                  <SummaryRow label="Subtotal Identity" value={`₹${subtotal.toFixed(2)}`} />
                  <SummaryRow label="Liquid Discount" value={`-₹${discount.toFixed(2)}`} isGreen />
                  <div className="flex justify-between items-center group/shipping cursor-default">
                    <div className="flex items-center gap-2 ">
                      <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Flow Cost</span>
                      <Info className="w-3.5 h-3.5 text-gray-700 group-hover/shipping:text-blue-500 transition-colors" />
                    </div>
                    <span className="text-[11px] font-black text-green-500 uppercase tracking-widest">Fluid / Free</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex justify-between items-end mb-10">
                  <div className="space-y-1">
                    <h4 className="font-black text-xs text-gray-500 uppercase tracking-widest">Total Flow</h4>
                    <p className="text-[9px] font-black text-green-500 uppercase tracking-[0.2em] bg-green-500/10 px-2 py-0.5 rounded-md inline-block">Sync Saved ₹{discount.toFixed(2)}</p>
                  </div>
                  <span className="text-5xl font-black text-white tracking-tighter">₹{total.toFixed(2)}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 text-white font-black uppercase tracking-[0.2em] py-6 rounded-[24px] shadow-xl shadow-blue-900/20 hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 mb-6 group active:scale-[0.98] text-[11px]"
                >
                  <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Initialize Hardware
                </button>
                
                <div className="flex items-center justify-center gap-3 text-[10px] font-black text-gray-600 uppercase tracking-widest mb-10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Encrypted Performance
                </div>

                <div className="flex flex-wrap justify-center gap-6 opacity-40 hover:opacity-100 transition-all duration-700">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 brightness-0 invert" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 brightness-0 invert" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4 brightness-0 invert" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4 brightness-0 invert" />
                </div>

                {/* Animated Gradient Blob for Sidebar */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-600/30 transition-colors" />
              </div>

              <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[40px] flex items-start gap-6 border border-white/60 shadow-sm relative overflow-hidden group">
                <div className="bg-blue-50 p-4 rounded-2xl shadow-sm text-blue-600 relative z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-black text-xs uppercase tracking-tight text-gray-950 mb-2">Architectural Confidence</h4>
                  <p className="text-[10px] font-bold text-gray-400 tracking-tight leading-relaxed uppercase opacity-80">Your hardware identity is secured with proprietary encryption standards. Absolute safety.</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
       </main>

       {/* Features footer section */}
       <div className="bg-white/40 backdrop-blur-md py-16 border-t border-white/50 mb-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <FeatureCard icon={<Truck className="w-7 h-7" />} title="Fluid Shipping" sub="Free Energy Transfer" />
            <FeatureCard icon={<ShieldCheck className="w-7 h-7" />} title="Verified Flow" sub="100% Performance" />
            <FeatureCard icon={<RotateCcw className="w-7 h-7" />} title="Instant Swap" sub="30-day Liquid Loop" />
            <FeatureCard icon={<HeadphonesIcon className="w-7 h-7" />} title="Expert IQ" sub="Human Core Support" />
          </div>
       </div>

    </div>
  );
}

function SummaryRow({ label, value, isGreen }: { label: string, value: string, isGreen?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">{label}</span>
      <span className={`text-[11px] font-black uppercase tracking-widest ${isGreen ? 'text-green-500 bg-green-500/5 px-2 py-0.5 rounded-md' : 'text-white'}`}>{value}</span>
    </div>
  );
}

function FeatureCard({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) {
  return (
    <div className="flex items-center gap-6 group cursor-default">
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 text-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-xs uppercase tracking-tight text-gray-950 mb-0.5">{title}</h4>
        <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{sub}</p>
      </div>
    </div>
  );
}
