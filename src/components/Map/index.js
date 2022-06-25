import { MapContainer, TileLayer } from 'react-leaflet'
import MapMaker from '../MapMarker'

const positions = [
  { lng: -0.273785, lat: -78.537917 },
  { lng: -0.2680611, lat: -78.5335088 },
  { lng: -0.267685, lat: -78.527231 },
  { lng: -0.2625077, lat: -78.5427692 },
  { lng: -0.157846, lat: -78.477334 },
  { lng: -0.206219, lat: -78.500739 },
  { lng: -0.201985, lat: -78.498746 },
  { lng: -0.204129, lat: -78.495031 },
  { lng: -0.224966, lat: -78.512212 },
  { lng: -0.218983, lat: -78.521899 },
  { lng: -0.223772, lat: -78.507461 },
  { lng: -0.189814, lat: -78.510258 }
]

const stylesMap = {
  width: '100%',
  height: '100vh'
}

const Map = () => {
  return (
    <div className='map--container'>
      <MapContainer
        center={[-0.180454, -78.490266]}
        zoom={13}
        style={stylesMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMaker markers={positions}/>
      </MapContainer>
    </div>
  )
}

export default Map
