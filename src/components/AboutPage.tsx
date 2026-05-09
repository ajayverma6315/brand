/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Users, 
  ChevronRight, 
  Search, 
  ShoppingCart, 
  Award,
  CircleCheck,
  Star,
  ShoppingBag,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        {/* Liquid Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -mr-20 -mt-20 -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[100px] -ml-20 -mb-20 -z-10" />

       {/* Top Nav (Glass Style) */}
       <div className="sticky top-0 bg-white/40 backdrop-blur-3xl z-50 px-6 py-6 flex items-center justify-between border-b border-white/50">
          <div className="flex items-center gap-4">
             <button onClick={onBack} className="p-2 bg-white/60 rounded-xl border border-white shadow-sm transition-transform active:scale-90">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
             </button>
             <span className="font-black text-xl tracking-tighter text-gray-950 uppercase italic">Architect <span className="text-blue-600 not-italic">Legacy</span></span>
          </div>
          <div className="flex items-center gap-5 text-gray-950">
             <Search className="w-5.5 h-5.5" />
             <div className="relative">
                <ShoppingCart className="w-5.5 h-5.5" />
                <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black border-2 border-white">3</span>
             </div>
          </div>
       </div>

       <main className="max-w-4xl mx-auto">
          {/* Hero Section (Screenshot 3) - Dark Deep Blue Glass */}
          <section className="relative h-[480px] bg-[#0c0c0d] overflow-hidden flex items-center px-10 border-b border-white/5 mx-6 mt-6 rounded-[64px] shadow-2xl">
             <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800" alt="About Hero" className="w-full h-full object-cover opacity-30 grayscale saturate-150" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-[#0c0c0d]/50" />
                {/* Reactive light blobs */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />
             </div>
             <div className="relative z-10 w-full space-y-8">
                <div className="space-y-4">
                   <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/20 backdrop-blur-xl border border-white/10 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                      <Zap className="w-4 h-4" /> Established 2024
                   </div>
                   <h1 className="text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter italic">Elevating <br />Hardware <span className="text-blue-500 not-italic">Loops.</span></h1>
                   <p className="text-sm text-gray-500 font-black uppercase tracking-[0.2em] max-w-[300px] leading-relaxed">Velcotte transitions performance from abstract to modular reality. Modern life, hardware optimized.</p>
                </div>
                
                <div className="flex gap-4">
                   <HeroBadge icon={<ShieldCheck className="w-5 h-5" />} label="Verified" />
                   <HeroBadge icon={<Award className="w-5 h-5" />} label="Elite Status" />
                   <HeroBadge icon={<Users className="w-5 h-5" />} label="Identity IQ" />
                </div>
             </div>
          </section>

          {/* Our Story (Clean Frosted Design) */}
          <section className="px-8 py-24">
             <div className="flex flex-col md:flex-row justify-between items-center gap-16">
                <div className="max-w-xl space-y-8">
                   <div className="space-y-6">
                      <h2 className="text-4xl font-black tracking-tighter italic">Origin <span className="text-blue-600 not-italic">Manifesto.</span></h2>
                      <div className="w-24 h-1.5 bg-blue-600 rounded-full" />
                   </div>
                   <div className="space-y-6">
                      <p className="text-lg text-gray-900 font-medium leading-relaxed">Velcotte was synchronized from a singular vision: to bridge the gap between high-performance hardware and everyday modular life. Our architecture is built on trust, transparency, and liquid innovation.</p>
                      <p className="text-sm text-gray-500 font-bold leading-relaxed opacity-60">Today, we initialize thousands of loops across the global network. Our commitment remains absolute: zero-friction hardware, synchronized for elite performance.</p>
                   </div>
                </div>
                <div className="w-full md:w-64 aspect-square bg-[#0c0c0d] rounded-[48px] p-12 relative overflow-hidden group shadow-2xl">
                   <div className="absolute inset-0 bg-blue-600/10 blur-[80px]" />
                   <img src="https://cdni.iconscout.com/illustration/premium/thumb/mountain-climbing-illustration-download-in-svg-png-gif-file-formats--business-success-strategy-adventure-lifestyle-pack-people-illustrations-3306233.png" alt="Mountain" className="w-full h-full object-contain relative z-10 brightness-200 contrast-125 group-hover:scale-110 transition-transform duration-700" />
                </div>
             </div>
          </section>

          {/* Why Choose Velcotte? (Glass Grid) */}
          <section className="px-8 pb-24">
             <h2 className="text-3xl font-black tracking-tighter mb-12 italic text-center">Protocol <span className="text-blue-600 not-italic">Advantages.</span></h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <ChoiceCard icon={<Award className="w-8 h-8 text-blue-600" />} title="Absolute IQ" desc="Handpicked performance hardware verified through modular stress tests." />
                <ChoiceCard icon={<Truck className="w-8 h-8 text-blue-600" />} title="Fluid Transfer" desc="Synchronized logistics with zero-cost energy tracking features." />
                <ChoiceCard icon={<RotateCcw className="w-8 h-8 text-blue-600" />} title="Modular Reverse" desc="Liquid return sync policy within 30 solar cycles." />
                <ChoiceCard icon={<Users className="w-8 h-8 text-blue-600" />} title="Architect Care" desc="Real-time humanity sync support available across all timeframes." />
             </div>
          </section>

          {/* Loved by Thousands (Modules) */}
          <section className="px-8 pb-24">
             <h2 className="text-3xl font-black tracking-tighter mb-12 italic text-center">Network <span className="text-blue-600 not-italic">Velocity.</span></h2>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <StatBox icon={<span className="text-4xl">⚡</span>} value="50K+" label="Loops Sync'd" bgColor="bg-blue-600" color="text-white" />
                <StatBox icon={<ShoppingBag className="w-8 h-8 text-blue-600" />} value="100K+" label="Units Shipped" bgColor="bg-white/40" color="text-gray-950" glass />
                <StatBox icon={<Star className="w-8 h-8 text-blue-600 fill-current" />} value="4.9/5" label="Average Pulse" bgColor="bg-gray-100" color="text-gray-900" />
             </div>
          </section>

          {/* Our Commitment (Premium Banner) */}
          <section className="px-8 pb-32">
             <div className="bg-[#0c0c0d] rounded-[64px] p-12 relative overflow-hidden border border-white/5 shadow-2xl group">
                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                   <div className="w-20 h-20 bg-blue-600 text-white rounded-[32px] flex items-center justify-center shrink-0 shadow-2xl shadow-blue-600/20 group-hover:rotate-12 transition-transform">
                      <CircleCheck className="w-10 h-10" />
                   </div>
                   <div className="flex-grow space-y-4 text-center md:text-left">
                      <h3 className="text-2xl font-black tracking-tighter text-white uppercase italic">Modular <span className="text-blue-500 not-italic">Commitment</span></h3>
                      <p className="text-[11px] text-gray-500 font-black uppercase tracking-[0.3em] leading-relaxed max-w-2xl">We are synchronized to your progress. Continuous hardware innovation, absolute security, and the ultimate looping experience. Thank you for being the core of our legacy.</p>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                       <span className="text-3xl font-black text-blue-500 italic drop-shadow-2xl">Legacy IQ</span>
                       <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-600">Established Originals</span>
                   </div>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
             </div>
          </section>
       </main>
    </div>
  );
}

function HeroBadge({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
       <div className="w-14 h-14 rounded-3xl bg-white/5 backdrop-blur-2xl flex items-center justify-center text-white border border-white/10 hover:bg-blue-600 transition-all cursor-default">
          {icon}
       </div>
       <span className="text-[9px] font-black text-white uppercase text-center tracking-[0.2em] opacity-40">{label}</span>
    </div>
  );
}

function ChoiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-[40px] p-8 border border-white shadow-sm text-center flex flex-col items-center group hover:shadow-2xl hover:bg-white transition-all cursor-default">
       <div className="w-16 h-16 rounded-[24px] bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          {icon}
       </div>
       <h4 className="text-[11px] font-black tracking-[0.2em] uppercase mb-4 text-gray-950">{title}</h4>
       <p className="text-[10px] font-bold text-gray-400 leading-relaxed uppercase tracking-tight">{desc}</p>
    </div>
  );
}

function StatBox({ icon, value, label, bgColor, color, glass }: { icon: React.ReactNode, value: string, label: string, bgColor: string, color: string, glass?: boolean }) {
  return (
    <div className={`${bgColor} ${glass ? 'backdrop-blur-2xl border border-white shadow-sm' : 'shadow-2xl'} rounded-[48px] p-10 text-center h-full flex flex-col items-center justify-center group hover:-translate-y-2 transition-all duration-500`}>
       <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
       <h4 className={`text-4xl font-black ${color} tracking-tighter italic`}>{value}</h4>
       <p className={`text-[10px] font-black uppercase tracking-[0.3em] mt-3 ${glass ? 'text-gray-400' : color === 'text-white' ? 'text-blue-100/60' : 'text-gray-400'}`}>{label}</p>
    </div>
  );
}
