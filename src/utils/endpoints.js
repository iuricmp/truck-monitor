import { SEARCH_POI_BASE_URI } from '../constants/endpoints'

export function buildSearchUrl(lat, lng, poiType, radius = null) {
  const POI_TYPE = '&cat=' + poiType
  const AT = '&at=' + lat + ',' + lng
  const RADIUS = '&in=' + lat + ',' + lng + ';r=' + radius
  const SIZE = '&size=' + (radius ? parseInt(radius) / 10 : '1000')
  return SEARCH_POI_BASE_URI + POI_TYPE + (radius ? RADIUS : AT) + SIZE
}
