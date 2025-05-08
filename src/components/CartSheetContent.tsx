"use client";

import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Trash2, CreditCard, X } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image"; // Assuming you might want to show product images

interface CartSheetContentProps {
  onClose: () => void;
}

const CartSheetContent: React.FC<CartSheetContentProps> = ({ onClose }) => {
  const { items, removeItem, updateItemQuantity, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (id: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) {
      removeItem(id);
      toast.info("Item removed from cart");
    } else {
      updateItemQuantity(id, newQuantity);
    }
  };

  const handleProceedToCheckout = () => {
    // Placeholder for Stripe integration
    toast.info("Proceeding to Stripe Checkout (Placeholder)", {
      description: "This is where the Stripe integration would take over.",
    });
    // Optionally, clear cart or navigate to a mock success page
    // clearCart();
    // onClose(); // Close the sheet after proceeding
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <h2 className="text-lg font-glacial-indifference-bold font-semibold text-gray-800 dark:text-white">Your Cart</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <X size={20} />
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
          <Image src="/empty-cart.svg" alt="Empty Cart" width={150} height={150} className="mb-4 opacity-50" />
          <p className="text-gray-600 dark:text-gray-400 font-glacial-indifference">Your cart is currently empty.</p>
          <Button onClick={onClose} className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-glacial-indifference-bold">Start Shopping</Button>
        </div>
      ) : (
        <>
          <ScrollArea className="flex-grow p-4">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  {/* Placeholder for product image - replace with actual image if available */}
                  {/* <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                    <Package size={32} className="text-gray-400 dark:text-gray-500" />
                  </div> */}
                  <div className="flex-grow">
                    <h3 className="text-sm font-glacial-indifference-bold font-medium text-gray-800 dark:text-white">{item.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Price: ${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-1">
                      <Button variant="outline" size="icon" className="h-6 w-6 text-xs" onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>-</Button>
                      <span className="mx-2 text-sm text-gray-700 dark:text-gray-300 tabular-nums">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-6 w-6 text-xs" onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-glacial-indifference-bold font-semibold text-gray-800 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                    <Button variant="ghost" size="icon" className="mt-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" onClick={() => { removeItem(item.id); toast.error("Item removed from cart"); }}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <Separator className="dark:bg-gray-700"/>
          <div className="p-4 space-y-3 border-t dark:border-gray-700">
            <div className="flex justify-between text-lg font-glacial-indifference-bold font-semibold text-gray-800 dark:text-white">
              <span>Subtotal</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Shipping and taxes calculated at checkout (placeholder).</p>
            <Button 
              onClick={handleProceedToCheckout} 
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-glacial-indifference-bold font-bold py-3"
            >
              <CreditCard size={18} className="mr-2" /> Proceed to Checkout (Stripe Placeholder)
            </Button>
            <Button variant="outline" onClick={clearCart} className="w-full font-glacial-indifference">
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSheetContent;

