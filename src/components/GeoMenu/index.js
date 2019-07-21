import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import Select from 'react-select'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    'z-index': '100000',
    top: '10px',
    left: '10px',
    'background-color': 'white',
    width: 'fit-content'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180
  },
  selectVehicle: {
    minWidth: 220
  },
  formControlButton: {
    'padding-top': '2px',
    margin: theme.spacing(1)
  }
}))

const poiOptions = [
  { value: 'petrol-station', label: 'Gas Stations' },
  { value: 'restaurant', label: 'Restaurants' },
  { value: 'accommodation', label: 'Hotels' }
]

const radiusOptions = [
  { value: '10000', label: '10km' },
  { value: '20000', label: '20km' },
  { value: '30000', label: '30km' },
  { value: '40000', label: '40km' },
  { value: '50000', label: '50km' }
]

export function GeoMenu({ vehicles = [], handleClick, loading = false }) {
  const classes = useStyles()

  const [values, setValues] = useState({
    vehicle: '',
    poiType: '',
    radius: ''
  })

  const [vehicleOptions, setVehicleOptions] = useState()
  useEffect(() => {
    vehicles.forEach(e => {
      e.label = e.licensePlate
      e.value = e.id
    })
    setVehicleOptions(vehicles)
  }, [vehicles])

  const handleChange = name => event => {
    setValues({ ...values, [name]: event })
  }

  return (
    <div className={classes.container} noValidate autoComplete="off">
      <FormControl
        data-testid="select-plate"
        className={classes.formControl}
        disabled={loading}
      >
        <Select
          inputId="select-plate"
          className={classes.selectVehicle}
          isSearchable
          placeholder={'Select by license plate'}
          value={values.vehicle}
          onChange={handleChange('vehicle')}
          options={vehicleOptions}
          isDisabled={loading}
        />
      </FormControl>

      <FormControl
        data-testid="select-poi-type"
        className={classes.formControl}
        disabled={loading}
      >
        <Select
          inputId="select-poi-type"
          className={classes.poiType}
          isSearchable
          placeholder={'Select POI type'}
          value={values.poiType}
          onChange={handleChange('poiType')}
          options={poiOptions}
          isDisabled={loading}
        />
      </FormControl>

      <FormControl
        data-testid="select-radius"
        className={classes.formControl}
        disabled={loading}
      >
        <Select
          id="select-radius"
          className={classes.radius}
          isSearchable
          placeholder={'Select radius'}
          value={values.radius}
          onChange={handleChange('radius')}
          options={radiusOptions}
          isDisabled={loading}
        />
      </FormControl>

      <FormControl className={classes.formControlButton}>
        <Button
          onClick={() => handleClick(values)}
          variant="contained"
          disabled={loading || (!values.vehicle || !values.poiType)}
        >
          Apply
          {loading && <CircularProgress size={24} />}
        </Button>
      </FormControl>
    </div>
  )
}

GeoMenu.propTypes = {
  vehicles: PropTypes.array,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default GeoMenu
