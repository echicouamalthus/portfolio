import React from 'react';
import RippleWave from '../components/ripple';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-black text-white h-screen flex flex-col justify-around">
			<section className="max-w-7xl lg:mx-auto flex h-full w-full flex-col sm:justify-around justify-end sm:p-4 gap-6">
				<div className="sm:p-0 p-4">
					<ul className="flex items-center lg:justify-end gap-7">
						<li className="text-md capitalize font-medium">linkedlin</li>
						<Link
							href="https://x.com/MalthusElie"
							className="text-md capitalize font-medium"
						>
							X
						</Link>
						<Link
							href="https://github.com/echicouamalthus"
							className="text-md capitalize font-medium"
						>
							github
						</Link>
					</ul>
				</div>

				<div className="space-y-10 sm:p-0 p-4">
					<div className="flex flex-col sm:gap-2 gap-0">
						<h4>
							<span className="sm:text-5xl text-3xl font-semibold bg-gradient-to-r from-white to-black to-150% text-transparent tracking-tighter bg-clip-text">
								Curieux de voir ce que nous pouvons créer ensemble ?
							</span>
						</h4>

						<h4>
							<span className="sm:text-5xl text-3xl font-semibold bg-gradient-to-r from-white to-black to-150% text-transparent tracking-tighter bg-clip-text">
								Faisons naître quelque chose d’extraordinaire !
							</span>
						</h4>
					</div>

					<div className=" flex sm:flex-row flex-col-reverse sm:items-center items-start gap-5">
						<Link
							href={'/contact'}
							className="bg-white py-4 px-6 sm:w-fit w-full flex items-center justify-center"
						>
							<span className="text-black">Contactez-moi</span>
						</Link>
						<button className="flex items-center relative overflow-hidden gap-3 p-4">
							<RippleWave />
							<span className="z-10">Disponible pour des missions</span>
						</button>
					</div>
				</div>

				<div className="flex sm:flex-row flex-col items-center justify-between gap-4 sm:p-0 p-4">
					<div className="flex items-center sm:w-auto w-full md:justify-between gap-7 md:flex-1/12 flex-none">
						<div>
							<p className="flex flex-col md:text-md text-xs">
								<span>+225 0701624246</span>
								<span>echicouamalthus@gmail.com</span>
							</p>
						</div>

						<div>
							<p className="flex flex-col items-end md:text-md text-xs">
								<span>Designer & Developpeur Par Malthus</span>
							</p>
						</div>
					</div>

					<div className="sm:border-none border-t border-slate-50/15 w-full lg:flex-1 flex justify-end">
						<div className="flex flex-col sm:items-end items-center sm:justify-end justify-center w-full sm:p-0 p-2 md:text-md text-xs">
							<span>Tous droits réservé, </span>
							<span>MALTHUS ©{new Date().getFullYear()}</span>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
}
