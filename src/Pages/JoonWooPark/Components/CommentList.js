import React from 'react';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log(this.props);
    const { commentList } = this.props;
    return commentList.map(data => {
      return (
        <li key={data.id}>
          <span className="commentor-id">{data.userName}</span>
          <span className="comment-content">{data.content}</span>
          <button className="comment-like-button">
            {data.isLiked ? (
              <i className="fas fa-heart" style={{ color: 'red' }}></i>
            ) : (
              <i className="fas fa-heart"></i>
            )}
          </button>
          <button className="comment-remove-button">삭제</button>
        </li>
      );
    });
  }
}

export default CommentList;
