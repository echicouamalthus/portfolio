'use client';
import Image from 'next/image';

import { Icon } from '@/component/icons';
import { MotionDiv, MotionH4 } from '@/lib/motion-dev';
import { useState } from 'react';

export default function Home() {
	const [isCopied, setisCopied] = useState<boolean>(false);

	const handlecopy = async () => {
		try {
			await navigator.clipboard.writeText('hello@yume.com');
			setisCopied(true);

			setTimeout(() => setisCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy text:', err);
		}
	};

	return (
		<div>
			<div className="max-w-7xl mx-auto flex flex-col justify-between sm:gap-30 gap-10 px-4 py-8">
				<div className="flex lg:flex-row flex-col-reverse justify-between items-start gap-10">
					<div>
						<div className="relative overflow-hidden px-2">
							<MotionH4
								initial={{ y: 200 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.4, delay: 0.3 }}
								className="sm:text-[12rem] text-7xl
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
								className="sm:text-[12rem] text-7xl
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
							src={
								'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							}
							alt="ma photo"
							width={900}
							height={900}
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
							<p className="text-3xl font-medium tracking-tighter">
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
						<p className="sm:text-5xl text-2xl text-justify font-medium tracking-tighter">
							Bonjour, je suis freelance spécialisé dans le design minimaliste
							avec 10 ans d&apos;expérience — basé à Tokyo, travaillant à
							distance. Créons ensemble !
						</p>
					</div>
				</MotionDiv>
			</div>

			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto p-4">
				<div className="flex flex-col gap-5">
					<MotionDiv
						className="flex items-center justify-between"
						initial={{ y: 80, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4 className="font-medium text-4xl tracking-tighter">travaux.</h4>

						<button className="bg-gray-100 text-black py-4 px-6 w-fit capitalize font-medium tracking-tighter">
							voir plus
						</button>
					</MotionDiv>

					<MotionDiv
						className="grid sm:grid-cols-2 gap-3"
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<div className="aspect-square w-full relative overflow-hidden group">
							<Image
								className="absolute size-full object-cover group-hover:scale-150 transition-all duration-600"
								src={
									'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt="ma photo"
								width={900}
								height={900}
							/>

							<div className="relative size-full flex flex-col justify-end">
								<div className="p-8 bg-gradient-to-b from-transparent via-transparent to-black overflow-hidden">
									<p className="text-5xl text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										Stone Mind
									</p>
								</div>
							</div>
						</div>
						<div className="aspect-square w-full relative overflow-hidden group">
							<Image
								className="absolute size-full object-cover group-hover:scale-150 transition-all duration-600"
								src={
									'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt="ma photo"
								width={900}
								height={900}
							/>

							<div className="relative size-full flex flex-col justify-end">
								<div className="p-8 bg-gradient-to-b from-transparent via-transparent to-black overflow-hidden">
									<p className="text-5xl text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										Stone Mind
									</p>
								</div>
							</div>
						</div>
						<div className="aspect-square w-full relative overflow-hidden group">
							<Image
								className="absolute size-full object-cover group-hover:scale-150 transition-all duration-600"
								src={
									'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt="ma photo"
								width={900}
								height={900}
							/>

							<div className="relative size-full flex flex-col justify-end">
								<div className="p-8 bg-gradient-to-b from-transparent via-transparent to-black overflow-hidden">
									<p className="text-5xl text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										Stone Mind
									</p>
								</div>
							</div>
						</div>
						<div className="aspect-square w-full relative overflow-hidden group">
							<Image
								className="absolute size-full object-cover group-hover:scale-150 transition-all duration-600"
								src={
									'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt="ma photo"
								width={900}
								height={900}
							/>

							<div className="relative size-full flex flex-col justify-end">
								<div className="p-8 bg-gradient-to-b from-transparent via-transparent to-black overflow-hidden">
									<p className="text-5xl text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										Stone Mind
									</p>
								</div>
							</div>
						</div>
					</MotionDiv>
				</div>
			</div>

			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 pb-16">
				<div className="flex flex-col sm:gap-28 gap-6">
					<MotionDiv
						className="flex items-center justify-between"
						initial={{ y: 80, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<h4 className="font-medium text-4xl tracking-tighter">à propos.</h4>

						<button className="bg-gray-100 text-black py-4 px-6 w-fit capitalize font-medium tracking-tighter">
							voir plus
						</button>
					</MotionDiv>

					<MotionDiv
						className="sm:max-w-3xl"
						initial={{ y: 80, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<p className="sm:text-5xl text-2xl text-justify font-medium tracking-tighter">
							Je collabore avec des entreprises de toutes tailles à travers le
							monde, en utilisant les dernières technologies. Mes créations ont
							également reçu de nombreux prix.
						</p>
					</MotionDiv>

					<div className="flex sm:flex-row flex-col justify-end items-center max-w-5xl mx-auto sm:gap-25 gap-6">
						<MotionDiv
							initial={{ y: 80, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							<Image
								className="sm:aspect-auto aspect-square object-cover"
								src={
									'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt=""
								width={900}
								height={900}
							/>
						</MotionDiv>

						<MotionDiv
							initial={{ y: 80, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="sm:w-[30rem]"
						>
							<p className="sm:text-xl text-xl text-justify font-medium tracking-tighter">
								Je m&apos;engage à créer des designs beaux et très fonctionnels
								qui s&apos;alignent parfaitement avec les besoins uniques et les
								objectifs à long terme de mes clients.
							</p>
						</MotionDiv>
					</div>
				</div>
			</div>
		</div>
	);
}
