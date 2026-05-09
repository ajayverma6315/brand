/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingCart, Star, Plus } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sale?: boolean | string;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  onAddToCart?: (p: any) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onClick, 
  onAddToCart, 
  isWishlisted, 
  onToggleWishlist 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30, scale: 0.95 }} 
      whileInView={{ opacity: 1, y: 0, scale: 1 }} 
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="group relative h-full cursor-pointer"
      onTap={onClick}
    >
      <div 
        onClick={onClick}
        className="bg-white/40 backdrop-blur-xl rounded-[32px] p-4 border border-white shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] hover:shadow-2xl transition-all h-full flex flex-col"
      >
        <div className="relative w-full aspect-square bg-white rounded-[24px] mb-4 overflow-hidden border border-white/50">
          {(product.sale || product.badge) && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-[8px] font-black px-2 py-1 rounded-lg uppercase z-10 shadow-lg shadow-red-100">
               {product.sale ? (typeof product.sale === 'string' ? product.sale : 'SALE') : product.badge}
            </span>
          )}
          <button 
            onClick={(e) => { e.stopPropagation(); onToggleWishlist?.(product.id); }}
            className={`absolute top-3 right-3 transition-colors z-10 bg-white/60 backdrop-blur-md p-1.5 rounded-xl border border-white ${isWishlisted ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          <img 
            onClick={onClick}
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 cursor-pointer" 
          />
          
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <button 
               onClick={(e) => { e.stopPropagation(); onAddToCart?.(product); }}
               className="w-full bg-blue-600 text-white py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-200 flex items-center justify-center gap-2 hover:bg-black transition-colors"
             >
                <ShoppingCart className="w-3.5 h-3.5" />
                Add to Cart
             </button>
          </div>
        </div>
        
        <div className="px-1 flex-grow flex flex-col">
          <h3 
            onClick={onClick}
            className="font-black text-[11px] leading-tight text-gray-950 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2 uppercase tracking-tight italic h-8 cursor-pointer"
          >
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
             <div className="flex text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-lg border border-blue-100 items-center">
                <Star className="w-2.5 h-2.5 fill-current" />
                <span className="text-[8px] font-black ml-1">{product.rating || 4.8}</span>
             </div>
             <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{product.reviews || 120} Reviews</span>
          </div>

          <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/40">
            <div className="flex items-baseline gap-1.5">
              <span className="font-black text-lg text-gray-950 tracking-tighter italic">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-[9px] font-bold text-gray-400 line-through opacity-60">₹{product.originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
