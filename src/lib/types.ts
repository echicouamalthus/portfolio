import { StaticImageData } from 'next/image';

type IndiceDetails = 'industrie' | 'cible' | 'annee' | 'technologies';

type category_Image_details = 'case_gadget' | 'barber_shop'

export type CategoryImageDetails = Record<
	category_Image_details,
	{ name: string; image: string | StaticImageData }[]
>;

export type Work = {
	slug: string;
	title: string;
	cover_image: string | StaticImageData;
	category: Record<IndiceDetails, string>[];
	about: {
		description: string;
		assets: (string | StaticImageData)[] | undefined | string;
		lien: string;
	};
	challenge: {
		description: string;
		assets: (string | StaticImageData)[] | undefined | string;
	};
	conclusion: {
		description: string;
	};
};

