import React from 'react';
import Header from './Header';
import DestinationCard from './DestinationCard';
import { Button, Space } from 'antd';
import CardView from './Common/CardView';

const destinations = [
    {
        id: 1,
        name: 'Sigiriya',
        description: 'Sigiriya, also known as the Lion Rock, is an ancient rock fortress and UNESCO World Heritage Site in Sri Lanka. Rising dramatically from the surrounding plains, it boasts stunning frescoes, landscaped gardens, and a palace at its summit. Sigiriya is a remarkable architectural and historical marvel, attracting tourists worldwide.',
        image: 'sigiriya.png',
    },
    {
        id: 2,
        name: 'The Temple of the Tooth Relic',
        description: 'The Temple of the Tooth Relic, located in Kandy, Sri Lanka, is a sacred Buddhist site. It houses a revered relic believed to be a tooth of Lord Buddha. Pilgrims and visitors come to pay homage to this relic, and the temple is known for its rich cultural significance and magnificent architecture.',
        image: 'temple-of-the-sacred-tooth-relic.png',
    }, {
        id: 1,
        name: 'Sigiriya',
        description: 'Sigiriya, also known as the Lion Rock, is an ancient rock fortress and UNESCO World Heritage Site in Sri Lanka. Rising dramatically from the surrounding plains, it boasts stunning frescoes, landscaped gardens, and a palace at its summit. Sigiriya is a remarkable architectural and historical marvel, attracting tourists worldwide.',
        image: 'sigiriya.png',
    },
    {
        id: 2,
        name: 'The Temple of the Tooth Relic',
        description: 'The Temple of the Tooth Relic, located in Kandy, Sri Lanka, is a sacred Buddhist site. It houses a revered relic believed to be a tooth of Lord Buddha. Pilgrims and visitors come to pay homage to this relic, and the temple is known for its rich cultural significance and magnificent architecture.',
        image: 'temple-of-the-sacred-tooth-relic.png',
    },
    {
        id: 1,
        name: 'Sigiriya',
        description: 'Sigiriya, also known as the Lion Rock, is an ancient rock fortress and UNESCO World Heritage Site in Sri Lanka. Rising dramatically from the surrounding plains, it boasts stunning frescoes, landscaped gardens, and a palace at its summit. Sigiriya is a remarkable architectural and historical marvel, attracting tourists worldwide.',
        image: 'sigiriya.png',
    },
    {
        id: 2,
        name: 'The Temple of the Tooth Relic',
        description: 'The Temple of the Tooth Relic, located in Kandy, Sri Lanka, is a sacred Buddhist site. It houses a revered relic believed to be a tooth of Lord Buddha. Pilgrims and visitors come to pay homage to this relic, and the temple is known for its rich cultural significance and magnificent architecture.',
        image: 'temple-of-the-sacred-tooth-relic.png',
    }, {
        id: 1,
        name: 'Sigiriya',
        description: 'Sigiriya, also known as the Lion Rock, is an ancient rock fortress and UNESCO World Heritage Site in Sri Lanka. Rising dramatically from the surrounding plains, it boasts stunning frescoes, landscaped gardens, and a palace at its summit. Sigiriya is a remarkable architectural and historical marvel, attracting tourists worldwide.',
        image: 'sigiriya.png',
    },
    {
        id: 2,
        name: 'The Temple of the Tooth Relic',
        description: 'The Temple of the Tooth Relic, located in Kandy, Sri Lanka, is a sacred Buddhist site. It houses a revered relic believed to be a tooth of Lord Buddha. Pilgrims and visitors come to pay homage to this relic, and the temple is known for its rich cultural significance and magnificent architecture.',
        image: 'temple-of-the-sacred-tooth-relic.png',
    },
    // Add more destination objects as needed
];


const areas = [
    {
        id: 2,
        name: 'Kandy',
        description: '',
        image: 'temple-of-the-sacred-tooth-relic.png',
    },
    {
        id: 2,
        name: 'Colombo',
        description: '',
        image: 'sigiriya.png',
    }, {
        id: 2,
        name: 'Kandy',
        description: '',
        image: 'temple-of-the-sacred-tooth-relic.png',
    },
    {
        id: 2,
        name: 'Colombo',
        description: '',
        image: 'sigiriya.png',
    }
]
const i = 1;
const LandingPage = () => {
    return (
        <div >
            <Header />
            <div className='index-body'>
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

            <div style={{display: 'flex', flexWrap: 'wrap', alignContent:'center'}}>
                {destinations.map((destination) => (
                    <CardView key={destination.id} destination={destination}/>

                ))}
            </div>
            {/* <div className="content row">
                <div className="col-sm-2">
                    {areas.map((area) => (
                        <div>
                            <DestinationCard key={area.id} destination={area} />
                            <hr />
                        </div>
                    ))}
                </div>
                <div className="col-sm-8" style={{display: 'flex', flexWrap: 'wrap'}}>
                    {destinations.map((destination) => (
                        <DestinationCard key={destination.id} destination={destination} />

                    ))}
                </div>
                <div className="col-sm-2"></div>
            </div> */}
        </div>
    );
};

export default LandingPage;
