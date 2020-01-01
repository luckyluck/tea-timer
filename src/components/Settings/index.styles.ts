import styled from 'styled-components';

export const ConfigurationContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  padding: 20px 30px;
  z-index: 2;
  top: 0;
  left: 0;
  background: #fff;
  transition: left .3s;
`;

export const ToggleButton = styled.span`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
