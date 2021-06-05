import React, { Component } from 'react';
import ContentHeader from '../Main/ContentHeader';
import ContentImage from '../Main/ContentImage';
import CommentBox from './Comment/CommentBox';

class Contents extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      commentList: [],
      isLiked: false,
      isCommentModal: false,
    };
  }

  handleCommentModal = () => {
    this.setState({
      isCommentModal: !this.state.isCommentModal,
    });
  };

  handleBtn = () => {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  };

  handleInputarea = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { commentList, inputValue } = this.state;
    this.setState({
      inputValue: '',
      commentList: commentList.concat([inputValue]),
    });
  };

  render() {
    const { inputValue, commentList, isLiked, isCommentModal } = this.state;
    const { contentsData } = this.props;
    return (
      <section className="contents">
        <ContentHeader headerList={contentsData} />
        <ContentImage imageList={contentsData} />
        <CommentBox
          inputValue={inputValue}
          commentList={commentList}
          contentsData={contentsData}
          isLiked={isLiked}
          isCommentModal={isCommentModal}
          handleInputarea={this.handleInputarea}
          handleSubmit={this.handleSubmit}
          handleBtn={this.handleBtn}
          handleCommentModal={this.handleCommentModal}
        />
      </section>
    );
  }
}
export default Contents;
