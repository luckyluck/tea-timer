import styled from 'styled-components';
import { animated } from 'react-spring/renderprops';

export const ActionButton = styled(animated.button)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  position: relative;
  z-index: 1;
  
  &:focus {
    outline: none;
  }
  
  :disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;
