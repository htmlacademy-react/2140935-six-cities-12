import {useEffect, useState, useRef} from 'react';
import leaflet from 'leaflet';
import {City} from '../../types/city';

function useMap(mapRef: React.MutableRefObject<null>, city: City) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    } else if (map && (city.lat !== map.getCenter().lat || city.lng !== map.getCenter().lng || city.zoom !== map.getZoom())) {
      map.setView([city.lat, city.lng], city.zoom);
    }
  }, [mapRef, city, map]);

  return map;
}

export default useMap;
