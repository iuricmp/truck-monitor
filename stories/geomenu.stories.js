import React from 'react'
import { storiesOf } from '@storybook/react'
import GeoMenu from '../src/components/GeoMenu'

storiesOf('GeoMenu', module)
  .add('default', () => <GeoMenu />)
  .add('disabled', () => <GeoMenu disabled />)
