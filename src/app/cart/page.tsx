"use client";

import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Trash2, Minus, Plus } from 'lucide-react';

const CartPage = () => {
  const { items, removeItem, updateItemQuantity, getTotalPrice } = useCart();

  const handleQuantityChange = (id: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      updateItemQuantity(id, newQuantity);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">Your cart is currently empty.</p>
          <Link href="/shop">
            <Button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg dark:border-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                    className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="mx-2 text-sm text-gray-800 dark:text-white">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                    className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-bold text-gray-800 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 size={20} />
                </Button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center border-t pt-4 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Total</h2>
            <p className="text-xl font-bold text-gray-800 dark:text-white">${getTotalPrice().toFixed(2)}</p>
          </div>

          <div className="text-right">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
