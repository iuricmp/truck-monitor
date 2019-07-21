import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GeoMenu from '..'

afterEach(cleanup)

describe.only('GeoMenu', () => {
  it('renders correctly', async () => {
    const props = {
      handleClick: jest.fn()
    }
    const { getByText, getByTestId } = render(<GeoMenu {...props} />)

    expect(getByText('Apply')).toBeEnabled()
    expect(getByTestId('select-poi-type')).toBeEnabled()
    expect(getByTestId('select-radius')).toBeEnabled()
    // TODO: test Select content values...
  })

  it("should call mock function when 'Apply' button is clicked", async () => {
    const handleClickMock = jest.fn()
    const props = {
      handleClick: handleClickMock
    }
    const { getByText } = render(<GeoMenu {...props} />)
    fireEvent.click(getByText('Apply'))

    expect(handleClickMock).toHaveBeenCalledTimes(1)
    // TODO: Test result values...
  })

  it('should disable field when `disabled` property is true', async () => {
    const props = {
      handleClick: jest.fn(),
      disabled: true
    }
    const { getByText, getByTestId } = render(<GeoMenu {...props} />)

    expect(getByText('Apply')).toBeDisabled()

    // FYI: toBeDisabled() does not work for Material-UI/Select
    // expect(getByTestId('select-poi-type')).toBeDisabled()
    expect(getByTestId('select-poi-type')).toHaveClass('Mui-disabled')
    expect(getByTestId('select-radius')).toHaveClass('Mui-disabled')
  })
})
