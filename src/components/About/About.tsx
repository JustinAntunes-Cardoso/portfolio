import './About.scss';
import codeBG from '../../assets/images/code-background.jpg';
import fullStack from '../../assets/images/Full-Stack.png';
import dev from '../../assets/images/male-technologist.png';

const About = () => {
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
						src={fullStack}
						alt='Full Stack'
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
					A Passionate Full-Stack Software Developer Based in Mississauga, On,
					Canada📍
				</h1>
				<p className='about__text'>
					As a Full-Stack Software Developer, I possess a diverse arsenal of
					skills in HTML, CSS, JavaScript, TypeScript, React, Redux, Jest, SCSS,
					Node.js, Express.js, MySQL, Python, Django, Java, C, AWS, Firebase & Linux.
					I'm equipped with a unique combination of technical knowledge and problem-solving
					skills, enabling me to develop efficient and effective software
					solutions. My ability to communicate complex technical concepts in a clear
					and concise manner allows me to work collaboratively with teams across
					multiple departments. My strong attention to detail ensures that all
					code is written to the highest standard, resulting in applications that
					are reliable, scalable, and maintainable. Overall, my versatility and
					adaptability make me an invaluable asset to any organization seeking a
					full-stack developer.
				</p>
			</article>
		</section>
	);
};

export default About;
