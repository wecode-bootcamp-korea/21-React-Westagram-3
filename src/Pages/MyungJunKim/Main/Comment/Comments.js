import React from 'react';

class Comments extends React.Component {
  render() {
    const { contentsData } = this.props;
    return (
      <li key={contentsData.id}>
        <b>{contentsData.userName}</b>
        {contentsData.content}
        <button>♡</button>
      </li>
    );
  }
}
export default Comments;
