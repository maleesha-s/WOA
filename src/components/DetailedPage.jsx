import React from "react";
import { RollbackOutlined } from '@ant-design/icons';
import '../components/Common/Styles/DetailedPage.scss'
import img from '../images/Images_LandingPage/01.jpg';
import img_01 from '../images/Images_LandingPage/01.jpg';
import img_02 from '../images/Images_LandingPage/02.jpg';
import img_03 from '../images/Images_LandingPage/03.jpg';
import img_04 from '../images/Images_LandingPage/04.jpg';
import img_05 from '../images/Images_LandingPage/05.jpg';
import { useState } from "react";
const DetailedPage = () => {
    const images = [img_01, img_02, img_03, img_04, img_05];
    const [selectedImage, setSelectedImage] = useState(img_01);
    return (
        <div className="container">
            <div className="detail-page-name-and-direction-row">
                <div className="destination-name">Sigiriya Rock</div>
                <div className="direction"><RollbackOutlined /></div>
            </div>
            <div className="main-image-div">
                <img className="main-image" height="600" src={selectedImage} alt="" />
            </div>
            <div className="image-slider">
                {images.map((image) => <div className="slider-images-div" >
                    <img src={image} className={`slider-images ${selectedImage === image && 'slider-images-selected'} `} alt="" onClick={() => setSelectedImage(image)} />
                </div>)}
            </div>
            <div >
                Sigiriya Rock, also known as the Lion Rock, is an iconic UNESCO World Heritage site located in the heart of Sri Lanka's Cultural Triangle. This ancient rock fortress holds immense historical, cultural, and architectural significance, making it one of Sri Lanka's most visited and revered attractions.

                Rising abruptly from the lush surrounding landscape, Sigiriya Rock stands at a towering height of approximately 660 feet (200 meters). Its name, "Lion Rock," is derived from the massive lion's paw-shaped platform that once adorned its entrance, though only the enormous paws remain today. The site was originally constructed as a royal palace and fortress during the reign of King Kasyapa in the 5th century AD.

                The climb to the top of Sigiriya Rock is an adventure in itself. Visitors ascend a series of steep, narrow staircases, flanked by well-preserved frescoes of strikingly beautiful maidens, known as the "Sigiriya Maidens" or "Apsaras." These frescoes provide a glimpse into the artistry and lifestyle of the ancient Sigiriya inhabitants.

                At the summit, visitors are treated to breathtaking panoramic views of the surrounding jungles, ponds, and ancient gardens that once graced the plateau. The site's layout is a testament to the ingenuity of its builders, with an advanced irrigation system and landscaped terraces that showcase the architectural prowess of ancient Sri Lanka.

                Beyond its architectural marvels, Sigiriya Rock is shrouded in legend and myth. It is believed to be the site of King Kasyapa's final battle and eventual demise, adding a layer of intrigue to its historical narrative.

                Today, Sigiriya Rock is not only a must-visit destination for history enthusiasts but also for nature lovers and photographers who are captivated by its scenic beauty. It stands as a symbol of Sri Lanka's rich heritage and its ability to seamlessly blend natural beauty with human creativity, making it a testament to the island's extraordinary cultural legacy. A visit to Sigiriya Rock is a journey back in time, offering a unique and unforgettable experience in the heart of this enchanting island nation.
            </div>
        </div>
    );
}

export default DetailedPage;