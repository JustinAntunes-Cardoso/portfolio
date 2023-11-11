import './Hero.scss';
import profilePic from '../../assets/images/justin-profile-pic-stone-wall.jpg';
import logo from '../../assets/logos/Justin-Brand-Logo-Transparent.png';
import { TechStack } from '../../utils/types';

const linkedIn = 'https://www.linkedin.com/in/justinantunescardoso/';
const gitHub = 'https://github.com/JustinAntunes-Cardoso';

interface HeroProps {
    title: string;
    techStack: TechStack[];
}

const Hero: React.FC<HeroProps> = ({ title, techStack }) => {

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
                                <h1 className='hero__title'>{title}</h1>
                                <p className='hero__text'>
                                    Greetings & Salutations! I'm Justin Antunes-Cardoso. An
                                    innovative {title} based in Mississauga,
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
                        {techStack.map((tech: TechStack, index: number) => {
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
