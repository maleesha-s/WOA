import React from 'react';
import { location ,ShareAltOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const CardView = ({ destination }) => (
    <Card
      style={{
        width: 300,
        marginTop: 20,
        marginLeft: 20
      }}
      cover={
        <img
          alt="example"
          src={require(`../../images/${destination.image}`)}
          height={200}
        />
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