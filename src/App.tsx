/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  User, 
  ShoppingCart, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Headphones as HeadphonesIcon,
  ChevronRight,
  ChevronDown,
  Star,
  Plus,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle2,
  ChevronLeft,
  Menu,
  X,
  LogOut,
  Heart,
  Zap,
  TrendingUp,
  Package,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import CartPage from './components/CartPage';
import ProductDetailPage from './components/ProductDetailPage';
import ProfilePage from './components/ProfilePage';
import ShopPage from './components/ShopPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import ReturnsPage from './components/ReturnsPage';
import WishlistPage from './components/WishlistPage';
import SearchOverlay from './components/SearchOverlay';
import CategoriesPage from './components/CategoriesPage';
import CheckoutPage from './components/CheckoutPage';
import ProductCard from './components/ProductCard';
import { FAQPage, PrivacyPolicyPage, TermsPage } from './components/LegalPages';
import { OrderTrackingPage, NotificationsPage } from './components/TrackingAndNotifications';

const CATEGORIES = [
  { id: 1, name: 'Electronics', icon: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=200' },
  { id: 2, name: 'Gadgets', icon: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=200' },
  { id: 3, name: 'Accessories', icon: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=200' },
  { id: 4, name: 'Audio', icon: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200' },
  { id: 5, name: 'Smart Home', icon: 'https://images.unsplash.com/photo-1558002038-103792e374bb?auto=format&fit=crop&q=80&w=200' },
  { id: 6, name: 'Trending', icon: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=200' },
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    price: 24.99,
    originalPrice: 49.99,
    rating: 4,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400',
    sale: true,
  },
  {
    id: 2,
    name: 'Fenton Classic Watch',
    price: 39.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviews: 450,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mj8H3uReH1eseyxIL4UgCwz0I0oZQK.png',
    sale: false,
  },
  {
    id: 3,
    name: 'Power Bank 10000mAh',
    price: 19.99,
    originalPrice: 39.99,
    rating: 3.5,
    reviews: 280,
    image: 'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?auto=format&fit=crop&q=80&w=400',
    sale: false,
  },
  {
    id: 4,
    name: 'Magnetic Charger',
    price: 14.99,
    originalPrice: 24.99,
    rating: 4,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400',
    sale: false,
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    price: 29.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1608156639585-b3a032ef9689?auto=format&fit=crop&q=80&w=400',
    sale: false,
  },
  {
    id: 6,
    name: 'USB-C Hub 6 in 1',
    price: 22.99,
    originalPrice: 44.99,
    rating: 4,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1625766127984-28b5a6021f61?auto=format&fit=crop&q=80&w=400',
    sale: false,
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rohan Mehta',
    text: 'Amazing product quality and super fast delivery. Velcotte is now my go-to store!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    text: 'Great prices, genuine products, and excellent customer support.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
  },
  {
    id: 3,
    name: 'Aman Verma',
    text: 'The best tech store I\'ve found online. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'home' | 'login' | 'cart' | 'product' | 'profile' | 'deals' | 'categories' | 'contact' | 'about' | 'returns' | 'wishlist' | 'checkout' | 'faq' | 'privacy' | 'terms' | 'tracking' | 'notifications'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    // Scroll to top on view change
    window.scrollTo(0, 0);
  }, [view]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.search-container') && !target.closest('.search-trigger')) {
        setIsSearchFocused(false);
      }
    };
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setView('deals');
      setIsSearchFocused(false);
    }
  };

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartCount(prev => prev + 1);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => {
      const item = prev.find(i => i.id === id);
      if (item) {
        setCartCount(curr => Math.max(0, curr - (item.quantity || 1)));
      }
      return prev.filter(i => i.id !== id);
    });
  };

  const updateCartQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, (item.quantity || 1) + delta);
        setCartCount(prevCount => prevCount + (newQty - (item.quantity || 1)));
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const openProduct = (product: any) => {
    setSelectedProduct(product);
    setView('product');
  };

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 15,
      filter: 'blur(10px)',
      scale: 0.98
    },
    animate: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      scale: 1
    },
    exit: { 
      opacity: 0, 
      y: -15,
      filter: 'blur(10px)',
      scale: 0.98
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const renderView = () => {
    switch (view) {
      case 'login':
        return <LoginPage onBack={() => setView('home')} onProfile={() => { 
          setCurrentUser({ 
            name: 'John Smith',
            email: 'john.smith@velcotte.tech',
            bio: 'Tech architect at Velcotte. Early prototype enthusiast. Liquid member since 2024.',
            phone: '+1 (555) 0011',
            gender: 'Male'
          }); 
          setView('profile'); 
        }} />;
      case 'cart':
        return (
          <CartPage 
            onBack={() => setView('home')} 
            onCheckout={() => setView('checkout')} 
            items={cartItems}
            onRemove={removeFromCart}
            onUpdateQuantity={updateCartQuantity}
          />
        );
      case 'product':
        return (
          <ProductDetailPage 
            product={selectedProduct} 
            onBack={() => setView('home')} 
            onAddToCart={addToCart} 
            onBuyNow={(prod) => { 
               // Add if not already in cart, then go to checkout
               const exists = cartItems.find(item => item.id === prod.id);
               if (!exists) addToCart(prod);
               setView('checkout'); 
            }}
            isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
            onToggleWishlist={() => selectedProduct && toggleWishlist(selectedProduct.id)}
          />
        );
      case 'profile':
        return (
          <ProfilePage 
            onBack={() => setView('home')} 
            onWishlist={() => setView('wishlist')} 
            onReturns={() => setView('returns')} 
            onLogout={() => { setCurrentUser(null); setView('home'); }}
            user={currentUser}
            onUpdateUser={(updated) => setCurrentUser(updated)}
          />
        );
      case 'deals':
        return (
          <ShopPage 
            onBack={() => setView('home')} 
            onProductClick={openProduct} 
            onAddToCart={addToCart} 
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            searchQuery={searchQuery}
          />
        );
      case 'categories':
        return (
          <CategoriesPage 
            onBack={() => setView('home')} 
            onProductClick={openProduct} 
            onAddToCart={addToCart} 
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            initialCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        );
      case 'contact':
        return <ContactPage onBack={() => setView('home')} />;
      case 'about':
        return <AboutPage onBack={() => setView('home')} />;
      case 'returns':
        return <ReturnsPage onBack={() => setView('home')} />;
      case 'wishlist':
        return (
          <WishlistPage 
            onBack={() => setView('home')} 
            onProductClick={openProduct} 
            onAddToCart={addToCart}
            items={PRODUCTS.filter(p => wishlist.includes(p.id))}
            onToggleWishlist={toggleWishlist}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage 
            onBack={() => setView('cart')} 
            cartItems={cartItems} 
            onComplete={() => {
              alert('Sync Complete! Order Registered.');
              setCartItems([]);
              setCartCount(0);
              setView('home');
            }} 
          />
        );
      case 'faq':
        return <FAQPage onBack={() => setView('home')} />;
      case 'privacy':
        return <PrivacyPolicyPage onBack={() => setView('home')} />;
      case 'terms':
        return <TermsPage onBack={() => setView('home')} />;
      case 'tracking':
        return <OrderTrackingPage onBack={() => setView('home')} />;
      case 'notifications':
        return <NotificationsPage onBack={() => setView('home')} />;
      default:
        return null;
    }
  };

  if (view !== 'home') {
    return (
      <div className="min-h-screen bg-white font-sans text-gray-950 overflow-x-hidden pb-16 lg:pb-0 flex flex-col">
        {/* Top Banner */}
        <div className="hidden lg:block bg-[#0c0c0d] text-white text-[10px] sm:text-xs py-2.5 text-center tracking-widest font-black uppercase">
          ⚡️ Free Shipping on all orders over $50 | 📦 30-Day Easy Returns | 🔒 Secure Payment
        </div>

        {/* Global Navigation */}
        <nav className={`sticky top-0 z-50 transition-all duration-500 bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border-b border-white/20 py-2`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="hidden lg:flex w-10 h-10 rounded-xl bg-gray-50 items-center justify-center hover:bg-blue-600 hover:text-white transition-all active:scale-95"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView('home')}>
                  <div className="text-blue-600 transition-transform group-hover:scale-110 drop-shadow-sm w-10 h-10 flex items-center justify-center bg-gray-950 rounded-xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18L10 6L16 18H4Z" fill="white"/>
                        <path d="M12 18L17 8L22 18H12Z" fill="#2563EB"/>
                    </svg>
                  </div>
                  <span className="font-black text-2xl tracking-tighter uppercase italic text-gray-950 block">Velcotte</span>
                </div>
              </div>

              <div className="hidden xl:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-500">
                <button onClick={() => setView('home')} className={`hover:text-blue-600 transition-colors relative ${view === 'home' ? 'text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full' : ''}`}>Home</button>
                <button onClick={() => setView('deals')} className={`hover:text-blue-600 transition-colors relative ${view === 'deals' ? 'text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full' : ''}`}>Sale</button>
                <button onClick={() => setView('categories')} className={`hover:text-blue-600 transition-colors relative ${view === 'categories' ? 'text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full' : ''}`}>Category</button>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:gap-6 text-gray-950">
              <button 
                onClick={() => setView('wishlist')}
                className="hidden sm:flex w-10 h-10 rounded-full bg-blue-50/50 hover:bg-blue-100/50 items-center justify-center cursor-pointer transition-colors relative"
              >
                <Heart className={`w-4.5 h-4.5 ${wishlist.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                {wishlist.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-black border-2 border-white">{wishlist.length}</span>}
              </button>
              <div className="relative w-10 h-10 rounded-full bg-gray-950 text-white hover:bg-blue-600 flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-lg shadow-blue-200" onClick={() => setView('cart')}>
                <ShoppingCart className="w-4.5 h-4.5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black border-2 border-white">{cartCount}</span>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 30,
                mass: 0.8
              }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
        
        {/* Simple Footer for subpages */}
        <footer className="bg-gray-50 py-10 text-center border-t border-gray-100">
           <p className="text-[10px] font-bold text-gray-400">© 2024 Velcotte. Authentic Performance Gear.</p>
        </footer>

        <nav className="lg:!hidden fixed bottom-6 left-6 right-6 bg-white/40 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-full border border-white/20 z-50 py-4 px-6 sm:px-10 flex justify-between items-center transition-all">
           <BottomNavItem icon={<HomeIcon className="w-6 h-6" />} label="Home" active={view === 'home'} onClick={() => setView('home')} />
           <BottomNavItem icon={<Zap className="w-6 h-6" />} label="Deals" active={view === 'deals'} onClick={() => setView('deals')} />
           <BottomNavItem icon={<GridItemIcon className="w-6 h-6" />} label="Categories" active={view === 'categories'} onClick={() => setView('categories')} />
           <BottomNavItem icon={<User className="w-6 h-6" />} label="Account" active={view === 'profile'} onClick={() => setView('profile')} />
        </nav>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-950 overflow-x-hidden pb-16 lg:pb-0">
      {/* Top Banner */}
      <div className="hidden lg:block bg-[#0c0c0d] text-white text-[10px] sm:text-xs py-2.5 text-center tracking-widest font-black uppercase">
        ⚡️ Free Shipping on all orders over $50 | 📦 30-Day Easy Returns | 🔒 Secure Payment
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border-b border-white/20 py-2' : 'bg-white/40 backdrop-blur-md py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="hidden lg:flex w-10 h-10 rounded-xl bg-gray-50 items-center justify-center hover:bg-blue-600 hover:text-white transition-all active:scale-95"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView('home')}>
                <div className="text-blue-600 transition-transform group-hover:scale-110 drop-shadow-sm w-10 h-10 flex items-center justify-center bg-gray-950 rounded-xl">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 18L10 6L16 18H4Z" fill="white"/>
                      <path d="M12 18L17 8L22 18H12Z" fill="#2563EB"/>
                   </svg>
                </div>
                <span className="font-black text-2xl tracking-tighter uppercase italic text-gray-950 block">Velcotte</span>
              </div>
            </div>
            
            <div className="hidden xl:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-500">
              <button onClick={() => setView('home')} className={`hover:text-blue-600 transition-colors relative ${view === 'home' ? 'text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full' : ''}`}>Home</button>
              <button onClick={() => setView('deals')} className={`hover:text-blue-600 transition-colors relative ${view === 'deals' ? 'text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full' : ''}`}>Sale</button>
              <button onClick={() => setView('categories')} className={`hover:text-blue-600 transition-colors relative ${view === 'categories' ? 'text-blue-600 after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full' : ''}`}>Category</button>
              <button onClick={() => setView('about')} className="hover:text-blue-600 transition-colors">About</button>
            </div>
          </div>

          <div className="flex items-center gap-4 lg:gap-6 text-gray-950">
            <div className="search-trigger w-10 h-10 rounded-full bg-blue-50/50 hover:bg-blue-100/50 flex items-center justify-center cursor-pointer transition-colors" onClick={() => setIsSearchFocused(!isSearchFocused)}>
              <Search className="w-4.5 h-4.5" />
            </div>
            <button 
              onClick={() => setView('wishlist')}
              className="hidden sm:flex w-10 h-10 rounded-full bg-blue-50/50 hover:bg-blue-100/50 items-center justify-center cursor-pointer transition-colors relative"
            >
              <Heart className={`w-4.5 h-4.5 ${wishlist.length > 0 ? 'fill-red-500 text-red-500' : ''}`} />
              {wishlist.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-black border-2 border-white">{wishlist.length}</span>}
            </button>
            <div className="relative w-10 h-10 rounded-full bg-gray-950 text-white hover:bg-blue-600 flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-lg shadow-blue-200" onClick={() => setView('cart')}>
              <ShoppingCart className="w-4.5 h-4.5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black border-2 border-white">{cartCount}</span>
            </div>
          </div>
        </div>
      </nav>

      <SearchOverlay 
        isVisible={isSearchFocused} 
        query={searchQuery} 
        onClose={() => setIsSearchFocused(false)} 
        onProductClick={openProduct}
        onSearch={(q) => { 
          if (q) setSearchQuery(q); 
          setView('deals'); 
          setIsSearchFocused(false); 
        }}
        onQueryChange={(q) => setSearchQuery(q)}
        onCategoryClick={(cat) => {
          setSelectedCategory(cat);
          setView('categories');
          setIsSearchFocused(false);
        }}
      />

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-gray-950/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-[300px] bg-white z-[70] shadow-2xl overflow-y-auto"
            >
              <div className="p-8 space-y-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-950 text-white p-2 rounded-xl">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <span className="font-black text-xl tracking-tighter uppercase italic">Velcotte</span>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Explore</h3>
                  <div className="space-y-4">
                    <SidebarLink icon={<HomeIcon className="w-4.5 h-4.5" />} label="Home" onClick={() => { setView('home'); setIsMenuOpen(false); }} active={view === 'home'} />
                    <SidebarLink icon={<Zap className="w-4.5 h-4.5" />} label="Hot Deals" onClick={() => { setView('deals'); setIsMenuOpen(false); }} active={view === 'deals'} />
                    <SidebarLink icon={<GridItemIcon className="w-4.5 h-4.5" />} label="Categories" onClick={() => { setView('categories'); setIsMenuOpen(false); }} active={view === 'categories'} />
                    <SidebarLink icon={<User className="w-4.5 h-4.5" />} label="My Account" onClick={() => { setView('profile'); setIsMenuOpen(false); }} active={view === 'profile'} />
                    <SidebarLink icon={<Heart className="w-4.5 h-4.5" />} label="Wishlist" onClick={() => { setView('wishlist'); setIsMenuOpen(false); }} active={view === 'wishlist'} />
                    <SidebarLink icon={<Truck className="w-4.5 h-4.5" />} label="Track Order" onClick={() => { setView('tracking'); setIsMenuOpen(false); }} active={view === 'tracking'} />
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Hardware Info</h3>
                  <div className="space-y-4">
                    <SidebarLink icon={<ShieldCheck className="w-4.5 h-4.5" />} label="Privacy Policy" onClick={() => { setView('privacy'); setIsMenuOpen(false); }} />
                    <SidebarLink icon={<AlertCircle className="w-4.5 h-4.5" />} label="Terms of Service" onClick={() => { setView('terms'); setIsMenuOpen(false); }} />
                    <SidebarLink icon={<HelpCircle className="w-4.5 h-4.5" />} label="FAQ" onClick={() => { setView('faq'); setIsMenuOpen(false); }} />
                  </div>
                </div>

                <div className="pt-10 border-t border-gray-50">
                  {currentUser ? (
                    <button 
                      onClick={() => { setView('profile'); setIsMenuOpen(false); }}
                      className="w-full flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <User className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-black text-gray-950">{currentUser.name}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">View Profile</p>
                      </div>
                    </button>
                  ) : (
                    <button 
                      onClick={() => { setView('login'); setIsMenuOpen(false); }}
                      className="w-full bg-gray-950 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors"
                    >
                      Sign In / Join
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative bg-white pt-10 pb-24 overflow-hidden">
          {/* Animated Background Blobs for Glass pop */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -mr-40 -mt-40 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px] -ml-20 -mb-20 animate-bounce" style={{ animationDuration: '8s' }} />

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="z-10 text-center sm:text-left"
            >
              <motion.div 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="inline-block bg-white/70 backdrop-blur-md border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm"
              >
                New Arrival
              </motion.div>
              
              <motion.h1 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tighter text-gray-950"
              >
                Lighter. <br />
                Faster <span className="text-blue-600 italic">Better.</span>
              </motion.h1>

              <motion.p 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="text-gray-500 text-sm font-bold mb-10 max-w-sm mx-auto sm:mx-0 leading-relaxed"
              >
                Experience the next generation of liquid tech. Minimal design meeting modular performance for the modern explorer.
              </motion.p>
              
              <motion.div 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="flex items-center justify-center sm:justify-start gap-5"
              >
                <button 
                  onClick={() => setView('deals')}
                  className="bg-blue-600 text-white px-10 py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-blue-300/50 hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-3 group"
                >
                  Shop Now
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </motion.div>

              <motion.div 
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="mt-14 flex flex-col sm:flex-row items-center gap-6"
              >
                 <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                       <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-12 h-12 rounded-full border-4 border-white shadow-xl hover:translate-y-[-4px] transition-transform cursor-pointer" alt="User" />
                    ))}
                 </div>
                 <div className="hidden sm:block h-10 w-px bg-gray-100" />
                 <div className="text-center sm:text-left">
                    <div className="flex justify-center sm:justify-start text-yellow-400 mb-1">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <p className="text-[10px] font-bold text-gray-400">Join <span className="text-gray-950 font-black">15k+</span> happy creators globally</p>
                 </div>
              </motion.div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1, type: 'spring' }}
               className="relative lg:block"
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-50/50 rounded-full blur-[100px] -z-10" />
               <div className="relative">
                  <motion.img 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    onClick={() => openProduct(PRODUCTS[0])}
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800" 
                    className="w-full drop-shadow-[0_35px_35px_rgba(37,99,235,0.25)] mix-blend-multiply cursor-pointer" 
                    alt="Hero" 
                  />
                  
                  {/* Floating elements from screenshot */}
                  <div 
                    onClick={() => openProduct(PRODUCTS[1])}
                    className="absolute top-10 right-0 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/50 flex items-center gap-3 animate-bounce cursor-pointer hover:scale-105 transition-transform"
                  >
                     <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                        <Star className="w-4 h-4 fill-current" />
                     </div>
                     <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-blue-600 leading-none mb-1">Best Seller</p>
                        <p className="text-[11px] font-black text-gray-950 leading-none">iPhone 15 Pro Max</p>
                     </div>
                  </div>

                  <div 
                    onClick={() => openProduct(PRODUCTS[2])}
                    className="absolute bottom-10 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-xl border border-white/50 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
                  >
                     <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
                        <Zap className="w-4 h-4 fill-current" />
                     </div>
                     <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-orange-600 leading-none mb-1">Deal of Day</p>
                        <p className="text-[11px] font-black text-gray-950 leading-none">$499.00 <span className="text-[9px] text-gray-400 line-through ml-1">$799.00</span></p>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
             {[
               { icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Free Shipping", desc: "On orders over $50", color: "blue" },
               { icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Secure Payment", desc: "100% secure checkout", color: "green" },
               { icon: <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Easy Returns", desc: "30-day return policy", color: "orange" },
               { icon: <HeadphonesIcon className="w-5 h-5 sm:w-6 sm:h-6" />, title: "24/7 Support", desc: "We're here to help", color: "purple" }
             ].map((feature, i) => (
               <motion.div 
                 key={i}
                 variants={{
                   initial: { opacity: 0, scale: 0.9 },
                   animate: { opacity: 1, scale: 1 }
                 }}
                 className="bg-white border border-gray-50 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 sm:gap-5 group hover:shadow-md transition-all"
               >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${feature.color}-50 rounded-2xl flex items-center justify-center text-${feature.color}-600 shrink-0 group-hover:bg-${feature.color}-600 group-hover:text-white transition-colors`}>
                     {feature.icon}
                  </div>
                  <div>
                     <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1">{feature.title}</h4>
                     <p className="text-[9px] sm:text-[10px] font-bold text-gray-400">{feature.desc}</p>
                  </div>
               </motion.div>
             ))}
          </motion.div>
        </section>

        {/* Shop by Category */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white opacity-50 -z-10" />
           <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-end justify-between mb-12">
                 <div className="space-y-1">
                    <h2 className="text-4xl font-black tracking-tighter text-gray-950">Shop by Category</h2>
                    <p className="text-xs font-bold text-gray-400">Premium tech products curated for you.</p>
                 </div>
                 <button onClick={() => setView('categories')} className="bg-white/80 backdrop-blur-md border border-gray-100 text-blue-600 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group hover:bg-blue-600 hover:text-white transition-all">
                    View all <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
              >
                 {CATEGORIES.map((cat) => (
                    <motion.div 
                      key={cat.id} 
                      variants={{
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 }
                      }}
                      className="bg-white/40 backdrop-blur-xl rounded-[48px] p-8 border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] hover:shadow-2xl hover:-translate-y-3 transition-all cursor-pointer group text-center" onClick={() => { setSelectedCategory(cat.name); setView('categories'); }}
                    >
                       <div className="w-full aspect-square bg-blue-50/50 rounded-[32px] mb-6 overflow-hidden p-6 group-hover:scale-110 transition-transform">
                          <img src={cat.icon} alt={cat.name} className="w-full h-full object-contain mix-blend-multiply" />
                       </div>
                       <span className="text-[11px] font-black uppercase tracking-widest text-gray-950">{cat.name}</span>
                    </motion.div>
                 ))}
              </motion.div>
           </div>
        </section>

        {/* Trending Products */}
        <section className="py-20">
           <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-end justify-between mb-10">
                 <div>
                    <h2 className="text-3xl font-black tracking-tight mb-2">Trending Products</h2>
                    <p className="text-xs font-bold text-gray-400">Most popular tech essentials this month.</p>
                 </div>
                 <button onClick={() => setView('deals')} className="text-blue-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group">
                    View all <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                 {PRODUCTS.map((prod) => (
                    <ProductCard 
                      key={prod.id} 
                      product={prod} 
                      onClick={() => openProduct(prod)} 
                      onAddToCart={() => addToCart(prod)}
                      isWishlisted={wishlist.includes(prod.id)}
                      onToggleWishlist={() => toggleWishlist(prod.id)}
                    />
                 ))}
              </motion.div>
           </div>
        </section>

        {/* Promo Banner */}
        <section className="px-6 py-10">
           <div className="max-w-7xl mx-auto bg-blue-600 rounded-[50px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden">
              <div className="relative z-10 lg:w-1/2">
                 <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-200">Limited Time Offer</span>
                 </div>
                 <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-8">Up to 40% Off <br /> On Selected Items</h2>
                 <button onClick={() => setView('deals')} className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-gray-50 transition-all flex items-center gap-2 group">
                    Shop Deals <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
              <div className="relative z-10 lg:w-1/2 flex justify-end mt-10 lg:mt-0">
                 <div className="relative cursor-pointer group" onClick={() => openProduct(PRODUCTS[1])}>
                    <div className="absolute -top-10 -left-10 bg-white/20 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20">
                       <p className="text-[9px] font-black uppercase tracking-widest mb-1">Starting from</p>
                       <p className="text-2xl font-black">$19.99</p>
                    </div>
                 </div>
              </div>
              <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl" />
           </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#f8f9fb]">
           <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-end justify-between mb-10">
                 <div>
                    <h2 className="text-3xl font-black tracking-tight mb-2">Loved by Thousands</h2>
                    <p className="text-xs font-bold text-gray-400">See what our customers have to say.</p>
                 </div>
                 <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors shadow-sm">
                       <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors shadow-sm">
                       <ChevronRight className="w-5 h-5" />
                    </button>
                 </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                 {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white rounded-[40px] p-8 border border-gray-100 shadow-sm relative group overflow-hidden">
                       <div className="flex items-center gap-4 mb-6">
                          <img src={t.image} alt={t.name} className="w-12 h-12 rounded-2xl object-cover border-2 border-blue-50 group-hover:scale-110 transition-transform" />
                          <div>
                             <h4 className="text-xs font-black tracking-tight">{t.name}</h4>
                             <div className="flex text-yellow-400 mt-0.5">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
                             </div>
                          </div>
                          <div className="ml-auto flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-lg">
                             <CheckCircle2 className="w-3 h-3 text-green-600" />
                             <span className="text-[7px] font-black text-green-600 uppercase tracking-widest">Verified</span>
                          </div>
                       </div>
                       <p className="text-[11px] font-bold text-gray-400 leading-relaxed italic">"{t.text}"</p>
                       <div className="absolute -bottom-4 -right-4 text-blue-50 opacity-20 group-hover:opacity-40 transition-opacity">
                          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 8.89543 14.017 10V13H11.017V10C11.017 7.23858 13.2556 5 16.017 5H19.017C21.7784 5 24.017 7.23858 24.017 10V15C24.017 18.3137 21.3307 21 18.017 21H14.017ZM0 15V10C0 7.23858 2.23858 5 5 5H8C10.7614 5 13 7.23858 13 10V15C13 18.3137 10.3137 21 7 21H3V18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 8.89543 3 10V13H0V15Z"/></svg>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Footer */}
        <section className="bg-[#0c0c0d] pt-20 pb-10 text-white">
           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-16 mb-20">
              <div className="space-y-8">
                 <div className="flex items-center gap-2">
                   <div className="text-white">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                   </div>
                   <span className="font-black text-2xl tracking-tighter uppercase italic">Velcotte</span>
                 </div>
                 <p className="text-xs text-gray-500 font-bold leading-relaxed max-w-xs">
                    Premium tech products with a focus on quality, innovation, and design. Follow us for the latest updates.
                 </p>
                 <div className="flex gap-4">
                    {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                       <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all cursor-pointer">
                          <Icon className="w-4 h-4" />
                       </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Shop</h4>
                 <div className="space-y-3 flex flex-col items-start">
                    <button onClick={() => setView('deals')} className="text-xs font-bold text-gray-400 hover:text-white transition-colors">All Products</button>
                    <button onClick={() => setView('home')} className="text-xs font-bold text-gray-400 hover:text-white transition-colors">Featured</button>
                    <button onClick={() => setView('deals')} className="text-xs font-bold text-gray-400 hover:text-white transition-colors">Deals</button>
                    <button onClick={() => setView('categories')} className="text-xs font-bold text-gray-400 hover:text-white transition-colors">Categories</button>
                 </div>
              </div>

              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Customer Service</h4>
                 <div className="space-y-3 flex flex-col items-start">
                    <button onClick={() => setView('tracking')} className="text-xs font-bold text-gray-400 hover:text-white transition-colors">Order Tracking</button>
                    <button onClick={() => setView('returns')} className="text-xs font-bold text-gray-400 hover:text-white transition-colors">Return Policy</button>
                    <button onClick={() => setView('privacy')} className="text-xs font-bold text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
                    <button onClick={() => setView('terms')} className="text-xs font-bold text-gray-400 hover:text-white transition-colors">Terms of Service</button>
                 </div>
              </div>

              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Stay Updated</h4>
                 <p className="text-xs text-gray-500 font-bold">Subscribe to get special offers and updates.</p>
                 <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/5">
                    <input type="email" placeholder="Enter your email" className="bg-transparent border-none px-4 py-2 text-xs font-bold w-full outline-none" />
                    <button className="bg-blue-600 px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors">Subscribe</button>
                 </div>
              </div>
           </div>
           
           <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-bold text-gray-500">© 2024 Velcotte. All rights reserved.</p>
              <div className="flex items-center gap-8 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                 {['visa', 'mastercard', 'paypal', 'googlepay', 'applepay'].map((p, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest">{p}</span>
                 ))}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                 <ShieldCheck className="w-4 h-4 text-green-500" />
                 Secure Payments
              </div>
           </div>
        </section>
      </main>

      <nav className="lg:!hidden fixed bottom-6 left-6 right-6 bg-white/40 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] rounded-full border border-white/20 z-50 py-4 px-6 sm:px-10 flex justify-between items-center transition-all">
         <BottomNavItem icon={<HomeIcon className="w-6 h-6" />} label="Home" active={view === 'home'} onClick={() => setView('home')} />
         <BottomNavItem icon={<Zap className="w-6 h-6" />} label="Deals" active={view === 'deals'} onClick={() => setView('deals')} />
         <BottomNavItem icon={<GridItemIcon className="w-6 h-6" />} label="Categories" active={view === 'categories'} onClick={() => setView('categories')} />
         <BottomNavItem icon={<User className="w-6 h-6" />} label="Account" active={view === 'profile'} onClick={() => setView('profile')} />
      </nav>

      {/* Mobile Menu Drawer Removed - Unified with isMenuOpen sidebar */}
    </div>
  );
}

function MobileMenuItem({ label, active, onClick }: { label: string, active?: boolean, onClick?: () => void }) {
  return (
    <div 
      className={`flex items-center justify-between p-4 cursor-pointer rounded-xl transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
      onClick={onClick}
    >
       <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
       <ChevronRight className={`w-4 h-4 ${active ? 'text-blue-600' : 'text-gray-300'}`} />
    </div>
  );
}

function BottomNavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <div className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${active ? 'text-blue-600' : 'text-gray-400'}`} onClick={onClick}>
       {icon}
       <span className="text-[9px] font-bold uppercase tracking-tight">{label}</span>
    </div>
  );
}

function HomeIcon(props: any) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  );
}

function ShoppingBagIcon(props: any) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
  );
}

function GridItemIcon(props: any) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
  );
}

function SidebarLink({ icon, label, onClick, active }: { icon: React.ReactNode, label: string, onClick: () => void, active?: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-950'}`}
    >
      <div className="flex items-center gap-4">
        <div className={`transition-transform group-hover:scale-110 ${active ? 'text-white' : 'text-blue-600'}`}>
          {icon}
        </div>
        <span className="text-[11px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${active ? 'text-white/50' : 'text-gray-300'}`} />
    </button>
  );
}


