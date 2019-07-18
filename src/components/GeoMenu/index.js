import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}))

export function GeoMenu({ handleClick, disabled = false }) {
  const classes = useStyles()

  const [values, setValues] = React.useState({
    licensePlate: '',
    poiType: '',
    radius: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }
  return (
    <div className={classes.container} noValidate autoComplete="off">
      <FormControl className={classes.formControl} disabled={disabled}>
        <TextField
          id="text-field-license-plate"
          label="License Plate"
          value={values.licensePlate}
          onChange={handleChange('licensePlate')}
          disabled={disabled}
        />
      </FormControl>

      <FormControl className={classes.formControl} disabled={disabled}>
        <InputLabel htmlFor="select-poi-type">POI Type</InputLabel>
        <Select
          native
          data-testid="select-poi-type"
          value={values.poiType}
          onChange={handleChange('poiType')}
          disabled={disabled}
          inputProps={{
            name: 'poi-type',
            id: 'select-poi-type'
          }}
        >
          <option value="" />
          <option value={10}>Gas Stations</option>
          <option value={20}>Restaurants</option>
          <option value={30}>Hotels</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl} disabled={disabled}>
        <InputLabel htmlFor="select-radius">Radius</InputLabel>
        <Select
          native
          data-testid="select-radius"
          value={values.radius}
          onChange={handleChange('radius')}
          disabled={disabled}
          inputProps={{
            name: 'poi-type',
            id: 'select-radius'
          }}
        >
          <option value="" />
          <option value={10}>10 km</option>
          <option value={20}>20 km</option>
          <option value={30}>30 km</option>
          <option value={40}>40 km</option>
          <option value={50}>50 km</option>
        </Select>
      </FormControl>

      <Button
        onClick={() => handleClick(values)}
        variant="contained"
        disabled={disabled}
      >
        Apply
      </Button>
    </div>
  )
}

GeoMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default GeoMenu
