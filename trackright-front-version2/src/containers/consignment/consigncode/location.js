// import React, { useEffect } from 'react';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import { fromLonLat } from 'ol/proj';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';

// const Location = () => {
//   useEffect(() => {
//     // Initialize the map
//     const map = new Map({
//       target: 'map', // ID of the div where the map will render
//       layers: [
//         new TileLayer({
//           source: new OSM(), // OpenStreetMap tiles
//         }),
//       ],
//       view: new View({
//         center: fromLonLat([80.2707, 13.0827]), // Chennai coordinates
//         zoom: 8, // Initial zoom level
//       }),
//     });

//     // Clean up the map on unmount
//     return () => map.setTarget(undefined);
//   }, []);

//   return <div id="map" style={{ width: '100%', height: '370px', marginTop: '16px',
//     borderRadius: '18px', 
//     overflow: 'hidden', 



//    }} />;
// };

// export default Location;




import React, { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Fill, Stroke, Style } from 'ol/style';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle } from 'ol/style';

const Location = () => {
  useEffect(() => {
    // Initialize the map
    const map = new Map({
      target: 'map', // ID of the div where the map will render
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap tiles
        }),
        new VectorLayer({
          source: new VectorSource(),
          style: new Style({
            fill: new Fill({
              color: 'rgba(0, 0, 255, 0.5)', // Blue with some transparency
            }),
            stroke: new Stroke({
              color: 'blue', // Border color
              width: 1,
            }),
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([80.2707, 13.0827]), // Chennai coordinates
        zoom: 8, // Initial zoom level
      }),
    });

    // Clean up the map on unmount
    return () => map.setTarget(undefined);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '370px',
        marginTop: '16px',
        borderRadius: '25px',
        overflow: 'hidden',
      }}
    />
  );
};

export default Location;

