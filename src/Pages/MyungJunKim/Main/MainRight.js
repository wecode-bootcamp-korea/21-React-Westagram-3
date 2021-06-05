import React, { Component } from 'react';

class MainRight extends Component {
  render() {
    const { suggestUserData } = this.props;
    return (
      <li>
        <div className="suggest-profile">
          <div>
            <img
              className="suggest-profile__img"
              alt="프로필 사진"
              src={suggestUserData.imgSrc}
            />
            <div className="suggest-follow-info">
              <b> {suggestUserData.userName}</b>
              <span>{suggestUserData.userName}님 외 1명이 팔로우합니다</span>
            </div>
          </div>
          <button>팔로우</button>
        </div>
      </li>
    );
  }
}
export default MainRight;
