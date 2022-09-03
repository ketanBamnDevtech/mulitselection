import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { SelectedTab } from 'Types';
import {options} from 'Utils'
import 'Shared/MultiSelect.scss'


interface IMultiSelectDown {
  activeTab: SelectedTab
  setData: React.Dispatch<React.SetStateAction<any>>
}

const MultiSelectDown = (props: IMultiSelectDown) => {
  const [selected, setSelected] = useState([]);

  const onMultiSelect = (e: []) => {
    console.log(e)
    setSelected(e)
    const data = {
      tabName: props.activeTab?.name,
      filters: e
    }
    props.setData(data)
  }
  return (
    <MultiSelect
      options={options}
      value={selected}
      onChange={onMultiSelect}
      labelledBy="Select"
    />
  );
};

export default MultiSelectDown;