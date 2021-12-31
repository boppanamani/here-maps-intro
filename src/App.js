import React,{useState,useEffect} from 'react';
import { Map, Markers } from './Map';

function App() {
  const [markers, setmarkers] = useState([
    {
      lat: '17.6879',
      lng: '83.2134'
    },
    {
      lat: '17.679',
      lng: '83.213'
    }
  ])
  const center = {
    lat: '17.6868',
    lng: '83.2185'
  }
  

 
  return (
    <>
      {/*<DisplayMapClass/>*/}
      <Map center={center} markers={markers} zoom={12} >
        {/* <Markers /> */}
      </Map>
    </>
  );
}

export default App;