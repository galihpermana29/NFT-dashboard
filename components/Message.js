import Image from 'next/image';
import message from '../public/assets/searchbar/message.png';
const Message = () => {
	return (
		<div className="min-w-[40px] w-full max-w-[40px] cursor-pointer hover:opacity-80">
			<Image src={message} alt={'message'} />
		</div>
	);
};

export default Message;
