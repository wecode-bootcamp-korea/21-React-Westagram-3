import React, { Component } from 'react';

class ContentHeader extends Component {
  render() {
    return (
      <header className="contents__header">
        <div>
          <img
            className="contents__profile-image"
            alt="계정 프로필사진"
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          />
          <span>ya dan nat da</span>
        </div>

        <i className="fas fa-ellipsis-h"></i>
      </header>
    );
  }
}
export default ContentHeader;
