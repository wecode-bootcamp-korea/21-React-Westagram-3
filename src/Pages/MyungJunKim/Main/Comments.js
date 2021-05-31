import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <>
        {this.props.commentsList.map((comment, idx) => (
          <li key={idx}>
            <b>{comment.userName}</b>
            {comment.content}
            <button>♡</button>
          </li>
        ))}
      </>
    );
  }
}
export default Comments;
