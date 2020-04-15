import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex-row;
    align-items: center;
    justify-content: center;
    margin-top:10%;
}
`;

export const ContainerTable = styled.div`

    background: ${({ theme }) => theme.primaryBackground};
    padding: 50px;
    margin-bottom: 50px;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 2px 2px #999;

    h1 {
        margin-top:30px;
    }
    ul {
        padding: 20px;
    }
    ul li {
        list-style-type: none;
        padding: 3px;
    }
    strong {
        color: ${({ theme }) => theme.primaryDark};
        padding-right: 2px;
    }
`;