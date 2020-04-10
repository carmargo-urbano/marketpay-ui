import styled from "styled-components";

export const Container = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
margin: 20px 0;
background-color: white;
padding: 30px 25px;
border-radius: 5px;

  img {
    width: auto;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    width: 100%;
  display: block;
  margin-top: 8px;
  padding: 7px;
  font-size: 16px;
  color: #7159c1;
  border-radius: 2px;
  border: 1px solid #ccddef;
  outline-color: #7159c1;
  margin-bottom: 20px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    display: block;
    min-width: 120px;
    border: none;
    background-color: #7159c1;
    color: white;
    border-radius: 25px;
    margin: auto;
    padding: 7px;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;