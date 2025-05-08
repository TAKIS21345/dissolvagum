"use client";

import { useState, useEffect } from "react";
import EmailCaptureModal from "@/components/EmailCaptureModal";
import ZendeskWidgetPlaceholder from "@/components/ZendeskWidgetPlaceholder";
import { CartProvider } from "@/contexts/CartContext"; // Import CartProvider

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showExitIntentModal, setShowExitIntentModal] = useState(false);

  useEffect(() => {
    // Slide-up modal after 30 seconds
    const timer = setTimeout(() => {
      if (localStorage.getItem("dissolvagum_modal_shown") !== "true") {
        setIsModalOpen(true);
      }
    }, 30000); // 30 seconds

    // Exit-intent modal
    const handleMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && localStorage.getItem("dissolvagum_modal_shown") !== "true" && !isModalOpen && !showExitIntentModal) {
        setShowExitIntentModal(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isModalOpen, showExitIntentModal]); // Added dependencies to useEffect

  const closeModal = () => {
    setIsModalOpen(false);
    setShowExitIntentModal(false);
    localStorage.setItem("dissolvagum_modal_shown", "true");
  };

  return (
    <CartProvider> {/* Wrap children with CartProvider */}
      {children}
      <EmailCaptureModal isOpen={isModalOpen || showExitIntentModal} onClose={closeModal} />
      <ZendeskWidgetPlaceholder />
    </CartProvider>
  );
}

