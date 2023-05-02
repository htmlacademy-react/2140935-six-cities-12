import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map/use-map';
import {City} from '../../types/city';
import {Offer} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps = {
  city: City;
  offers: Offer[];
  currentOffer: Offer | null;
  mapHeight: string;
}

function Map({city, offers, currentOffer, mapHeight}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map: leaflet.Map | null = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const defaultCustomIcon = leaflet.icon({
        iconUrl: URL_MARKER_DEFAULT,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });
      const currentCustomIcon = leaflet.icon({
        iconUrl: URL_MARKER_CURRENT,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          layer.remove();
        }
      });

      offers.forEach((point) => {
        const isCurrentOffer = currentOffer && point.id === currentOffer.id;
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: isCurrentOffer
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, city, currentOffer]);

  return (
    <div
      style={{height: `${mapHeight}`}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
