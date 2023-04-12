import React from 'react';
import './Hero.scss';
import profilePic from '../../assets/images/justin-profile-pic-stone-wall.jpg';
import logo from '../../assets/logos/Justin-Brand-Logo-Transparent.png';
import html from '../../assets/images/html5.svg';
import css from '../../assets/images/css3.svg';
import js from '../../assets/images/javascript.svg';
import ts from '../../assets/images/typescript.svg';
import react from '../../assets/images/react.svg';
import sass from '../../assets/images/sass.svg';
import node from '../../assets/images/node.svg';
import mysql from '../../assets/images/mysql.svg';

const Hero = () => {
	return (
		<section
			id='home'
			className='hero'>
			<div className='hero__container'>
				<article className='hero__info-container'>
					<img
						className='hero__logo'
						src={logo}
						alt='Brand Logo'
					/>
					<div className='hero__text-image-container'>
						<div className='hero__text-container'>
							<h1 className='hero__title'>Full-Stack Developer</h1>
							<p className='hero__text'>Greetings and salutations! I'm Justin Antunes-Cardoso. A innovative Full-Stack Software Developer based in Mississauga, ON, Canada. 📍</p>
						</div>
						<div className='hero__image-container'>
							<img
								className='hero__image'
								src={profilePic}
								alt='Portfolio Snapshot'
							/>
						</div>
					</div>
				</article>
				<aside className='hero__tech-stack-container'>
					<h3 className='hero__tech-stack'>Tech Stack</h3>
					<ul className='hero__tech-stack-images'>
						<li className='hero__tech-stack-item'><img src={html} title="HTML5" alt="program_img" /></li>
						<li className='hero__tech-stack-item'><img src={css} title="CSS3" alt="program_img" /></li>
						<li className='hero__tech-stack-item'><img src={js} title="JavaScript" alt="program_img" /></li>
						<li className='hero__tech-stack-item'><img src={ts} title="TypeScript" alt="program_img" /></li>
						<li className='hero__tech-stack-item'><img src={react} title="React JS" alt="program_img" /></li>
						<li className='hero__tech-stack-item'><img src={sass} title="Sass" alt="program_img" /></li>
						<li className='hero__tech-stack-item'><img src={node} title="Node JS" alt="program_img" /></li>
						<li className='hero__tech-stack-item'><img src={mysql} title="MySQL" alt="program_img" /></li>
					</ul>
				</aside>
			</div>
		</section>
	);
};

export default Hero;
