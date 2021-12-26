import Image from 'next/image';
import message from '../public/assets/searchbar/message.png';
const Message = () => {
	return (
		<div className="sm:max-w-[40px]">
			<Image src={message} alt={'message'} />
		</div>
	);
};

export default Message;
