import React from 'react';
import './Footer.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='footer'>
			<div className='footer__info-container'>
				<p className='footer__info'>{`Copyright © ${year}. All rights are reserved`}</p>
			</div>
			<div class='footer__link-container'>
				<a
					aria-label='linkedin'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/justin-antunes-cardoso/   '>
					<i class='footer__link fa-brands fa-linkedin'></i>
				</a>
				<a
					aria-label='github'
					target='_blank'
					rel='noreferrer'
					href='https://github.com/JustinAntunes-Cardoso'>
					<i class='footer__link fa-brands fa-github'></i>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
