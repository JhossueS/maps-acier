import { MapContainer as MapWrapper, TileLayer } from 'react-leaflet'
import MapControls from '../MapControls'
import MapMaker from '../MapMarker'
import { coordinates } from '../../utils/coordinates'
const stylesMap = {
  width: '100%',
  height: '100vh'
}

const MapContainer = () => {
  return (
    <div className='map--container'>
      <MapWrapper
        center={[-0.719605, -78.859488]}
        zoom={7}
        style={stylesMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMaker markers={coordinates}/>
      </MapWrapper>
      <MapControls />
    </div>
  )
}

export default MapContainer
