import React from 'react';
import Image from 'next/image';
import { MotionDiv } from '@/lib/motion-dev';

export default async function page({
	params,
}: {
	params: Promise<{ name: string }>;
}) {
	const { name } = await params;

	console.log(name);

	return (
		<div>
			<div className="max-w-7xl mx-auto flex sm:flex-col flex-col-reverse p-4 gap-4">
				<div className="flex sm:flex-col items-end ">
					<MotionDiv
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 1.2 }}
					>
						<p className="flex items-center gap-3">
							<span className="uppercase text-gray-400 tracking-tighter">
								INDUSTRY:
							</span>
							<span className="uppercase tracking-tighter">ART & DESIGN</span>
						</p>

						<p className="flex items-center gap-3">
							<span className="uppercase text-gray-400 tracking-tighter">
								CLIENT:
							</span>
							<span className="uppercase tracking-tighter">
								GRANITE VISIONS
							</span>
						</p>

						<p className="flex items-center gap-3">
							<span className="uppercase text-gray-400 tracking-tighter">
								YEAR:
							</span>
							<span className="uppercase tracking-tighter">2023</span>
						</p>

						<p className="flex items-center gap-3">
							<span className="uppercase text-gray-400 tracking-tighter">
								EXPERIENCE:
							</span>
							<span className="uppercase tracking-tighter">3D MODELING</span>
						</p>
					</MotionDiv>
				</div>

				<div className="flex sm:flex-row flex-col-reverse justify-end sm:items-center items-start sm:gap-12 gap-6">
					<MotionDiv
						className=""
						initial={{ y: 80, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Image
							className=" object-cover"
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
						className="flex-1/2"
					>
						<p className="sm:text-8xl text-4xl text-justify font-bold tracking-tighter">
							Stone Mind
						</p>
					</MotionDiv>
				</div>
			</div>

			{/* about */}
			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-8">
				<MotionDiv
					className="flex items-center justify-between"
					initial={{ y: 80, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h4 className="font-medium text-4xl tracking-tighter">about.</h4>

					<button className="bg-gray-100 text-black py-4 px-6 w-fit capitalize font-medium tracking-tighter">
						see it more
					</button>
				</MotionDiv>

				<MotionDiv
					className="flex justify-end"
					initial={{ y: 80, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<p className="sm:text-xl text-lg text-justify font-medium tracking-tighter w-3xl">
						Stone Mind is a unique 3D design project that brings together the
						concept of a human head, sculpted from meticulously arranged digital
						stones. Inspired by traditional sculpture, this model captures the
						essence of natural durability and artistry. The goal was to blend
						classic sculptural form with digital techniques, creating a design
						with depth and aesthetic appeal. The final model was optimized for
						product photography, resulting in impactful visuals that could be
						used in marketing, advertising, or art portfolios.
					</p>
				</MotionDiv>

				<MotionDiv
					className="sm:aspect-video aspect-square relative"
					initial={{ y: 80, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<Image
						className="size-full absolute object-cover"
						src={
							'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						}
						alt=""
						width={900}
						height={900}
					/>
				</MotionDiv>
			</div>

			{/* conclusion */}
			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-8">
				<MotionDiv
					className="flex items-center justify-between"
					initial={{ y: 80, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h4 className="font-medium text-4xl tracking-tighter">challenge.</h4>
				</MotionDiv>

				<MotionDiv
					className="flex justify-end"
					initial={{ y: 80, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<p className="sm:text-xl text-lg text-justify font-medium tracking-tighter w-3xl">
						The primary challenge in this project was to achieve a realistic
						stone texture that would evoke a tangible, physical presence while
						maintaining accurate human proportions and detail. Each “stone” had
						to be carefully placed and adjusted for visual harmony. The model
						also needed to be adapted for photography, requiring a precise
						balance of light and shadow to capture every texture and detail in
						the final images.
					</p>
				</MotionDiv>

				<div className="grid sm:grid-cols-2 gap-6">
					<MotionDiv
						className="aspect-square relative"
						initial={{ y: 80, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Image
							className="size-full absolute object-cover"
							src={
								'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							}
							alt=""
							width={900}
							height={900}
						/>
					</MotionDiv>
					<MotionDiv
						className="aspect-square relative"
						initial={{ y: 80, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Image
							className="size-full absolute object-cover"
							src={
								'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							}
							alt=""
							width={900}
							height={900}
						/>
					</MotionDiv>
				</div>
			</div>

			{/* conclusion */}
			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-8">
				<MotionDiv
					className="flex items-center justify-between"
					initial={{ y: 80, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h4 className="font-medium text-4xl tracking-tighter">conclusion.</h4>
				</MotionDiv>

				<MotionDiv
					className="flex justify-end"
					initial={{ y: 80, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<p className="sm:text-xl text-lg text-justify font-medium tracking-tighter w-3xl">
						Stone Mind is a unique 3D design project that brings together the
						concept of a human head, sculpted from meticulously arranged digital
						stones. Inspired by traditional sculpture, this model captures the
						essence of natural durability and artistry. The goal was to blend
						classic sculptural form with digital techniques, creating a design
						with depth and aesthetic appeal. The final model was optimized for
						product photography, resulting in impactful visuals that could be
						used in marketing, advertising, or art portfolios.
					</p>
				</MotionDiv>
			</div>

			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-8">
				<MotionDiv
					className="flex items-center justify-between"
					initial={{ y: 80, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h4 className="font-medium text-4xl tracking-tighter">
						more to explore.
					</h4>

					<button className="bg-gray-100 text-black py-4 px-6 w-fit capitalize font-medium tracking-tighter">
						see it more
					</button>
				</MotionDiv>

				<div className="grid sm:grid-cols-2 gap-6">
					<MotionDiv
						className="aspect-square relative"
						initial={{ y: 80, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Image
							className="size-full absolute object-cover"
							src={
								'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							}
							alt=""
							width={900}
							height={900}
						/>
					</MotionDiv>
					<MotionDiv
						className="aspect-square relative"
						initial={{ y: 80, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Image
							className="size-full absolute object-cover"
							src={
								'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							}
							alt=""
							width={900}
							height={900}
						/>
					</MotionDiv>
				</div>
			</div>
		</div>
	);
}
