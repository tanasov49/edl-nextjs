import React from 'react';
import styles from './SectionAbout.module.scss';
import ImageMark from '../../../../public/images/mark-image.png'; 
import Image from 'next/image';
function SectionAbout() {
    return (
        <section className={styles['section-about']}>
            <h2 className={styles['section-about__title']}>Push beyond the limitations of your current design.</h2>
            <div className={styles['section-about-text']}>
                <p>Off-the-shelf processes</p>
                <h4>Continuous product improvements</h4>
                <p>Don’t hire a design team, subscribe to one.</p>
                <h4>New digital project</h4>
                <p>Design superpowers for your next project.</p>
                <h4>Evaluate exisiting experience</h4>
                <p>A shortcut to a better version of your product.</p>
                <h3>“After a thorough and highly-collaborate design sprint, we ended with a user interface our software engineers and customers are excited to use.”</h3>
                <div className={styles['block-author']}>
                    <Image className={styles['block-author__image']} src={ImageMark} alt='mark-photo' />
                    <h5>Mark Kromann</h5>
                    <p>COO at Smooth Robotics</p>
                </div>
            </div>
        </section>
    );
}

export default SectionAbout;