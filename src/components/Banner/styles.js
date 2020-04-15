import styled from 'styled-components';

export const Container = styled.div`
  background:  ${({ theme }) => theme.primaryDark};
  margin-bottom: 50px;
  width: auto;
  overflow: hidden;

  img {
    width: auto;
  }
`;