'use client';

import React, { useState } from 'react';
import { Icon } from './icons';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useMediaQuery } from '@uidotdev/usehooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavBar() {
	const router = useRouter();
	const isClient = typeof window !== 'undefined';

	const isSmallDevice = isClient
		? // eslint-disable-next-line react-hooks/rules-of-hooks
		  useMediaQuery('only screen and (max-width : 640px)')
		: false;

	const [on, setOn] = useState<boolean | null>(isSmallDevice ? false : null);

	return (
		<>
			<motion.nav
				className={cn(
					'border-b bg-white border-slate-100 w-full p-6 h-auto pointer-events-auto'
				)}
				initial={{ height: 80 }}
				animate={{ height: on && isSmallDevice ? 700 : 80 }}
				transition={{ type: 'spring', stiffness: 100, damping: 20 }}
				exit={{ height: 80 }}
			>
				<div className="flex items-center w-full justify-between">
					<div>
						<Link
							href={'/'}
							className="relative text-3xl font-extrabold tracking-tighter cursor-pointer uppercase"
						>
							Malthus
						</Link>
					</div>
					<div className="relative flex items-center justify-center">
						<ul className="lg:flex gap-5 items-center hidden justify-center">
							<Link
								href={'/works'}
								className="capitalize font-medium tracking-tighter text-lg"
							>
								Mes projets
							</Link>
							<Link
								href={'/about'}
								className="capitalize font-medium tracking-tighter text-lg hover:text-blue-600 transition-colors duration-200"
								aria-label="À propos de moi"
							>
								À propos
							</Link>
							<Link
								href={'/contact'}
								className="capitalize font-medium tracking-tighter text-lg"
							>
								contact
							</Link>
						</ul>
						<button onClick={() => setOn(!on)}>
							<Icon className="sm:hidden block cursor-pointer" name={'menu'} />
						</button>
					</div>
				</div>
				<AnimatePresence initial={false}>
					{on && isSmallDevice && (
						<motion.ul
							className="flex flex-col gap-5 items-center absolute bottom-0 w-full justify-center h-screen z-20 left-0"
							initial={{ opacity: 0, scale: 0 }}
							animate={{
								opacity: 1,
								scale: 1,
							}}
							exit={{
								opacity: 0,
								scale: 0,
							}}
						>
							<div className="relative overflow-hidden">
								<motion.li
									initial={{ y: 200 }}
									animate={{ y: 0, transition: { delay: 0.1 } }}
									exit={{ y: 200, transition: { delay: 0 } }}
									className="capitalize font-medium tracking-tighter text-5xl  transition-all duration-500 delay-100"
									onClick={() => {
										router.push('/works');
										setOn(!on);
									}}
								>
									Mes projets
								</motion.li>
							</div>

							<div className="relative overflow-hidden px-2">
								<motion.li
									initial={{ y: 200 }}
									animate={{ y: 0, transition: { delay: 0.2 } }}
									exit={{ y: 200, transition: { delay: 0 } }}
									className="capitalize font-medium tracking-tighter text-5xl transition-all duration-500 delay-200"
									onClick={() => {
										router.push('/about');
										setOn(!on);
									}}
								>
									À propos
								</motion.li>
							</div>

							<div className="relative overflow-hidden">
								<motion.li
									initial={{ y: 200 }}
									animate={{ y: 0, transition: { delay: 0.3 } }}
									exit={{ y: 200, transition: { delay: 0 } }}
									className="capitalize font-medium tracking-tighter text-5xl transition-all duration-500 delay-300"
									onClick={() => {
										router.push('/contact');
										setOn(!on);
									}}
								>
									contact
								</motion.li>
							</div>
						</motion.ul>
					)}
				</AnimatePresence>
			</motion.nav>
		</>
	);
}
