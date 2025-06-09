"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin as LinkedIn, Twitter, Briefcase } from "lucide-react";

const teamMembers = [
	{
		name: "Taksh Nahata",
		role: "CEO",
		bio: "Taksh is the visionary who started DissolvaGum after experiencing the frustration of gum stuck to his shoe. His determination to solve this problem led to the creation of our innovative product.",
		image: "/taksh.png", // Placeholder image
	},
	{
		name: "Tarakesvaran Aravindaan",
		role: "Product Manager",
		bio: "Tarakesvaran brings his expertise in product development and sustainability to the team, ensuring that DissolvaGum is both effective and eco-friendly.",
		image: "/tarakes.png", // Placeholder image
		},
	{
		name: "Chanakya Mudhuganti",
		role: "Chief Financial Officer",
		bio: "Chanakya oversees DissolvaGum’s financial strategy and operations, ensuring sustainable growth and responsible resource management. His analytical mindset and attention to detail keep our mission on solid financial ground.",
		image: "/chanu.png", // Placeholder image
		},
	{
		name: "Shivam Sharma",
		role: "Chief Marketing Officer",
		bio: "Shivam is the creative force behind our marketing campaigns, spreading the word about DissolvaGum's mission and benefits.",
		image: "/shivam.png", // Placeholder image
		},
];

const TeamBios = () => {
	return (
		<motion.section
			className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/70 rounded-xl shadow-lg"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.7, delay: 0.4 }}
		>
			<div className="container mx-auto px-6">
				<div className="text-center mb-10 md:mb-12">
					<Briefcase
						className="mx-auto text-teal-500 dark:text-teal-400 mb-4"
						size={48}
					/>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
						Meet the Team
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
						The passionate individuals bringing DissolvaGum to life.
					</p>
				</div>

				<div className="flex flex-row flex-wrap justify-center gap-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={index}
							className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center flex flex-col items-center w-full sm:w-80"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-teal-500 dark:border-teal-400">
								<Image
									src={member.image}
									alt={member.name}
									fill
									style={{
										objectFit: "cover",
										objectPosition: "center",
										width: "100%",
										height: "100%",
									}}
									className="rounded-full"
									priority
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
								{member.name}
							</h3>
							<p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
								{member.role}
							</p>
							<p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
								{member.bio}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default TeamBios;

