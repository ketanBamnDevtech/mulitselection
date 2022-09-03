import React, { Fragment, useState, useEffect } from 'react'
import * as TSC from 'Components/TabsStyledComponent'
import MultiSelectDemo from 'Shared/MultiSelectDemo';
import { options } from 'Utils'
import { MulitSelectFilter } from 'Types';

const initialState = [
	{ label: "Favourites", value: "favourites" },
	{ label: "Top Hashtags", value: "top_hashtags" }
]
const TabsDemo = () => {
	const [selectedFilters, setSelectedFilter] = useState(initialState)

	const onSelect = (option: MulitSelectFilter) => {
		if (option) setSelectedFilter(current => [...current, option])
	}

	const onRemove = (option: MulitSelectFilter) => {
		const index = selectedFilters.indexOf(option);
		if (index > -1) {
			selectedFilters.splice(index, 1);
		}
		setSelectedFilter(selectedFilters => [...selectedFilters])
	}
	return (
		<Fragment>
			<TSC.TabsDemoContainer>
				{options.map((option) =>
					<span key={option.value} onClick={() => onSelect(option)}>{option.label}</span>)}
			</TSC.TabsDemoContainer>
			<TSC.SelectDemo><MultiSelectDemo selectedFilters={selectedFilters} onRemove={onRemove} /></TSC.SelectDemo>
		</Fragment>
	)
}

export default TabsDemo
