import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Carousel, Button } from 'antd';
import CardView from './Common/CardView';
import ItemList from './DetailsList'
import img_01 from '../images/Images_LandingPage/01.jpg';
import img_02 from '../images/Images_LandingPage/02.jpg';
import img_03 from '../images/Images_LandingPage/03.jpg';
import img_04 from '../images/Images_LandingPage/04.jpg';
import img_05 from '../images/Images_LandingPage/05.jpg';
const i = 1;
const LandingPage = () => {

    const images = [img_01, img_02, img_03, img_04, img_05]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

    const backgroundImageUrl = images[currentImageIndex];
    return (
        <div>
            <div className={'landing-page-body'} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
                <Header className/>
                <div className='index-body-'>

                    <div className="clouds">
                        <img src={require('../images/cloud1.png')} alt={""} style={{ '--i': 1 }} />
                        <img src={require('../images/cloud2.png')} alt={""} style={{ i: i }} />
                        <img src={require('../images/cloud3.png')} alt={""} style={{ i: i }} />
                        <img src={require('../images/cloud4.png')} alt={""} style={{ i: i }} />
                        <img src={require('../images/cloud5.png')} alt={""} style={{ i: i }} />
                    </div>
                    <h1 className='topic-landing-page'> Wonder OF Asia</h1>
                    <h3 className='content-landing-page'>
                        Create Memories, Explore Ceylon <Button className='explore-button' type="primary">Explore Now</Button>
                    </h3>
                </div>
            </div>

            < div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center' }}>
                {ItemList.map((destination) => (
                    <CardView key={destination.id} destination={destination} />
                ))}
            </div>
        </div >

    );
};

export default LandingPage;
