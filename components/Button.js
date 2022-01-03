import Link from 'next/link';

const Button = ({ text, tail, anchor, anchorFunc, link }) => {
	if (!link) {
		return (
			<a className={`${anchor}`} onClick={anchorFunc}>
				<div
					className={`cursor-pointer ${tail} cursor-pointer hover:opacity-80`}
				>
					<p className="text-[12px] text-center">{text}</p>
				</div>
			</a>
		);
	}
	return (
		//receives props py px rounded text color

		// py-2 px-4 rounded-[12px] bg-gradient-to-r from-[#6763FD] to-[#B84EF1] text-white

		<Link href={link}>
			<a className={`${anchor}`} onClick={anchorFunc}>
				<div
					className={`cursor-pointer ${tail} cursor-pointer hover:opacity-80`}
				>
					<p className="text-[12px] text-center">{text}</p>
				</div>
			</a>
		</Link>
	);
};

export default Button;
