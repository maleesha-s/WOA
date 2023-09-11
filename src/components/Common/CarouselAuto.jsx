import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '200px',
  width:'100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselAuto = () => (
  <Carousel autoplay>
    <div>
      <img style={contentStyle} src={require('../../images/sigiriya.png')} alt=''/>
    </div>
    <div>
    <img style={contentStyle} src={require('../../images/temple-of-the-sacred-tooth-relic.png')} alt=''/>
    </div>
    <div>
    <img style={contentStyle} src={require('../../images/Sigiriya-index.png')} alt=''/>
    </div>
    <div>
    <img style={contentStyle} src={require('../../images/cloud4.png')} alt=''/>
    </div>
  </Carousel>
);
export default CarouselAuto;