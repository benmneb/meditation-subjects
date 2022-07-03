import PropTypes from 'prop-types'

import {
	Checkbox,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
} from '@mui/material'

import { useSelector } from 'react-redux'

function styled(camelCase) {
	return camelCase
		.replace(/([A-Z])/g, (match) => ` ${match}`)
		.toLowerCase()
		.replace(/^./, (match) => match.toUpperCase())
		.trim()
		.replace(/s$/, '(s)')
		.replace(/for$/, 'for...')
}

export default function FiltersSelect(props) {
	const { handleChange, filter, multiSelect } = props

	const activeFilters = useSelector((state) => state.activeFilters)
	const filters = useSelector((state) => state.filters)

	const styledFilter = styled(filter)

	return (
		<FormControl
			variant="outlined"
			size="small"
			margin="dense"
			sx={{
				width: 200,
				minWidth: 185,
			}}
		>
			<InputLabel id={`${filter}-label`}>{styledFilter}</InputLabel>
			<Select
				// universal
				labelId={`${filter}-label`}
				value={multiSelect ? [...activeFilters[filter]] : activeFilters[filter]}
				onChange={(event) => handleChange(event, `${filter}`)}
				sx={{
					'.MuiSelect-select': {
						borderRadius: 1,
						'&:focus': {
							borderRadius: 1,
						},
					},
				}}
				// single select
				label={!multiSelect && styledFilter}
				// multi select
				multiple={multiSelect}
				input={multiSelect ? <OutlinedInput label={styledFilter} /> : null}
				renderValue={(selected) =>
					multiSelect ? selected.join(', ') : selected
				}
				MenuProps={{ variant: multiSelect ? 'menu' : 'selectedMenu' }}
			>
				{!multiSelect && (
					<MenuItem value="">
						<em>{filter.startsWith('max') ? 'Any' : 'All'}</em>
					</MenuItem>
				)}
				{filters[filter].map((type) => (
					<MenuItem
						key={type}
						value={type}
						sx={{
							...(multiSelect && {
								'.MuiMenuItem-root': {
									paddingTop: 3,
									paddingBottom: 3,
								},
							}),
						}}
					>
						{multiSelect && (
							<Checkbox
								size="small"
								checked={activeFilters[filter].indexOf(type) > -1}
							/>
						)}
						<ListItemText primary={type} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

FiltersSelect.propTypes = {
	handleChange: PropTypes.func.isRequired,
	filter: PropTypes.any.isRequired,
	multiSelect: PropTypes.bool.isRequired,
}

FiltersSelect.defaultProps = {
	multiSelect: false,
}
