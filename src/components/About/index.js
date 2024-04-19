import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import ProfilePic from '../../assets/images/profile_pic.png'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // Store the timeout ID
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    const handleDownload = () => {
        const resumeUrl = 'https://mithilparmar-portfolio.s3.us-west-1.amazonaws.com/assets/files/Mithil_Parmar_Resume.pdf';
        window.open(resumeUrl, '_blank');
    };
    
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={'About Me'.split('')}
                            idx={15}
                        />
                    </h1>
                    <p>In the bustling tech landscape of the Bay Area, I’m Mithil Parmar, a Master’s Degree Graduate 
                        from San Jose State University in Artificial Intelligence, where I blended theoretical knowledge 
                        with practical application, with a 3.61 GPA.</p>
                    <p>My expertise lies in Python, Java, C, and a suite of web technologies, fueled by a 
                        passion for crafting solutions that stand at the intersection of efficiency and innovation. 
                        My interests in Machine Learning and Artificial Intelligence fuels my creativity, 
                        ambition, and problem-solving skills.</p>
                    <p>I possess a quiet confidence, coupled with a natural curiosity, and I'm continuously honing my skills 
                        to tackle design challenges with finesse. I'm proud of a video compression platform that I created 
                        with a bunch of friends that used ML algorithms focusing on SR-GANs to compress and decompress frames 
                        beating a few OpenCV algorithms.</p>
                    <p>As a software engineer, I thrive on collaboration and continuous learning, always seeking to explore 
                        the latest technologies and methodologies.</p>
                    <Link onClick={handleDownload} className='flat-button'>MY RESUME</Link>
                </div>

                <div class="profile-container">
                    <img src={ProfilePic} alt="Mithil" class="img-fluid my-3 profile-pic" />
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About