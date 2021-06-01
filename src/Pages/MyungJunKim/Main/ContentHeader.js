import React, { Component } from 'react';

class ContentHeader extends Component {
  render() {
    return (
      <header className="contents__header">
        <div>
          <img
            className="contents__profile-image"
            alt="계정 프로필사진"
            src={this.props.headerList.profileSrc}
          />
          <span>{this.props.headerList.profileName}</span>
        </div>

        <i className="fas fa-ellipsis-h"></i>
      </header>
    );
  }
}
export default ContentHeader;
