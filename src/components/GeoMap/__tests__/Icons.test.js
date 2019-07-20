import { iconCreate, defaultIcon } from '../Icons'

describe('Icon generator', () => {
  it('should return default when no match property', () => {
    const result = iconCreate({})
    expect(result).toBe(defaultIcon)
  })

  it('should return default when no match property', () => {
    const result = iconCreate(undefined)
    expect(result).toBe(defaultIcon)
  })

  it('should return a new Leaflet.Icon', () => {
    const result = iconCreate({})
    expect(result).toBe(defaultIcon)
  })

  it('should return a new Leaflet icon within a gasStation.png', () => {
    const result = iconCreate({ icon: 'gasStation.png' })
    expect(result.options.iconUrl).toBe('gasStation.png')
  })
})
