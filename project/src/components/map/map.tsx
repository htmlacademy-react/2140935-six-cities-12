import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import {City} from '../../types/city';
import {Offer} from '../../types/offer';
import {URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  city: City;
  offers: Offer[];
}

function Map({city, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map: leaflet.Map | null = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, defaultCustomIcon]);

  return (
    <div
      style={{height: '800px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
