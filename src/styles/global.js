import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    line-height: 24px;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    color: #777777;
  }
  
  
  body, input, button {
    font: 14px Montserrat, sans-serif;
  }

  #root {
    margin: 0 auto;
  }
  header, section, main, nav {
    display: block;
  }
  a:hover, a:focus {
    text-decoration: none;
    outline: none;
}
  button {
    cursor: pointer;
  }
  input {
    font-family: "Avenir", "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif;
    color: #3D474D;
    background-color: white;
    resize: none;
    border: 1px solid #DCE2E6;
    padding: 0 12px;
    line-height: 48px;
    height: 48px;
    font-size: 17px;
    border-radius: 10px;
    margin-bottom: 10px;
}
.bd-navbar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1071;
}
.bd-navbar {
  min-height: 4rem;
  background-color:${({ theme }) => theme.primaryLight};
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.05),inset 0 -1px 0 rgba(0,0,0,.1);
}

`;
