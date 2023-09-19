import React from 'react';
import { ShareAltOutlined, LikeOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import CarouselAuto from './CarouselAuto';

const { Meta } = Card;

const CardView = ({ destination}) => (
  
  <Card
    style={{
      width: 400,
      marginTop: 20,
      marginLeft: 30,
      boxShadow: '0px 6px 6px 0px rgba(167, 108, 108, 0.25);',
      transition: 'box-shadow 0.3s',
    }}
    cover={
      <CarouselAuto style={{ height: '150px' }} destination={destination} />
    }
    actions={[
      <LikeOutlined key="setting" />,
      <ShareAltOutlined key="ellipsis" />,
    ]}
    onMouseEnter={() => {
      // Add shadow on hover
      document.querySelector('.ant-card').style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.2)';
    }}
    onMouseLeave={() => {
      // Remove shadow on hover out
      document.querySelector('.ant-card').style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    }}
  >
    <Meta style={{ "height": 250 }}
      title={destination.name}
      description={destination.description}
    />
  </Card>
);

export default CardView;
