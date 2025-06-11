"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

// Mock product data - in a real app, this would come from an API or database
const products = [
	{
		id: "1",
		name: "DissolvaGum - Spearmint (15 Sticks)",
		images: [
			"/dissolvagum-spearmint-pack.png",
		],
		priceSingle: 2.99,
		priceBundle: 24.99,
		bundleSize: 10,
		description:
			"Refreshing spearmint flavor that lasts. Dissolves completely after chewing, leaving no waste.",
	},
	{
		id: "2",
		name: "DissolvaGum - Watermelon (15 Sticks)",
		images: [
			"/placeholder-gum-pack.png",
			"/placeholder-gum-sticks.png",
			"/placeholder-gum-texture.png",
			"/placeholder-gum-dissolve.png",
		],
		priceSingle: 2.99,
		priceBundle: 24.99,
		bundleSize: 10,
		description:
			"Bursting with sweet, summery watermelon flavor, this gum keeps your chew fresh and fun.",
	},
	{
		id: "3",
		name: "DissolvaGum - Cherry Blast (15 Sticks)",
		images: [
			"/placeholder-gum-pack.png",
			"/placeholder-gum-sticks.png",
			"/placeholder-gum-texture.png",
			"/placeholder-gum-dissolve.png",
		],
		priceSingle: 2.99,
		priceBundle: 24.99,
		bundleSize: 10,
		description:
			"Enjoy a classic, sweet cherry flavor with this refreshing chew—simple, tasty, and long-lasting.",
	},
];

const ShopPage = () => {
	// Cart state should be an array of product objects
	const [cart, setCart] = useState<typeof products>([]);

	// addToCart should accept a product of the same type as in products
	const addToCart = (product: typeof products[number]) => {
		setCart((prevCart) => [...prevCart, product]);
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
					Our Products
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default ShopPage;

