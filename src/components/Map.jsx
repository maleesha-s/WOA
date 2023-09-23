// Map.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
const Map = () => {
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const geojsonFeature = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "name": "Colombo"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [79.9524, 6.9271],
                            [79.9719, 6.9271],
                            [79.9719, 6.9412],
                            [79.9524, 6.9412],
                            [79.9524, 6.9271]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Gampaha"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [79.9937, 7.0854],
                            [80.0624, 7.0854],
                            [80.0624, 7.1155],
                            [79.9937, 7.1155],
                            [79.9937, 7.0854]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Kandy"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [80.5950, 7.2906],
                            [80.6391, 7.2906],
                            [80.6391, 7.3165],
                            [80.5950, 7.3165],
                            [80.5950, 7.2906]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Galle"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [80.2140, 6.0533],
                            [80.2499, 6.0533],
                            [80.2499, 6.0767],
                            [80.2140, 6.0767],
                            [80.2140, 6.0533]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Matara"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [80.5545, 5.9496],
                            [80.5804, 5.9496],
                            [80.5804, 5.9707],
                            [80.5545, 5.9707],
                            [80.5545, 5.9496]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Kurunegala"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [80.3703, 7.4809],
                            [80.4022, 7.4809],
                            [80.4022, 7.5030],
                            [80.3703, 7.5030],
                            [80.3703, 7.4809]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Jaffna"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [80.0046, 9.6756],
                            [80.0273, 9.6756],
                            [80.0273, 9.6882],
                            [80.0046, 9.6882],
                            [80.0046, 9.6756]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Trincomalee"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [81.2133, 8.5705],
                            [81.2389, 8.5705],
                            [81.2389, 8.5858],
                            [81.2133, 8.5858],
                            [81.2133, 8.5705]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Batticaloa"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [81.6344, 7.7204],
                            [81.6595, 7.7204],
                            [81.6595, 7.7326],
                            [81.6344, 7.7326],
                            [81.6344, 7.7204]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Anuradhapura"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [80.3885, 8.3210],
                            [80.4162, 8.3210],
                            [80.4162, 8.3426],
                            [80.3885, 8.3426],
                            [80.3885, 8.3210]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Polonnaruwa"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [81.0054, 7.9408],
                            [81.0302, 7.9408],
                            [81.0302, 7.9601],
                            [81.0054, 7.9601],
                            [81.0054, 7.9408]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Kegalle"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [80.3120, 7.2511],
                            [80.3387, 7.2511],
                            [80.3387, 7.2701],
                            [80.3120, 7.2701],
                            [80.3120, 7.2511]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Ratnapura"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [80.3763, 6.7028],
                            [80.3986, 6.7028],
                            [80.3986, 6.7206],
                            [80.3763, 6.7206],
                            [80.3763, 6.7028]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "name": "Matale"
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [80.6256, 7.4689],
                            [80.6408, 7.4689],
                            [80.6408, 7.4850],
                            [80.6256, 7.4850],
                            [80.6256, 7.4689]
                        ]
                    ]
                }
            }
        ]
    }



    const onDistrictClick = (e) => {
        const districtName = e.target.feature.properties.name;
        setSelectedDistrict(districtName);
    };

    return (
        <div className="App">
        <h1>Sri Lanka District Heatmap</h1>
        <MapContainer
          center={[6.731, 80.7718]}
          zoom={8}
          style={{ height: '100vh', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
  
          {geojsonFeature.map((district, index) => (
            <HeatmapLayer
              key={index}
              points={district.coordinates.map((coord) => ({
                lat: coord[0],
                lon: coord[1],
                value: district.intensity,
              }))}
              longitudeExtractor={(point) => point.lon}
              latitudeExtractor={(point) => point.lat}
              intensityExtractor={(point) => point.value}
              radius={20}
              blur={15}
              max={100}
              gradient={{
                0.4: 'blue',
                0.6: 'cyan',
                0.7: 'lime',
                0.8: 'yellow',
                1.0: 'red',
              }}
              onClick={() => onDistrictClick(district.name)}
            />
          ))}
        </MapContainer>
        {selectedDistrict && <p>Selected District: {selectedDistrict}</p>}
      </div>
    );
};

export default Map;
