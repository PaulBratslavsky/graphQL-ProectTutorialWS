import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';


import Router from 'next/router';
import Nprogress from 'nprogress';

Router.onRouteChangeStart = () => {
  Nprogress.start();
  console.log('onRouteChangeStart');
};

Router.onRouteChangeComplete = () => {
  Nprogress.done();
  console.log('onRouteChangeComplete');
};

Router.onRouteChangeError = () => {
  Nprogress.done();
  console.log('onRouteChangeError');
};


const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${ props => props.theme.red };
    color: white;
    text-transform: uppercase;
  }
  @media (max-width: ${ props => props.theme.maxWidth }) {
    margin: 0;
    text-align: center;
  }
`;

const MyHeader = styled.div`
  .bar {
    border-bottom: 10px solid ${ props => props.theme.black };
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media ( max-width: ${ props => props.theme.maxWidth }) {
      grid-template-columns: 1fr;
      justify-content: center;
    } 
  }

  .sub-bar {
      display: grid;
      grid-template-columns: 1fr;
      border-bottom: 1px solid ${ props => props.theme.lightgrey };
    }
`;

const Header = () => (
  <MyHeader>
    <div className="bar">
      <Logo><Link href="/"><a href="">Sick Fits</a></Link></Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </MyHeader>
);

export default Header;
