import styled from 'styled-components';

const AppWrapper = styled.div`
  color: ${(props) => (props.isRed ? 'red' : 'yellow')};
  background: black;
`;

// 添加伪类  hover
const Alink = styled.a`
  color: yellow;
  :hover {
    color: red;
  }
`;

export { AppWrapper, Alink };
