import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Category from '../components/Category';
import Navbar from '../components/Navbar';
import SecondaryBar from '../components/SecondaryBar';
import ViewAvatar from '../components/ViewAvatar';
import styles from '../styles/Home.module.css';

export default function Home({ topArtist, recentActivites, artworks }) {
	return (
		<div
			className={` bg-[#1B1E2A] w-full grid grid-rows-[max-content_max-content_max-content] min-h-screen sm:px-3 pr-6 grid-cols-6 gap-6 overflow-hidden`}
		>
			<div className="sm:hidden">
				<Navbar />
			</div>
			<div className="col-span-6 ">
				<SecondaryBar />
			</div>

			<div className="sm:ml-0 ml-[140px] col-span-4 h-fit overflow-hidden sm:col-span-6 gap-6 grid">
				<Banner />
			</div>
			<div
				className={`col-span-2  h-screen max-h-[320px] rounded-[20px] bg-[#262D3A] p-5 text-white overflow-y-scroll ${styles.example} sm:row-start-4 sm:col-span-6`}
			>
				<div>
					<h1 className="text-[20px] font-semibold mb-5">Top Artist</h1>
				</div>
				{topArtist.map((data, idx) => {
					return (
						<div
							key={idx}
							className="flex items-center w-full space-x-5 space-y-4"
						>
							<p className="font-semibold">{idx + 1}.</p>
							<div className=" flex flex-col justify-center items-center w-full">
								<ViewAvatar main={data.name} second={data.username} />
							</div>
						</div>
					);
				})}
			</div>
			<div className="sm:ml-0 ml-[140px] col-span-4 h-fit overflow-hidden sm:row-start-3 sm:col-span-6">
				<div>
					<h1 className="text-[20px] font-semibold mb-5 text-white">
						Explore
					</h1>
				</div>
				<div
					className={`${styles.example} flex items-center space-x-3 overflow-x-auto mb-6`}
				>
					{[
						'Live Auction',
						'Art',
						'Photography',
						'Games',
						'Music',
						'Utility',
					].map((data, idx) => {
						return (
							<div key={idx}>
								<Category cat={data} />
							</div>
						);
					})}
				</div>
				<div
					className={`grid grid-cols-[repeat(auto-fit,minmax(250px,max-content))] gap-5 sm:flex sm:grow sm:overflow-x-auto sm:w-full sm:grid-cols-none ${styles.example}`}
				>
					{artworks.map((data, idx) => {
						return (
							<div key={idx} className="">
								<Cards
									name={data.name}
									currentbid={data.currentBid}
									start={data.bid_starts}
									end={data.bid_ends}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div
				className={`col-span-2 h-screen max-h-[768px]  rounded-[20px] bg-[#262D3A] p-5 text-white overflow-y-scroll ${styles.example} sm:row-start-5 sm:col-span-6`}
			>
				<div>
					<h1 className="text-[20px] font-semibold mb-5">
						Recent Activity
					</h1>
				</div>
				<div className="space-y-4">
					{recentActivites.map((data, idx) => {
						return (
							<div
								className="flex flex-col justify-center items-center bg-[#FFFFFF0D] p-3 rounded-[12px]"
								key={idx}
							>
								<ViewAvatar
									button={false}
									main={data.name}
									second={data.message}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps(ctx) {
	const res = await fetch(
		'https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/top-artist'
	);
	const res1 = await fetch(
		'https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/recent-activities'
	);
	const res2 = await fetch(
		'https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace/featured-artworks'
	);
	const topArtist = await res.json();
	const recentActivites = await res1.json();
	const artworks = await res2.json();

	return {
		props: {
			topArtist,
			recentActivites,
			artworks,
		},
	};
}
