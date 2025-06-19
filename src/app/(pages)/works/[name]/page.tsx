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

import covermagic from '../../../../../public/cover projet with app.png';
import defi_1 from '../../../../../public/details project.png';
import defi_2 from '../../../../../public/details project 2.png';

import Link from 'next/link';
import { ImageZoom } from '@/components/ui/kibo-ui/image-zoom';

export default async function page({
	params,
}: {
	params: Promise<{ name: string }>;
}) {
	const { name } = await params;

	if (name !== 'case-gadget') {
		return notFound();
	}

	return (
		<div>
			<div className="max-w-7xl mx-auto flex sm:flex-col flex-col-reverse p-4 gap-4">
				<div className="flex sm:flex-col items-end ">
					<MotionDiv
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 1.2 }}
					>
						<p className="flex items-center gap-3">
							<span className="uppercase text-gray-400 tracking-tighter">
								INDUSTRIE :
							</span>
							<span className="uppercase tracking-tighter">ART & DESIGN</span>
						</p>

						<p className="flex items-center gap-3">
							<span className="uppercase text-gray-400 tracking-tighter">
								CLIENT :
							</span>
							<span className="uppercase tracking-tighter">
								GRANITE VISIONS
							</span>
						</p>

						<p className="flex items-center gap-3">
							<span className="uppercase text-gray-400 tracking-tighter">
								ANNÉE :
							</span>
							<span className="uppercase tracking-tighter">2025</span>
						</p>

						<p className="flex items-center gap-3">
							<span className="uppercase text-gray-400 tracking-tighter">
								EXPÉRIENCE :
							</span>
							<span className="uppercase tracking-tighter">
								MODÉLISATION 3D
							</span>
						</p>

						<p className="flex items-center gap-3">
							<span className="uppercase text-gray-400 tracking-tighter">
								TECHNOLOGIES :
							</span>
							<span className="uppercase tracking-tighter">Nextjs</span>
						</p>
					</MotionDiv>
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
							src={covermagic}
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
						href={'https://case-gadget.vercel.app/'}
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
						Mon projet est né de l&apos;envie d&apos;offrir une solution simple
						et créative pour personnaliser les coques de téléphone. Mon objectif
						était de te permettre d&apos;exprimer ta personnalité à travers un
						accessoire unique, car je trouvais qu&apos;il manquait une
						plateforme vraiment intuitive pour ça. L&apos;idée est de
						transformer une simple coque en une véritable extension de toi-même,
						une œuvre d&apos;art que tu portes au quotidien.
					</p>
				</MotionDiv>

				<MotionDiv
					className="sm:aspect-video aspect-auto relative"
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<VideoPlayer className="overflow-hidden rounded-lg border sm:h-[600px] h-auto">
						<VideoPlayerContent
							slot="media"
							src="/landing page de coque personnalisable.mp4"
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
						La création du configurateur de coque a été un vrai défi technique.
						J&apos;ai dû travailler dur pour que la rotation,
						l&apos;agrandissement et le déplacement des éléments soient fluides
						et précis, pour te garantir une expérience utilisateur parfaite.
						Récupérer et sécuriser tes données sur la page de résultats était
						aussi une priorité, afin d&apos;assurer une totale conformité.
						Chaque obstacle m&apos;a poussé à innover et à peaufiner mon
						travail.
					</p>
				</MotionDiv>

				<div className="grid sm:grid-cols-2 gap-6">
					<div className="flex items-center justify-center">
						<ImageZoom>
							<Image
								className="drop-shadow-sm rounded-lg"
								src={defi_1}
								alt="details project"
							/>
						</ImageZoom>
					</div>

					<div className="flex items-center justify-center ">
						<ImageZoom>
							<Image
								className="drop-shadow-sm rounded-lg"
								src={defi_2}
								alt="détails projet"
							/>
						</ImageZoom>
					</div>
				</div>
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
						Ce projet de coques personnalisables représente une belle avancée
						dans le monde des accessoires pour smartphones. Je suis convaincu
						qu&apos;il répondra à ton désir de singularité et d&apos;expression,
						en apportant une vraie valeur ajoutée. Ma plateforme est conçue pour
						être polyvalente, s&apos;adressant aussi bien aux particuliers comme
						toi qu&apos;aux entreprises qui cherchent à proposer des produits
						sur mesure. Je pense vraiment que ce service trouvera sa place sur
						un marché en constante évolution.
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
