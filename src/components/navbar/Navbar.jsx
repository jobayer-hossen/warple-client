import React, { useRef } from 'react';
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import brandIcon from '../../../public/taskPhoto/icon2.png'
import Fade from 'react-reveal/Fade';


const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsiveNav"
		);
	};
	return (
		<>
		<Fade top>
			<header>
				<img id='brandIcon' src={brandIcon} alt="" />
				<nav ref={navRef}>
					<a href="/#">About</a>
					<a href="/#">About</a>
					<a href="/#">About</a>
					<a className='backGroundBtn'>
						ログイン・新規会員登録
					</a>
					<button
						className="navBtn navCloseBtn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				{/* only responsive Show element */}
				<a id='responsiveShowBtn'>
					員登録
				</a>
				<button
					className="navBtn"
					onClick={showNavbar}>
					<FaBars />
				</button>
			</header>
			</Fade>
		</>
	);
};

export default Navbar;