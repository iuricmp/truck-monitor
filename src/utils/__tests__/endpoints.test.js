import { buildSearchUrl } from '../endpoints'

jest.mock('../../constants/endpoints', () => ({
  SEARCH_POI_BASE_URI: 'https://something.here'
}))

describe('Search POI url builder', () => {
  it('should return searchable uri', () => {
    const result = buildSearchUrl('11.1', '22.2', 'restaurant')
    expect(result).toBe(
      'https://something.here&cat=restaurant&at=11.1,22.2&size=1000'
    )
  })

  it('should return searchable uri when radius is empty', () => {
    const result = buildSearchUrl('11.1', '22.2', 'restaurant', '')
    expect(result).toBe(
      'https://something.here&cat=restaurant&at=11.1,22.2&size=1000'
    )
  })

  it('should return search uri with radius', () => {
    const result = buildSearchUrl('11.1', '22.2', 'restaurant', '10000')
    expect(result).toBe(
      'https://something.here&cat=restaurant&in=11.1,22.2;r=10000&size=1000'
    )
  })
})
