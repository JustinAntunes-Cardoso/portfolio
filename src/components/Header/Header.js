import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/logos/Justin-Name-Logo-Dark.png';
import logoHover from '../../assets/logos/Justin-Name-Logo.png';

const Header = () => {
	const [classNameMenu, setClassNameMenu] = useState(
		'header__mobile fas fa-bars'
	);

	const [classNameX, setclassNameX] = useState('header__mobile fas fa-xmark');

	const [classNameClose, setClassNameClose] = useState(
		'header__mobile-nav closed-menu'
	);

	const [image, setImage] = useState(logo);

	const handleImage = (action) =>
		action === 'hover' ? setImage(logoHover) : setImage(logo);

	const handleMouseEnter = () => {
		setClassNameMenu('header__mobile fas fa-bars fa-beat-fade');
	};

	const handleMouseDown = () => {
		setClassNameMenu('header__mobile fas fa-bars');
	};

	const handleMouseEnterX = () => {
		setclassNameX('header__mobile fas fa-xmark fa-beat-fade');
	};

	const handleMouseDownX = () => {
		setclassNameX('header__mobile fas fa-xmark');
	};

	const handleOnClickMenu = () => {
		setClassNameClose('header__mobile-nav open-menu');
	};

	const handleOnClickClose = () => {
		setClassNameClose('header__mobile-nav closed-menu');
	};

	return (
		<header className='header'>
			<a
				className='header__logo'
				href='#home'>
				<img
					className='header__image'
					src={image}
					onMouseEnter={() => handleImage('hover')}
					onMouseOut={() => handleImage()}
					alt='Name logo'
				/>
			</a>
			<i
				className={classNameMenu}
				onClick={handleOnClickMenu}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseDown}></i>
			<nav className='header__nav'>
				<ul className='header__list'>
					<li className='header__list-item'>
						<a
							className='header__link'
							href='#home'>
							Home
						</a>
					</li>
					<li className='header__list-item'>
						<a
							className='header__link'
							href='#about'>
							About
						</a>
					</li>
					<li className='header__list-item'>
						<a
							className='header__link'
							href='#projects'>
							Projects
						</a>
					</li>
					<li className='header__list-item'>
						<a
							className='header__link'
							href='#contact'>
							Contact
						</a>
					</li>
				</ul>
			</nav>
			<div className={classNameClose}>
				<span className='header__mobile-close'>
					<i
						className={classNameX}
						onMouseEnter={handleMouseEnterX}
						onMouseLeave={handleMouseDownX}
						onClick={handleOnClickClose}></i>
				</span>
				<ul className='header__mobile-list'>
					<li className='header__list-item'>
						<a
							className='header__link'
							href='#home'>
							Home
						</a>
					</li>
					<li className='header__list-item'>
						<a
							className='header__link'
							href='#about'>
							About
						</a>
					</li>
					<li className='header__list-item'>
						<a
							className='header__link'
							href='#projects'>
							Projects
						</a>
					</li>
					<li className='header__list-item'>
						<a
							className='header__link'
							href='#contact'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
