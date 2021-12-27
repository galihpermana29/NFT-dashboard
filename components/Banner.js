import Image from 'next/image';
import banner from '../public/assets/banner/banner.png';
import Button from './Button';
const Banner = () => {
	return (
		<div className="bg-gradient-to-r from-[#6763FD] to-[#B84EF1] h-screen max-h-[320px] w-full flex items-center rounded-[20px] sm:h-[150px]">
			{/* <div className='relative z-0'>
				<Image src={banner} alt={'banner'} />
			</div> */}
			<div className="pl-20 text-white sm:pl-5">
				<h1 className="text-[40px] font-bold mb-5 sm:mb-2 sm:text-[22px]">
					One Stop NFT Marketplace
				</h1>
				<p className="text-[18px] sm:text-[15px]">
					Discover limited-edtion digital artwork
				</p>
				<p className="text-[18px] mb-5 sm:text-[15px]">
					Create, sell, and collect yours now!
				</p>
				<div className="flex items-center space-x-3 sm:hidden">
					<Button
						text={'Start Create'}
						tail={'px-5 rounded-[8px] py-2 bg-white text-[#6763FD]'}
					/>
					<Button
						text={'How It Works'}
						tail={'px-5 rounded-[8px] py-2 bg-white text-[#6763FD]'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
