import Image from 'next/image';
import searchIcon from '../public/assets/searchbar/search.png';
const Searchbar = () => {
	return (
		<div className="w-full relative rounded-[12px] h-full">
			<div className="absolute top-[18px] left-[15px] sm:top-[10px]">
				<Image src={searchIcon} alt="search" />
			</div>
			<input
				type="search"
				name="search"
				id="search"
				className="w-full bg-[#262D3A] h-full pl-12 rounded-[12px] placeholder:text-white text-white sm:text-[13px]"
				placeholder="Search"
			/>
		</div>
	);
};

export default Searchbar;
