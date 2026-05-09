/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Headphones as HeadphonesIcon,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  Chrome,
  Facebook,
  Apple,
  Award,
  Zap,
  ChevronLeft,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function LoginPage({ onBack, onProfile }: { onBack: () => void, onProfile: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 flex flex-col relative overflow-hidden">
       {/* Liquid Background Blobs */}
       <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -ml-20 -mt-20 -z-10" />
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[100px] -mr-20 -mb-20 -z-10" />

       {/* Back Button positioned lower as requested */}
       <div className="max-w-7xl mx-auto px-6 pt-10 pb-0 flex lg:hidden">
          <button 
            onClick={onBack} 
            className="p-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-white shadow-xl shadow-blue-100/20 active:scale-95 transition-all text-gray-900 hover:bg-blue-600 hover:text-white group"
          >
             <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
       </div>

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="max-w-5xl w-full bg-white/40 backdrop-blur-3xl rounded-[64px] border border-white/60 shadow-[0_32px_84px_-12px_rgba(31,38,135,0.15)] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-700">
          
          {/* Left Panel - Dark Deep Blue Glass */}
          <div className="md:w-[45%] bg-[#0c0c0d] relative p-10 lg:p-16 overflow-hidden text-white flex flex-col justify-between min-h-[600px]">
             {/* Decorative light streaks & blobs */}
             <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-[-20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rotate-45" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-blue-600/10 blur-[120px] rounded-full" />
             </div>

             <div className="relative z-10 space-y-12">
                <div className="space-y-4">
                   <h1 className="text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] italic">
                     Identity <br />
                     <span className="text-blue-500 not-italic">Sync.</span>
                   </h1>
                   <p className="text-gray-500 text-[11px] font-black uppercase tracking-[0.4em] leading-relaxed max-w-[280px]">
                     Architecture of premium performance. Your hardware loop awaits.
                   </p>
                </div>

                <div className="space-y-8">
                  <FeatureItem 
                    icon={<ShieldCheck className="w-6 h-6 text-blue-500" />}
                    title="Proprietary Flow"
                    desc="Encrypted identity for zero-leak performance."
                  />
                  <FeatureItem 
                    icon={<Zap className="w-6 h-6 text-blue-500" />}
                    title="Instant Energy"
                    desc="Synchronized delivery through modular loops."
                  />
                  <FeatureItem 
                    icon={<Award className="w-6 h-6 text-blue-500" />}
                    title="Elite Status"
                    desc="100% verified hardware standards."
                  />
                </div>
             </div>

             <div className="relative z-10 mt-12 group cursor-default">
                <div className="relative">
                   <div className="absolute -inset-10 bg-blue-600/20 blur-[60px] rounded-full group-hover:bg-blue-600/40 transition-colors" />
                   <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] shadow-2xl relative overflow-hidden group-hover:-translate-y-2 transition-transform">
                      <div className="flex items-center justify-between mb-4">
                         <div className="flex -space-x-3">
                            {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-8 h-8 rounded-full border-2 border-[#0c0c0d]" alt="user" />)}
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Join the loop</span>
                      </div>
                      <p className="text-xs font-black tracking-tight text-white/80 italic leading-snug">"The modular transition is ultimate. Zero friction, absolute flow."</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Panel - Login Form (Frosted) */}
          <div className="md:w-[55%] p-10 lg:p-20 flex flex-col justify-center bg-white/40">
            <div className="mb-12 text-center md:text-left space-y-4">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-[9px] font-black uppercase tracking-widest border border-blue-100 mb-2">
                 <Lock className="w-3 h-3" /> Hardware Secured
               </div>
              <h2 className="text-4xl font-black mb-2 tracking-tighter text-gray-950 italic">Initialize <span className="text-blue-600 not-italic">Identity</span></h2>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Enter parameters to sync your hardware loop.</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-700 ml-1">Identity Mail</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none group-focus-within:text-blue-600 text-gray-400 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="architect@velcotte.io" 
                    className="block w-full pl-12 pr-6 py-5 bg-white/60 border border-white/80 rounded-[24px] focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all placeholder:text-gray-300 text-xs font-bold"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-700 ml-1">Security Key</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none group-focus-within:text-blue-600 text-gray-400 transition-colors">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••" 
                    className="block w-full pl-12 pr-14 py-5 bg-white/60 border border-white/80 rounded-[24px] focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all placeholder:text-gray-300 text-xs font-bold"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:blur-[1px] transition-all">Forgot Frequency?</button>
              </div>

              <button 
                onClick={(e) => { e.preventDefault(); onProfile(); }}
                className="w-full bg-blue-600 text-white font-black uppercase tracking-[0.2em] py-6 rounded-[24px] shadow-2xl shadow-blue-200 hover:bg-black transition-all active:scale-[0.98] text-[11px]"
              >
                Sync Identity
              </button>
            </form>

            <div className="relative my-12 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative px-6 bg-white/40 backdrop-blur-md text-gray-300 text-[10px] font-black uppercase tracking-[0.3em]">Hardware Auth</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SocialButton icon={<Chrome className="w-5 h-5" />} text="Google IQ" />
              <SocialButton icon={<Apple className="w-5 h-5" />} text="Apple ID" />
            </div>

            <p className="mt-12 text-center text-[10px] font-black uppercase tracking-widest text-gray-400">
              New Architect? <button className="text-blue-600 hover:blur-[1px] transition-all">Register Loop</button>
            </p>
          </div>
        </div>
      </main>

      {/* Footer Features (Glass) */}
      <div className="max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <FooterFeature icon={<Truck className="w-6 h-6" />} title="Fluid Transfer" sub="Energy Optimized" />
          <FooterFeature icon={<ShieldCheck className="w-6 h-6" />} title="Verified Path" sub="100% Performance" />
          <FooterFeature icon={<RotateCcw className="w-6 h-6" />} title="Easy Reverse" sub="Liquid Policy" />
          <FooterFeature icon={<HeadphonesIcon className="w-6 h-6" />} title="Human Core" sub="Architect Support" />
        </div>
      </div>

      <footer className="py-12 border-t border-white/50 flex flex-col items-center gap-6 relative z-10 bg-white/20 backdrop-blur-sm">
        <p className="text-[10px] uppercase font-black tracking-[0.4em] text-gray-300">© 2024 VELCOTTE ORIGINALS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-12 text-[10px] uppercase font-black tracking-[0.4em] text-gray-400">
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy Sync</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms of Flow</a>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-xs uppercase tracking-widest text-white mb-2">{title}</h4>
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-tight leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function SocialButton({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <button className="flex items-center justify-center gap-3 py-4 bg-white/60 backdrop-blur-md border border-white rounded-[20px] hover:bg-white hover:shadow-xl transition-all font-black text-[10px] tracking-widest uppercase text-gray-700">
      {icon}
      {text}
    </button>
  );
}

function FooterFeature({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) {
  return (
    <div className="flex items-center gap-5 p-6 bg-white/40 backdrop-blur-xl rounded-[32px] border border-white shadow-sm hover:shadow-xl transition-all group">
      <div className="bg-white p-3 rounded-2xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-[11px] uppercase tracking-widest leading-none mb-1 text-gray-950">{title}</h4>
        <p className="text-gray-400 text-[9px] font-black uppercase tracking-widest leading-none opacity-60">{sub}</p>
      </div>
    </div>
  );
}
