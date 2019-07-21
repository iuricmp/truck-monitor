import React from 'react'
import { storiesOf } from '@storybook/react'
import GeoMenu from '../src/components/GeoMenu'

const vehicles = [
  { id: 1, licensePlate: 'AVIB9393', position: [51.4912, 0.15] },
  { id: 2, licensePlate: 'VOI8382A', position: [51.5912, 0.35] },
  { id: 3, licensePlate: 'ABI838AA', position: [51.4112, 0.15] },
  { id: 4, licensePlate: 'WISOPSI9', position: [51.4212, 0.15] },
  { id: 5, licensePlate: 'GJOIAOV3', position: [51.2282, 0.056] },
  { id: 6, licensePlate: 'JORMAU1A', position: [51.38282, 0.034] },
  { id: 7, licensePlate: 'JOMMPQJA', position: [51.94882, 0.013] },
  { id: 8, licensePlate: 'VVOIAR93', position: [51.82372, 0.034] },
  { id: 9, licensePlate: '838ANDIA', position: [51.83828, 0.035] },
  { id: 10, licensePlate: 'VJAMAIR', position: [51.83872, 0.5] },
  { id: 11, licensePlate: 'VOAIRMA', position: [51.8282, 0.78] },
  { id: 12, licensePlate: 'MAIOAIA', position: [51.83828, 0.74] },
  { id: 13, licensePlate: 'MAIOVAS', position: [51.8282, 0.234] }
]

const defaultProps = {
  vehicles: vehicles,
  handleClick: () => {}
}

storiesOf('GeoMenu', module)
  .add('default', () => <GeoMenu {...defaultProps} />)
  .add('loading', () => <GeoMenu {...defaultProps} loading />)
