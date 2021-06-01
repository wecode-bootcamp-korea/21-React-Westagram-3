import React from 'react';

class CommentsList extends React.Component {
  render() {
    const { name, comment } = this.props;
    return (
      <li>
        <strong>{name}</strong>
        <span>{comment}</span>
      </li>
    );
  }
}

export default CommentsList;
