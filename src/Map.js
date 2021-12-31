import React,{useState} from 'react';

export const Map = (props) => {
  // Create a reference to the HTML element we want to put the map on
    const [map, setmap] = useState();
    const mapRef = React.useRef(null);
    const [isMapLoaded, setisMapLoaded] = useState(false)
    const H = window.H;
    const platform = new H.service.Platform({
        apikey: "yTLHIpQv_dKDNVH446TjkRINAN5-2D2ka5PHjM9vdTQ"
    });
  var {center,zoom,markers} = props;
  if(!center)
  {
    center = {
        lat:  '0',
        lng: '0'
    }
  }
  if(!zoom)
  {
      zoom = 5;
  }

  /**
   * Create the map instance
   * While `useEffect` could also be used here, `useLayoutEffect` will render
   * the map sooner
   */
 
  React.useEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.raster.normal.map, {
      center: { lat: center.lat, lng: center.lng },
      zoom: zoom,
      pixelRatio: window.devicePixelRatio || 1
    });
    setmap(hMap);
    setisMapLoaded(true);
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      hMap.dispose();
    };
  }, [mapRef,center,zoom]); // This will run this hook every time this ref is updated

  return (
    <div className="map" ref={mapRef} style={{ height: "500px" }} >
      <Markers H={H} map={map} markers={markers}  />

     </div>);
};

export const Markers = (props)=>{
  const { H,map,markers } = props;
  if(markers)
  {
    if(markers.length > 0)
    {
      markers.forEach(mark => {
        const marker = new H.map.Marker(mark);
        map.addObject(marker);
        console.log('mark',marker);
        
      });

    } 
  }
  return (<></>);


}
export const GeoCode =(props) => {
  const {platform,address} = props;
  
  return (<>
  </>);
}

