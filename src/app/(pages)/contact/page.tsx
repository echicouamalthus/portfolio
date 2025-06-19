'use client';

import { Icon } from '@/components/icons';
import { MotionDiv, MotionH4 } from '@/lib/motion-dev';
import React, { useState } from 'react';

export default function Page() {
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
								className="sm:text-[10rem] text-7xl
                   sm:leading-48 tracking-tighter uppercase font-semibold"
							>
								Envoyer un
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
								Demande
							</MotionH4>
						</div>
					</div>
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
						<form action="" className="flex flex-col gap-4">
							<input
								className="bg-stone-100 placeholder:text-xl placeholder:tracking-tighter placeholder:font-normal placeholder:text-stone-400 focus:outline-none focus-visible:border-b focus-visible:border-black p-6 capitalize"
								type="text"
								placeholder="Votre nom"
							/>
							<input
								className="bg-stone-100 placeholder:text-xl placeholder:tracking-tighter placeholder:font-normal placeholder:text-stone-400 focus:outline-none focus-visible:border-b focus-visible:border-black p-6 capitalize"
								type="email"
								placeholder="Votre email"
							/>

							<textarea
								className="bg-stone-100 placeholder:text-xl placeholder:tracking-tighter placeholder:font-normal placeholder:text-stone-400 focus:outline-none focus-visible:border-b focus-visible:border-black p-6 capitalize"
								placeholder="Votre chef-d'œuvre commence ici"
								rows={6}
							/>

							<button
								className="bg-black text-xl tracking-tighter font-semibold text-white focus:outline-none focus-visible:border-b focus-visible:border-black p-6 capitalize"
								type="submit"
							>
								send it!
							</button>
						</form>
					</div>
				</MotionDiv>
			</div>
		</div>
	);
}
