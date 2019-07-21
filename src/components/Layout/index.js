import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GeoMenu from '../GeoMenu'
import GeoMap from '../GeoMap'
import { buildSearchUrl } from '../../utils/endpoints'

function Layout() {
  const [vehicles, setVehicles] = useState()
  const [pois, setPois] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let didCancel = false

    const fetchData = async () => {
      try {
        const result = await axios.get('/api/vehicles')
        if (!didCancel) {
          console.log('response', result.data)
          setVehicles(result.data.vehicles)
        }
      } catch (error) {
        if (!didCancel) {
          console.error(error)
        }
      }
    }

    fetchData()

    return () => {
      didCancel = true
    }
  }, [])

  const findPlace = async (lat, lng, poiType, radius) => {
    setLoading(true)
    try {
      const result = await axios.get(buildSearchUrl(lat, lng, poiType, radius))
      setPois(result.data.results.items)
    } catch (error) {
      // TODO: Add Bugsnag
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const searchHandleClick = ({ vehicle, poiType, radius }) => {
    const { position } = vehicle
    findPlace(position[0], position[1], poiType.value, radius.value)
  }

  return (
    <div
      data-testid="layout"
      style={{
        height: '100vh',
        padding: 0
      }}
    >
      <GeoMenu
        vehicles={vehicles}
        handleClick={searchHandleClick}
        loading={loading}
      />
      <GeoMap pois={pois} vehicles={vehicles} />
    </div>
  )
}

export default Layout
