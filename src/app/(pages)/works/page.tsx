import { MotionDiv, MotionH4 } from '@/lib/motion-dev';
import Image from 'next/image';

export default function page() {
	return (
		<div>
			<div className="max-w-7xl mx-auto flex flex-col justify-between sm:gap-30 gap-10 px-4 py-8">
				<div className="sm:h-72 h-32 flex items-center">
					<div className="relative overflow-hidden ">
						<MotionH4
							initial={{ y: 200 }}
							animate={{ y: 0 }}
							transition={{ duration: 0.4, delay: 0.3 }}
							className="sm:text-[8rem] text-7xl
             sm:leading-48 tracking-tighter uppercase font-semibold"
						>
							Mes projets
						</MotionH4>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 py-32">
				<div className="flex flex-col gap-5">
					<MotionDiv
						className="flex items-center justify-end"
						initial={{ y: 80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4 className="font-medium text-4xl tracking-tighter">
							projets 2020 - 2024
						</h4>
					</MotionDiv>

					<MotionDiv
						className="grid sm:grid-cols-2 gap-3"
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<div className="aspect-square w-full relative overflow-hidden group">
							<Image
								className="absolute size-full object-cover group-hover:scale-150 transition-all duration-600"
								src={
									'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								}
								alt="myphoto"
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
								alt="myphoto"
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
								alt="myphoto"
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
								alt="myphoto"
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
		</div>
	);
}
