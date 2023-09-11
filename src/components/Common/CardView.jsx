import React from 'react';
import { location ,ShareAltOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import CarouselAuto from './CarouselAuto';

const { Meta } = Card;

const CardView = ({ destination }) => (
    <Card
      style={{
        width: 400,
        marginTop: 20,
        marginLeft: 30
      }}
      cover={
        <CarouselAuto style={{'height':'150px'}}/>
        // <img
        //   alt="example"
        //   src={require(`../../images/${destination.image}`)}
        //   height={200}
        // />
      }
      actions={[
        <LikeOutlined key="setting" />,
        // <EditOutlined key="edit" />,
        <ShareAltOutlined key="ellipsis" />,
      ]}
    >
      <Meta style={{"height": 250}}
        title={destination.name}
        description={destination.description}
      />
    </Card>
  );
  export default CardView;