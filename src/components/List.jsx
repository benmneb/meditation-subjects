import { useState, useEffect } from 'react'

import { styled } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'

import { subjects } from '../data'
import { MeditationCard } from './index'
import { setTotalVisibleSubjects } from '../store'

const Wrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(1),
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
	gridGap: theme.spacing(1),
	[theme.breakpoints.only('xs')]: {
		gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
		justifyItems: 'stretch',
	},
}))

export default function List() {
	const dispatch = useDispatch()

	const activeFilters = useSelector((state) => state.activeFilters)

	const [visibleSubjects, setVisibleSubjects] = useState(subjects)

	// display relevent subjects based on applied filters
	useEffect(() => {
		const flatFilters = Object.values(activeFilters).flat()
		const cleanFlatFilters = flatFilters.filter((e) => String(e).trim())

		if (cleanFlatFilters.length > 0) {
			setVisibleSubjects(
				subjects.filter((subject) =>
					cleanFlatFilters.every(
						(filter) =>
							Object.values(subject.filtersData).flat().indexOf(filter) > -1
					)
				)
			)
			dispatch(setTotalVisibleSubjects(visibleSubjects.length))
		} else {
			setVisibleSubjects(subjects)
			dispatch(setTotalVisibleSubjects(40))
		}
	}, [activeFilters, dispatch, visibleSubjects.length])

	return (
		<Wrapper>
			{visibleSubjects.map((subject, index) => (
				<MeditationCard
					number={index + 1}
					key={subject.id}
					data={subject}
					bgColor={subject.color}
				/>
			))}
		</Wrapper>
	)
}
