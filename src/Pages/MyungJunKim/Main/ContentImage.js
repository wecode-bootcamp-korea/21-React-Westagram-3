import React from 'react';

class ContentImage extends React.Component {
  render() {
    return (
      <article>
        <img
          className="contents__image"
          alt="피드 이미지"
          src={this.props.imageList.imgSrc}
        />
      </article>
    );
  }
}

export default ContentImage;
