import React, { useState, Fragment } from 'react'
import Facebook from 'Icons/Facebook';
import Instagram from 'Icons/Instagram';
import Twitter from 'Icons/Twitter';
import * as TSC from 'Components/TabsStyledComponent'
import MultiSelectDown from 'Shared/MultiSelectDrop';
import { SelectedData, SelectedTab, MulitSelectFilter } from 'Types';

const Tabs: React.FC = () => {
	const TabsData = [
		{
			id: 1,
			name: "Facebook",
			icon: <Facebook fill="white" stroke="white" />
		},
		{
			id: 2,
			name: "Instagram",
			icon: <Instagram fill="white" stroke="white" />
		},
		{
			id: 3,
			name: "Twitter",
			icon: <Twitter fill="white" stroke="white" />
		}

	]
	const [activeTab, setActiveTab] = useState<SelectedTab>();
	const [data, setData] = useState<SelectedData>()

	const handleTabChange = (tabID: number, tabName: string) => {
		setActiveTab({
			id: tabID,
			name: tabName
		})
	}

	return (
		<Fragment>
			<TSC.TabsContainer>
				{TabsData.map((tab) => <div key={tab.id}>
					<TSC.TabItems activeTab={activeTab?.id === tab.id} onClick={() => handleTabChange(tab.id, tab.name)}>{tab.icon}</TSC.TabItems>
				</div>)}
			</TSC.TabsContainer>
			{activeTab && <MultiSelectDown activeTab={activeTab} setData={setData} />}
			<div>
				<div><strong>Tab Name:</strong> {data?.tabName}</div>
				<strong>Filters Selected:</strong>
				<Fragment>
					{data?.filters.map((filter: MulitSelectFilter) => <p>{filter.label}</p>)}
				</Fragment>
			</div>
		</Fragment>
	)
}

export default Tabs;
