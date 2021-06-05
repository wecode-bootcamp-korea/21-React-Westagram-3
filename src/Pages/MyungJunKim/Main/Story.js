import React, { Component } from 'react';

class Story extends Component {
  render() {
    const { storyData } = this.props;
    return (
      <li>
        <div className="profile-container">
          <div className="profile-wrapper">
            <div className="profile-gradation-animate"></div>
            <div className="profile__image-wrapper">
              <div className="profile__image-small-wrapper"></div>
              <img
                className="profile__image"
                alt="프로필 이미지"
                src={storyData.imgSrc}
              />
            </div>
          </div>
          <span>{storyData.userName}</span>
        </div>
      </li>
    );
  }
}

export default Story;
