import Image from 'next/image';
import profile3 from '../public/assets/cards/person2.png';
import Button from './Button';
const ViewAvatar = ({ button = true, main, second, img = profile3 }) => {
	return (
		//max-w-[280px]
		<div className="flex items-center justify-between w-full ">
			<div className="flex items-center">
				<div className="pr-3 grow">
					<Image src={img} alt={'profile'} width={40} height={40} />
				</div>
				<div className="grow">
					<p className="text-[14px] text-white">{main}</p>
					<p className="text-[12px] text-[#878787]">{second}</p>
				</div>
			</div>
			{button ? (
				<Button
					tail={
						'py-2 px-3 rounded-[12px] bg-gradient-to-r from-[#6763FD] to-[#B84EF1] text-white max-w-max'
					}
					text={'Follow'}
				/>
			) : (
				''
			)}
		</div>
	);
};

export default ViewAvatar;
