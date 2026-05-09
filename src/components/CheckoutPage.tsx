/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ChevronLeft, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  ChevronRight,
  MapPin,
  Clock,
  CheckCircle2,
  QrCode,
  Smartphone,
  Wallet,
  Zap,
  Globe,
  SmartphoneIcon,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeCanvas } from 'qrcode.react';

export default function CheckoutPage({ 
  onBack, 
  onComplete,
  cartItems 
}: { 
  onBack: () => void, 
  onComplete: () => void,
  cartItems: any[]
}) {
  const [activeMethod, setActiveMethod] = React.useState<'card' | 'upi' | 'crypto'>('card');
  const [activeUpiApp, setActiveUpiApp] = React.useState<'phonepe' | 'gpay' | 'qr' | null>(null);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const upiUrl = `upi://pay?pa=velcotte@upi&pn=Velcotte&am=${total.toFixed(2)}&cu=INR`;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        {/* Liquid Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] -mr-20 -mt-20 -z-10" />
        <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-[100px] -ml-20 -z-10" />

        <div className="sticky top-0 bg-white/40 backdrop-blur-3xl z-50 px-6 py-6 border-b border-white/50">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
             <button onClick={onBack} className="p-2.5 bg-white/60 rounded-xl border border-white shadow-sm transition-transform active:scale-90">
                <ChevronLeft className="w-5 h-5" />
             </button>
             <h2 className="font-black text-xl tracking-tighter uppercase italic text-gray-950">Secure Checkout</h2>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12">
            <div className="space-y-10">
               {/* Shipping Address */}
               <section className="space-y-6">
                  <div className="flex items-center gap-3 ml-2">
                     <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-100">
                        <MapPin className="w-4 h-4" />
                     </div>
                     <h3 className="text-sm font-black uppercase tracking-widest italic">Shipping Address</h3>
                  </div>
                  <div className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-8 border border-white/60 shadow-sm space-y-6">
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                           <input type="text" placeholder="John Smith" className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone Number</label>
                           <input type="text" placeholder="+91 98765 43210" className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Street Address</label>
                        <input type="text" placeholder="Flat 402, Tech Heights" className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors" />
                     </div>
                     <div className="grid grid-cols-3 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">City/Region</label>
                           <input type="text" placeholder="Mumbai" className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">State</label>
                           <input type="text" placeholder="MH" className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Pincode</label>
                           <input type="text" placeholder="400001" className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors" />
                        </div>
                     </div>
                  </div>
               </section>

               {/* Payment Method */}
               <section className="space-y-6">
                  <div className="flex items-center gap-3 ml-2">
                     <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-lg shadow-blue-100">
                        <CreditCard className="w-4 h-4" />
                     </div>
                     <h3 className="text-sm font-black uppercase tracking-widest italic">Payment Method</h3>
                  </div>
                  <div className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-8 border border-white/60 shadow-sm space-y-8">
                     <div className="flex flex-wrap gap-3 p-2 bg-gray-50/50 rounded-[32px] border border-gray-100">
                        <button 
                          onClick={() => setActiveMethod('card')}
                          className={`flex-1 min-w-[140px] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest italic transition-all flex items-center justify-center gap-2 ${activeMethod === 'card' ? 'bg-gray-950 text-white shadow-xl' : 'text-gray-400 hover:bg-white hover:text-blue-600'}`}
                        >
                          <CreditCard className="w-4 h-4" />
                          Card
                        </button>
                        <button 
                          onClick={() => setActiveMethod('upi')}
                          className={`flex-1 min-w-[140px] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest italic transition-all flex items-center justify-center gap-2 ${activeMethod === 'upi' ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'text-gray-400 hover:bg-white hover:text-blue-600'}`}
                        >
                          <Smartphone className="w-4 h-4" />
                          UPI
                        </button>
                        <button 
                          onClick={() => setActiveMethod('crypto')}
                          className={`flex-1 min-w-[140px] py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest italic transition-all flex items-center justify-center gap-2 ${activeMethod === 'crypto' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200' : 'text-gray-400 hover:bg-white hover:text-blue-600'}`}
                        >
                          <Globe className="w-4 h-4" />
                          Crypto
                        </button>
                     </div>

                     <div className="min-h-[200px]">
                        <AnimatePresence mode="wait">
                          {activeMethod === 'card' && (
                            <motion.div 
                              key="card"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="space-y-6"
                            >
                               <div className="space-y-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Card Number</label>
                                  <div className="relative">
                                     <input type="text" placeholder="•••• •••• •••• ••••" className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors" />
                                     <CreditCard className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                                  </div>
                               </div>
                               <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Expiry Date</label>
                                     <input type="text" placeholder="MM/YY" className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors" />
                                  </div>
                                  <div className="space-y-2">
                                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">CVV</label>
                                     <input type="password" placeholder="•••" className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors" />
                                  </div>
                               </div>
                            </motion.div>
                          )}

                          {activeMethod === 'upi' && (
                            <motion.div 
                              key="upi"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="space-y-8"
                            >
                               <div className="grid grid-cols-3 gap-4">
                                  <button 
                                    onClick={() => setActiveUpiApp('phonepe')}
                                    className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-3 group ${activeUpiApp === 'phonepe' ? 'border-purple-500 bg-purple-50 text-purple-600' : 'border-gray-100 bg-white hover:border-blue-600'}`}
                                  >
                                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${activeUpiApp === 'phonepe' ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'bg-gray-50 text-gray-400'}`}>
                                        <SmartphoneIcon className="w-6 h-6" />
                                     </div>
                                     <span className="text-[9px] font-black uppercase tracking-widest">PhonePe</span>
                                  </button>
                                  <button 
                                    onClick={() => setActiveUpiApp('gpay')}
                                    className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-3 group ${activeUpiApp === 'gpay' ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-100 bg-white hover:border-blue-600'}`}
                                  >
                                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${activeUpiApp === 'gpay' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-gray-50 text-gray-400'}`}>
                                        <Wallet className="w-6 h-6" />
                                     </div>
                                     <span className="text-[9px] font-black uppercase tracking-widest">G-Pay</span>
                                  </button>
                                  <button 
                                    onClick={() => setActiveUpiApp('qr')}
                                    className={`p-6 rounded-3xl border transition-all flex flex-col items-center gap-3 group ${activeUpiApp === 'qr' ? 'border-gray-950 bg-gray-50 text-gray-950' : 'border-gray-100 bg-white hover:border-blue-600'}`}
                                  >
                                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${activeUpiApp === 'qr' ? 'bg-gray-950 text-white shadow-lg shadow-gray-200' : 'bg-gray-50 text-gray-400'}`}>
                                        <QrCode className="w-6 h-6" />
                                     </div>
                                     <span className="text-[9px] font-black uppercase tracking-widest">QR Code</span>
                                  </button>
                               </div>

                               <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100 min-h-[220px] flex items-center justify-center">
                                  {activeUpiApp === 'qr' ? (
                                    <div className="flex flex-col items-center text-center space-y-4">
                                       <div className="bg-white p-4 rounded-2xl shadow-sm">
                                         <QRCodeCanvas value={upiUrl} size={150} />
                                       </div>
                                       <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-950">Pay ₹{total.toFixed(2)} via UPI</p>
                                    </div>
                                  ) : (
                                    <div className="py-10 text-center space-y-4">
                                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                                          <Smartphone className="w-6 h-6 text-blue-600" />
                                       </div>
                                       <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Open your UPI app to complete</p>
                                    </div>
                                  )}
                               </div>
                            </motion.div>
                          )}

                          {activeMethod === 'crypto' && (
                            <motion.div 
                              key="crypto"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="py-12 flex flex-col items-center text-center space-y-6"
                            >
                               <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 animate-pulse">
                                  <Globe className="w-10 h-10" />
                                </div>
                                <div className="space-y-2">
                                   <h4 className="text-sm font-black uppercase tracking-tighter italic">Connect Wallet</h4>
                                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest max-w-[240px]">Sync for high-speed hardware acquisition.</p>
                                </div>
                                <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest italic shadow-xl shadow-indigo-100 hover:scale-105 active:scale-95 transition-all">
                                   Sync MetaMask
                                </button>
                             </motion.div>
                          )}
                        </AnimatePresence>
                     </div>
                  </div>
               </section>
            </div>

            {/* Order Summary */}
            <aside className="space-y-8">
               <div className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-8 border border-white/60 shadow-sm space-y-8 sticky top-32">
                  <h3 className="text-sm font-black uppercase tracking-widest italic text-blue-600">Order Summary</h3>
                  
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                     {cartItems.map((item, i) => (
                        <div key={i} className="flex gap-4 items-center">
                           <div className="w-14 h-14 bg-white rounded-xl border border-gray-50 flex items-center justify-center p-2 shrink-0">
                              <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                           </div>
                           <div className="flex-grow min-w-0">
                              <h4 className="text-[10px] font-black uppercase italic tracking-tight truncate">{item.name}</h4>
                              <p className="text-[9px] font-bold text-gray-400">QTY: {item.quantity || 1}</p>
                           </div>
                           <span className="text-[11px] font-black italic">₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
                        </div>
                     ))}
                  </div>

                  <div className="space-y-4 border-t border-white/40 pt-6">
                     <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        <span>Subtotal</span>
                        <span className="text-gray-950 font-black italic">₹{subtotal.toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        <span>Shipping</span>
                        <span className="text-green-600 font-black italic">{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
                     </div>
                     <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        <span>Virtual Tax</span>
                        <span className="text-gray-950 font-black italic">₹{tax.toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between pt-4 border-t border-white/20 text-blue-600">
                        <span className="text-sm font-black uppercase tracking-widest italic">Total Sync</span>
                        <span className="text-2xl font-black italic">₹{total.toFixed(2)}</span>
                     </div>
                  </div>

                  <button 
                    onClick={onComplete}
                    className="w-full bg-blue-600 text-white rounded-[24px] py-5 font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-blue-200 hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-3 group"
                  >
                     Complete Sync
                     <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">
                     <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                     Encrypted Secure Interface
                  </div>
               </div>
            </aside>
          </div>
        </main>
    </div>
  );
}
