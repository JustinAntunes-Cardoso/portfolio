import './Contact.scss';

function Contact() {
	return (
		<section
			id='contact'
			className='contact'>
			<article className='contact__title-container'>
				<h3 className='contact__title'>Contact</h3>
				<h2 className='contact__text'>
					Feel Free to Contact Me at My Contact Information Below 📱
				</h2>
			</article>
			<aside className='contact__icons-container'>
				<div className='contact__info'>
					<div className='contact__image-container'>
						<i className='contact__image fa-solid fa-map-location-dot'></i>
					</div>
					<div className='contact__info-container'>
						<h6 className='contact__info-title'>Location</h6>
						<p className='contact__info-text'>Mississauga, Canada</p>
					</div>
				</div>
				<div className='contact__info'>
					<div className='contact__image-container'>
						<i className='contact__image fa-solid fa-envelope-open-text'></i>
					</div>
					<div className='contact__info-container'>
						<h6 className='contact__info-title'>Mail</h6>
						<a className='contact__link' href='mailto:justin.antunes.cardoso@gmail.com'>
							<p className='contact__info-text'>
								justin.antunes.cardoso@gmail.com
							</p>
						</a>
					</div>
				</div>
			</aside>
		</section>
	);
}

export default Contact;
