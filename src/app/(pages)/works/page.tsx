import { MotionDiv, MotionH4 } from '@/lib/motion-dev';
import covermagic from '../../../../public/cover projet with app.png';
import ItemsProject from '@/components/items-project';

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
						<ItemsProject image={covermagic} link={'case-gadget'} />
					</MotionDiv>
				</div>
			</div>
		</div>
	);
}
