import Message from './Message';
import Money from './Money';
import Notification from './Notification';
import Profile from './Profile';
import Searchbar from './Searchbar';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import menu from '../public/assets/searchbar/menu.png';
import Button from '../components/Button';
import Link from 'next/link';

const SecondaryBar = ({ setHamburgers }) => {
	const { data: session } = useSession();
	if (session) {
		console.log(session, 'anjas');
	}
	console.log(session, 'data session');
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
				{session ? (
					<>
						<Message />
						<Notification />
						<Profile name={session.user.name} img={session.user.image} />
					</>
				) : (
					<div className="flex justify-center w-full space-x-5">
						<Button
							text={'Register'}
							tail={
								'px-5 sm:px-3 rounded-[8px] py-2 bg-white text-[#6763FD] max-w-[150px]'
							}
							anchor={'w-full max-w-[150px]'}
						/>

						<Button
							tail={
								'py-2 px-5 sm:px-3 rounded-[8px] bg-gradient-to-r from-[#6763FD] to-[#B84EF1] text-white max-w-[150px]'
							}
							text={'Log In'}
							anchor={'w-full max-w-[150px]'}
							link={'/login'}
							anchorFunc={(e) => {
								e.preventDefault();
								signIn();
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default SecondaryBar;
