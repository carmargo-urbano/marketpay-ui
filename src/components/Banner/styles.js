import styled from 'styled-components';

export const Container = styled.div`
  background:  ${({ theme }) => theme.primaryDark};
  margin-bottom: 50px;
  width: auto;
  overflow: hidden;

  img {
    margin-top:30px;
    width: auto;
  }
`;