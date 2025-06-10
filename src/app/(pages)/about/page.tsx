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
import { Circle, SwatchBook, Pen, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServicesLinks = [
	{
		icon: <Circle />,
		title: 'UI UX Design',
		image:
			'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		icon: <SwatchBook />,
		title: 'Graphic Design',
		image:
			'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		icon: <Pen />,
		title: 'Brand Design',
		image:
			'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		icon: <Star />,
		title: 'Web Development',
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
						<h4 className="font-medium text-4xl tracking-tighter">about.</h4>

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
							I collaborate with businesses of all sizes worldwide, using the
							latest technologies. My designs have also earned multiple awards.
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
								I&apos;m dedicated to crafting beautiful and highly functional
								designs that seamlessly align with my clients&apos; unique needs
								and long-term goals.
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
						<h4 className="font-medium text-4xl tracking-tighter">service.</h4>
					</MotionDiv>

					<div>
						{ServicesLinks.map((service, index) => {
							return (
								<div
									key={index}
									className={cn(
										'relative border-b border-slate-200 p-8 first:border-t cursor-pointer'
									)}
									onMouseOver={() => setActiveIndex(index)}
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
									What is your creative design process like?
								</AccordionTrigger>
								<AccordionContent className="text-lg font-normal px-10">
									My design process starts with fully understanding your goals
									and needs. I begin with research and brainstorming to gather
									insights, followed by sketching initial concepts. Once we
									agree on a creative direction, I develop detailed designs and
									make revisions based on your feedback. I strive for a
									seamless, collaborative process, ensuring that each step
									brings us closer to the perfect solution.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2" className="bg-stone-100">
								<AccordionTrigger className="text-xl font-medium p-10">
									What is your typical project timeline?
								</AccordionTrigger>
								<AccordionContent className="text-lg font-normal px-10">
									The timeline varies depending on the complexity of the
									project. Typically, smaller projects like a logo design or
									single-page website take 1-2 weeks, while larger projects such
									as full brand identity or multi-page websites can take 4-6
									weeks. I’ll provide a detailed project timeline once we define
									the scope of the project, and I always aim to deliver on time.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3" className="bg-stone-100">
								<AccordionTrigger className="text-xl font-medium p-10">
									How do I get started on a project with you?
								</AccordionTrigger>
								<AccordionContent className="text-lg font-normal px-10">
									Getting started is easy! Simply reach out through the contact
									form or send me an email with details about your project.
									We’ll schedule an initial consultation to discuss your vision,
									goals, and requirements. From there, I’ll create a tailored
									proposal outlining the project scope, timeline, and pricing.
									Once everything is agreed upon, we can immediately start the
									creative process!
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4" className="bg-stone-100">
								<AccordionTrigger className="text-xl font-medium p-10">
									What should I do if you&apos;re fully booked??
								</AccordionTrigger>
								<AccordionContent className="text-lg font-normal px-10">
									If I&apos;m currently fully booked, don’t worry! I maintain a
									waiting list, and I’ll notify you as soon as I have
									availability. I recommend reaching out as early as possible to
									secure a spot in my schedule. In the meantime, I’m happy to
									offer guidance or advice on preparing for the project so we
									can hit the ground running once I’m available.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
}
