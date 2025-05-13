"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  images: string[];
  priceSingle: number;
  priceBundle: number;
  bundleSize: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isBundle, setIsBundle] = useState(false); // Track if the bundle option is selected
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem } = useCart();

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handleAddToCart = () => {
    const price = isBundle ? product.priceBundle : product.priceSingle;
    const name = isBundle
      ? `${product.name} (Bundle of ${product.bundleSize})`
      : product.name;

    addItem({
      id: product.id,
      name: name,
      price: price,
      quantity: quantity,
    });

    toast.success(`${name} (x${quantity}) added to cart!`, {
      description: `Total: $${(price * quantity).toFixed(2)}`,
    });
  };

  return (
    <motion.div
      className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl h-full border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <div className="relative w-full h-64 bg-muted/50 dark:bg-muted/30 group">
        <Image
          src={product.images[currentImageIndex]}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="font-glacial-indifference-bold text-xl lg:text-2xl font-semibold mb-2 text-foreground leading-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow min-h-[60px]">{product.description}</p>

        <div className="mb-5 space-y-1">
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">Single Pack:</span>
            <span className="font-glacial-indifference-bold font-bold text-xl text-primary">${product.priceSingle.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">10-Pack Bundle:</span>
            <span className="font-glacial-indifference-bold font-bold text-xl text-primary">${product.priceBundle.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground font-glacial-indifference">Quantity:</span>
          <div className="flex items-center border border-border rounded-md overflow-hidden">
            <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="h-9 w-9 rounded-none border-r border-border text-muted-foreground hover:bg-muted/50">
              <Minus size={16} />
            </Button>
            <span className="px-4 py-1 text-foreground tabular-nums font-medium w-12 text-center">{quantity}</span>
            <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="h-9 w-9 rounded-none border-l border-border text-muted-foreground hover:bg-muted/50">
              <Plus size={16} />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="text-sm text-muted-foreground font-glacial-indifference">
            <input
              type="checkbox"
              checked={isBundle}
              onChange={(e) => setIsBundle(e.target.checked)}
              className="mr-2"
            />
            Buy as Bundle
          </label>
        </div>

        <Button
          onClick={handleAddToCart}
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-glacial-indifference-bold font-bold py-3 text-base"
        >
          <ShoppingCart size={20} className="mr-2" /> Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;

