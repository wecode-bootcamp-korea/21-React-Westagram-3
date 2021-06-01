import React from 'react';

class ContentImage extends React.Component {
  render() {
    return (
      <article>
        <img
          className="contents__image"
          alt="피드 이미지"
          src="https://images.unsplash.com/photo-1622301609399-d09bc34918c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        />
      </article>
    );
  }
}

export default ContentImage;
