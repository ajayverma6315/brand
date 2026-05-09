/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ChevronLeft, 
  HelpCircle, 
  Shield, 
  FileText,
  Search,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';

export function FAQPage({ onBack }: { onBack: () => void }) {
  const faqs = [
    { q: "What is Velcotte Sync Delivery?", a: "Velcotte Sync is our proprietary shipping loop that ensures your hardware arrives in liquid-smooth condition within 48 hours of order registry." },
    { q: "How do I reverse a hardware flow?", a: "You can initiate a return (Reverse Flow Sync) through your profile dashboard within 30 days of arrival." },
    { q: "Are the products modular?", a: "Yes, 90% of our Velcotte Originals are designed with modular components for future-proof performance updates." },
    { q: "Is international sync available?", a: "We currently provide sync operations to over 40 countries globally with optimized tariff loops." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] -mr-20 -mt-20 -z-10" />
        
        <div className="sticky top-0 bg-white/40 backdrop-blur-3xl z-50 px-6 py-6 border-b border-white/50">
          <div className="max-w-3xl mx-auto flex items-center gap-4">
             <button onClick={onBack} className="p-2.5 bg-white/60 rounded-xl border border-white shadow-sm transition-transform active:scale-90">
                <ChevronLeft className="w-5 h-5" />
             </button>
             <h2 className="font-black text-xl tracking-tighter uppercase italic text-gray-950 flex items-center gap-2">
               <HelpCircle className="w-5 h-5 text-blue-600" />
               FAQ Registry
             </h2>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
            <div className="text-center space-y-4 mb-16">
               <h1 className="text-5xl font-black tracking-tighter italic">Common <span className="text-blue-600">Loops.</span></h1>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Search the knowledge interface for sync solutions.</p>
            </div>

            <div className="space-y-6">
               {faqs.map((faq, i) => (
                  <div key={i} className="bg-white/40 backdrop-blur-2xl rounded-[32px] p-8 border border-white shadow-sm group hover:shadow-xl transition-all">
                     <div className="flex justify-between items-start gap-4 mb-4">
                        <h4 className="text-sm font-black uppercase italic tracking-tight text-gray-950">{faq.q}</h4>
                        <div className="p-1 bg-gray-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                           <Plus className="w-4 h-4" />
                        </div>
                     </div>
                     <p className="text-[11px] font-bold text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
               ))}
            </div>
        </main>
    </div>
  );
}

export function PrivacyPolicyPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] -mr-20 -mt-20 -z-10" />
        
        <div className="sticky top-0 bg-white/40 backdrop-blur-3xl z-50 px-6 py-6 border-b border-white/50">
          <div className="max-w-3xl mx-auto flex items-center gap-4">
             <button onClick={onBack} className="p-2.5 bg-white/60 rounded-xl border border-white shadow-sm transition-transform active:scale-90">
                <ChevronLeft className="w-5 h-5" />
             </button>
             <h2 className="font-black text-xl tracking-tighter uppercase italic text-gray-950 flex items-center gap-2">
               <Shield className="w-5 h-5 text-blue-600" />
               Privacy Sync
             </h2>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
            <section className="space-y-6">
               <h1 className="text-4xl font-black tracking-tighter italic">Identity <span className="text-blue-600">Protection.</span></h1>
               <div className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-10 border border-white/60 shadow-sm space-y-10">
                  <div className="space-y-4">
                     <h3 className="text-xs font-black uppercase tracking-widest text-gray-950">1. Data Architecture</h3>
                     <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider">Your identity metrics are encrypted using Velcotte-Core standards. We do not share your loop history with third-party interfaces without your explicit registry signal.</p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xs font-black uppercase tracking-widest text-gray-950">2. Cookies & Trackers</h3>
                     <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider">We use minimal performance trackers to optimize your browsing loop. These sync pulses are anonymous and expire after each session completion.</p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xs font-black uppercase tracking-widest text-gray-950">3. Rights Registry</h3>
                     <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider">You hold the master key to your data. Request a full identity wipe or export your sync history at any time through our security interface.</p>
                  </div>
               </div>
            </section>
        </main>
    </div>
  );
}

export function TermsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-[120px] -mr-20 -mt-20 -z-10" />
        
        <div className="sticky top-0 bg-white/40 backdrop-blur-3xl z-50 px-6 py-6 border-b border-white/50">
          <div className="max-w-3xl mx-auto flex items-center gap-4">
             <button onClick={onBack} className="p-2.5 bg-white/60 rounded-xl border border-white shadow-sm transition-transform active:scale-90">
                <ChevronLeft className="w-5 h-5" />
             </button>
             <h2 className="font-black text-xl tracking-tighter uppercase italic text-gray-950 flex items-center gap-2">
               <FileText className="w-5 h-5 text-blue-600" />
               Terms of Flow
             </h2>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
            <section className="space-y-6">
               <h1 className="text-4xl font-black tracking-tighter italic">Standard <span className="text-blue-600">Interface.</span></h1>
               <div className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-10 border border-white/60 shadow-sm space-y-10">
                  <div className="space-y-4">
                     <h3 className="text-xs font-black uppercase tracking-widest text-gray-950">1. Usage Agreement</h3>
                     <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider">By entering the Velcotte loop, you agree to our modular terms. Users must maintain verified identity signals for all premium sync operations.</p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xs font-black uppercase tracking-widest text-gray-950">2. Hardware Liability</h3>
                     <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider">All original units are tested for 100% performance integrity. User-initiated loop modification may void the Velcotte Sync warranty loop.</p>
                  </div>
                  <div className="space-y-4">
                     <h3 className="text-xs font-black uppercase tracking-widest text-gray-950">3. Territory Dynamics</h3>
                     <p className="text-[11px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider">Local hardware regulations apply. Velcotte operates as a neutral tech architect, bridging sync gaps between global territories.</p>
                  </div>
               </div>
            </section>
        </main>
    </div>
  );
}
