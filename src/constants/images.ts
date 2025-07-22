import cover_case_gadget from '../../public/images/coque personnalisé/cover projet with app.png';
import details_case_gadget from '../../public/images/coque personnalisé/details project.png';
import details_case_gadget_2 from '../../public/images/coque personnalisé/details project 2.png';
import { CategoryImageDetails } from '@/lib/types';

import cover_barber_shop from '../../public/images/barber shop/cover picture.png';

export const images: CategoryImageDetails = {
	case_gadget: [
		{
			name: 'cover',
			image: cover_case_gadget,
		},
		{
			name: 'details',
			image: details_case_gadget,
		},
		{
			name: 'details',
			image: details_case_gadget_2,
		},
	],
	barber_shop: [
		{
			name: 'cover',
			image: cover_barber_shop,
		},
	],
};
