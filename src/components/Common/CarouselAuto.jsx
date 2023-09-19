import React from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const CarouselAuto = ({destination}) => {
  const contentStyle = {
    height: '200px',
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
  };

  const customNextArrow = (
    <Button
      type="primary"
      shape="circle"
      icon={<RightOutlined />}
      size="large"
      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
    />
  );

  const customPrevArrow = (
    <Button
      type="primary"
      shape="circle"
      icon={<LeftOutlined />}
      size="large"
      style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
    />
  );

  return (
    <Carousel autoplay prevArrow={customPrevArrow} nextArrow={customNextArrow}>
      {/* {
        destination && destination.images.map((img)=>{
          <img style={contentStyle} src={require(`../../images/${destination.imagesFolderName}/${img}`)} alt='' />
        })
      } */}
      <div>
        <img style={contentStyle} src={require('../../images/sigiriya.png')} alt='' />
      </div>
      <div>
        <img style={contentStyle} src={require('../../images/temple-of-the-sacred-tooth-relic.png')} alt='' />
      </div>
      <div>
        <img style={contentStyle} src={require('../../images/Sigiriya-index.png')} alt='' />
      </div>
      <div>
        <img style={contentStyle} src={require('../../images/cloud4.png')} alt='' />
      </div>
    </Carousel>
  );
};

export default CarouselAuto;
