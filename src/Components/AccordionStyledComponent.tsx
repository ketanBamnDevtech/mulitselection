import styled from 'styled-components'

export const CollapsibleContainer = styled.button`
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
	&:hover {
		background-color: #555;
	}	
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {width: auto}
  
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {width: 100%}
  
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {width: 100%}
  
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {width: 100%}
  
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {width: 100%}
`

export const Container = styled.div`
	padding: 0 18px;
	overflow: hidden;
  width:100%;
	background-color: #f1f1f1;
  @media only screen and (max-width: 600px) {
    width: auto;
  }
`