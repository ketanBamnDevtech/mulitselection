import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { SelectedTab } from 'Types';
import 'Shared/MultiSelect.scss'


interface IMultiSelectDown {
  activeTab: SelectedTab
  setData: React.Dispatch<React.SetStateAction<any>>
}

const options = [
  { label: "Favourites", value: "favourites" },
  { label: "Top Hashtags", value: "top_hashtags" },
  { label: "Top Entities", value: "top_entities" },
  { label: "Sentiment Trend", value: "sentiment_trend" },
  { label: "Aspect Sentiment", value: "aspect_sentiment" },
  { label: "Post Insights", value: "post_insights" },
  { label: "Sentiment By Category", value: "sentiment_by_category" },
  { label: "Engagements", value: "engagements" },
];

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