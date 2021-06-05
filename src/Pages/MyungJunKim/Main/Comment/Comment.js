import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <>
        {this.props.commentList.map((comment, idx) => (
          <li key={idx}>
            <b>myxxjun</b>
            {comment}
            <button>♡</button>
          </li>
        ))}
      </>
    );
  }
}
export default Comment;
