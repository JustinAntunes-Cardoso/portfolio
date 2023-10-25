import Badges from '../Badges';
import './Certifications.scss';
import { Badge } from '../../utils/types';

interface CertificationsProps {
    badges: Badge[];
}

const Certifications: React.FC<CertificationsProps> = ({ badges }) => {
    return (
        <section id='certifications' className='certifications'>
            <article className='certifications__info-container'>
                <h2 className='certifications__title'>Certificates</h2>
                <h1 className='certifications__subtitle'>
                    Badge Showcase: A Visual Story of My Achievements 🏆
                </h1>
            </article>
            <aside className='certifications__badge-container'>
                <p className='certifications__text'>
                    Each badge tells a story of dedication, growth, and expertise in various domains
                </p>
                <div className='certifications__badges'>
                    {badges.map((badge, index) => {
                        return (
                            <Badges
                                key={index}
                                {...badge}
                            />
                        )
                    })}
                </div>
            </aside>
        </section>
    )
}

export default Certifications
