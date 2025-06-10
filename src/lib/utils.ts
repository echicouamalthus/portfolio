import { clsx, type ClassValue } from 'clsx';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = 'MALTHUS – Développeur Web & Mobile',
  description = 'Bienvenue sur le portfolio de MALTHUS, développeur web et mobile passionné. Découvrez ses projets, compétences et réalisations dans le développement d’applications modernes et performantes.',
  image = '/og image fond noir  portfolio.png',
  icons = '/favicon.ico',
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      description,
      images: [image],
      creator: '@echicouamalthus',
    },
    icons,
    metadataBase: new URL('http://localhost:3000'),
  };
}
