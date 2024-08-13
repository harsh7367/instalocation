import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './Map.css';

export default function Map(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  const [zoom] = useState(props.zoom);
  maptilersdk.config.apiKey = process.env.REACT_APP_MAP_API_KEY;

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [props.center.lng, props.center.lat],
      zoom: zoom
    });

    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([props.center.lng,props.center.lat])
      .addTo(map.current);
  }, [props.center.lng, props.center.lat, zoom]);

  return (
    
      <div ref={mapContainer} className={`map ${props.className}`} style={props.style}/>
    
  );
}