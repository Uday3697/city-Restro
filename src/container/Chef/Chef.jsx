import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" >
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef's world" />
      <h1 className="headtext__cormorant">What we belive in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quibusdam voluptatibus qui cum odit, neque culpa provideitatis quo amet? Facere iusto voluptate qui illo quidem?</p>
          <p className="p__opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores maxime tempora, voluptates id ut quidem in officiis consequatur possimus mollitia, cupiditate, cumque ea sint. Mollitia!</p>
        </div>
      </div>
      <div className="app__chef-sign">

        <p>kevin lueo</p>
        <p className="p__opensa ">Chef and founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>

  </div>
);

export default Chef;
