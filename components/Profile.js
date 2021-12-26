import Image from 'next/image';
import profile from '../public/assets/cards/person1.png';
import chevron from '../public/assets/searchbar/chevron.png';
const Profile = () => {
	return (
		<div className="flex items-center space-x-3 sm:space-x-0 text-white w-full sm:justify-center">
			<div className="">
				<Image src={profile} alt={'Profile'} width={40} height={40} />
			</div>
			<div className="sm:hidden">Galih Permana</div>
			<div className="sm:hidden">
				<Image src={chevron} alt={'chevron'} />
			</div>
		</div>
	);
};

export default Profile;
