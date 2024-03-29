import React, { useState, Fragment } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import { options } from 'Utils'
import * as TSC from 'Components/TabsStyledComponent'



const SelectComponent = () => {
  const [selectedFilters, setSelectedFilters] = useState(["favourites", "engagements"])

  const onSelect = (option: string) => {
    if (!selectedFilters.includes(option)) setSelectedFilters(current => [...current, option])
  }

  const onRemove = (option: string) => {
    const index = selectedFilters.indexOf(option);
    if (index > -1) {
      selectedFilters.splice(index, 1);
    }
    setSelectedFilters(selectedFilters => [...selectedFilters])
  }

  return (
    <Fragment>
      <Stack spacing={1} direction="row"
        divider={<Divider orientation="vertical" flexItem />}>
        {options.map((option) =>
          <div key={option.value}>
            <Chip
              label={option.label}
              onClick={() => selectedFilters.includes(option.value) ? onRemove(option.value) : onSelect(option.value)}
              onDelete={() => selectedFilters.includes(option.value) ? onRemove(option.value) : onSelect(option.value)}
              deleteIcon={selectedFilters.includes(option.value) ? <DeleteIcon /> : <DoneIcon />}
            />
          </div>)}
      </Stack>
      {selectedFilters.map((filter: string, index: any) =>
        <div key={index}>
          <TSC.TabsDemoContainer>
            {filter}
          </TSC.TabsDemoContainer>
        </div>
      )}
    </Fragment>
  );
}


export default SelectComponent