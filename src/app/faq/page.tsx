"use client";

// import { Metadata } from 'next'; // Removed
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from 'framer-motion'; // Added missing import for motion
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Removed metadata export
// export const metadata: Metadata = {
//   title: 'FAQ - DissolvaGum',
//   description: 'Frequently Asked Questions about DissolvaGum, the revolutionary dissolving chewing gum.',
// };

const faqData = [
	{
		question: "What is DissolvaGum?",
		answer: "DissolvaGum is a new type of chewing gum that is designed to dissolve completely after a certain period, leaving no waste behind. It offers the same great taste and texture as traditional gum but with an eco-friendly advantage.",
	},
	{
		question: "How long does it take for DissolvaGum to dissolve?",
		answer: "The dissolving time can vary slightly, but it's generally designed to start breaking down after about 2 hours and fully dissolve shortly thereafter. We are working on different formulations for varied dissolving times.",
	},
	{
		question: "What flavors does DissolvaGum come in?",
		answer: "Initially, we are launching with Spearmint, Watermelon, and Cherry Blast flavors. We plan to introduce a wider range of flavors based on customer feedback and research.",
	},
	{
		question: "Where can I buy DissolvaGum?",
		answer: "DissolvaGum will be available for purchase directly from our website. We are also working on partnerships with retail stores, and we'll update our website with a store locator once available.",
	},
	{
		question: "Is the packaging eco-friendly as well?",
		answer: "Absolutely! We are committed to sustainability. Our packaging is made from recycled and biodegradable materials to minimize environmental impact.",
	},
	{
		question: "How does DissolvaGum compare to regular chewing gum?",
		answer: "DissolvaGum offers a similar chewing experience in terms of flavor and texture but with the significant benefit of being fully dissolvable and biodegradable, addressing the issue of gum litter.",
	},
];

export default function FAQPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-grow container mx-auto px-4 py-12 md:py-20">
				<motion.h1
					className="font-glacial-indifference-bold text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Frequently Asked Questions
				</motion.h1>

				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="w-full space-y-4">
						{faqData.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
							>
								<AccordionItem
									value={`item-${index}`}
									className="border dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
								>
									<AccordionTrigger className="font-glacial-indifference-bold text-lg p-6 text-left text-gray-700 dark:text-gray-200 hover:no-underline">
										{item.question}
									</AccordionTrigger>
									<AccordionContent className="p-6 pt-0 text-gray-600 dark:text-gray-400">
										{item.answer}
									</AccordionContent>
								</AccordionItem>
							</motion.div>
						))}
					</Accordion>
				</div>
			</main>
			<Footer />
		</div>
	);
}

// Ensure font-glacial-indifference-bold is defined in your globals.css or tailwind.config.js
