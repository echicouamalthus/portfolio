'use client';

import { useState } from 'react';
import { Icon } from './icons';
import { MotionH4, MotionDiv } from '@/lib/motion-dev';
import Image from 'next/image';

import malthus from '../../public/malthus.png';

export default function Hero() {
	const [isCopied, setisCopied] = useState<boolean>(false);

	const handlecopy = async () => {
		try {
			await navigator.clipboard.writeText('echicouamathus@gmail.com');
			setisCopied(true);

			setTimeout(() => setisCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy text:', err);
		}
	};

	return (
		<div className="max-w-7xl mx-auto flex flex-col justify-between sm:gap-30 gap-10 px-4 py-8">
			<div className="flex lg:flex-row flex-col-reverse justify-between items-start gap-10">
				<div>
					<div className="relative overflow-hidden px-2">
						<MotionH4
							initial={{ y: 200 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 }}
							className="sm:text-[12rem] text-6xl
           sm:leading-48 tracking-tighter uppercase font-semibold"
						>
							Malthus
						</MotionH4>
					</div>

					<div className="relative overflow-hidden px-2">
						<MotionH4
							initial={{ y: 200 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 }}
							className="sm:text-[12rem] text-6xl
           sm:leading-48 tracking-tighter uppercase font-semibold"
						>
							echicoua
						</MotionH4>
					</div>
				</div>

				<MotionDiv
					className="size-32 relative rounded-full"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ type: 'spring', duration: 0.8, stiffness: 100 }}
				>
					<Image
						className="absolute object-cover size-full rounded-full"
						src={malthus}
						alt="ma photo"
					/>
				</MotionDiv>
			</div>

			<MotionDiv
				initial={{ y: 80, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.3 }}
				className="grid sm:grid-cols-7 gap-6"
			>
				<div className="sm:col-span-3 flex items-start">
					<div
						className="flex items-center gap-2 cursor-pointer"
						onClick={handlecopy}
					>
						<p className="sm:text-3xl text-xl font-medium tracking-tighter">
							echicouamalthus@gmail.com
						</p>
						{isCopied ? (
							<Icon name="check" size={24} />
						) : (
							<Icon name="copy" size={24} />
						)}
					</div>
				</div>

				<div className="sm:col-span-4">
					<p className="sm:text-4xl text-xl text-justify font-medium tracking-tighter">
						Bonjour, je suis freelance spécialisé dans le develeppement
						d&apos;application web et mobile depuis 2 ans — vivant à Abidjan,
						travaillant à distance. Créons ensemble la nouvelle technologie de
						demain !
					</p>
				</div>
			</MotionDiv>
		</div>
	);
}
