import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;


    h1 {
        font-size: 34px;
        line-height: 120%;
        font-weight: 700;
        text-align: center
    }
    h2 {
        margin-top: 7px;
        color: ${({ theme }) => theme.primaryDark};
        margin-bottom: 30px;
        font-size: 21px;
        text-align: center
    }

    .separator {
        position: relative;
        padding: 0 25px;
    }
    .separator .vertical-line {
        background-color: ${({ theme }) => theme.primaryDark};;
        width: 1px;
        height: 100%;
        position: absolute;
        left: 49%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .separator p {
        background-color: ${({ theme }) => theme.primaryDark};
        padding: 5px 10px;
        min-width: 48px;
        border-radius: 24px;
        font-size: 24px;
        color: white;
        text-align: center;
        display: inline-block;
        position: relative;
        margin-top: 53px;
    }

    button {
        font-size: 17px;
        border-radius: 8px;
        line-height: 48px;
        height: 48px;
        padding: 0 30px;
        background-color: ${({ theme }) => theme.primaryDark};
        color: #FFF;
    }

    
`;

export const FormLogin = styled.div`
    width: 400px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;

    form {
        display: flex;
        width: 300px;
        max-width: 300px;
        min-width: 300px;
        flex-flow: column;
        justify-content: flex-start;
    }
   
`;

export const FormRegister = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: flex-start;
    
     form {
        display: flex;
        width: 300px;
        max-width: 300px;
        min-width: 300px;
        flex-flow: column;
        justify-content: flex-start;
    }
   

   
    
`;