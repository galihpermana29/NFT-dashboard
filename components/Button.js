const Button = ({ text, tail }) => {
	return (
		//receives props py px rounded text color

		// py-2 px-4 rounded-[12px] bg-gradient-to-r from-[#6763FD] to-[#B84EF1] text-white
		<div className={`cursor-pointer w-full max-w-max ${tail}`}>
			<p className="text-[12px]">{text}</p>
		</div>
	);
};

export default Button;
