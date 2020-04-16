import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    max-width: 1120px;
    margin: 0 auto;
    display: flex-row;
    align-items: center;
    justify-content: center;
    padding: 40px;
}
`;

export const ContainerTable = styled.div`

    padding: 50px;
    margin-bottom: 50px;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0px 10px 10px 0px rgba(153,153,153,0.1);
    background: #fff;
    h1 {
        margin-top:30px;
    }
    ul {
        padding: 20px;
        float:left;
    }
    svg {
        float: right;
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