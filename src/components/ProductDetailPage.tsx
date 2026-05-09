/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Star, 
  ChevronRight, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Headphones as HeadphonesIcon,
  Info,
  CheckCircle2,
  ChevronLeft,
  Heart,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = [
  { name: 'Midnight Black', hex: '#1a1a1a' },
  { name: 'Navy Blue', hex: '#1e3a8a' },
  { name: 'Cloud White', hex: '#e5e7eb' },
  { name: 'Sand Beige', hex: '#d2b48c' },
];

const REVIEWS = [
  { id: 1, name: 'Rohan Mehta', rating: 5, date: '2 days ago', text: 'Amazing sound quality and the noise cancellation is on another level. Totally worth it!', verified: true },
  { id: 2, name: 'Priya Sharma', rating: 4, date: '1 week ago', text: 'Super comfortable and battery life is insane. Perfect for long work hours.', verified: true },
  { id: 3, name: 'Aman Verma', rating: 5, date: '2 weeks ago', text: 'Premium feel, great packaging and fast delivery. Highly recommended!', verified: true },
];

export default function ProductDetailPage({ 
  product, 
  onBack, 
  onAddToCart,
  onBuyNow,
  isWishlisted,
  onToggleWishlist
}: { 
  product: any, 
  onBack: () => void, 
  onAddToCart?: (p: any) => void,
  onBuyNow?: (p: any) => void,
  isWishlisted?: boolean,
  onToggleWishlist?: (id: number) => void
}) {
  const [activeThumb, setActiveThumb] = useState(0);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Open & Check');

  // Use product prop if available, otherwise fallback to hardcoded defaults for safety
  const currentProduct = product || {
     id: 1,
     name: "Velcotte Liquid Audio",
     price: 69.99,
     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400"
  };

  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = () => {
    onAddToCart?.({ ...currentProduct, quantity });
    setToastMessage('Added to Integrated Walk');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToastMessage('Review Submitted Successfully');
    setShowToast(true);
    setIsReviewOpen(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleBuyNow = () => {
    onBuyNow?.({ ...currentProduct, quantity });
  };

  const thumbs = [
    currentProduct.image,
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=400',
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-4 shadow-2xl border border-white/10"
          >
             <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
             </div>
             {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Liquid Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -mr-40 -mt-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50/40 rounded-full blur-[100px] -ml-20 -z-10" />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-8">
        <div className="flex items-center gap-3 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400">
          <div onClick={onBack} className="w-8 h-8 rounded-xl bg-white/60 backdrop-blur-md border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-blue-600 transition-all shadow-sm">
             <ChevronLeft className="w-5 h-5" />
          </div>
          <span className="cursor-pointer hover:text-blue-600 ml-2" onClick={onBack}>Home</span>
          <span className="text-gray-300 opacity-50">/</span>
          <span className="hover:text-blue-600 cursor-pointer">Electronics</span>
          <span className="text-gray-300 opacity-50">/</span>
          <span className="text-gray-950">{currentProduct.name}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-start">
          
          {/* Gallery Section */}
          <div className="flex flex-col-reverse lg:flex-row gap-6">
             <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                {thumbs.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveThumb(i)}
                    className={`w-20 h-20 lg:w-24 lg:h-24 shrink-0 rounded-3xl cursor-pointer border-2 transition-all overflow-hidden bg-white/40 backdrop-blur-md flex items-center justify-center p-2 ${activeThumb === i ? 'border-blue-600 shadow-xl shadow-blue-100 scale-105' : 'border-white hover:border-gray-200'}`}
                  >
                    <img src={img} alt="Product thumb" className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                ))}
             </div>
             
             <div className="flex-grow flex flex-col items-center">
                <div className="w-full aspect-square bg-white/40 backdrop-blur-3xl rounded-[64px] flex items-center justify-center overflow-hidden mb-4 relative group border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]">
                   <motion.img 
                    key={activeThumb}
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    src={thumbs[activeThumb]} 
                    alt="Main product" 
                    className="w-4/5 h-4/5 object-contain hover:scale-110 transition-transform duration-1000 mix-blend-multiply" 
                   />
                   <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-500 border border-white/50 shadow-xl opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      <Search className="w-4 h-4 text-blue-600" />
                      Lens Zoom View
                   </div>
                </div>
             </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-8 lg:space-y-12 h-full flex flex-col justify-center text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                 <span className="bg-blue-600 text-white text-[10px] font-black px-5 py-2 rounded-2xl uppercase tracking-[0.2em] flex items-center gap-2 shadow-xl shadow-blue-200">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Top Choice
                 </span>
                 <span className="bg-white/60 backdrop-blur-md border border-white text-green-600 text-[10px] font-black px-5 py-2 rounded-2xl uppercase tracking-[0.2em] shadow-sm">Ready to Ship</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-4 leading-[0.95] text-gray-950">
                {currentProduct.name}
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm font-black text-gray-950 mt-1">4.8</span>
                  <span className="text-xs font-bold text-gray-400 mt-1">(1,250 reviews)</span>
                </div>
                <div className="hidden sm:block h-6 w-px bg-gray-100" />
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">10k+ Units Active</span>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-3xl rounded-[40px] p-6 sm:p-8 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]">
               <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-4 sm:gap-6 mb-8">
                  <span className="text-4xl sm:text-5xl font-black text-gray-950 tracking-tighter">₹{currentProduct.price}</span>
                  <span className="text-lg sm:text-xl text-gray-400 line-through font-bold decoration-2 opacity-50 tracking-tight">₹{(currentProduct.price * 1.8).toFixed(2)}</span>
                  <span className="bg-red-50 text-red-500 text-[11px] font-black px-4 py-1.5 rounded-2xl uppercase tracking-widest border border-red-100">-46%</span>
               </div>

               <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/30">
                 <FeatureTag icon={<Zap className="w-5 h-5" />} title="ANC Tech 2.0" />
                 <FeatureTag icon={<RotateCcw className="w-5 h-5" />} title="80H Max Liquid" />
                 <FeatureTag icon={<HeadphonesIcon className="w-5 h-5" />} title="Spatial Flow" />
               </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                 <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Selection: {selectedColor.name}</label>
                 <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest cursor-pointer hover:underline">Size Guide</span>
              </div>
              <div className="flex justify-center lg:justify-start gap-3 sm:gap-5">
                {COLORS.map((c) => (
                  <button 
                    key={c.name}
                    onClick={() => setSelectedColor(c)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-3xl border-2 transition-all p-1.5 bg-white/60 backdrop-blur-md shadow-sm ${selectedColor.name === c.name ? 'border-blue-600 scale-110 shadow-lg' : 'border-white hover:border-gray-200'}`}
                  >
                    <div className="w-full h-full rounded-2xl border border-black/5 shadow-inner" style={{ backgroundColor: c.hex }} />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 pt-4">
              <div className="flex items-center justify-center gap-4 bg-white/60 backdrop-blur-md border border-white rounded-[24px] p-2.5 shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-2xl transition-all active:scale-90"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-10 text-center font-black text-lg tracking-tighter">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-2xl transition-all active:scale-90"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-grow bg-blue-600 text-white px-6 py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:bg-black active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 group"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="flex-grow bg-gray-950 text-white px-6 py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl group"
                >
                  Buy Now
                </button>
                <button 
                  onClick={() => onToggleWishlist?.(currentProduct.id)}
                  className={`p-5 bg-white border-2 rounded-[24px] transition-all shadow-sm group flex justify-center items-center ${isWishlisted ? 'border-red-100 text-red-500' : 'border-gray-100 text-gray-900 hover:bg-red-50'}`}
                >
                  <Heart className={`w-6 h-6 group-hover:scale-110 transition-transform ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 pt-10 border-t border-gray-50">
               <SimpleFeature icon={<Truck className="w-5 h-5" />} title="Fluid Delivery" sub="Free over ₹50" />
               <SimpleFeature icon={<RotateCcw className="w-5 h-5" />} title="Glass Returns" sub="30-day Window" />
               <SimpleFeature icon={<ShieldCheck className="w-5 h-5" />} title="Encrypted" sub="100% Secure" />
            </div>
          </div>
        </div>
      </main>

      {/* Detail Tabs with Glass Design */}
      <section className="bg-gray-50/30 backdrop-blur-sm py-24 border-y border-gray-100 relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] -ml-40" />
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-20 overflow-x-auto scrollbar-hide bg-white/40 backdrop-blur-md p-2 rounded-[32px] border border-white/50 w-fit">
              {['Features', 'Specs', 'The Unboxing', 'Live Verification'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-[24px] ${activeTab === tab ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'text-gray-400 hover:text-gray-950'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-center">
               <div className="space-y-10 group text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                     <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Velcotte Originals</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black tracking-[0.02em] leading-tight text-gray-950">Verify Before <br /> <span className="text-blue-600 italic">You Own.</span></h2>
                  <p className="text-gray-500 text-sm font-bold leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Experience Velcotte liquid trust. Inspect your modular gear at arrival and ensure every surface meets our glass-standard quality.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 text-left">
                    <CheckListItem icon={<ShoppingCart className="w-5 h-5" />} text="Instant Unboxing View" />
                    <CheckListItem icon={<Search className="w-5 h-5" />} text="Liquid Surface Check" />
                    <CheckListItem icon={<Info className="w-5 h-5" />} text="Modular Accessory Sync" />
                    <CheckListItem icon={<RotateCcw className="w-5 h-5" />} text="One-Tap Flow Rejection" />
                  </div>

                  <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[40px] flex items-start text-left gap-6 border border-white shadow-sm border-l-4 border-l-blue-600">
                     <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 shadow-sm">
                        <Info className="w-6 h-6" />
                     </div>
                     <p className="text-[11px] font-black text-gray-950 uppercase tracking-widest leading-relaxed pt-1.5">
                        Modular Flow Protection: If the seal is broken or liquid quality fails, instant credits back to your walk.
                     </p>
                  </div>
               </div>

               <div className="relative isolate">
                  <div className="absolute inset-0 bg-blue-600 rounded-[80px] blur-[60px] opacity-10 -rotate-6 scale-95" />
                  <div className="relative bg-white/40 backdrop-blur-2xl p-5 rounded-[64px] border border-white/60 shadow-2xl overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800" 
                      alt="Product check" 
                      className="w-full h-[540px] object-cover rounded-[48px] group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-x-8 bottom-8 p-8 bg-blue-600/90 backdrop-blur-xl rounded-[40px] text-white border border-white/20 shadow-2xl opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                       <div className="flex items-center gap-4 mb-3">
                          <ShieldCheck className="w-8 h-8" />
                          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Hardware Secured</span>
                       </div>
                       <p className="text-[11px] font-black uppercase tracking-widest opacity-80 leading-relaxed">Every edge verified. Ready for performance.</p>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Reviews Section with Glass Cards */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="space-y-4">
                 <h2 className="text-5xl font-black tracking-tighter text-gray-950 italic">Voice of <span className="text-blue-600 not-italic">Explorers</span></h2>
                 <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] flex items-center gap-3">
                    <span className="w-12 h-px bg-blue-100" /> Based on 1,250 verified tests
                 </p>
              </div>
              <button 
                onClick={() => setIsReviewOpen(true)}
                className="bg-gray-950 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-gray-200"
              >
                Write Review
              </button>
           </div>

           <div className="grid lg:grid-cols-[1fr_2fr] gap-20 mb-24 items-center">
              <div className="bg-white/40 backdrop-blur-2xl rounded-[48px] p-12 border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] text-center lg:text-left space-y-6">
                 <div className="text-8xl font-black text-gray-950 tracking-tighter">4.8</div>
                 <div className="flex justify-center lg:justify-start text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                 </div>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Premium Score Excellence</p>
                 <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+40}`} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="user" />)}
                    </div>
                    <span className="text-[10px] font-black text-gray-950">+1.2k Others</span>
                 </div>
              </div>

              <div className="space-y-4">
                 {[86, 10, 3, 1, 0].map((percent, i) => (
                   <div key={i} className="flex items-center gap-6 group cursor-default">
                      <span className="text-[11px] font-black text-gray-950 w-6 tracking-tighter">{5 - i}</span>
                      <div className="flex-grow h-3 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${percent}%` }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="h-full bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
                         />
                      </div>
                      <span className="text-[11px] font-black text-gray-400 w-10 text-right">{percent}%</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {REVIEWS.map((r) => (
                <div key={r.id} className="p-10 rounded-[48px] bg-white/40 backdrop-blur-xl border border-white shadow-sm relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="flex items-center gap-5 mb-8 relative z-10">
                    <img src={`https://i.pravatar.cc/100?img=${r.id+50}`} alt="user" className="w-14 h-14 rounded-2xl border-4 border-white shadow-xl grayscale group-hover:grayscale-0 transition-all" />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-black text-xs uppercase tracking-tight text-gray-950">{r.name}</h4>
                        {r.verified && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                      </div>
                      <div className="flex text-yellow-400">
                         {[1, 2, 3, 4, 5].map((i) => <Star key={i} className={`w-3 h-3 ${i <= r.rating ? 'fill-current' : 'text-gray-200'}`} />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-[13px] font-bold leading-relaxed mb-6 italic opacity-80 group-hover:opacity-100 transition-opacity">"{r.text}"</p>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.date}</span>
                     <div className="flex items-center gap-2 opacity-50">
                        <Star className="w-3 h-3 text-blue-600 fill-current" />
                        <span className="text-[9px] font-black text-gray-950">Helpful</span>
                     </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-100/20 rounded-full blur-2xl group-hover:bg-blue-100/40 transition-colors" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Review Modal */}
      <AnimatePresence>
        {isReviewOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReviewOpen(false)}
              className="absolute inset-0 bg-gray-950/40 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[40px] p-8 lg:p-12 shadow-2xl border border-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -mr-32 -mt-32 -z-10" />
              
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black tracking-tighter italic">Share Your <span className="text-blue-600 not-italic">Flow.</span></h3>
                <button 
                  onClick={() => setIsReviewOpen(false)}
                  className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all font-black"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Rating Experience</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} type="button" className="text-yellow-400 hover:scale-110 transition-transform">
                        <Star className="w-8 h-8 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Your Review</label>
                  <textarea 
                    required
                    placeholder="Describe the hardware synchronization..."
                    className="w-full bg-gray-50 rounded-3xl p-6 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-bold text-gray-950 border border-transparent focus:bg-white resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:bg-gray-950 transition-all shadow-xl shadow-blue-100"
                >
                  Confirm Submission
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Velcotte Promise Section */}
      <section className="bg-white py-12 mb-12">
         <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-[#0c0c0d] to-[#1a1a1c] border border-white/5 rounded-[64px] p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-16 relative overflow-hidden group">
               <div className="flex items-center gap-10 relative z-10">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-black group-hover:rotate-6 transition-transform">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black tracking-tighter text-white mb-2">Velcotte <span className="text-blue-500 italic">Liquid</span> Promise</h3>
                    <p className="text-gray-500 text-[11px] font-black uppercase tracking-[0.4em] italic">Architecture of Trust.</p>
                  </div>
               </div>

               <div className="flex flex-wrap justify-center lg:justify-end gap-16 relative z-10 w-full lg:w-auto">
                  <Stat label="Flow tests" value="50k+" light />
                  <Stat label="Liquid IQ" value="160.0" light />
                  <Stat label="Glass Door" value="Instant" light />
               </div>

               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />
            </div>
         </div>
      </section>

    </div>
  );
}

function FeatureTag({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center group cursor-default">
       <div className="w-12 h-12 rounded-2xl bg-white/60 border border-white text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          {icon}
       </div>
       <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-tight w-20">{title}</span>
    </div>
  );
}

function SimpleFeature({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
      <div className="w-10 h-10 rounded-xl bg-white border border-gray-50 text-blue-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
         {icon}
      </div>
      <div>
         <h4 className="text-[10px] font-black uppercase tracking-tight text-gray-950 mb-0.5">{title}</h4>
         <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest">{sub}</p>
      </div>
    </div>
  );
}

function CheckListItem({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="w-11 h-11 rounded-2xl bg-white border border-gray-100 text-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <span className="text-[11px] font-black text-gray-700 uppercase tracking-tighter">{text}</span>
    </div>
  );
}

function Stat({ label, value, light }: { label: string, value: string, light?: boolean }) {
  return (
    <div className="text-center lg:text-left space-y-1">
       <div className={`text-4xl font-black tracking-tighter ${light ? 'text-white' : 'text-gray-950'}`}>{value}</div>
       <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${light ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
    </div>
  );
}

function Search(props: any) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  )
}

function Zap(props: any) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><path d="M4 14.5a3.5 3.5 0 0 0 4-4.5l5.5-1.5-1.5 5.5h6l-8.5 8.5 1.5-8.5h-7z"/></svg>
  )
}
