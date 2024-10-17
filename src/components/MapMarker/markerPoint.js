import L from 'leaflet'
import iconRed from '../../assets/maker-red.svg'
import iconBlue from '../../assets/maker-blue.svg'

export const markerBlue = L.icon({
  iconUrl: iconBlue,
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
})

export const markerRed = L.icon({
  iconUrl: iconRed,
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76]
})
