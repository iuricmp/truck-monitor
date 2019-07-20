import Leaflet from 'leaflet'

export function iconCreate(element) {
  return !element || !element.icon
    ? defaultIcon
    : new Leaflet.Icon({
        iconUrl: element.icon,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -15]
      })
}
export const CurrentLocationIcon = new Leaflet.Icon({
  iconUrl: require('../../assets/icons/icn-current-location.png'),
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -15]
})
export const defaultIcon = new Leaflet.Icon.Default()
