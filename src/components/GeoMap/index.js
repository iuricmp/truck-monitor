import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import { CurrentLocationIcon, iconCreate } from './Icons'

const PopupMarker = ({ content, position, icon }) => {
  return (
    <Marker position={position} icon={icon}>
      <Popup>{content}</Popup>
    </Marker>
  )
}

function GeoMap({ pois, vehicles }) {
  const [mapState] = useState({
    lat: 51.7758903,
    lng: 6.0193503,
    zoom: 9
  })

  const initialPosition = [mapState.lat, mapState.lng]

  const [poisMarkers, setPoisMarkers] = useState(undefined)
  useEffect(() => {
    if (pois && pois.length > 0) {
      setPoisMarkers(null)
      const icon = iconCreate(pois[0])
      const items = pois.map(({ id, title, ...props }) => (
        <PopupMarker key={'poi_' + id} {...props} content={title} icon={icon} />
      ))
      setPoisMarkers(items)
    }
  }, [pois])

  const [vehiclesMarkers, setVehiclesMarkers] = useState(undefined)
  useEffect(() => {
    if (vehicles && vehicles.length > 0) {
      const items = vehicles.map(({ id, licensePlate, ...props }) => (
        <PopupMarker
          key={'vehicle_' + id}
          content={licensePlate}
          {...props}
          icon={CurrentLocationIcon}
        />
      ))
      setVehiclesMarkers(items)
    }
  }, [vehicles])

  return (
    <Map
      id="map"
      center={initialPosition}
      zoom={mapState.zoom}
      zoomControl={false}
      style={{ height: '100vh' }}
    >
      <ZoomControl position="topright" />

      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {poisMarkers}
      {vehiclesMarkers}
    </Map>
  )
}

GeoMap.propTypes = {
  pois: PropTypes.array,
  vehicles: PropTypes.array
}

export default GeoMap
