'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

interface ItemsProjectProps {
	image: string | StaticImageData;
	link: string;
}

export default function ItemsProject({ image, link }: ItemsProjectProps) {
	const router = useRouter();

	return (
		<div
			className="aspect-square w-full relative overflow-hidden group cursor-pointer"
			onClick={() => router.push(`/works/${link}`)}
		>
			<div className="bg-gray-100 size-full flex items-center justify-center sm:p-0 px-2.5">
				<div className="bg-red-100 w-[32rem] md:h-68 h-44 drop-shadow-sm relative">
					<Image
						className="absolute group-hover:scale-115 transition-all duration-600 object-cover rounded-sm"
						src={image}
						alt="mon projets"
					/>
				</div>
			</div>

			<div className="absolute top-0 right-0 bg-white m-2 sm:opacity-0 opacity-100 sm:group-hover:opacity-100 transition-all duration-600">
				<ArrowUpRight className="size-12 text-stone-700" strokeWidth={1} />
			</div>
		</div>
	);
}
