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
      likeState: true,
      isBtnLike: 'fas fa-heart btn-empty',
      isCommentModal: false,
    };
  }

  handleCommentModal = e => {
    this.setState({
      isCommentModal: !this.state.isCommentModal,
    });
  };

  handleBtn = () => {
    !this.state.likeState === true
      ? this.setState({ likeState: true, isBtnLike: 'fas fa-heart btn-like' })
      : this.setState({
          likeState: false,
          isBtnLike: 'fas fa-heart btn-empty',
        });
  };

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
    const { inputValue, commentList, isBtnLike, isCommentModal } = this.state;
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
            isBtnLike={isBtnLike}
            isCommentModal={isCommentModal}
            handleInputarea={this.handleInputarea}
            handleSubmit={this.handleSubmit}
            handleBtn={this.handleBtn}
            handleCommentModal={this.handleCommentModal}
          />
        </section>
      </>
    );
  }
}
export default Contents;
