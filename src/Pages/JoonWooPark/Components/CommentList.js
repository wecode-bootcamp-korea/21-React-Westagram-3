import React from 'react';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { commentList } = this.props;
    return commentList.map((data, index) => {
      return (
        <li key={data.id}>
          <span className="commentor-id">{data.userName}</span>
          <span className="comment-content">{data.comment}</span>
          <button className="comment-like-button">
            {data.isLiked ? (
              <i className="fas fa-heart" style={{ color: 'red' }}></i>
            ) : (
              <i className="fas fa-heart"></i>
            )}
          </button>
        </li>
      );
    });
  }
}

export default CommentList;
