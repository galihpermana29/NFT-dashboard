import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';
import SecondaryBar from '../components/SecondaryBar';
// import styles from '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	const [navbarHamburgerIsClicked, setHamburger] = useState(false);
	const whenHamburgerisClicked = () => {
		setHamburger(!navbarHamburgerIsClicked);
    console.log(navbarHamburgerIsClicked)
	};
	return (
		<>
			<div className="bg-[#1B1E2A] w-full min-h-screen">
				<Navbar setHamburgers={whenHamburgerisClicked} hamburgerValue={navbarHamburgerIsClicked} />
				<SecondaryBar setHamburgers={whenHamburgerisClicked} />
				<div className="sm:pt-[20px] pr-6 sm:pr-0">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
}

export default MyApp;
