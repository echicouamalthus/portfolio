'use client';
import Image from 'next/image';

import { MotionDiv } from '@/lib/motion-dev';
import Hero from '@/components/hero';
import picture from '../../public/malthus.png';
import covermagic from '../../public/cover projet with app.png';
import ItemsProject from '@/components/items-project';

export default function Home() {
	return (
		<div>
			<Hero />

			<div className="my-8 border-t-2 border-slate-100" />

			<div className="max-w-7xl mx-auto p-4">
				<div className="flex flex-col gap-5">
					<MotionDiv
						className="flex items-center justify-between"
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4 className="font-medium text-4xl tracking-tighter">Projets.</h4>

						<button className="bg-gray-100 text-black py-4 px-6 w-fit capitalize font-medium tracking-tighter">
							voir plus
						</button>
					</MotionDiv>

					<MotionDiv
						className="grid sm:grid-cols-2 gap-3"
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<ItemsProject image={covermagic} link={'case-gadget'} />
					</MotionDiv>
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
						<h4 className="font-medium text-4xl tracking-tighter">à propos.</h4>

						<button className="bg-gray-100 text-black py-4 px-6 w-fit capitalize font-medium tracking-tighter">
							voir plus
						</button>
					</MotionDiv>

					<MotionDiv
						className="sm:max-w-3xl"
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
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
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							<Image
								className="sm:aspect-auto aspect-square object-cover"
								src={picture}
								alt="profile picture"
							/>
						</MotionDiv>

						<MotionDiv
							initial={{ y: 80, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
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
