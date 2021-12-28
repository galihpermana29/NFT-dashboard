import Image from 'next/image';
import logo from '../public/assets/navbar/logo.png';
import home from '../public/assets/navbar/home.png';
import transaction from '../public/assets/navbar/transaction.png';
import note from '../public/assets/navbar/notes.png';
import setting from '../public/assets/navbar/settings.png';
import bookmark from '../public/assets/navbar/bookmark.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import menu from '../public/assets/searchbar/menu.png';

const Navbar = ({ setHamburgers, hamburgerValue }) => {
  // console.log(setHamburgers)
	const { route } = useRouter();
	return (
		<div className={`w-[120px] bg-[#262D3A] flex flex-col items-center min-h-screen fixed z-40 ${hamburgerValue ? 'sm:w-full': 'sm:hidden'}`}>
			<div className="w-full h-[85px] sm:py-6 sm:h-[40px] border-b border-[#FFFFFF1A] flex justify-center items-center sm:justify-start sm:pl-2" onClick={(e) => setHamburgers()}>
        <div className="sm:block hidden">
				<Image src={menu} alt="logo" />
        </div>
        <div className="sm:hidden">
				<Image src={logo} alt="logo" />
        </div>
			</div>
			<div className="w-full">
				<Link href="/">
					<div
						className={`text-white sm:space-x-3 w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer ${
							route === '/'
								? 'bg-[#FFFFFF1A] border-l-4 border-[#b363fd] sm:border-b-2 sm:border-l-0'
								: ''
						}`}
					>
						<Image src={home} alt="home" />
						<p className="hidden sm:block">Home</p>
					</div>
				</Link>
				<Link href="/transactions">
					<div
						className={`text-white sm:space-x-3 w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer ${
							route === '/transactions'
								? 'bg-[#FFFFFF1A] border-l-4 border-[#b363fd] sm:border-b-2 sm:border-l-0'
								: ''
						}`}
					>
						<Image src={transaction} alt="transaction" />
						<p className="hidden sm:block">Transaction</p>
					</div>
				</Link>
				<Link href="/notes">
					<div
						className={`text-white sm:space-x-3 w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer ${
							route === '/notes'
								? 'bg-[#FFFFFF1A] border-l-4 border-[#b363fd] sm:border-b-2 sm:border-l-0'
								: ''
						}`}
					>
						<Image src={note} alt="note" />
						<p className="hidden sm:block">Notes</p>
					</div>
				</Link>
				<Link href="/settings">
					<div
						className={`text-white sm:space-x-3 w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer ${
							route === '/settings'
								? 'bg-[#FFFFFF1A] border-l-4 border-[#b363fd] sm:border-b-2 sm:border-l-0'
								: ''
						}`}
					>
						<Image src={setting} alt="setting" />
						<p className="hidden sm:block">Settings</p>
					</div>
				</Link>
				<Link href="/bookmarks">
					<div
						className={`text-white sm:space-x-3 w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer ${
							route === '/bookmarks'
								? 'bg-[#FFFFFF1A] border-l-4 border-[#b363fd] sm:border-b-2 sm:border-l-0'
								: ''
						}`}
					>
						<Image src={bookmark} alt="bookmark" />
						<p className="hidden sm:block">Bookmarks</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
