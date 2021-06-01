import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <>
        <li key={this.props.contentsData.id}>
          <b>{this.props.contentsData.userName}</b>
          {this.props.contentsData.content}
          <button>♡</button>
        </li>
      </>
    );
  }
}
export default Comments;
