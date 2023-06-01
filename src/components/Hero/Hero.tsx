import './Hero.scss';
import profilePic from '../../assets/images/justin-profile-pic-stone-wall.jpg';
import logo from '../../assets/logos/Justin-Brand-Logo-Transparent.png';
import html from '../../assets/images/html5.svg';
import css from '../../assets/images/css3.svg';
import js from '../../assets/images/javascript.svg';
import ts from '../../assets/images/typescript.svg';
import react from '../../assets/images/react.svg';
import redux from '../../assets/images/redux.svg';
import jest from '../../assets/images/jest.png';
import sass from '../../assets/images/sass.svg';
import node from '../../assets/images/node.svg';
import express from '../../assets/images/express.svg';
import mysql from '../../assets/images/mysql.svg';
import python from '../../assets/images/python.svg';
import django from '../../assets/images/django.svg';
import java from '../../assets/images/java.svg';
import sharp from '../../assets/images/c_sharp.svg';
import c from '../../assets/images/c.svg';
import aws from '../../assets/images/aws.svg';
import firebase from '../../assets/images/firebase.svg';
import linux from '../../assets/images/linux.png';
import { TechStack } from '../../types';

const linkedIn = 'https://www.linkedin.com/in/justinantunescardoso/';
const gitHub = 'https://github.com/JustinAntunes-Cardoso';

const techStack: TechStack[] = [
	{ src: html, title: 'HTML5' },
	{ src: css, title: 'CSS3' },
	{ src: js, title: 'JavaScript' },
	{ src: ts, title: 'TypeScript' },
	{ src: react, title: 'React' },
	{ src: redux, title: 'Redux' },
	{ src: jest, title: 'Jest' },
	{ src: sass, title: 'Sass/Scss' },
	{ src: node, title: 'Node.js' },
	{ src: express, title: 'Express.js' },
	{ src: mysql, title: 'MySQL' },
	{ src: python, title: 'Python' },
	{ src: django, title: 'Django' },
	{ src: java, title: 'Java' },
	{ src: sharp, title: 'C#' },
	{ src: c, title: 'C' },
	{ src: aws, title: 'AWS' },
	{ src: firebase, title: 'Firebase' },
	{ src: linux, title: 'Linux' }
];

const Hero = () => {
	return (
		<section
			id='home'
			className='hero'>
			<div className='hero__container'>
				<article className='hero__info-container'>
					<div className='hero__logo-text-image-container'>
						<img
							className='hero__logo'
							src={logo}
							alt='Brand Logo'
						/>
						<div className='hero__text-image-container'>
							<div className='hero__text-container'>
								<h1 className='hero__title'>Full-Stack Developer</h1>
								<p className='hero__text'>
									Greetings & Salutations! I'm Justin Antunes-Cardoso. An
									innovative Full-Stack Software Developer based in Mississauga,
									ON, Canada📍
								</p>
							</div>
							<div className='hero__image-container'>
								<img
									className='hero__image'
									src={profilePic}
									alt='Portfolio Snapshot'
								/>
							</div>
						</div>
					</div>
					<div className='hero__link-container'>
						<a
							aria-label='linkedin'
							rel='noreferrer'
							target='_blank'
							href={linkedIn}>
							<i className='hero__link fa-brands fa-linkedin'></i>
						</a>
						<a
							aria-label='github'
							rel='noreferrer'
							target='_blank'
							href={gitHub}>
							<i className='hero__link fa-brands fa-github'></i>
						</a>
					</div>
				</article>
				<aside className='hero__tech-stack-container'>
					<h3 className='hero__tech-stack'>Tech Stack</h3>
					<ul className='hero__tech-stack-images'>
						{techStack.map((tech, index) => {
							return (
								<li key={index} className='hero__tech-stack-item'>
									<img
										src={tech.src}
										title={tech.title}
										alt='program_img'
									/>
								</li>
							)
						})}
					</ul>
				</aside>
			</div>
		</section>
	);
};

export default Hero;
