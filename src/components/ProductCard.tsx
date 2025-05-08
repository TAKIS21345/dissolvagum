"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Zap, RotateCcw, Minus, Plus } from "lucide-react";
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
  subscriptionDiscount: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showSubscription, setShowSubscription] = useState(false);
  const [deliveryFrequency, setDeliveryFrequency] = useState("monthly");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem } = useCart();

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const discountedPriceSingle = product.priceSingle * (1 - product.subscriptionDiscount);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handleAddToCart = () => {
    const price = showSubscription ? discountedPriceSingle : product.priceSingle;
    addItem({
      id: product.id,
      name: product.name,
      price: price,
      quantity: quantity,
    });
    toast.success(`${product.name} (x${quantity}) added to cart!`, {
      description: `Total: $${(price * quantity).toFixed(2)}`,
      action: {
        label: "View Cart",
        onClick: () => {
          // Assuming you have a way to open the cart, e.g., a global state or event
          const cartButton = document.getElementById("cart-sheet-trigger");
          if (cartButton) cartButton.click();
        },
      },
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
        {product.images.length > 1 && (
          <Button
            variant="outline"
            size="icon"
            onClick={nextImage}
            className="absolute bottom-3 right-3 bg-background/70 hover:bg-background text-foreground h-9 w-9 backdrop-blur-sm"
            aria-label="Next image"
          >
            <RotateCcw size={16} />
          </Button>
        )}
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

        <div className="mb-5 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg border border-primary/20">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor={`subscribe-${product.id}`} className="text-sm font-glacial-indifference font-medium text-primary flex items-center cursor-pointer">
              <Zap size={16} className="mr-2 flex-shrink-0" /> Subscribe & Save 15%
            </label>
            <input
              type="checkbox"
              id={`subscribe-${product.id}`}
              checked={showSubscription}
              onChange={() => setShowSubscription(!showSubscription)}
              className="form-checkbox h-5 w-5 text-primary rounded focus:ring-primary border-border dark:bg-input dark:focus:ring-offset-background"
            />
          </div>
          {showSubscription && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }} className="mt-2 space-y-2">
              <p className="text-xs text-primary/80">
                Single pack w/ subscription: <span className="font-glacial-indifference-bold font-bold">${discountedPriceSingle.toFixed(2)}</span>
              </p>
              <div>
                <label htmlFor={`frequency-${product.id}`} className="block text-xs font-medium text-muted-foreground mb-1">Delivery Frequency:</label>
                <select
                  id={`frequency-${product.id}`}
                  value={deliveryFrequency}
                  onChange={(e) => setDeliveryFrequency(e.target.value)}
                  className="w-full p-2 text-xs border-border bg-input text-foreground rounded-md shadow-sm focus:ring-primary focus:border-primary"
                >
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-muted-foreground font-glacial-indifference">Quantity:</span>
          <div className="flex items-center border border-border rounded-md overflow-hidden">
            <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="h-9 w-9 rounded-none border-r border-border text-muted-foreground hover:bg-muted/50">
              <Minus size={16}/>
            </Button>
            <span className="px-4 py-1 text-foreground tabular-nums font-medium w-12 text-center">{quantity}</span>
            <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="h-9 w-9 rounded-none border-l border-border text-muted-foreground hover:bg-muted/50">
              <Plus size={16}/>
            </Button>
          </div>
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

