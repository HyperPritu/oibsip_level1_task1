import React from 'react';
import './textblock.css';

export const TextBlock = ({ color, title, subtitle }) => {
	return (
		<div className="box text">
			<div className="box-text">
				<h2 className="box__title">{title}</h2>
				<p className="box__subtitle">{subtitle}</p>
				<button className={color === 'red' ? `button-underlined button-underlined-red` : `button-underlined button-underlined-yellow`}>Learn more</button>
			</div>
		</div>
	);
};
