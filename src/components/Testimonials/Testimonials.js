import React from 'react';
import './testimonials.css';
import { Data } from './Data';

export const Testimonials = () => {
	return (
		<section id='testimonials' className="testimonials">
        <h2 className="testimonials__heading">Client testimonials</h2>
			<div className='testimonials__body'>
                {Data.map(({ id, img, text, name, designation }) => {
                    return (
                        <div className="testimonial__content" key={id}>
                            <img src={img} alt="" />
                            <p className="testimonial__body">{text}</p>
                            <h3 className="testimonial__name">{name}</h3>
                            <p className="testimonial__designation">{designation}</p>
                        </div>
                    );
                })}
            </div>
		</section>
	);
};
