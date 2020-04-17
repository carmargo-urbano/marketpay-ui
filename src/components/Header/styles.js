import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  background: ${({ theme }) => theme.primaryLight};
`;

export const HeaderLink = styled(Link)`

> img {
  position: absolute;
  top: 1px;
}
`;

