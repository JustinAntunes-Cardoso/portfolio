import './About.scss';
import codeBG from '../../assets/images/code-background.jpg';
import dev from '../../assets/images/male-technologist.png';
import { About } from '../../utils/types';

interface AboutProps {
	title: string;
	about: About;
}

const Abouts: React.FC<AboutProps> = ({ title, about }) => {
	const { image, text } = about
	return (
		<section
			id='about'
			className='about'>
			<aside className='about__image-container'>
				<div className='about__code-container'>
					<img
						className='about__code'
						src={codeBG}
						alt='Coding Text'
					/>
				</div>
				<div className='about__image-dev-container'>
					<img
						className='about__full-stack'
						src={image.src}
						alt={image.alt}
					/>
					<img
						className='about__dev'
						src={dev}
						alt='Developer'
					/>
				</div>
			</aside>
			<article className='about__info-container'>
				<h2 className='about__title'>About Me</h2>
				<h1 className='about__subtitle'>
					{`A Passionate ${title} Based in Mississauga, On,
					Canada📍`}
				</h1>
				<p className='about__text'>{text}</p>
			</article>
		</section>
	);
};

export default Abouts;
