import './Footer.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__info-container'>
					<p className='footer__info'>{`Copyright © ${year}. All rights are reserved`}</p>
				</div>
				<div className='footer__link-container'>
					<a
						aria-label='linkedin'
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/justin-antunes-cardoso/   '>
						<i className='footer__link fa-brands fa-linkedin'></i>
					</a>
					<a
						aria-label='github'
						target='_blank'
						rel='noreferrer'
						href='https://github.com/JustinAntunes-Cardoso'>
						<i className='footer__link fa-brands fa-github'></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
