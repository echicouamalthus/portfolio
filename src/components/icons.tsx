import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
	size?: number;
	color?: string;
	className?: string;
};

const icons = {
	copy: (props: IconProps) => {
		return (
			<svg
				className={props.className}
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 24}
				height={props.size || 24}
				fill={props.color || 'currentColor'}
				viewBox="0 0 256 256"
			>
				<path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
			</svg>
		);
	},
	menu: (props: IconProps) => (
		<svg
			className={props.className}
			width={props.size || 24}
			height={props.size || 24}
			viewBox={`0 0 24 24`}
			fill={props.color || 'currentColor'}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_4418_8700)">
				<path
					d="M17.5401 8.81063C19.1748 8.81063 20.5001 7.48539 20.5001 5.85062C20.5001 4.21586 19.1748 2.89062 17.5401 2.89062C15.9053 2.89062 14.5801 4.21586 14.5801 5.85062C14.5801 7.48539 15.9053 8.81063 17.5401 8.81063Z"
					fill="white"
					style={{ fill: 'var(--fillg)' }}
				/>
				<path
					d="M6.46 8.81063C8.09476 8.81063 9.42 7.48539 9.42 5.85062C9.42 4.21586 8.09476 2.89062 6.46 2.89062C4.82524 2.89062 3.5 4.21586 3.5 5.85062C3.5 7.48539 4.82524 8.81063 6.46 8.81063Z"
					fill="white"
					style={{ fill: 'var(--fillg)' }}
				/>
				<path
					d="M17.5401 21.1095C19.1748 21.1095 20.5001 19.7842 20.5001 18.1495C20.5001 16.5147 19.1748 15.1895 17.5401 15.1895C15.9053 15.1895 14.5801 16.5147 14.5801 18.1495C14.5801 19.7842 15.9053 21.1095 17.5401 21.1095Z"
					fill="white"
					style={{ fill: 'var(--fillg)' }}
				/>
				<path
					d="M6.46 21.1095C8.09476 21.1095 9.42 19.7842 9.42 18.1495C9.42 16.5147 8.09476 15.1895 6.46 15.1895C4.82524 15.1895 3.5 16.5147 3.5 18.1495C3.5 19.7842 4.82524 21.1095 6.46 21.1095Z"
					fill="white"
					style={{ fill: 'var(--fillg)' }}
				/>
			</g>
			<defs>
				<clipPath id="clip0_4418_8700">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	),
	check: (props: IconProps) => {
		return (
			<svg
				className={props.className}
				xmlns="http://www.w3.org/2000/svg"
				width={props.size || 24}
				height={props.size || 24}
				fill={props.color || 'currentColor'}
				viewBox="0 0 256 256"
			>
				<path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
			</svg>
		);
	},
	// Ajoutez d'autres icônes ici
};

type IconName = keyof typeof icons;

interface DynamicIconProps extends IconProps {
	name: IconName;
}

export const Icon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
	const IconComponent = icons[name];
	return IconComponent ? IconComponent(props) : null;
};

// Utilisation : <Icon name="home" size={32} color="red" />
