import React from 'react'
import { MulitSelectFilter } from 'Types';

const MultiSelectDemo = ({ selectedFilters ,onRemove}: any) => {
	return (
		<>
			{selectedFilters.map((filter: MulitSelectFilter) => <div key={filter.value} className="chip">
				{filter.label}
				<span className="closebtn" onClick={()=>onRemove(filter)}>&times;</span>
			</div>)}
		</>
	)
}

export default MultiSelectDemo
