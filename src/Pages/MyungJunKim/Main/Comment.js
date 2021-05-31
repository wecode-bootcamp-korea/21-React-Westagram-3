import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <>
        {this.props.commentList.map((comment, idx) => (
          <li key={idx}>
            <b>{comment}</b>
            {comment}
            <button>♡</button>
          </li>
        ))}
      </>
    );
  }
}
export default Comment;
