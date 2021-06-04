import React from 'react';
import CommentList from '../Pages/JoonWooPark/Components/CommentList';
class Feed extends React.Component {
  constructor() {
    super();
    this.state = { inputComment: '', feedData: [] };
  }

  componentDidMount() {
    this.fetchFeed();
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyDown = e => {
    if (e.code === 'Enter') {
      this.addComment();
      e.target.value = '';
    }
  };

  fetchFeed = () => {
    fetch('http://localhost:3000/data/ParkJoonWoo/feedData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ feedData: data });
      });
  };

  addComment = () => {
    const { feedData, inputComment } = this.state;

    const input = document.querySelector('.input-comment');

    if (!inputComment) {
      return;
    } else {
      const newObj = {
        id: feedData[0].comments.length + 1,
        userName: 'Walsh',
        comment: inputComment,
      };
      const addCommentToList = feedData[0].comments.concat(newObj);
    }
    input.value = '';
  };

  render() {
    const { feedData } = this.state;
    return feedData.map((data, index) => {
      return (
        <>
          <div className="feeds-container">
            <section className="feed-personal-info">
              <span className="personal-photo"></span>
              <span className="personal-id">{data.profileName}</span>
            </section>
            <section className="feed-photo-container">
              <img alt="feed" src={data.imgSrc} className="feed-photo" />
            </section>
            <section className="feed-activity">
              <article className="activity-icons">
                <img alt="heart" src="/Images/nav/heart.svg" />
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
                <i className="far fa-bookmark"></i>
              </article>
              <article className="activity-good-number">
                좋아요 {data.likeCount}개
              </article>
              <article className="activity-info">
                <span className="info-personal-id">{data.profileName}</span>
                <span className="info-personal-content">{data.content}</span>
              </article>
              <ul className="comment-list">
                {feedData && feedData.length > 0 && (
                  <CommentList commentList={feedData[index].comments} />
                )}
              </ul>
              <article className="activity-time">11시간 전</article>
            </section>
            <section className="input-container">
              <i className="far fa-grin"></i>
              <input
                type="text"
                className="input-comment"
                placeholder="댓글 달기..."
                name="inputComment"
                onChange={e => this.handleInput(e)}
                onKeyDown={e => this.handleKeyDown(e)}
              />
              <span className="input-submit" onClick={() => this.addComment()}>
                게시
              </span>
            </section>
          </div>
        </>
      );
    });
  }
}

export default Feed;
