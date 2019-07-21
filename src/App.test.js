import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from './App'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(axios)

beforeEach(() => {
  mock.onGet('/vehicles/lastPosition').reply(200, {
    vehicles: [{ id: 1, licensePlate: 'AVIB9393', position: [51.4912, 0.15] }]
  })
})

it('renders without crashing', () => {
  act(() => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
