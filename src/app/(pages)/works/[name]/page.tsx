import React from 'react';
import Image from 'next/image';

import {
	VideoPlayer,
	VideoPlayerContent,
	VideoPlayerControlBar,
	VideoPlayerMuteButton,
	VideoPlayerPlayButton,
	VideoPlayerTimeDisplay,
	VideoPlayerTimeRange,
	VideoPlayerVolumeRange,
} from '@/components/ui/kibo-ui/video-player';
import { MotionDiv } from '@/lib/motion-dev';
import { notFound } from 'next/navigation';

import Link from 'next/link';
import { ImageZoom } from '@/components/ui/kibo-ui/image-zoom';
import { works } from '@/constants/lists';

export default async function page({
	params,
}: {
	params: Promise<{ name: string }>;
}) {
	const { name } = await params;

	const findWork = works.find(work => work.slug === name);

	if (findWork === undefined) {
		return notFound();
	}

	return (
		<div>
			<div className="max-w-7xl mx-auto flex sm:flex-col flex-col-reverse p-4 gap-4">
				<div className="flex sm:flex-col items-end ">
					{findWork.category.map((cat, idx) => {
						return (
							<MotionDiv
								key={idx}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.2 }}
							>
								<p className="flex items-center gap-3">
									<span className="uppercase text-gray-400 tracking-tighter md:text-base text-sm">
										INDUSTRIE :
									</span>
									<span className="uppercase tracking-tighter md:text-base text-sm">
										{cat.industrie}
									</span>
								</p>

								<p className="flex items-center gap-3">
									<span className="uppercase text-gray-400 tracking-tighter md:text-base text-sm">
										CIBLE :
									</span>
									<span className="uppercase tracking-tighter md:text-base text-sm">
										{cat.cible}
									</span>
								</p>

								<p className="flex items-center gap-3">
									<span className="uppercase text-gray-400 tracking-tighter md:text-base text-sm">
										ANNÉE :
									</span>
									<span className="uppercase tracking-tighter md:text-base text-sm">
										{cat.annee}
									</span>
								</p>

								<p className="flex items-center gap-3">
									<span className="uppercase text-gray-400 tracking-tighter md:text-base text-sm">
										TECHNOLOGIES :
									</span>
									<span className="uppercase tracking-tighter md:text-base text-sm">
										{cat.technologies}
									</span>
								</p>
							</MotionDiv>
						);
					})}
				</div>

				<div className="flex sm:flex-row flex-col-reverse justify-end sm:items-center items-start sm:gap-12 gap-6">
					<MotionDiv
						className=""
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Image
							className="drop-shadow-sm rounded-lg"
							src={findWork.cover_image}
							height={800}
							width={800}
							alt="image projet"
						/>
					</MotionDiv>

					<MotionDiv
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="flex-1/2"
					>
						<p className="sm:text-8xl text-4xl text-justify font-bold tracking-tighter">
							Case Gadget
						</p>
					</MotionDiv>
				</div>
			</div>

			{/* about */}
			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 flex flex-col gap-8 sm:justify-between justify-around">
				<MotionDiv
					className="flex items-center justify-between"
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h4 className="font-medium text-4xl tracking-tighter">à propos.</h4>

					<Link
						href={findWork.about.lien}
						className="bg-gray-100 text-black py-4 px-6 w-fit capitalize font-medium tracking-tighter"
					>
						Voir en direct
					</Link>
				</MotionDiv>

				<MotionDiv
					className="flex justify-end"
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<p className="sm:text-xl text-lg text-justify font-medium tracking-tighter w-3xl">
						{findWork.about.description}
					</p>
				</MotionDiv>

				{findWork.about.assets !== undefined && (
					<MotionDiv
						className="sm:aspect-video aspect-auto relative"
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<VideoPlayer className="overflow-hidden rounded-lg border sm:h-[600px] h-auto">
							<VideoPlayerContent
								slot="media"
								src={
									Array.isArray(findWork.about.assets)
										? (findWork.about.assets[0] as string)
										: (findWork.about.assets as string)
								}
								preload="auto"
								muted
								crossOrigin=""
							/>
							<VideoPlayerControlBar>
								<VideoPlayerPlayButton />
								<VideoPlayerTimeRange />
								<VideoPlayerTimeDisplay showDuration />
								<VideoPlayerMuteButton />
								<VideoPlayerVolumeRange />
							</VideoPlayerControlBar>
						</VideoPlayer>
					</MotionDiv>
				)}
			</div>

			{/* challenge */}
			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-8">
				<MotionDiv
					className="flex items-center justify-between"
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h4 className="font-medium text-4xl tracking-tighter">défi.</h4>
				</MotionDiv>

				<MotionDiv
					className="flex justify-end"
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<p className="sm:text-xl text-lg text-justify font-medium tracking-tighter w-3xl">
						{findWork.challenge.description}
					</p>
				</MotionDiv>

				{findWork.challenge.assets !== undefined && (
					<div className="grid sm:grid-cols-2 gap-6">
						{Array.isArray(findWork.challenge.assets)
							? findWork.challenge.assets.map((as, idx) => {
									return (
										<div key={idx} className="flex items-center justify-center">
											<ImageZoom>
												<Image
													className="drop-shadow-sm rounded-lg"
													src={as}
													alt="details project"
												/>
											</ImageZoom>
										</div>
									);
							  })
							: undefined}
					</div>
				)}
			</div>

			{/* conclusion */}
			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-8">
				<MotionDiv
					className="flex items-center justify-between"
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h4 className="font-medium text-4xl tracking-tighter">conclusion.</h4>
				</MotionDiv>

				<MotionDiv
					className="flex justify-end"
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<p className="sm:text-xl text-lg text-justify font-medium tracking-tighter w-3xl">
						{findWork.conclusion.description}
					</p>
				</MotionDiv>
			</div>

			{/* <div className="my-8 border-t-2 border-slate-100" /> */}

			{/* suggestion */}
			{/* <div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-8">
				<MotionDiv
					className="flex items-center justify-between"
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h4 className="font-medium text-4xl tracking-tighter">
						Plus à explorer.
					</h4>

					<button className="bg-gray-100 text-black py-4 px-6 w-fit capitalize font-medium tracking-tighter">
						voir plus
					</button>
				</MotionDiv>

				<div className="grid sm:grid-cols-2 gap-6">
					<MotionDiv
						className="aspect-square relative"
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
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
						animate={{ y: 0, opacity: 1 }}
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
			</div> */}
		</div>
	);
}
