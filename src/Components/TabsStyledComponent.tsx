import styled from "styled-components";

interface ITabItems {
  activeTab?: boolean
}

export const TabsContainer = styled.div`
	width: 500px;
  border: 5px solid rgb(4,59,92);
  background-color: rgb(4,59,92);
	border-radius: .5em;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin: 1em;
`

export const TabsDemoContainer = styled.div`
	width: auto;
  border: 5px solid rgb(4,59,92);
  background-color: rgb(4,59,92);
	border-radius: .5em;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  margin: 1em;
  color: #ffffff
`

export const TabItems = styled.div<ITabItems>`
	width: 100px;
  height: auto;
  padding: 10px;
  background-color: rgb(4,59,92);
  border: ${props => props.activeTab ? "2px solid #ffffff" : ""};
	cursor: pointer;
`
export const SelectDemo = styled.div`
  padding: 10px;
  display: flex;
  margin: 1em;
`