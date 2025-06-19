'use client';

import { MotionDiv, MotionH4 } from '@/lib/motion-dev';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function NotFound() {
	const router = useRouter();

	return (
		<div>
			<div className="max-w-7xl mx-auto flex flex-col justify-between sm:gap-30 gap-10 px-4 py-8">
				<div className="flex lg:flex-row flex-col-reverse justify-between items-start gap-10">
					<div>
						<div className="relative overflow-hidden px-2 py-3">
							<MotionH4
								initial={{ y: 200 }}
								animate={{ y: 0 }}
								transition={{ duration: 0.4, delay: 0.3 }}
								className="sm:text-[12rem] text-7xl
					   sm:leading-48 tracking-tighter uppercase font-semibold"
							>
								Bientôt
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
								disponible
							</MotionH4>
						</div>
					</div>
				</div>

				<MotionDiv
					initial={{ y: 80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.3 }}
					className="flex items-center justify-between"
				>
					<div>
						<button
							onClick={() => router.back()}
							className="bg-gray-100 text-black py-4 px-6 w-fit font-medium cursor-pointer tracking-tighter"
						>
							Retour à l&apos;accueil
						</button>

						<Link
							href={'https://github.com/echicouamalthus'}
							target="_blank"
							className="text-black py-4 px-6 w-fit font-medium cursor-pointer tracking-tighter"
						>
							<span className="hover:underline-offset-1">
								Voir tous les projets
							</span>
						</Link>
					</div>

					<h4 className="font-medium text-4xl tracking-tighter">404</h4>
				</MotionDiv>
			</div>
		</div>
	);
}
