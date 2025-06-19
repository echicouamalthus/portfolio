'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

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
			<div className="bg-gray-100 size-full flex items-center justify-center ">
				<div className="bg-purple-300 w-[32rem] h-68 drop-shadow-sm relative">
					<Image
						className="absolute group-hover:scale-120 transition-all duration-600 object-cover"
						src={image}
						alt="mon projets"
					/>
				</div>
			</div>
		</div>
	);
}
