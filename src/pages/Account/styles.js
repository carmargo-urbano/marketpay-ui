import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    background: #FFF;
    width: 1200px;
    margin: auto;
    
    .container {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .login_box_img {
        content: "\f0d7";
        font: normal normal normal 14px/1 FontAwesome;
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0);
        border: none;
        color: #555555;
        margin-top: -6px;
        right: 20px;
    }
    .login_box_img .hover {
        content: "\f0d7";
        font: normal normal normal 14px/1 FontAwesome;
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0);
        border: none;
        color: #555555;
        margin-top: -6px;
        right: 20px;
    }

     .login_box_img .hover {
        position: absolute;
        top: 50%;
        left: 0px;
        text-align: center;
        width: 100%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
     }
    .login_box_img .hover h4 {
        font-size: 24px;
        color: #fff;
        margin-bottom: 15px;
        font-family: Montserrat, sans-serif;
    }
    .login_box_img .hover p {
        max-width: 380px;
        margin: 0px auto 25px;
        color: #fff;
    }
    
    .col-lg-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
    .img-fluid {
        max-width: 100%;
        height: auto;
    }
    img {
        vertical-align: middle;
        border-style: none;
    }
    .main_btn {
        display: inline-block;
        background: #c5322d;
        padding: 0px 30px;
        color: #fff;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 48px;
        text-transform: uppercase;
    }
    .main_btn:hover {
        background: transparent;
        color: #c5322d;
        border: 1px solid  #c5322d;
    }
    a:hover, a:focus {
        text-decoration: none;
        outline: none;
    }
`;

export const FormLogin = styled.div`
    box-shadow: 0 1px 11px 0 rgba(0,0,0,.22);
    height: 100%;
    text-align: center;
    padding-top: 115px;

    form {
        
            max-width: 385px;
            margin: auto;
        
    }
    .form-group input {
        height: 54px;
        border: none;
            border-bottom-color: currentcolor;
            border-bottom-style: none;
            border-bottom-width: medium;
        border-bottom: 1px solid #ccc;
        border-radius: 0;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .form-group .submit_btn {
        display: block;
        border-radius: 0;
        width: 100%;
        text-transform: uppercase;
    }
    button {
        display: inline-block;
        background: #c5322d;
        padding: 0 30px;
        color: #fff;
        font-family: roboto,sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 38px;
        border: 1px solid #c5322d;
        border-radius: 0;
        outline: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        text-align: center;
        border: 1px solid #c5322d;
        cursor: pointer;
        -webkit-transition: all 300ms linear 0s;
        -o-transition: all 300ms linear 0s;
        transition: all 300ms linear 0s;
    }
    .form-group a {
        font-size: 14px;
        color: #777;
        font-family: roboto,sans-serif;
        margin-top: 20px;
        display: block;
    }
`;

export const FormRegister = styled.div`
    box-shadow: 0 1px 11px 0 rgba(0,0,0,.22);
    height: 100%;
    text-align: center;
    padding-top: 115px;

    form {
        
            max-width: 385px;
            margin: auto;
        
    }
    .form-group input {
        height: 54px;
        border: none;
            border-bottom-color: currentcolor;
            border-bottom-style: none;
            border-bottom-width: medium;
        border-bottom: 1px solid #ccc;
        border-radius: 0;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .form-group .submit_btn {
        display: block;
        border-radius: 0;
        width: 100%;
        text-transform: uppercase;
    }
    button {
        display: inline-block;
        background: #c5322d;
        padding: 0 30px;
        color: #fff;
        font-family: roboto,sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 38px;
        border: 1px solid #c5322d;
        border-radius: 0;
        outline: none !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        text-align: center;
        border: 1px solid #c5322d;
        cursor: pointer;
        -webkit-transition: all 300ms linear 0s;
        -o-transition: all 300ms linear 0s;
        transition: all 300ms linear 0s;
    }
    .form-group a {
        font-size: 14px;
        color: #777;
        font-family: roboto,sans-serif;
        margin-top: 20px;
        display: block;
    }
`;