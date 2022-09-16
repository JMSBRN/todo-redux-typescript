import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  position: absolute;
	top: 30%;
	right: 12%;
	width: 40%;
	height: 40%;
	font-size: 1vh;
	z-index: 2;
`;
export const Settings = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(100, 100, 100, 0.8);
	color: var(--text-color);
	font-size: 3em;
	`;
export const Language = styled.select`
  width: auto;
	max-width: 100%;
	font-size: .8em;
	background-color: transparent;
	border: 1px solid var(--border-color) ;
	color: var(--text-color);
	option {
		background-color: transparent;
		color: var( --text-color-grey);
	}
`;
