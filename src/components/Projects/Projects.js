import React from 'react';
import img1 from '../../images/desktop/image-gallery-milkbottles.jpg';
import img2 from '../../images/desktop/image-gallery-orange.jpg';
import img3 from '../../images/desktop/image-gallery-cone.jpg';
import img4 from '../../images/desktop/image-gallery-sugarcubes.jpg';
import './projects.css';

export const Projects = () => {
	const Data = [
		{ id: 1, img: img1 },
		{ id: 2, img: img2 },
		{ id: 3, img: img3 },
		{ id: 4, img: img4 },
	];
	return (
		<section id='projects' className='products'>
			{Data.map(({ id, img }) => {
				return <img src={img} alt="" key={id} />;
			})}
		</section>
	);
};
