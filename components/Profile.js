import Image from 'next/image';
import profile from '../public/assets/cards/person1.png';
import chevron from '../public/assets/searchbar/chevron.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
const Profile = ({ name, img = profile }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		setAnchorEl(null);
		signOut();
	};
	return (
		<div
			className="flex items-center  text-white w-full sm:w-fit sm:justify-center sm:space-x-0 space-x-5 cursor-pointer"
			onClick={handleClick}
		>
			<div className="min-w-[40px] h-[40px] rounded-full border overflow-hidden">
				<Image src={img} alt={'Profile'} width={40} height={40} />
			</div>
			<div className="sm:hidden hover:underline">{name}</div>
			<div className="sm:hidden">
				<Image src={chevron} alt={'chevron'} />
			</div>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default Profile;
