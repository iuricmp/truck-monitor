import React from 'react'
import { storiesOf } from '@storybook/react'
import GeoMap from '../src/components/GeoMap'

const gasStations = [
  {
    key: 'marker1',
    position: [51.5, -0.1],
    content: 'Gas Station 1',
    iconType: 'gasStation'
  },
  {
    key: 'marker2',
    position: [51.51, -0.1],
    content: 'Gas Station 2',
    iconType: 'gasStation'
  },
  {
    key: 'marker3',
    position: [51.49, -0.05],
    content: 'Gas Station 3',
    iconType: 'gasStation'
  }
]

const vehicles = [
  {
    key: 'vehicle1',
    position: [51.561, -0.1],
    content: 'Vehicle 1',
    iconType: 'currentLocation'
  },
  {
    key: 'vehicle2',
    position: [51.51443, -0.12],
    content: 'Vehicle 2',
    iconType: 'currentLocation'
  },
  {
    key: 'vehicle3',
    position: [51.4912, 0.05],
    content: 'Vehicle 3',
    iconType: 'currentLocation'
  }
]

const markers = [gasStations, vehicles]
console.group('markers', markers)

storiesOf('GeoMap', module)
  .add('empty state', () => <GeoMap />)
  .add('with markers', () => <GeoMap pois={gasStations} vehicles={vehicles} />)
