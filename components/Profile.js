import Image from 'next/image';
import profile from '../public/assets/cards/person1.png';
import chevron from '../public/assets/searchbar/chevron.png';
const Profile = () => {
	return (
		<div className="flex items-center  text-white w-full sm:w-fit sm:justify-center sm:space-x-0 space-x-5 cursor-pointer">
			<div className="min-w-[40px]">
				<Image src={profile} alt={'Profile'} width={40} height={40} />
			</div>
			<div className="sm:hidden hover:underline">Galih Permana</div>
			<div className="sm:hidden">
				<Image src={chevron} alt={'chevron'} />
			</div>
		</div>
	);
};

export default Profile;
