export type IconProps = {
	stroke?: string,
	className?: string,
	fill?: string
}

export type SelectedData = {
	tabName: string,
	filters: []
}

export type SelectedTab = {
	id: number,
	name: string
}

export type MulitSelectFilter = {
	label: string,
	value: string
}