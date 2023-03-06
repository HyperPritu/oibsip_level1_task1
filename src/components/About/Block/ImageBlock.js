import React from 'react';
import './imageblock.css';

export const ImageBlock = ({image}) => {
	return (
		<div className="box box-image">
			<img className='box__image' src={image} alt="" />
		</div>
	);
};
