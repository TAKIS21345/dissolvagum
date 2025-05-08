import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

// Mock product data - in a real app, this would come from an API or database
const products = [
  {
    id: "1",
    name: "DissolvaGum - Spearmint (15 Sticks)",
    images: [
      "/dissolvagum-spearmint-pack.png", // Updated to user-provided mockup
      "/dissolvagum-spearmint-front.png", // Updated to user-provided mockup
      "/placeholder-gum-texture.png", // Keeping placeholder for texture
      "/placeholder-gum-dissolve.png", // Keeping placeholder for dissolving sequence
    ],
    priceSingle: 2.99,
    priceBundle: 24.99,
    bundleSize: 10,
    subscriptionDiscount: 0.15, // 15%
    description: "Refreshing spearmint flavor that lasts. Dissolves completely after chewing, leaving no waste."
  },
  {
    id: "2",
    name: "DissolvaGum - Peppermint (15 Sticks)",
    images: [
      "/placeholder-gum-pack.png",
      "/placeholder-gum-sticks.png",
      "/placeholder-gum-texture.png",
      "/placeholder-gum-dissolve.png",
    ],
    priceSingle: 2.99,
    priceBundle: 24.99,
    bundleSize: 10,
    subscriptionDiscount: 0.15,
    description: "Cool peppermint taste with our signature dissolving technology. Enjoy gum without the guilt."
  },
  {
    id: "3",
    name: "DissolvaGum - Fruit Mix (15 Sticks)",
    images: [
      "/placeholder-gum-pack.png",
      "/placeholder-gum-sticks.png",
      "/placeholder-gum-texture.png",
      "/placeholder-gum-dissolve.png",
    ],
    priceSingle: 3.29,
    priceBundle: 27.99,
    bundleSize: 10,
    subscriptionDiscount: 0.15,
    description: "A burst of fruity flavors in every chew. The same great dissolving gum, now with a tropical twist."
  },
];

const ShopPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a 
            href="#" // Placeholder for bulk order inquiry
            className="text-teal-600 dark:text-teal-400 hover:underline font-semibold"
          >
            Interested in bulk orders for your business? Contact us!
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;

