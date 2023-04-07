import React from 'react';
import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<a className='header__logo' href='#home'>Justin.dev</a>
			<nav className='header__nav'>
				<ul className='header__list'>
          <li className='header__list-item'><a className='header__link' href='#home'>Home</a></li>
          <li className='header__list-item'><a className='header__link' href='#about'>About</a></li>
          <li className='header__list-item'><a className='header__link' href='#projects'>Projects</a></li>
          <li className='header__list-item'><a className='header__link' href='#contact'>Contact</a></li>
        </ul>
			</nav>
		</header>
	);
};

export default Header;
