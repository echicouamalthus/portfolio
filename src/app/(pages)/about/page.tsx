'use client';

import React from 'react';
import Image from 'next/image';

import { MotionDiv, MotionH4 } from '@/lib/motion-dev';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Circle, Pen, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@uidotdev/usehooks';

const ServicesLinks = [
	{
		icon: <Circle />,
		title: 'UI UX Design',
		image:
			'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		icon: <Pen />,
		title: 'Développement web',
		image:
			'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		icon: <Star />,
		title: 'Développement mobile',
		image:
			'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

const textBlur = {
	initial: {
		filter: 'blur(0px)',
		opacity: 1,
	},
	show: {
		filter: 'blur(4px)',
		opacity: 0.6,
		transition: { duration: 0.4 },
	},
	hide: {
		filter: 'blur(0px)',
		opacity: 1,
		transition: { duration: 0.4 },
	},
};

const imageVariant = {
	initial: {
		opacity: 0,
		scale: 0.95,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.4, ease: 'easeInOut' },
	},
	hide: {
		opacity: 0,
		scale: 0.95,
		transition: { duration: 0.4, ease: 'easeInOut' },
	},
};

export default function Page() {
	const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
	const isClient = typeof window !== 'undefined';

	const isSmallDevice = isClient
		? // eslint-disable-next-line react-hooks/rules-of-hooks
		  useMediaQuery('only screen and (max-width : 640px)')
		: false;

	return (
		<div>
			<div className="max-w-7xl mx-auto flex flex-col justify-between sm:gap-30 gap-10 px-4 py-8">
				<div className="flex flex-col sm:justify-end justify-center items-center sm:h-[70vh] h-60 ">
					<div className="relative overflow-hidden">
						<MotionH4
							initial={{ y: 200 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 }}
							className="sm:text-[10rem] text-7xl
			 sm:leading-48 tracking-tighter uppercase font-semibold"
						>
							MAlthus
						</MotionH4>
					</div>

					<div className="relative overflow-hidden px-2">
						<MotionH4
							initial={{ y: 200 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 }}
							className="sm:text-[10rem] text-7xl
			 sm:leading-48 tracking-tighter uppercase font-semibold"
						>
							Echicoua
						</MotionH4>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 pb-16">
				<div className="flex flex-col sm:gap-28 gap-6">
					<MotionDiv
						className="flex items-center justify-between"
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<h4 className="font-medium text-4xl tracking-tighter">à propos.</h4>

						<button className="bg-gray-100 text-black py-4 px-6 w-fit font-medium tracking-tighter">
							Lire.cv
						</button>
					</MotionDiv>

					<MotionDiv
						className="sm:max-w-3xl"
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<p className="sm:text-5xl text-3xl text-justify font-medium tracking-tighter">
							Je collabore avec des entreprises de toutes tailles à travers le
							monde, en utilisant les dernières technologies. Mes créations ont
							également reçu de multiples récompenses.
						</p>
					</MotionDiv>

					<div className="flex sm:flex-row flex-col justify-between items-center sm:gap-25 gap-6">
						<MotionDiv
							initial={{ y: 80, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							<Image
								className="aspect-square object-cover"
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
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="sm:w-[20rem]"
						>
							<p className="sm:text-xl text-xl text-justify font-medium tracking-tighter">
								Je suis dédié à la création de designs beaux et hautement
								fonctionnels qui s’alignent parfaitement avec les besoins
								uniques et les objectifs à long terme de mes clients.
							</p>
						</MotionDiv>
					</div>
				</div>
			</div>

			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 pb-16">
				<div className="flex flex-col sm:gap-28 gap-6">
					<MotionDiv
						className="flex items-center justify-between"
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<h4 className="font-medium text-4xl tracking-tighter">services.</h4>
					</MotionDiv>

					<div>
						{ServicesLinks.map((service, index) => {
							return (
								<div
									key={index}
									className={cn(
										'relative border-b border-slate-200 p-8 first:border-t cursor-pointer'
									)}
									onMouseOver={() =>
										setActiveIndex(isSmallDevice ? null : index)
									}
									onMouseLeave={() => setActiveIndex(null)}
								>
									<div className="relative z-10">
										<MotionDiv
											variants={textBlur}
											initial="initial"
											animate={
												activeIndex !== null && activeIndex !== index
													? 'show'
													: 'hide'
											}
											className="flex items-center gap-4 w-full"
										>
											<div className="text-sm">{service.icon}</div>
											<div className="text-2xl uppercase">{service.title}</div>
										</MotionDiv>

										{/* img */}

										<MotionDiv
											className="absolute right-0 -top-48 xl:right-32"
											variants={imageVariant}
											animate={activeIndex === index ? 'show' : 'hide'}
										>
											<Image
												src={service.image}
												height={500}
												width={500}
												quality={100}
												alt={service.title}
											/>
										</MotionDiv>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 pb-16">
				<div className="flex flex-col sm:gap-28 gap-6">
					<MotionDiv
						className="flex items-center justify-between"
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<h4 className="font-medium text-4xl tracking-tighter">FAQs</h4>
					</MotionDiv>

					<div className="grid sm:grid-cols-3">
						<div className="" />
						<Accordion
							type="single"
							collapsible
							className="col-span-2 space-y-4"
						>
							<AccordionItem value="item-1" className="bg-stone-100">
								<AccordionTrigger className="text-xl font-medium p-10">
									Quel est votre processus créatif de design ?
								</AccordionTrigger>
								<AccordionContent className="text-lg font-normal px-10">
									Mon processus de design commence par une compréhension
									complète de vos objectifs et besoins. Je débute par la
									recherche et le brainstorming pour recueillir des idées,
									suivis de croquis des concepts initiaux. Une fois la direction
									créative validée, je développe des designs détaillés et
									effectue des révisions selon vos retours. Je vise un processus
									collaboratif et fluide, pour garantir que chaque étape nous
									rapproche de la solution idéale.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2" className="bg-stone-100">
								<AccordionTrigger className="text-xl font-medium p-10">
									Quel est le délai typique pour un projet ?
								</AccordionTrigger>
								<AccordionContent className="text-lg font-normal px-10">
									Le délai varie selon la complexité du projet. En général, les
									petits projets comme un logo ou un site d’une page prennent 1
									à 2 semaines, tandis que les projets plus importants comme une
									identité de marque complète ou un site multi-pages prennent 4
									à 6 semaines. Je fournis un planning détaillé une fois le
									périmètre défini, et je m’efforce toujours de respecter les
									délais.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3" className="bg-stone-100">
								<AccordionTrigger className="text-xl font-medium p-10">
									Comment démarrer un projet avec vous ?
								</AccordionTrigger>
								<AccordionContent className="text-lg font-normal px-10">
									C’est simple ! Contactez-moi via le formulaire ou envoyez-moi
									un email avec les détails de votre projet. Nous organiserons
									une première consultation pour discuter de votre vision, de
									vos objectifs et de vos besoins. Ensuite, je vous proposerai
									une offre sur-mesure avec le périmètre, le planning et le
									tarif. Une fois tout validé, nous pouvons commencer le
									processus créatif !
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4" className="bg-stone-100">
								<AccordionTrigger className="text-xl font-medium p-10">
									Que faire si je suis déjà complet ?
								</AccordionTrigger>
								<AccordionContent className="text-lg font-normal px-10">
									Si je suis actuellement complet, pas d’inquiétude ! Je tiens
									une liste d’attente et je vous préviens dès qu’une place se
									libère. Je vous conseille de me contacter le plus tôt possible
									pour réserver un créneau. En attendant, je peux vous
									conseiller ou vous aider à préparer votre projet pour que nous
									puissions démarrer rapidement dès que possible.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
}
