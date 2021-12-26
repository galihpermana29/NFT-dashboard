import bg1 from '../public/img1.png';
import love from '../public/assets/cards/love.png';
import person1 from '../public/assets/cards/person1.png';
import person2 from '../public/assets/cards/person2.png';
import person3 from '../public/assets/cards/person3.png';
import person4 from '../public/assets/cards/person4.png';
import person5 from '../public/assets/cards/person5.png';
import moreperson from '../public/assets/cards/moreperson.png';

import Image from 'next/image';

const Cards = () => {
	return (
		<div className="bg-[#262D3A] max-w-max p-3 w-full rounded-xl sm:min-w-max">
			<div className="relative">
				<Image src={bg1} alt="bg" />
				<div className="flex items-center justify-between text-white absolute top-0 w-full p-4">
					<div className="bg-[#C4C4C433] rounded-[12px] px-3 pt-1 pb-2">
						<p>Art</p>
					</div>
					<div className="bg-[#C4C4C433] rounded-full px-3 pb-[5px] pt-3 cursor-pointer">
						<Image src={love} alt="love" />
					</div>
				</div>
				<div className="bg-[#262D3ACC] w-full absolute bottom-0 text-white text-center pb-2 pt-1 text-[14px]">
					<div>
						<p>Ends in: 50h : 30m: 20s</p>
					</div>
				</div>
			</div>
			<div className="py-2 flex w-full items-center justify-between text-white font-normal text-[14px]">
				<p>Current Bid: </p>
				<p className="text-[#6763FD]">6.34 ETH</p>
			</div>
			<div className="py-2 text-white font-medium">
				<h1>Water Bender</h1>
			</div>
			<div className="py-4 text-white border-t-[#FFFFFF1A] border-t flex items-center">
				{[person1, person2, person3, person4, person5, moreperson].map(
					(data, idx) => {
						return idx === 5 ? (
							<div
								className="w-max h-[35px] py-2 px-1 bg-[#6763FD] rounded-full inline-block"
								key={idx}
							>
								<p className="text-[12px]">100+</p>
							</div>
						) : (
							<Image
								src={data}
								alt="love"
								className="w-[10px]"
								width="35px"
								height="35px"
								key={idx}
							/>
						);
					}
				)}
			</div>
		</div>
	);
};

export default Cards;
