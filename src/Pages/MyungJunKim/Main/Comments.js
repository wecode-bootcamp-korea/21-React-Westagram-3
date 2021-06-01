import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <>
        {this.props.contentsData.map(comment => (
          <li key={comment.id}>
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
