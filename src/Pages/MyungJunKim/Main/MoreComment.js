import React, { Component } from 'react';
import Comment from '../Main/Comment';

class MoreComment extends Component {
  constructor() {
    super();
    document.body.style.overflow = 'hidden';
  }
  render() {
    return (
      <div className="modal-background" onClick={this.props.handleCommentModal}>
        <div className="more-modal" onClick={e => e.stopPropagation()}>
          <div className="modal-image">
            <img alt="프로필사진" src={this.props.contentsData.imgSrc} />
          </div>
          <div className="modal-container">
            <div className="modal-header">
              <div>
                <div className="img-background">
                  <div className="small-img-background">
                    <img
                      alt="계정 프로필사진"
                      src={this.props.contentsData.profileSrc}
                    />
                  </div>
                </div>
                <b>{this.props.contentsData.profileName}</b>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="modal-comment">
              <div className="modal-info">
                <div className="modal-img-container">
                  <div className="img-background">
                    <div className="small-img-background">
                      <img
                        alt="프로필 사진"
                        src={this.props.contentsData.profileSrc}
                      />
                    </div>
                  </div>
                </div>
                <span>
                  <b>{this.props.contentsData.profileName}</b>
                  멋지게 담배피기!
                  <br /> 두번째 사진 약간 짱구옆모습
                  <br /> 2021.05.30.
                  <br /> -
                  <br /> -
                  <br /> -
                  <span className="hash-tag">
                    #instaaldaily #instagood #데일리룩 #좋아요 #좋아요반사 #좋반
                    #좋반댓 #협찬환영 #like4likes #셀스타그램 #협찬 #데일리코디
                    #선팔하면맞팔 #맞팔 #선팔 #팔로워미 #오오티디 #ootd
                    #followforfollowback #follow4like #f4f #거제도 #거제도여행
                    #거제도가볼만한곳 #숲소리공원 #양떼목장 #초원 #볼레로
                  </span>
                  <br />
                  <br />
                  <span>23시간</span>
                </span>
              </div>
              <div className="modal-comments">
                <ul>
                  <li key={this.props.contentsData.id}>
                    <div className="img-background">
                      <div className="small-img-background">
                        <img
                          alt="프로필 사진"
                          src={this.props.contentsData.profileSrc}
                        />
                      </div>
                    </div>
                    <div>
                      <b>{this.props.contentsData.userName}</b>
                      {this.props.contentsData.content}
                    </div>
                    <button>♡</button>
                  </li>
                  <Comment commentList={this.props.commentList} />
                </ul>
              </div>
            </div>
            <div className="modal-icon">
              <div className="modal-icon-container">
                <div>
                  <span>
                    <i className="far fa-heart"></i>
                  </span>
                  <span>
                    <i className="far fa-comment"></i>
                  </span>
                  <span>
                    <i className="far fa-paper-plane"></i>
                  </span>
                </div>
                <div className="book-mark">
                  <span>
                    <i className="far fa-bookmark"></i>
                  </span>
                </div>
              </div>
              <div className="modal-icon__info">
                <div>
                  <span>
                    <b>좋아요 136개</b>
                  </span>
                </div>
                <div>
                  <span>23시간 전</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={this.props.handleSubmit}>
                <div>
                  <i className="far fa-smile"></i>
                  <input
                    placeholder="댓글 달기..."
                    value={this.props.inputValue}
                    onChange={this.props.handleInputarea}
                  ></input>
                </div>
                <button disabled={this.props.inputValue.length < 1}>
                  게시
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreComment;
