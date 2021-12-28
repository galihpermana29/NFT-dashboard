import Message from './Message';
import Money from './Money';
import Notification from './Notification';
import Profile from './Profile';
import Searchbar from './Searchbar';
import Image from 'next/image';
import menu from '../public/assets/searchbar/menu.png';

const SecondaryBar = ({ setHamburgers }) => {
	return (
		<div className="sm:ml-0 ml-[140px] grid grid-cols-6 sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] h-fit gap-6 sm:gap-2 sm:mt-0 sm:fixed sm:bg-[#1B1E2A] sm:py-2 sm:z-30 py-6">
			<div
				className="sm:col-span-1 sm:flex sm:justify-center sm:items-center hidden sm:visible sm:w-full"
				onClick={(e) => setHamburgers()}
			>
				<Image src={menu} alt={'a'} />
			</div>
			<div className="col-span-3 sm:col-span-4 h-[58px] sm:h-[40px] ">
				<Searchbar />
			</div>
			<div className="col-span-1 h-[58px] overflow-hidden sm:hidden">
				<Money />
			</div>
			<div className="col-span-2 sm:col-span-1 h-[58px] sm:h-[40px] items-center flex w-full gap-6 sm:gap-3 sm:w-[175px] sm:justify-evenly">
				<Message />
				<Notification />
				<Profile />
			</div>
		</div>
	);
};

export default SecondaryBar;
