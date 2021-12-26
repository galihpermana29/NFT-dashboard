import Message from './Message';
import Money from './Money';
import Notification from './Notification';
import Profile from './Profile';
import Searchbar from './Searchbar';
import Image from 'next/image';
import menu from '../public/assets/searchbar/menu.png';

const SecondaryBar = () => {
	return (
		<div className="sm:ml-0 ml-[140px] grid grid-cols-6 sm:grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] h-fit gap-6 sm:gap-2 sm:mt-6">
			<div className="sm:col-span-1 sm:flex sm:justify-center sm:items-center hidden sm:visible sm:w-full ">
				<Image src={menu} alt={'a'} />
			</div>
			<div className="col-span-3 col-start-1 col-ends-3 h-[58px] sm:h-[40px] sm:col-span-2">
				<Searchbar />
			</div>

			<div className="col-span-1 h-[58px] overflow-hidden sm:hidden">
				<Money />
			</div>

			<div className="col-span-2 sm:col-span-3 h-[58px] sm:h-[40px] sm:grid items-center sm:grid-cols-[repeat(3,minmax(40px,1fr))] sm:gap-2 hidden ">
				<div className="sm:col-span-1 sm:flex sm:justify-center">
					<Message />
				</div>
				<div className="sm:col-span-1 sm:flex sm:justify-center">
					<Notification />
				</div>
				<div className="sm:col-span-1 sm:flex sm:justify-center">
					<Profile />
				</div>
			</div>
			{/* desktop */}
			<div className="col-span-2 sm:col-span-2 h-[58px] sm:h-[40px] items-center grid grid-cols-[40px_40px_minmax(40px,1fr)] gap-6 sm:gap-3 sm:hidden ">
				<Message />
				<Notification />
				<Profile />
			</div>
		</div>
	);
};

export default SecondaryBar;
