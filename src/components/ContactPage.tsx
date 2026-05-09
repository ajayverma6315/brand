/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Send, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Search,
  ShoppingCart,
  User,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        {/* Liquid Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -mr-20 -mt-20 -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[100px] -ml-20 -mb-20 -z-10" />

       {/* Top Nav (consistent with mobile view) */}
       <div className="lg:hidden sticky top-0 bg-white/40 backdrop-blur-3xl z-50 px-6 py-6 flex items-center justify-between border-b border-white/50">
          <div className="flex items-center gap-4">
             <button onClick={onBack} className="p-2 bg-white/60 rounded-xl border border-white shadow-sm transition-transform active:scale-90">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
             </button>
             <span className="font-black text-xl tracking-tighter text-gray-950 uppercase italic">Contact <span className="text-blue-600 not-italic">Sync</span></span>
          </div>
          <div className="flex items-center gap-5 text-gray-950">
             <Search className="w-5.5 h-5.5" />
             <div className="relative">
                <ShoppingCart className="w-5.5 h-5.5" />
                <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black border-2 border-white">3</span>
             </div>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 relative z-10">
          {/* Hero Section (Screenshot 1) */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
             <div className="space-y-12">
                <div className="space-y-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-blue-100">
                      <Zap className="w-3 h-3" /> Real-time IQ Sync
                   </div>
                   <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] italic">Human <br /><span className="text-blue-600 not-italic">Connection.</span></h1>
                   <p className="text-gray-400 text-sm font-black uppercase tracking-[0.2em] max-w-sm leading-relaxed">Identity mismatch? Hardware failure? Our architects are synchronized for your performance.</p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                   <ContactMethodCard 
                     icon={<Mail className="w-6 h-6" />} 
                     title="Energy Mail" 
                     value="support@velcotte.io" 
                     sub="REPLY IQ: 24 SOLAR HOURS" 
                     color="text-blue-600"
                     bgColor="bg-blue-600"
                   />
                   <ContactMethodCard 
                     icon={<MessageSquare className="w-6 h-6" />} 
                     title="Live Loop" 
                     value="10 AM – 8 PM IST" 
                     sub="MON TO SUN SYNC" 
                     color="text-green-600"
                     bgColor="bg-green-600"
                   />
                </div>
             </div>

             <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
                <div className="relative bg-white/40 backdrop-blur-3xl rounded-[64px] border border-white p-4 shadow-2xl overflow-hidden group">
                   <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" alt="Support Team" className="w-full rounded-[48px] grayscale saturate-150 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute bottom-12 left-12 right-12 p-8 bg-[#0c0c0d]/80 backdrop-blur-xl rounded-[32px] border border-white/10 text-white">
                      <p className="text-xs font-black uppercase tracking-widest italic leading-snug">"Synchronizing human empathy with modular hardware speed."</p>
                      <p className="mt-4 text-[9px] font-black uppercase tracking-[0.4em] text-blue-500">— ARCHITECT CORE</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
             {/* Contact Form (Glass Style) */}
             <div className="lg:col-span-2 bg-white/40 backdrop-blur-2xl rounded-[64px] p-10 lg:p-16 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] space-y-12">
                <div className="space-y-2">
                   <h2 className="text-3xl font-black tracking-tighter italic">Send <span className="text-blue-600 not-italic">Message.</span></h2>
                   <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">Initialize a new inquiry protocol.</p>
                </div>
                <form className="space-y-8">
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-950 ml-1">Identity Name</label>
                         <input type="text" placeholder="Architect Alpha" className="w-full bg-white/60 border border-white/80 rounded-[24px] px-6 py-5 text-sm outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all font-bold placeholder:text-gray-300" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-950 ml-1">Energy Mail</label>
                         <input type="email" placeholder="flux@velcotte.io" className="w-full bg-white/60 border border-white/80 rounded-[24px] px-6 py-5 text-sm outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all font-bold placeholder:text-gray-300" />
                      </div>
                   </div>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-950 ml-1">Module ID (Optional)</label>
                         <input type="text" placeholder="VC-8872-X" className="w-full bg-white/60 border border-white/80 rounded-[24px] px-6 py-5 text-sm outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all font-bold placeholder:text-gray-300" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-950 ml-1">Protocol Subject</label>
                         <select className="w-full bg-white/60 border border-white/80 rounded-[24px] px-6 py-5 text-sm outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all font-bold appearance-none cursor-pointer">
                            <option>Sync Parameter</option>
                            <option>Order Loop</option>
                            <option>Product IQ</option>
                            <option>Reverse Sync</option>
                            <option>Other</option>
                         </select>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-950 ml-1">Manifesto Payload</label>
                      <textarea rows={4} placeholder="Describe the sync mismatch..." className="w-full bg-white/60 border border-white/80 rounded-[24px] px-6 py-5 text-sm outline-none focus:ring-4 focus:ring-blue-100 focus:bg-white transition-all font-bold resize-none placeholder:text-gray-300" />
                   </div>
                   <button className="bg-blue-600 text-white px-12 py-6 rounded-[24px] font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-blue-100 hover:bg-black transition-all flex items-center gap-3 group active:scale-95">
                      <Send className="w-5 h-5" />
                      Initialize Sync
                   </button>
                </form>
             </div>

             {/* Side Info (Glass) */}
             <div className="space-y-8">
                <div className="bg-white/40 backdrop-blur-2xl rounded-[48px] p-10 border border-white/60 shadow-sm">
                   <h3 className="text-xl font-black mb-8 tracking-tighter italic uppercase text-blue-600">Quick IQ</h3>
                   <div className="space-y-2">
                      <HelpLink label="Protocol: Order Tracking" />
                      <HelpLink label="Sync: Modular Returns" />
                      <HelpLink label="Energy: Refund Timeline" />
                      <HelpLink label="Security: Data Sync" />
                   </div>
                </div>

                <div className="bg-[#0c0c0d] rounded-[48px] p-10 shadow-2xl border border-white/5 space-y-10 group overflow-hidden relative">
                   <h3 className="text-xl font-black mb-8 tracking-tighter italic text-white">Registry <span className="text-blue-500 not-italic">Info</span></h3>
                   <div className="space-y-8 relative z-10">
                      <InfoDetail icon={<MapPin className="w-5 h-5" />} value="VELCOTTE ORIGINALS H.Q. BENGALURU, KARNATAKA, IN." />
                      <InfoDetail icon={<Mail className="w-5 h-5" />} value="SUPPORT@VELCOTTE.IO" />
                      <InfoDetail icon={<Clock className="w-5 h-5" />} value="SUN - SUN : 10:00 AM – 8:00 PM" />
                   </div>
                   <div className="flex gap-4 mt-8 pt-8 border-t border-white/5 relative z-10">
                      <SocialButton icon={<Facebook className="w-5 h-5" />} color="text-blue-400" />
                      <SocialButton icon={<Instagram className="w-5 h-5" />} color="text-pink-400" />
                      <SocialButton icon={<Youtube className="w-5 h-5" />} color="text-red-400" />
                      <SocialButton icon={<Twitter className="w-5 h-5" />} color="text-blue-300" />
                   </div>
                   <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
                </div>
             </div>
          </div>

          {/* Value Bar (Screenshot 1) */}
          <div className="mt-20 bg-white/40 backdrop-blur-2xl rounded-[48px] p-10 lg:p-14 border border-white/60 flex flex-col md:flex-row items-center justify-between gap-12 group hover:shadow-2xl transition-all">
             <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-[32px] flex items-center justify-center shadow-2xl shadow-blue-100 group-hover:rotate-12 transition-transform">
                   <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                   <h4 className="text-2xl font-black tracking-tighter italic uppercase">Absolute Time <span className="text-blue-600 not-italic">Value.</span></h4>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] max-w-sm leading-relaxed">Architects respond within 24 lunar hours. Zero-lag human core sync.</p>
                </div>
             </div>
             <div className="flex gap-6">
                <button className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:bg-blue-600 hover:text-white transition-all text-blue-600">
                   <Phone className="w-8 h-8" />
                </button>
             </div>
          </div>
       </div>
    </div>
  );
}

function ContactMethodCard({ icon, title, value, sub, color, bgColor }: { icon: React.ReactNode, title: string, value: string, sub: string, color: string, bgColor: string }) {
  return (
    <div className="bg-white/40 backdrop-blur-xl rounded-[40px] p-8 shadow-sm border border-white hover:bg-white hover:shadow-2xl transition-all group cursor-default">
       <div className={`${bgColor} text-white w-fit p-4 rounded-[20px] mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-100`}>
          {icon}
       </div>
       <h4 className="font-black text-xs uppercase tracking-widest text-gray-950 mb-3">{title}</h4>
       <p className="text-sm font-black text-gray-900 mb-2 truncate">{value}</p>
       <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest opacity-60">{sub}</p>
    </div>
  );
}

function HelpLink({ label }: { label: string }) {
  return (
    <button className="w-full flex items-center justify-between px-6 py-5 hover:bg-white/60 hover:backdrop-blur-md rounded-2xl transition-all group">
       <span className="text-[10px] font-black text-gray-950 uppercase tracking-widest">{label}</span>
       <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
    </button>
  );
}

function InfoDetail({ icon, value }: { icon: React.ReactNode, value: string }) {
  return (
    <div className="flex items-center gap-6 group">
       <div className="p-4 bg-white/5 backdrop-blur-xl rounded-2xl text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 border border-white/5">
          {icon}
       </div>
       <p className="text-[10px] font-black text-white uppercase tracking-widest leading-relaxed opacity-60">{value}</p>
    </div>
  );
}

function SocialButton({ icon, color }: { icon: React.ReactNode, color: string }) {
  return (
    <button className={`w-14 h-14 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center ${color} shadow-sm border border-white/5 hover:scale-110 active:scale-95 hover:bg-blue-600 hover:text-white transition-all duration-300`}>
       {icon}
    </button>
  );
}




