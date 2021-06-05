import React from 'react';
import './MainRight.scss';

class MainRight extends React.Component {
  render() {
    return (
      <div className="main-right">
        <div className="profileBox">
          <div className="imageBox">
            <img alt="me" src="/Images/SunJuOh/me.jpeg" />
          </div>
          <div className="nameBox">
            <strong>_ocean_zoo</strong>
            <span>sun ju</span>
          </div>
          <button>전환</button>
        </div>
        <div className="recommendBox">
          <span className="recommendContent">회원님을 위한 추천</span>
          <span className="recommendAll">모두 보기</span>
        </div>
        <div className="followBox">
          <ul>
            <li>
              <img alt="profile-image" src="/Images/SunJuOh/wecode.png" />
              <div className="columnBox">
                <strong>wecode_bootcamp</strong>
                <span>kang_ming님 외 1명이 팔로우합니다</span>
              </div>
              <span className="followButton">팔로우</span>
            </li>
            <li>
              <img alt="profile-image" src="/Images/SunJuOh/wework.jpeg" />
              <div className="columnBox">
                <strong>wework</strong>
                <span>with'_'me님 외 5명이 팔로우합니다</span>
              </div>
              <span className="followButton">팔로우</span>
            </li>
            <li>
              <img alt="profile-image" src="/Images/SunJuOh/dog.jpeg" />
              <div className="columnBox">
                <strong>my_dog_</strong>
                <span>Instagram 신규 가입</span>
              </div>
              <span className="followButton">팔로우</span>
            </li>
            <li>
              <img alt="profile-image" src="/Images/SunJuOh/travel.jpg" />
              <div className="columnBox">
                <strong>_go__with</strong>
                <span>likely_ha님 외 27명이 팔로우합니다</span>
              </div>
              <span className="followButton">팔로우</span>
            </li>
          </ul>
        </div>
        <footer>
          <span>
            소개·도움말·홍보 센터·API·채용 정보·개인정보처리방침·약관·위치·인기
            계정·해시태그·언어
          </span>
          <br />
          <br />
          <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
        </footer>
      </div>
    );
  }
}

export default MainRight;
