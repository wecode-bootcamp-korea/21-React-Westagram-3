import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div class="navWrapper">
          <div className="mainLogo">
            <span>westagram</span>
          </div>
          <div className="searchWrapper">
            <input className="search" type="text" placeholder="검색" />
            <i className="fas fa-search"></i>
          </div>
          <div className="iconWrapper">
            <img alt="Home" src="/images/Home.svg" />
            <img alt="share" src="/images/share.svg" />
            <img alt="navigate" src="/images/nav.svg" />
            <img alt="heart" src="/images/heart.svg" />
            <img className="myProfile" alt="profile" src="/images/me.jpeg" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
