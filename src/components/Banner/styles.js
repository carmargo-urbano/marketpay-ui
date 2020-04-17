import styled from 'styled-components';
import banner from '../../assets/images/banner.jpg';

export const Container = styled.div`
  display: inline-block;
  min-height: calc(100vh - 350px);
  width: 100%;

  background-image: url(${banner});
  background-position:50%;
  padding-bottom: 50px;
  padding-top: 50px;
  
  h1 {
    font-weight: bold;
    font-size: 28px
  }
  img {
   max-width:100%;
  }
.hero-cta-section {
  padding: 30px 40px 15px;
  position: relative;
  top: 50px;
  left: 80px;
  -webkit-box-align: left;
  -ms-flex-align: left;
  align-items: left;
  width: 33%;
  border-radius: 8px;
  margin-bottom: 60px;
  -webkit-box-shadow: 0 3px 15px rgba(0,0,0,.2);
  box-shadow: 0 3px 15px rgba(0,0,0,.2);
}
.hero-cta-section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: auto;
  margin-bottom: 45px;
}
`;