import { images } from './images';
import { Work } from '@/lib/types';

export const works: Work[] = [
	{
		slug: 'case-gadget',
		title: 'case gadget',
		cover_image: images.case_gadget[0].image,
		category: [
			{
				industrie: 'Accessoires mobiles',
				cible: 'magasin de coques',
				annee: '2025',
				technologies: 'React.js, Next.js',
			},
		],
		about: {
			description:
				"Mon projet est né de l'envie d'offrir une solution simple et créative pour personnaliser les coques de téléphone. Mon objectif était de te permettre d'exprimer ta personnalité à travers un accessoire unique, car je trouvais qu'il manquait une plateforme vraiment intuitive pour ça. L'idée est de transformer une simple coque en une véritable extension de toi-même, une œuvre d'art que tu portes au quotidien.",
			assets:
				'/videos/coque personnalisable/landing page de coque personnalisable.mp4',
			lien: 'https://casegadgetdev.vercel.app/',
		},
		challenge: {
			description:
				"La création du configurateur de coque a été un vrai défi technique. J'ai dû travailler dur pour que la rotation, l'agrandissement et le déplacement des éléments soient fluides et précis, pour te garantir une expérience utilisateur parfaite. Récupérer et sécuriser tes données sur la page de résultats était aussi une priorité, afin d'assurer une totale conformité. Chaque obstacle m'a poussé à innover et à peaufiner mon travail.",
			assets: [images.case_gadget[1].image, images.case_gadget[2].image],
		},
		conclusion: {
			description:
				"Ce projet de coques personnalisables représente une belle avancée dans le monde des accessoires pour smartphones localement. Je suis convaincu qu'il répondra à votre désir de singularité et d'expression, en apportant une vraie valeur ajoutée. Ma plateforme est conçue pour être polyvalente, s'adressant aussi bien aux particuliers comme vous qu'aux entreprises qui cherchent à proposer des produits sur mesure. Je pense vraiment que ce service trouvera sa place sur un marché en constante évolution.",
		},
	},
	{
		slug: 'barber-shop',
		title: 'Barber Shop',
		cover_image: images.barber_shop[0].image,
		category: [
			{
				industrie: 'Barber Shop',
				cible: 'hommes',
				annee: '2025',
				technologies: 'React.js, Next.js',
			},
		],
		about: {
			description: '',
			assets: '',
			lien: 'https://barber-shop-website-pink.vercel.app/',
		},
		challenge: {
			description: '',
			assets: undefined,
		},
		conclusion: {
			description: '',
		},
	},
];
