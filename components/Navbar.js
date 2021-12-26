import Image from 'next/image';
import logo from '../public/assets/navbar/logo.png';
import home from '../public/assets/navbar/home.png';
import transaction from '../public/assets/navbar/transaction.png';
import note from '../public/assets/navbar/notes.png';
import setting from '../public/assets/navbar/settings.png';
import bookmark from '../public/assets/navbar/bookmark.png';
const Navbar = () => {
	return (
		<div className="w-[120px] bg-[#262D3A] flex flex-col items-center min-h-screen fixed z-10">
			<div className="w-full h-[85px] border-b border-[#FFFFFF1A] flex justify-center items-center">
				<Image src={logo} alt="logo" />
			</div>
			<div className="w-full">
				<div className="w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer">
					<Image src={home} alt="home" />
				</div>
				<div className="w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer">
					<Image src={transaction} alt="transaction" />
				</div>
				<div className="w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer">
					<Image src={note} alt="note" />
				</div>
				<div className="w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer">
					<Image src={setting} alt="setting" />
				</div>
				<div className="w-full h-[85px] flex justify-center items-center hover:bg-[#FFFFFF1A] cursor-pointer">
					<Image src={bookmark} alt="bookmark" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
