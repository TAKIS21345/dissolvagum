import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Shipping & Returns Policy | DissolvaGum",
  description: "Read DissolvaGum's official shipping and returns policy. Learn about our domestic and international shipping rates, delivery times, and hassle-free return process.",
  keywords: [
    "shipping policy", "returns policy", "refunds", "DissolvaGum shipping", "eco-friendly gum shipping", "international shipping", "domestic shipping", "order tracking", "gum delivery", "customer support"
  ],
  openGraph: {
    title: "Shipping & Returns Policy | DissolvaGum",
    description: "Official shipping and returns policy for DissolvaGum. Find out about shipping rates, delivery times, and our return process.",
    type: "article",
    url: "https://dissolvagum.com/legal/shipping",
    siteName: "DissolvaGum"
  },
  robots: {
    index: true,
    follow: true
  }
};

const ShippingReturnsPage = () => {
  return (
    <LegalPageLayout title="Shipping & Returns Policy">
      <p><strong>Important:</strong> DissolvaGum is a hypothetical concept and not a real product or business. This website is for demonstration and awareness purposes only. No real products are being shipped or sold, and all information below is for demonstration only.</p>
      <h2>Shipping Policy</h2>
      <p>All orders for DissolvaGum products are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
      
      <h3>Domestic Shipping Rates and Estimates</h3>
      <p>Shipping charges for your order will be calculated and displayed at checkout. We offer the following shipping options for U.S. customers:</p>
      <ul>
        <li>Standard Shipping: 5-7 business days - $4.99</li>
        <li>Expedited Shipping: 2-3 business days - $9.99</li>
        <li>Overnight Shipping: 1 business day - $24.99</li>
      </ul>

      <h3>International Shipping</h3>
      <p>We offer international shipping to select countries. Shipping charges and delivery times for international orders will be calculated and displayed at checkout. Typical international shipping rates start at $14.99 and delivery times range from 7-21 business days depending on destination. Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. DissolvaGum is not responsible for these charges if they are applied and are your responsibility as the customer.</p>

      <h3>How do I check the status of my order?</h3>
      <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>
      <p>If you haven’t received your order within 10 business days of receiving your shipping confirmation email (or 30 business days for international orders), please contact us at support@dissolvagum.com with your name and order number, and we will look into it for you.</p>

      <h2>Returns & Refunds Policy</h2>
      <p>We want you to be completely satisfied with your DissolvaGum purchase. If you are not satisfied with your product, you may request a return within 30 days of receiving your order for a full refund or exchange, provided the product is in its original, unopened packaging.</p>
      <p>To initiate a return, please contact us at support@dissolvagum.com with your order number and reason for return. We will provide you with instructions on how to send back your product.</p>
      <p>Please note the following for returns:</p>
      <ul>
        <li>Customers are responsible for return shipping costs unless the item received was incorrect or damaged.</li>
        <li>Original shipping charges are non-refundable.</li>
        <li>Refunds will be processed to the original payment method within 5-7 business days after we receive and inspect the returned item.</li>
      </ul>

      <h3>Damaged or Incorrect Items</h3>
      <p>If you receive a damaged or incorrect item, please contact us immediately at support@dissolvagum.com with your order number and a photo of the item’s condition. We address these on a case-by-case basis and will work towards a satisfactory solution, including a replacement or refund.</p>
      <p><strong>Note:</strong> As this is a hypothetical concept, no actual orders, shipping, or returns are being processed. All information above is for demonstration only.</p>
    </LegalPageLayout>
  );
};

export default ShippingReturnsPage;

