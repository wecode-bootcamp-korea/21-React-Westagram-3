import React from 'react';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleInput = event => {
    this.setState({
      value: event.target.value,
    });
  };

  test = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    const { addComment, feedId } = this.props;
    const { value } = this.state;
    const buttonValid = value.length > 0;

    return (
      <form>
        <input
          className="inputValue"
          type="text"
          value={value}
          onChange={this.handleInput}
          placeholder="댓글 달기..."
        />
        <button
          type="submit"
          className="pressPost"
          onClick={event => addComment(event, feedId, value, this.test)}
          disabled={buttonValid ? false : true}
        >
          게시
        </button>
      </form>
    );
  }
}

export default CommentInput;
