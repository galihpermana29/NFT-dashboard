import Image from 'next/image';
import eth from '../public/assets/searchbar/eth.png';
const Money = () => {
	return (
		//h-[56px]
		<div className="flex space-x-3 bg-[#262D3A] rounded-[12px] py-2 px-3 text-white w-full h-full">
			<div className="h-full  flex items-center min-w-[30px]">
				<Image src={eth} alt={'eth'} />
			</div>
			<div className="h-full  flex items-center">
				<p>677,889,224 ETH</p>
			</div>
		</div>
	);
};

export default Money;
