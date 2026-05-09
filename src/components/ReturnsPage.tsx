/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Search, 
  ShoppingCart, 
  ChevronLeft, 
  RotateCcw, 
  Truck, 
  CreditCard,
  ClipboardList,
  SearchIcon,
  CircleCheck,
  CircleX,
  ChevronRight,
  Package,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function ReturnsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        {/* Liquid Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100/20 rounded-full blur-[120px] -mr-20 -mt-20 -z-10" />
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

       <main className="p-6 space-y-10 max-w-2xl mx-auto">
          {/* Top Banner (Screenshot 2) - Frosted Glass */}
          <section className="bg-white/40 backdrop-blur-2xl rounded-[48px] p-8 flex items-center justify-between relative overflow-hidden border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] group">
             <div className="relative z-10 max-w-[65%] space-y-6">
                <div className="space-y-2">
                   <h2 className="text-3xl font-black tracking-tighter italic">Easy Reverse. <br /><span className="text-blue-600 not-italic">Fluid Flow.</span></h2>
                   <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] leading-relaxed">Identity mismatch or unit failure? Sync a return within 30 solar cycles.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                   <SmallPoint icon={<RotateCcw className="w-3.5 h-3.5" />} label="30 DAY SYNC" />
                   <SmallPoint icon={<Truck className="w-3.5 h-3.5" />} label="0-COST TRANSFER" />
                   <SmallPoint icon={<CreditCard className="w-3.5 h-3.5" />} label="INSTANT CREDITS" />
                </div>
             </div>
             <div className="w-28 shrink-0 relative">
                <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full" />
                <img src="https://images.unsplash.com/photo-1549463591-14cc58d1ec7d?auto=format&fit=crop&q=80&w=200" alt="Package" className="w-full relative z-10 rounded-3xl grayscale saturate-150 rotate-12 group-hover:rotate-6 transition-transform duration-700" />
             </div>
          </section>

          {/* How Returns Work (Screenshot 2) */}
          <section className="space-y-8">
             <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-950 ml-2 italic">Sync Protocol</h3>
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative">
                <div className="absolute top-8 left-1/2 right-0 border-t-2 border-dashed border-gray-100 -z-10 hidden sm:block" />
                <StepIcon number={1} icon={<ClipboardList className="w-6 h-6" />} label="Request" sub="Submit identity in account loop" />
                <StepIcon number={2} icon={<Package className="w-6 h-6" />} label="Transfer" sub="Pack unit with modular tag" />
                <StepIcon number={3} icon={<SearchIcon className="w-6 h-6" />} label="Inspect" sub="Unit integrity evaluation" />
                <StepIcon number={4} icon={<CreditCard className="w-6 h-6" />} label="Refund" sub="Energy return to source" />
             </div>
          </section>

          {/* Returnable Items (Glass Cards) */}
          <section className="space-y-4">
             <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-950 ml-2 italic text-green-600">Valid Loops</h3>
             <div className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-8 border border-white/60 shadow-sm space-y-5">
                <CheckItem label="Unused hardware in original core transition state" />
                <CheckItem label="All original identifiers, modular packaging and attachments included" />
                <CheckItem label="Electronics must be returned with original sync seal intact" />
                <CheckItem label="Return pulse must be raised within 30 days of delivery" />
             </div>
          </section>

          {/* Non-Returnable Items (Glass Cards) */}
          <section className="space-y-4">
             <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-950 ml-2 italic text-red-600">Locked Loops</h3>
             <div className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-8 border border-white/60 shadow-sm space-y-5">
                <XItem label="Personal identity core & hygiene hardware" />
                <XItem label="Energy vouchers and modular discounts" />
                <XItem label="Units marked as 'Non-Syncable' on registry" />
                <XItem label="Customized or made-to-order hardware architecture" />
             </div>
          </section>

          {/* My Return Requests (Frosted List) */}
          <section className="space-y-6">
             <div className="flex justify-between items-end px-2">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-950 italic">Active Syncs</h3>
                <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:blur-[1px]">Archive</button>
             </div>
             
             <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white/40 backdrop-blur-2xl rounded-[48px] p-8 border border-white/60 shadow-sm flex flex-col sm:flex-row gap-8 relative overflow-hidden group"
             >
                <div className="w-32 h-32 bg-white rounded-[32px] flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200" alt="Product" className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-grow space-y-4">
                   <div className="flex justify-between items-start">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">ORDER #VC123456</p>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">SYNCED 02 MAY</p>
                   </div>
                   <h4 className="text-lg font-black tracking-tight leading-snug line-clamp-1 hover:text-blue-600 transition-colors">Noise Cancelling Wireless Loop Pro</h4>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">CORE BLACK • UNITS: 1</p>
                   <div className="flex items-center justify-between pt-2">
                      <span className="text-2xl font-black text-gray-950 tracking-tighter italic">$59.99</span>
                      <div className="flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-blue-100">
                         <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                         In Transfer
                      </div>
                   </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
             </motion.div>

             <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#0c0c0d] p-8 rounded-[40px] border border-white/5 group overflow-hidden relative">
                <div className="relative z-10 text-center sm:text-left">
                   <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em] mb-1">Track Pulse: #RT567890</p>
                   <p className="text-[10px] font-black text-white uppercase tracking-widest">Initialization: 05 May, 2024</p>
                </div>
                <button className="bg-white text-black px-10 py-5 rounded-[24px] font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-600 hover:text-white transition-all group flex items-center gap-3 relative z-10 active:scale-95">
                   Track Loop IQ
                   <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
             </div>
          </section>

          {/* Need Help? (Screenshot 2) */}
          <section className="space-y-4">
             <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-950 ml-2 italic">Support Sync</h3>
             <button className="w-full bg-white/40 backdrop-blur-2xl rounded-[40px] p-8 border border-white/60 shadow-sm flex items-center justify-between hover:bg-white hover:shadow-xl transition-all group">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-blue-600 text-white rounded-[24px] flex items-center justify-center shadow-lg shadow-blue-100 group-hover:rotate-12 transition-transform">
                      <ClipboardList className="w-8 h-8" />
                   </div>
                   <div className="text-left">
                      <p className="text-sm font-black tracking-tight text-gray-950 mb-1">Human Architect Core</p>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">24/7 Energy sync • support@velcotte.io</p>
                   </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-300 group-hover:translate-x-2 transition-transform" />
             </button>
          </section>
       </main>
    </div>
  );
}

function SmallPoint({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white shadow-sm">
       <div className="text-blue-600">{icon}</div>
       <span className="text-[9px] font-black uppercase tracking-tight text-gray-950">{label}</span>
    </div>
  );
}

function StepIcon({ number, icon, label, sub }: { number: number, icon: React.ReactNode, label: string, sub: string }) {
  return (
    <div className="flex flex-col items-center gap-4 w-full text-center group cursor-default">
       <div className="relative">
          <div className="w-16 h-16 bg-white rounded-[24px] shadow-sm border border-white group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center text-blue-600">
             {icon}
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 text-white text-[10px] font-black rounded-full flex items-center justify-center border-3 border-white shadow-sm group-hover:bg-black transition-colors">{number}</div>
       </div>
       <div className="space-y-1">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-950">{label}</h4>
          <p className="text-[9px] font-black tracking-tight text-gray-400 leading-tight uppercase px-1 opacity-60">{sub}</p>
       </div>
    </div>
  );
}

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-4 group">
       <CircleCheck className="w-5 h-5 text-green-500 shrink-0 group-hover:scale-110 transition-transform" />
       <p className="text-[10px] font-black text-gray-500 leading-relaxed uppercase tracking-tight">{label}</p>
    </div>
  );
}

function XItem({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-4 group">
       <CircleX className="w-5 h-5 text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
       <p className="text-[10px] font-black text-gray-500 leading-relaxed uppercase tracking-tight">{label}</p>
    </div>
  );
}




