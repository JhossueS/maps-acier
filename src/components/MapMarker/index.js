import { Marker, Popup, Circle } from 'react-leaflet'

const MapMaker = ({ markers = [] }) => {
  return (
    <>
      {markers.map((marker) => (
        <Marker position={[marker.lng, marker.lat]} key={marker.lng}>
          <Popup>
            {marker?.name}
          </Popup>
          <Circle
            color="red"
            fillColor="#f03"
            fillOpacity={0.5}
            radius={1000}
            center={[marker.lng, marker.lat]}
          />
        </Marker>
      ))}
    </>
  )
}

export default MapMaker
