import { Marker, Popup } from 'react-leaflet'

const MapMaker = ({ markers = [] }) => {
  return (
    <>
      {markers.map((marker) => (
        <Marker position={[marker.lng, marker.lat]} key={marker.lng}>
          <Popup><a href={`https://www.google.com/maps/search/${marker.lng},+${marker.lat}?entry=tts&shorturl=1`} target="_blank" >{marker?.name}</a> <p>{marker.description}</p></Popup>
        </Marker>
      ))}
    </>
  )
}

export default MapMaker
