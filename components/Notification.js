import Image from 'next/image';
import notif from '../public/assets/searchbar/notif.png';
const Notification = () => {
	return (
		<div className="sm:max-w-[40px]">
			<Image src={notif} alt={'Notification'} />
		</div>
	);
};

export default Notification;
