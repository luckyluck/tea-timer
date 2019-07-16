import styled from 'styled-components';
import { Button } from 'reactstrap';

export const ActionButton = styled(Button)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: all .3s ease-in-out;
  
  ${({ active }) => active && `
    transform: scale(5);
    z-index: 1;
  `}
`;
