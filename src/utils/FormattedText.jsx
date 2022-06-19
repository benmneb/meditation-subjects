import { Fragment } from 'react'

import { Box, Typography } from '@material-ui/core'

import reactStringReplace from 'react-string-replace'

import { Footnote } from '../utils'

export default function FormattedText({ data, ...props }) {
	return data?.map((paragraph) =>
		Object.values(paragraph)[0].map((text, index) =>
			Object.keys(paragraph).includes('footNotes') ? (
				<Typography key={Object.keys(text)[index]} paragraph {...props}>
					{reactStringReplace(
						text,
						new RegExp(
							`(${Object.keys(paragraph.footNotes).join('\\s|')}\\s)`,
							'g'
						),
						(match, i) => (
							<Fragment key={i}>
								<Footnote
									data={{
										number: match.trim(),
										content: paragraph.footNotes[match.trim()],
									}}
								>
									[{match.trim()}]
								</Footnote>
								{'\u00A0'}
							</Fragment>
						)
					)}
				</Typography>
			) : (
				// put this above also, in and out of footnotes
				<Typography key={Object.keys(text)[index]} paragraph {...props}>
					{reactStringReplace(text, /<i>(.*)<\/i>/g, (match, i) => (
						<Box key={i} component="span" fontStyle="italic">
							{match}
						</Box>
					))}
				</Typography>
			)
		)
	)
}
