import { Marker, Popup } from 'react-leaflet'
// import markerBlue from '../../assets/maker-blue.svg'
import { markerBlue, markerRed } from './markerPoint'

function MapMaker ({ markers = [] }) {
  return (
    <>
      {markers.map((marker) => (
        <Marker
          position={[marker.lng, marker.lat]}
          key={marker.lng}
          icon={marker.active ? markerBlue : markerRed}
        >
          <Popup>
            <a
              href={`https://www.google.com/maps/search/${marker.lng},+${marker.lat}?entry=tts&shorturl=1`}
              target="_blank"
            >
              {marker?.name}
            </a>
          </Popup>
        </Marker>
      ))}
    </>
  )
}

export default MapMaker
