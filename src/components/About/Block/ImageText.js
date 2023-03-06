import React from 'react';
import './imagetext.css';

export const ImageText = ({ type, title, subtitle }) => {
	return (
      <div className={type === 'gd' ? 'it__box graphics-design' : 'it__box photography'}>
        <div className='it__content'>
          <h3 className="it__title">{title}</h3>
          <p className="it__subtitle">{subtitle}</p>
        </div>
      </div>
    
	);
};
