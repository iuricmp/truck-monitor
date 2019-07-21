import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GeoMap from '..'

afterEach(cleanup)

test('Render correctly', async () => {
  const props = {
    handleClick: () => {}
  }
  const { container } = render(<GeoMap {...props} />)

  expect(container.firstChild).toHaveClass(
    'leaflet-container leaflet-grab leaflet-touch-drag'
  )

  // TODO: We need more tests here...
  // Test icons renderer
})
