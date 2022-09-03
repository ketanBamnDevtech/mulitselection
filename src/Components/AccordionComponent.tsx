import React, { useState, Fragment } from 'react'
import * as ASC from 'Components/AccordionStyledComponent';
import SelectComponent from 'Shared/SelectComponent';

const AccordionComponent = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const handleOpen = () => {
		setIsOpen(!isOpen)
	}
	return (
		<Fragment>
			<ASC.CollapsibleContainer type="button" onClick={handleOpen}>Open Collapsible</ASC.CollapsibleContainer>
			{isOpen && <ASC.Container>
				<SelectComponent />
			</ASC.Container>}
		</Fragment>
	)
}

export default AccordionComponent
