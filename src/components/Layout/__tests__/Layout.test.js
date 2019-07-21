import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { act } from 'react-dom/test-utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Layout from '..'

const mock = new MockAdapter(axios)

afterEach(cleanup)

beforeEach(() => {
  mock.onGet('/vehicles/lastPosition').reply(200, {
    vehicles: [{ id: 1, licensePlate: 'AVIB9393', position: [51.4912, 0.15] }]
  })
})

describe('<Layout />', () => {
  test('Render correctly', async () => {
    const spy = jest.spyOn(axios, 'get')

    // THIS act(()... HAS NO EFFECTS :(
    // TODO: fix (Warning: An update to Layout inside a test was not wrapped in act(...).)
    // related with: https://github.com/testing-library/react-testing-library/issues/281
    act(() => {
      render(<Layout />)
    })

    expect(spy).toHaveBeenCalledTimes(1)

    spy.mockRestore()
    // TODO: test map rendering, search dispatch events, Axios calls....
  })
})
