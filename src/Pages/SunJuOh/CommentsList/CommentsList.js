import React from 'react';

class CommentsList extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <li>
        <strong>{comment.userName}</strong>
        <span>{comment.content}</span>
      </li>
    );
  }
}

export default CommentsList;
