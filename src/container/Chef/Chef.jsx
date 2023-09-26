import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__paddin'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
  <SubHeading title="chef's  word" />
      <h1 className='headtext__cormorant'>What We Belive In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ex sit perferendis nihil voluptatem voluptates, mollitia maiores at tenetur, dolorum, id animi consequatur laboriosam.
            </p>
          </div>
          
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam iure iusto autem totam.</p>
        </div>
        <div className="app__chef-sign">
          <p className='p__opensans'>Kevin</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;
