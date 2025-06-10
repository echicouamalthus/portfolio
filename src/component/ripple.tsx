'use client';

import { motion } from 'motion/react';

const RippleWave = () => {
	// Animation pour une ondulation infinie
	const rippleVariants = {
		animate: {
			scale: [0, 0.5], // Échelle de 0 à 2
			opacity: [0.5, 0], // De visible à invisible
			transition: {
				duration: 1, // Durée de l'animation
				repeat: Infinity, // Répétition infinie
				repeatDelay: 0.05, // Délai entre les répétitions
				ease: 'easeOut',
			},
		},
	};

	return (
		<div className="relative flex items-center justify-center">
			{/* Point central */}
			<div className="absolute size-2 bg-white rounded-full"></div>
			{/* Ondulations */}
			<motion.div
				className="absolute w-16 h-16 bg-white rounded-full opacity-50"
				variants={rippleVariants}
				animate="animate"
			/>
			<motion.div
				className="absolute w-16 h-16 bg-white rounded-full opacity-50"
				variants={rippleVariants}
				animate="animate"
				transition={{ ...rippleVariants.animate.transition, delay: 0.25 }} // Décalage pour la 2e vague
			/>
			<motion.div
				className="absolute w-16 h-16 bg-white rounded-full opacity-50"
				variants={rippleVariants}
				animate="animate"
				transition={{ ...rippleVariants.animate.transition, delay: 0.5 }} // Décalage pour la 3e vague
			/>
		</div>
	);
};

export default RippleWave;
