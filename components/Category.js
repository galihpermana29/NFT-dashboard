const Category = ({ cat }) => {
	return (
		<div className="py-3 px-6 rounded-[20px] bg-[#FFFFFF0D] hover:bg-[#FFFFFF4D] hover:border hover:border-[#7B6FE5] text-white cursor-pointer border border-[#FFFFFF0D] w-full min-w-max">
			<p>{cat}</p>
		</div>
	);
};

export default Category;
