import Image from 'next/image';
import notif from '../public/assets/searchbar/notif.png';
const Notification = () => {
	return (
		<div className="min-w-[40px] w-full max-w-[40px] cursor-pointer hover:opacity-80">
			<Image src={notif} alt={'Notification'} />
		</div>
	);
};

export default Notification;
