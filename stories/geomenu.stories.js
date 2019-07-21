import React from 'react'
import { storiesOf } from '@storybook/react'
import GeoMenu from '../src/components/GeoMenu'

const defaultProps = {
  handleClick: () => {}
}

storiesOf('GeoMenu', module)
  .add('default', () => <GeoMenu {...defaultProps} />)
  .add('disabled', () => <GeoMenu {...defaultProps} disabled />)
