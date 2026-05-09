/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ChevronLeft, 
  Truck, 
  MapPin, 
  Clock, 
  CheckCircle2,
  Package,
  Box,
  RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';

export function OrderTrackingPage({ onBack }: { onBack: () => void }) {
  const steps = [
    { label: 'Order Confirmed', sub: 'May 12, 10:30 AM', status: 'completed' },
    { label: 'Hardware Prepared', sub: 'May 12, 02:45 PM', status: 'completed' },
    { label: 'Syncing with Carrier', sub: 'May 13, 09:15 AM', status: 'current' },
    { label: 'Out for Final Sync', sub: 'Expected Today', status: 'upcoming' },
    { label: 'Arrived at Destination', sub: 'Pending', status: 'upcoming' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] -mr-20 -mt-20 -z-10" />
        
        <div className="sticky top-0 bg-white/40 backdrop-blur-3xl z-50 px-6 py-6 border-b border-white/50">
          <div className="max-w-2xl mx-auto flex items-center gap-4">
             <button onClick={onBack} className="p-2.5 bg-white/60 rounded-xl border border-white shadow-sm transition-transform active:scale-90">
                <ChevronLeft className="w-5 h-5" />
             </button>
             <h2 className="font-black text-xl tracking-tighter uppercase italic text-gray-950">Live Sync Track</h2>
          </div>
        </div>

        <main className="max-w-2xl mx-auto px-6 py-12 space-y-12">
            {/* Tracking Summary */}
            <section className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-8 border border-white/60 shadow-sm flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-[28px] flex items-center justify-center shadow-xl shadow-blue-200">
                     <Package className="w-10 h-10" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Order Registry</p>
                     <h3 className="text-xl font-black italic tracking-tight">#VC123456</h3>
                     <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border border-blue-100 mt-2">
                        <RefreshCw className="w-3 h-3 animate-spin" /> In Transit Loop
                     </span>
                  </div>
               </div>
               <div className="text-center md:text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">ETA Arrival</p>
                  <h3 className="text-2xl font-black text-blue-600 italic tracking-tighter">May 14, 2024</h3>
               </div>
            </section>

            {/* Stepper */}
            <section className="bg-white/40 backdrop-blur-2xl rounded-[48px] p-10 border border-white/60 shadow-sm">
               <div className="space-y-0">
                  {steps.map((step, i) => (
                     <div key={i} className="flex gap-8 group">
                        <div className="flex flex-col items-center">
                           <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border-4 border-white shadow-sm transition-all ${
                              step.status === 'completed' ? 'bg-green-600 text-white' : 
                              step.status === 'current' ? 'bg-blue-600 text-white scale-110' : 
                              'bg-gray-100 text-gray-300'
                           }`}>
                              {step.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : 
                               step.status === 'current' ? <Truck className="w-5 h-5" /> : 
                               <Box className="w-5 h-5" />}
                           </div>
                           {i !== steps.length - 1 && (
                              <div className={`w-0.5 h-16 transition-colors ${step.status === 'completed' ? 'bg-green-600' : 'bg-gray-100'}`} />
                           )}
                        </div>
                        <div className="pt-2">
                           <h4 className={`text-xs font-black uppercase tracking-widest italic ${step.status === 'upcoming' ? 'text-gray-300' : 'text-gray-950'}`}>{step.label}</h4>
                           <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{step.sub}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            {/* Map Placeholder/Graphic */}
            <section className="bg-gray-50 rounded-[48px] h-64 border border-gray-100 relative overflow-hidden flex items-center justify-center group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000" />
               <div className="relative z-10 text-center space-y-4">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto animate-bounce" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Live Geometry Interface Inactive</p>
               </div>
            </section>
        </main>
    </div>
  );
}

export function NotificationsPage({ onBack }: { onBack: () => void }) {
  const notifications = [
    { id: 1, title: 'Sync Successful', desc: 'Hardware #VC123456 has entered the delivery loop.', time: '2h ago', icon: <Truck />, color: 'bg-blue-600' },
    { id: 2, title: 'Price Drop Alert', desc: 'Noise Cancelling Pro is now at a modular low.', time: '5h ago', icon: <RefreshCw />, color: 'bg-orange-600' },
    { id: 3, title: 'Identity Verified', desc: 'Your security registry update is complete.', time: '1d ago', icon: <CheckCircle2 />, color: 'bg-green-600' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] -mr-20 -mt-20 -z-10" />
        
        <div className="sticky top-0 bg-white/40 backdrop-blur-3xl z-50 px-6 py-6 border-b border-white/50">
          <div className="max-w-2xl mx-auto flex items-center gap-4">
             <button onClick={onBack} className="p-2.5 bg-white/60 rounded-xl border border-white shadow-sm transition-transform active:scale-90">
                <ChevronLeft className="w-5 h-5" />
             </button>
             <h2 className="font-black text-xl tracking-tighter uppercase italic text-gray-950">Signal Feed</h2>
          </div>
        </div>

        <main className="max-w-2xl mx-auto px-6 py-12 space-y-4">
            {notifications.map((n) => (
               <div key={n.id} className="bg-white/40 backdrop-blur-2xl rounded-[32px] p-6 border border-white/60 shadow-sm flex gap-6 group hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className={`w-14 h-14 ${n.color} text-white rounded-2xl flex items-center justify-center p-3 shadow-lg shrink-0`}>
                     {React.cloneElement(n.icon as React.ReactElement, { className: 'w-7 h-7' })}
                  </div>
                  <div className="flex-grow">
                     <div className="flex justify-between items-start mb-1">
                        <h4 className="text-xs font-black uppercase tracking-widest italic">{n.title}</h4>
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{n.time}</span>
                     </div>
                     <p className="text-[11px] font-bold text-gray-500 leading-snug">{n.desc}</p>
                  </div>
               </div>
            ))}
        </main>
    </div>
  );
}
