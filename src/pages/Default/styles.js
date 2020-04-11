import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

.notfound {
 width: 45%;
 align-items:center;
}
.notfound-404 {
    position: relative;
    height: 200px;
    margin: 0px auto 20px;
    z-index: -1;
}
.notfound-404 h3 {
    font-family: 'Cabin', sans-serif;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #262626;
    margin: 0px;
    letter-spacing: 3px;
    padding-left: 60px;
}
.notfound-404 h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 236px;
    font-weight: 200;
    margin: 0px;
    color: #211b19;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.notfound-404 h1 > span {
    text-shadow: -8px 0px 0px #fff;
}
.notfound-404 h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    color: #211b19;
    background: #fff;
    padding: 10px 5px;
    margin: auto;
    display: inline-block;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
}
.notfound a {
    font-family: 'Montserrat', sans-serif;
    display: inline-block;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    padding: 13px 23px;
    background: #ff6300;
    font-size: 18px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    margin-left: 140px;
}
`;
