import React, { Component } from 'react';
import ContentHeader from '../Main/ContentHeader';
import ContentImage from '../Main/ContentImage';
import CommentBox from '../Main/CommentBox';

class Contents extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      commentList: [],
    };
  }

  handleInputarea = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      inputValue: '',
      commentList: this.state.commentList.concat([this.state.inputValue]),
    });
  };

  render() {
    const { inputValue, commentList } = this.state;
    const { contentsData } = this.props;
    return (
      <>
        <section className="contents">
          <ContentHeader headerList={contentsData} />
          <ContentImage imageList={contentsData} />
          <CommentBox
            inputValue={inputValue}
            commentList={commentList}
            contentsData={contentsData}
            handleInputarea={this.handleInputarea}
            handleSubmit={this.handleSubmit}
          />
        </section>
      </>
    );
  }
}
export default Contents;
