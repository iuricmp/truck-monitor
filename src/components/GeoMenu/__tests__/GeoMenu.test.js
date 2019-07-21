import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GeoMenu from '..'

afterEach(cleanup)

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

describe.only('GeoMenu', () => {
  it('renders correctly', async () => {
    const props = {
      handleClick: jest.fn(),
      vehicles: vehicles
    }
    const { getByText, getByTestId } = render(<GeoMenu {...props} />)

    expect(getByText('Apply')).toBeDisabled()
    expect(getByTestId('select-poi-type')).toBeEnabled()
    expect(getByTestId('select-radius')).toBeEnabled()
    // TODO: test react-select content values...
  })

  it("should call mock function when 'Apply' button is clicked", async () => {
    const handleClickMock = jest.fn()
    const props = {
      handleClick: handleClickMock,
      vehicles: vehicles
    }
    const { getByTestId } = render(<GeoMenu {...props} />)

    const selectPlate = getByTestId('select-plate')
    selectPlate.value = 'AVIB9393'
    fireEvent.change(selectPlate)

    const selectPOI = getByTestId('select-poi-type')
    selectPOI.value = 'restaurant'
    fireEvent.change(selectPOI)

    const selectRadius = getByTestId('select-radius')
    selectRadius.value = '10000'
    fireEvent.change(selectRadius)

    // TODO: Mock react-select component to make it works...
    // expect(getByText('Apply')).toBeEnabled()
    // fireEvent.click(getByText('Apply'))
    // expect(handleClickMock).toHaveBeenCalledTimes(1)
  })

  it('should disable field when `loading` property is true', async () => {
    const props = {
      handleClick: jest.fn(),
      loading: true
    }
    const { getByText, getByTestId, debug } = render(<GeoMenu {...props} />)

    expect(getByText('Apply')).toBeDisabled()

    // TODO: test disable forms...
    // expect(getByTestId('select-poi-type')).toBeDisabled()
    // expect(getByTestId('select-radius')).toBeDisabled()

    // FYI: toBeDisabled() does not work for Material-UI/Select
    // expect(getByTestId('select-poi-type')).toBeDisabled()
    // TODO: Test Select component
  })
})
