import { useContext } from 'react'
import { Marker, Popup, Circle } from 'react-leaflet'
import { Store } from '../../context/AppContext'

const MapMaker = ({ markers = [] }) => {
  const { state } = useContext(Store)

  return (
    <>
      {markers.map((marker) => (
        <Marker position={[marker.lng, marker.lat]} key={marker.lng}>
          <Popup>{marker?.name}</Popup>
          {state.circle && (
            <Circle
            color="#2B5FAA"
            fillColor="#2B5FAA"
            fillOpacity={0.3}
            radius={500}
            center={[marker.lng, marker.lat]}
          />
          )}
        </Marker>
      ))}
    </>
  )
}

export default MapMaker
