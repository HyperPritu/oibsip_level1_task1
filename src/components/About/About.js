import React from 'react';
import './about.css';
import img1 from '../../images/desktop/image-transform.jpg';
import img2 from '../../images/desktop/image-stand-out.jpg';
import { ImageBlock } from './Block/ImageBlock';
import { ImageText } from './Block/ImageText';
import { TextBlock } from './Block/TextBlock';

export const About = () => {
	return (
		<section id='about' className="about section">
			<div className="about-body">
				<TextBlock color={'yellow'} title={'Transform your brand'} subtitle={'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the mzarketing for you.'} />
				<ImageBlock image={img1} />
				<ImageBlock image={img2} />
				<TextBlock color={'red'} title={'Stand out to the right audience'} subtitle={'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'} />
			</div>
			<div className="image-text">
				<ImageText type={'gd'} title={'Graphic design'} subtitle={'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'} />
				<ImageText type={'p'} title={'Photography'} subtitle={'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'} />
			</div>
		</section>
	);
};
