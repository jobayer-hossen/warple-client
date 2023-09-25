import React, { useRef } from 'react';
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import brandIcon from '../../../public/taskPhoto/icon2.png'


const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    return (
		<>
        <header>
			<img src={brandIcon} alt="" />
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
                <a className='backGround-btn'>
                ログイン・新規会員登録
				{/* <img src={arrowIcon} alt="" /> */}
                </a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>



		</>
    );
};

export default Navbar;