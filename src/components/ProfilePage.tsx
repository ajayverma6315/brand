/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Package, 
  Heart, 
  MapPin, 
  CreditCard, 
  User, 
  Lock, 
  Award, 
  RotateCcw, 
  LogOut,
  ChevronRight,
  Plus,
  Edit2,
  Trash2,
  ShieldCheck,
  Gift,
  CheckCircle2,
  Search,
  ShoppingCart,
  ChevronLeft,
  Camera,
  ArrowRight,
  ShoppingBag,
  MoreVertical,
  PlusCircle,
  Clock,
  Zap,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const RECENT_ORDERS = [
  { id: 'VC12563', name: 'Noise Cancelling Headphones', date: 'May 12, 2024', status: 'Delivered', price: 69.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=100' },
  { id: 'VC12562', name: 'Velcotte Smart Watch X1', date: 'May 08, 2024', status: 'Shipped', price: 39.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=100' },
  { id: 'VC12561', name: 'Wirelotte Earbuds Pro', date: 'May 05, 2024', status: 'Delivered', price: 24.99, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=100' },
  { id: 'VC12560', name: 'Power Bank 10000mAh', date: 'May 01, 2024', status: 'Processing', price: 19.99, image: 'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?auto=format&fit=crop&q=80&w=100' },
];

const SAVED_ADDRESSES = [
  { id: 1, type: 'Home', address: '123 Tech Avenue, Silicon Valley, CA 94025', phone: '+1 (555) 0123', isDefault: true },
  { id: 2, type: 'Work', address: '456 Innovation Way, San Francisco, CA 94105', phone: '+1 (555) 9876', isDefault: false },
];

const PAYMENT_METHODS = [
  { id: 1, type: 'Visa', last4: '4242', expiry: '12/26', isDefault: true },
  { id: 2, type: 'MasterCard', last4: '8888', expiry: '08/25', isDefault: false },
];

type ProfileView = 'main' | 'orders' | 'addresses' | 'payment' | 'edit' | 'rewards' | 'coupons' | 'help' | 'faq' | 'blog' | 'settings';

const HELP_TOPICS = [
  { id: 1, title: 'Shipping & Delivery', icon: <Package className="w-5 h-5" />, description: 'Track orders and shipping timelines.' },
  { id: 2, title: 'Warranty & Support', icon: <CheckCircle2 className="w-5 h-5" />, description: 'Product registration and claim process.' },
  { id: 3, title: 'Security & Privacy', icon: <Lock className="w-5 h-5" />, description: 'How we protect your biometric data.' },
  { id: 4, title: 'Technical Issues', icon: <Zap className="w-5 h-5" />, description: 'Troubleshooting sync and firmware.' },
];

const FAQ_ITEMS = [
  { q: "How do I sync my hardware?", a: "Go to Account > Sync Registry and follow the proximity protocol instructions." },
  { q: "What is LiquidTech Warranty?", a: "We offer a 2-year modular replacement period for all glass-age components." },
  { q: "Can I cancel my subscription?", a: "Yes, navigate to Settings > Infrastructure to manage your billing cycle." },
  { q: "Is worldwide shipping available?", a: "We ship to over 120 global nodes with 48-hour clear-time in most regions." }
];

const BLOG_POSTS = [
  { id: 1, title: 'The Glass Age: Designing for Transparency', date: 'May 01, 2024', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=200' },
  { id: 2, title: 'Modular Gadgets: Future of Tech?', date: 'Apr 28, 2024', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=200' },
  { id: 3, title: 'Biometric Security Protocol v4.2', date: 'Apr 15, 2024', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=200' },
];

const COUPONS = [
  { id: 'VEL20', code: 'VELCOTTE20', discount: '20% OFF', description: 'Applicable on all orders above $100', expiry: 'May 30, 2024', color: 'blue' },
  { id: 'SAVE50', code: 'TECHSAVE50', discount: '$50 OFF', description: 'On orders of Smart Watches', expiry: 'Jun 15, 2024', color: 'purple' },
  { id: 'FREESHIP', code: 'FREESHIP', discount: 'FREE SHIPPING', description: 'No minimum order required', expiry: 'Dec 31, 2024', color: 'green' },
];

const REWARDS_HISTORY = [
  { id: 1, action: 'Order #VC12563 Purchase', points: '+70', date: 'May 12, 2024', type: 'earn' },
  { id: 2, action: 'Referral Bonus', points: '+100', date: 'May 10, 2024', type: 'earn' },
  { id: 3, action: 'Review for Earbuds Pro', points: '+50', date: 'May 06, 2024', type: 'earn' },
  { id: 4, action: 'Coupon Redemption', points: '-100', date: 'May 01, 2024', type: 'redeem' },
];

export default function ProfilePage({ 
  onBack, 
  onWishlist, 
  onReturns,
  onLogout,
  user,
  onUpdateUser
}: { 
  onBack: () => void, 
  onWishlist?: () => void, 
  onReturns?: () => void,
  onLogout?: () => void,
  user?: any,
  onUpdateUser?: (u: any) => void
}) {
  const [currentView, setCurrentView] = useState<ProfileView>('main');
  const [userName, setUserName] = useState(user?.name || 'Guest User');
  const [bio, setBio] = useState(user?.bio || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [gender, setGender] = useState(user?.gender || 'None');

  const handleCommitSync = () => {
    onUpdateUser?.({
      ...user,
      name: userName,
      bio,
      phone,
      gender
    });
    setCurrentView('main');
  };

  const containerVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const renderBackHeader = (title: string) => (
    <div className="flex items-center gap-4 mb-8">
      <button 
        onClick={() => setCurrentView('main')}
        className="p-2.5 bg-gray-50 rounded-xl hover:bg-black hover:text-white transition-all shadow-sm active:scale-90"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <h2 className="text-xl font-black tracking-tighter uppercase italic">{title}</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 pb-24 relative overflow-hidden">
        {/* Liquid Background Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[120px] -mr-40 -mt-20 -z-10" />
        <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-[100px] -ml-20 -z-10" />

       {/* Back Button positioned lower as requested */}
       <div className="max-w-2xl mx-auto px-6 pt-10 pb-0 flex lg:hidden">
          <button 
            onClick={onBack} 
            className="p-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-white shadow-xl shadow-blue-100/20 active:scale-95 transition-all text-gray-900 hover:bg-blue-600 hover:text-white group"
          >
             <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
       </div>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {currentView === 'main' && (
            <motion.div key="main" {...containerVariants} className="space-y-12">
               {/* Profile Header */}
               <section className="flex flex-col sm:flex-row items-start justify-between gap-8">
                  <div className="flex items-start gap-6">
                     <div className="relative group">
                        <div className="w-24 h-24 rounded-full bg-gray-100 border-4 border-white shadow-xl overflow-hidden p-1">
                           <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-black italic text-2xl uppercase">
                              {userName.charAt(0)}
                           </div>
                        </div>
                     </div>
                     <div className="space-y-2 text-left">
                        <h1 className="text-3xl font-black tracking-tighter text-gray-950">Hi, <span className="text-blue-600 italic">{userName}</span> 👋</h1>
                        {bio && <p className="text-[11px] text-gray-500 font-bold max-w-xs">{bio}</p>}
                        {phone && <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.1em]">{phone}</p>}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest border border-blue-100">
                           <ShieldCheck className="w-3.5 h-3.5" />
                           Premium Member
                        </div>
                     </div>
                  </div>
                  <button 
                    onClick={() => setCurrentView('edit')}
                    className="flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:shadow-xl hover:bg-black hover:text-white transition-all active:scale-95 group"
                  >
                     <Edit2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                     Edit Profile
                  </button>
               </section>

               {/* Stats Grid - Matching Image Layout */}
               <section className="bg-white/40 backdrop-blur-2xl rounded-[40px] border border-white/60 shadow-sm overflow-hidden divide-x divide-white/40 grid grid-cols-2 sm:grid-cols-4">
                  <StatsBox icon={<Package className="w-5 h-5 text-blue-600" />} label="Orders" value="12" sub="View all" onClick={() => setCurrentView('orders')} />
                  <StatsBox icon={<Heart className="w-5 h-5 text-red-600" />} label="Wishlist" value="8" sub="Saved items" onClick={onWishlist} />
                  <StatsBox icon={<Award className="w-5 h-5 text-green-600" />} label="Rewards" value="320" sub="Points" onClick={() => setCurrentView('rewards')} />
                  <StatsBox icon={<Gift className="w-5 h-5 text-purple-600" />} label="Coupons" value="5" sub="Available" onClick={() => setCurrentView('coupons')} />
               </section>

               {/* My Orders Section */}
               <section className="space-y-6">
                  <div className="flex justify-between items-end px-2">
                     <h2 className="text-xs font-black text-gray-950 uppercase tracking-[0.3em] italic">Active Stream</h2>
                     <button onClick={() => setCurrentView('orders')} className="text-blue-600 text-[10px] font-black tracking-widest uppercase hover:blur-[1px]">Full Log</button>
                  </div>
                  
                  <motion.div 
                     whileHover={{ y: -5 }}
                     onClick={() => setCurrentView('orders')}
                     className="bg-white/40 backdrop-blur-2xl rounded-[40px] p-6 border border-white/60 shadow-sm flex items-center gap-6 group cursor-pointer hover:shadow-xl transition-all"
                  >
                     <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center p-3 shadow-sm group-hover:scale-105 transition-transform">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=100" alt="Latest Order" className="w-full h-full object-contain mix-blend-multiply" />
                     </div>
                     <div className="flex-grow space-y-2">
                        <div className="flex justify-between items-start">
                           <h4 className="text-[11px] font-black text-gray-950 uppercase tracking-tight italic">Unit #VC123456</h4>
                           <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border border-green-100">Delivered</span>
                        </div>
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic">May 10 Sync Arrival</p>
                        <p className="text-[10px] font-black text-gray-950 tracking-tight">1 Item • <span className="text-blue-600 italic">$59.99</span></p>
                     </div>
                     <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </motion.div>
               </section>

               {/* Account Menu List */}
               <section className="space-y-6">
                  <h2 className="text-xs font-black text-gray-950 uppercase tracking-[0.3em] px-2 italic">Account Menu</h2>
                  <div className="bg-white/40 backdrop-blur-2xl rounded-[48px] overflow-hidden border border-white/60 shadow-sm">
                     <MenuListItem icon={<Package className="w-5 h-5" />} label="My Orders" onClick={() => setCurrentView('orders')} />
                     <MenuListItem icon={<Heart className="w-5 h-5" />} label="Wishlist" onClick={onWishlist} />
                     <MenuListItem icon={<MapPin className="w-5 h-5" />} label="Addresses" onClick={() => setCurrentView('addresses')} />
                     <MenuListItem icon={<CreditCard className="w-5 h-5" />} label="Payment Interface" onClick={() => setCurrentView('payment')} />
                     <MenuListItem icon={<Gift className="w-5 h-5" />} label="My Coupons" onClick={() => setCurrentView('coupons')} />
                     <MenuListItem icon={<Award className="w-5 h-5" />} label="Reward Points" onClick={() => setCurrentView('rewards')} />
                     <MenuListItem icon={<Zap className="w-5 h-5" />} label="Latest News & Blog" onClick={() => setCurrentView('blog')} />
                     <MenuListItem icon={<HelpCircle className="w-5 h-5" />} label="General FAQ" onClick={() => setCurrentView('faq')} />
                     <MenuListItem icon={<CheckCircle2 className="w-5 h-5" />} label="Help Center" onClick={() => setCurrentView('help')} />
                     <MenuListItem icon={<LogOut className="w-5 h-5 text-red-500" />} label="Logout" isLast onClick={onLogout} />
                  </div>
               </section>
            </motion.div>
          )}

          {currentView === 'help' && (
            <motion.div key="help" {...containerVariants}>
               {renderBackHeader('Help Center')}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {HELP_TOPICS.map((topic) => (
                    <div key={topic.id} className="bg-white/40 backdrop-blur-xl rounded-[32px] p-6 border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                       <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          {topic.icon}
                       </div>
                       <h4 className="text-[11px] font-black uppercase italic text-gray-950 mb-1">{topic.title}</h4>
                       <p className="text-[10px] font-bold text-gray-400 line-clamp-2">{topic.description}</p>
                    </div>
                  ))}
               </div>

               <div className="bg-gray-950 rounded-[40px] p-8 text-white relative overflow-hidden">
                  <div className="relative z-10">
                     <h3 className="text-xl font-black italic tracking-tight mb-2">Still Need Sync?</h3>
                     <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-6">Our priority support agents are live.</p>
                     <button onClick={() => window.location.href = 'mailto:support@velcotte.ai'} className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-500/20 active:scale-95 transition-transform">Contact Support</button>
                  </div>
                  <HelpCircle className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10 -rotate-12" />
               </div>
            </motion.div>
          )}

          {currentView === 'faq' && (
            <motion.div key="faq" {...containerVariants}>
               {renderBackHeader('General FAQ')}
               <div className="space-y-4">
                  {FAQ_ITEMS.map((item, i) => (
                    <div key={i} className="bg-white/40 backdrop-blur-xl rounded-[32px] p-6 border border-white/60 shadow-sm">
                       <h4 className="text-[11px] font-black uppercase italic text-blue-600 mb-2">Q: {item.q}</h4>
                       <p className="text-[10px] font-bold text-gray-500 leading-relaxed">A: {item.a}</p>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {currentView === 'blog' && (
            <motion.div key="blog" {...containerVariants}>
               {renderBackHeader('LiquidTech Blog')}
               <div className="space-y-6">
                  {BLOG_POSTS.map((post) => (
                    <div key={post.id} className="bg-white/40 backdrop-blur-xl rounded-[40px] p-4 border border-white/60 shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all cursor-pointer">
                       <div className="w-24 h-24 rounded-[32px] overflow-hidden shrink-0">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       </div>
                       <div className="space-y-1">
                          <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{post.date}</p>
                          <h4 className="text-sm font-black uppercase italic tracking-tight text-gray-950 group-hover:text-blue-600 transition-colors">{post.title}</h4>
                          <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-widest pt-2">
                             Full Archive <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {currentView === 'orders' && (
            <motion.div key="orders" {...containerVariants}>
               {renderBackHeader('Order History')}
               <div className="space-y-4">
                  {RECENT_ORDERS.map((order) => (
                    <div key={order.id} className="bg-white/40 backdrop-blur-xl rounded-[32px] p-6 border border-white/60 shadow-sm flex items-center gap-6 group hover:shadow-md transition-all">
                       <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-sm shrink-0">
                          <img src={order.image} alt={order.name} className="w-full h-full object-contain mix-blend-multiply" />
                       </div>
                       <div className="flex-grow">
                          <div className="flex justify-between items-start mb-1">
                             <h4 className="text-[11px] font-black uppercase italic tracking-tight">{order.name}</h4>
                             <span className={`text-[8px] font-black px-2 py-0.5 rounded-lg border uppercase ${
                                order.status === 'Delivered' ? 'bg-green-50 text-green-600 border-green-100' : 
                                order.status === 'Shipped' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-orange-50 text-orange-600 border-orange-100'
                             }`}>{order.status}</span>
                          </div>
                          <p className="text-[9px] font-black text-gray-400 uppercase mb-1">{order.date}</p>
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] font-black italic">{order.id}</span>
                             <span className="text-sm font-black text-blue-600 italic">${order.price}</span>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {currentView === 'addresses' && (
            <motion.div key="addresses" {...containerVariants}>
               {renderBackHeader('Saved Addresses')}
               <div className="space-y-4">
                  {SAVED_ADDRESSES.map((addr) => (
                    <div key={addr.id} className="bg-white/40 backdrop-blur-xl rounded-[32px] p-6 border border-white/60 shadow-sm group">
                       <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-3">
                             <div className="p-2.5 bg-gray-950 text-white rounded-xl">
                                <MapPin className="w-5 h-5" />
                             </div>
                             <div>
                                <h4 className="text-xs font-black uppercase italic tracking-tight">{addr.type}</h4>
                                {addr.isDefault && <span className="text-[8px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg">Default</span>}
                             </div>
                          </div>
                          <button onClick={() => alert('Address Sync Initiated')} className="text-gray-300 hover:text-blue-600 transition-colors p-1"><Edit2 className="w-4 h-4" /></button>
                       </div>
                       <p className="text-[11px] font-black text-gray-600 leading-relaxed mb-4">{addr.address}</p>
                       <div className="flex items-center gap-2 text-[9px] font-black text-gray-400">
                          <Clock className="w-3.5 h-3.5" />
                          LAST SYNC: {addr.phone}
                       </div>
                    </div>
                  ))}
                  <button className="w-full py-6 border-2 border-dashed border-gray-200 rounded-[32px] text-gray-400 flex flex-col items-center gap-2 hover:border-blue-600 hover:text-blue-600 transition-all font-black text-[10px] uppercase tracking-widest italic active:scale-95">
                     <PlusCircle className="w-6 h-6" />
                     Sync New Address
                  </button>
               </div>
            </motion.div>
          )}

          {currentView === 'payment' && (
            <motion.div key="payment" {...containerVariants}>
               {renderBackHeader('Payment Interface')}
               <div className="space-y-4">
                  {PAYMENT_METHODS.map((method) => (
                    <div key={method.id} className="bg-white/40 backdrop-blur-xl rounded-[32px] p-6 border border-white/60 shadow-sm relative overflow-hidden group">
                       <div className="flex justify-between items-center mb-8 relative z-10">
                          <div className="w-12 h-12 bg-white/60 backdrop-blur-md border border-white rounded-2xl flex items-center justify-center p-2.5">
                             <CreditCard className="w-6 h-6 text-gray-950" />
                          </div>
                          <div className="flex gap-2">
                             <button onClick={() => alert('Payment Interface Edit Initiated')} className="text-gray-400 hover:text-blue-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                             <button onClick={() => alert('Payment Interface Delete Initiated')} className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                          </div>
                       </div>
                       <div className="space-y-1 mb-8 relative z-10">
                          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Card Registry</p>
                          <h4 className="text-lg font-black italic tracking-widest">{method.type} •••• {method.last4}</h4>
                       </div>
                       <div className="flex justify-between items-center relative z-10 border-t border-white/40 pt-4">
                          <div className="text-[10px] font-black uppercase tracking-tight text-gray-400">EXPIRY {method.expiry}</div>
                          {method.isDefault && <span className="text-[8px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full italic">Active Interface</span>}
                       </div>
                       <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-600/10 transition-colors" />
                    </div>
                  ))}
                  <button className="w-full bg-gray-950 text-white rounded-[24px] py-5 font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-gray-200">
                     <Plus className="w-4.5 h-4.5" />
                     Add Interface Secure
                  </button>
               </div>
            </motion.div>
          )}

          {currentView === 'rewards' && (
            <motion.div key="rewards" {...containerVariants}>
               {renderBackHeader('Reward Program')}
               <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] p-10 text-white shadow-2xl shadow-blue-200 mb-8 relative overflow-hidden">
                  <div className="relative z-10">
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">Total Balance</p>
                     <h3 className="text-5xl font-black italic tracking-tighter mb-6">320 <span className="text-xl opacity-60">PTS</span></h3>
                     <div className="flex gap-4">
                        <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">Redeem Points</button>
                        <button className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest">Rewards Map</button>
                     </div>
                  </div>
                  <Award className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 rotate-12" />
               </div>

               <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4 mb-4">Point Ledger</h3>
                  {REWARDS_HISTORY.map((item) => (
                    <div key={item.id} className="bg-white/40 backdrop-blur-xl rounded-[32px] p-6 border border-white/60 shadow-sm flex items-center justify-between group">
                       <div className="flex items-center gap-5">
                          <div className={`p-3 rounded-2xl ${item.type === 'earn' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                             {item.type === 'earn' ? <Plus className="w-5 h-5" /> : <Gift className="w-5 h-5" />}
                          </div>
                          <div>
                             <h4 className="text-[11px] font-black uppercase italic text-gray-950">{item.action}</h4>
                             <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{item.date}</p>
                          </div>
                       </div>
                       <span className={`text-lg font-black italic ${item.type === 'earn' ? 'text-green-600' : 'text-red-600'}`}>
                          {item.points}
                       </span>
                    </div>
                  ))}
               </div>
            </motion.div>
          )}

          {currentView === 'coupons' && (
            <motion.div key="coupons" {...containerVariants}>
               {renderBackHeader('My Coupon Vault')}
               <div className="space-y-6">
                  {COUPONS.map((coupon) => (
                    <div key={coupon.id} className="relative group">
                       <div className={`bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-8 group-hover:shadow-2xl transition-all relative z-10 overflow-hidden`}>
                          <div className={`w-20 h-20 rounded-3xl flex items-center justify-center p-4 ${
                             coupon.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                             coupon.color === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-green-50 text-green-600'
                          }`}>
                            <Gift className="w-10 h-10" />
                          </div>
                          <div className="text-center sm:text-left flex-grow">
                             <h4 className="text-2xl font-black italic tracking-tight text-gray-950 mb-1">{coupon.discount}</h4>
                             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">{coupon.description}</p>
                             <div className="flex flex-col sm:flex-row items-center gap-4">
                                <div className="bg-gray-50 border-2 border-dashed border-gray-200 px-6 py-2.5 rounded-xl font-black text-sm tracking-widest text-blue-600">
                                   {coupon.code}
                                </div>
                                <button onClick={() => {
                                   navigator.clipboard.writeText(coupon.code);
                                   alert('Code Sync to Clipboard');
                                }} className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors">Copy Code</button>
                             </div>
                          </div>
                          <div className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em] sm:rotate-90">
                             EXP: {coupon.expiry}
                          </div>
                       </div>
                       <div className="absolute inset-0 bg-blue-600 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-5 transition-opacity" />
                    </div>
                  ))}
                  
                  <div className="bg-gray-50/50 rounded-[32px] p-10 border-2 border-dashed border-gray-100 text-center">
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Have a secret code?</p>
                     <div className="flex items-center gap-3 max-w-sm mx-auto">
                        <input type="text" placeholder="ENTER CODE..." className="flex-grow bg-white border border-gray-100 rounded-xl px-4 py-3 font-black text-[11px] uppercase tracking-widest focus:border-blue-600 outline-none" />
                        <button className="bg-gray-950 text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-transform shadow-lg shadow-gray-200">Sync</button>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
          {currentView === 'edit' && (
            <motion.div key="edit" {...containerVariants} className="space-y-8">
               {renderBackHeader('Identity Sync')}
               
               <div className="flex flex-col items-center space-y-6">
                  <div className="relative">
                     <div className="w-32 h-32 rounded-full bg-gray-100 border-8 border-white shadow-2xl overflow-hidden p-1">
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-black italic text-4xl uppercase">
                           {userName.charAt(0)}
                        </div>
                     </div>
                  </div>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic animate-pulse">Sync DP Sequence</p>
               </div>

               <div className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Public Alias</label>
                     <input 
                       type="text" 
                       value={userName}
                       onChange={(e) => setUserName(e.target.value)}
                       className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors shadow-sm"
                       placeholder="Identity name..."
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Modular Email</label>
                     <input 
                       type="email" 
                       readOnly
                       value={user?.email || "guest@velcotte.tech"}
                       className="w-full bg-gray-50/50 rounded-2xl px-6 py-4 font-black italic text-sm border border-transparent text-gray-400 cursor-not-allowed opacity-60"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Mobile Frequency</label>
                     <input 
                       type="tel" 
                       value={phone}
                       onChange={(e) => setPhone(e.target.value)}
                       className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors shadow-sm"
                       placeholder="+91 00000 00000"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Hardware Gender</label>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {['Male', 'Female', 'Other'].map((g) => (
                           <button
                             key={g}
                             onClick={() => setGender(g)}
                             className={`py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest border transition-all ${gender === g ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100' : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'}`}
                           >
                              {g}
                           </button>
                        ))}
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Bio Stream</label>
                     <textarea 
                       value={bio}
                       onChange={(e) => setBio(e.target.value)}
                       className="w-full bg-white rounded-2xl px-6 py-4 font-black italic text-sm border border-gray-100 focus:border-blue-600 outline-none transition-colors shadow-sm min-h-[120px]"
                       placeholder="Identity bio..."
                     />
                  </div>
                  <div className="space-y-6 pt-6 border-t border-gray-100">
                     <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Infrastructure Settings</h3>
                     <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl">
                        <div className="space-y-0.5">
                           <h4 className="text-[11px] font-black uppercase italic">Notification Stream</h4>
                           <p className="text-[9px] font-bold text-gray-400">Receive sync alerts and drop updates</p>
                        </div>
                        <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center px-1">
                           <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                        </div>
                     </div>
                     <div className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl">
                        <div className="space-y-0.5">
                           <h4 className="text-[11px] font-black uppercase italic">Biometric Auth Sync</h4>
                           <p className="text-[9px] font-bold text-gray-400">Enable face and fingerprint sequence</p>
                        </div>
                        <div className="w-12 h-6 bg-gray-200 rounded-full flex items-center px-1">
                           <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                     </div>
                  </div>

                  <button 
                  onClick={handleCommitSync}
                  className="w-full bg-blue-600 text-white rounded-[24px] py-5 font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-blue-200 hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-3"
                  >
                     Commit Sync
                     <ArrowRight className="w-4.5 h-4.5" />
                  </button>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function StatsBox({ icon, label, value, sub, onClick }: { icon: React.ReactNode, label: string, value: string, sub: string, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`p-6 text-center space-y-3 hover:bg-white transition-all group active:scale-95 ${onClick ? 'cursor-pointer' : ''}`}
    >
       <div className="mx-auto w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
          {icon}
       </div>
       <div className="space-y-1">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
          <h4 className="text-xl font-black text-gray-950 tracking-tighter italic">{value}</h4>
          <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest group-hover:hidden">{sub}</p>
          <p className="hidden group-hover:block text-[8px] font-black text-blue-600 uppercase tracking-widest italic animate-pulse">Execute Sync</p>
       </div>
    </div>
  );
}

function MenuListItem({ icon, label, isLast, onClick }: { icon: React.ReactNode, label: string, isLast?: boolean, onClick?: () => void }) {
  return (
    <div 
      className={`flex items-center justify-between p-7 group transition-all active:bg-gray-50 ${onClick ? 'cursor-pointer hover:bg-white' : ''} ${!isLast ? 'border-b border-white/40' : ''}`}
      onClick={onClick}
    >
       <div className="flex items-center gap-6">
          <div className="w-10 h-10 bg-white/60 rounded-xl text-gray-400 flex items-center justify-center border border-white group-hover:bg-blue-600 group-hover:text-white transition-all">
             {icon}
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.1em] text-gray-850 italic">{label}</span>
       </div>
       <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
    </div>
  );
}
