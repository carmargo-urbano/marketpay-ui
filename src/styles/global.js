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
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Montserrat, sans-serif;
  }

  #root {
    margin: 0 auto;
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
`;
