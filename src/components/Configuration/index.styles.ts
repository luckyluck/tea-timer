import styled from 'styled-components';

export const ConfigurationContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  padding: 10px 15px;
  z-index: 2;
  top: 0;
  left: 0;
  background: #fff;
`;

export const ConfigurationSection = styled.section`
  margin: 15px 0;
  
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  & > input {
    opacity: 0;
    width: 0;
    height: 0;
    
    & + div {
      background-color: #2196F3;
    }
    
    &:focus + div {
      box-shadow: 0 0 1px #2196F3;
    }
    
    &:checked + div:before {
      transform: translateX(26px);
    }
  }
  
  & > div {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    
    &:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;
    }
  }
`;
