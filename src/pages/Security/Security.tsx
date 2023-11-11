import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Certifications from '../../components/Certifications/Certifications';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import { cyber } from '../../utils/cybersecurity';

const Security = () => {
    return (
        <>
            <Header />
            <Hero title={cyber.data.title} techStack={cyber.data.hero.techStack} />
            <About title={cyber.data.title} about={cyber.data.about} />
            <Certifications badges={cyber.data.certifications.badges} />
            <Projects projects={cyber.data.projects} />
            <Contact />
            <Footer />
        </>
    )
}

export default Security
