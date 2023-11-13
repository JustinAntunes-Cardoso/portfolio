import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Certifications from '../../components/Certifications/Certifications';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import { dev } from '../../utils/developer';

const Developer = () => {
    return (
        <>
            <Header />
            <Hero title={dev.data.title} techStack={dev.data.hero.techStack} />
            <About title={dev.data.title} about={dev.data.about} />
            <Certifications badges={dev.data.certifications.badges} />
            <Projects projects={dev.data.projects} />
            <Contact />
            <Footer />
        </>
    )
}

export default Developer
