import Nav from '../../../Components/Nav';
import React from 'react';
import StoryList from '../Components/StoryList';
import jsonData from '../userData.json';
import RecommendUser from '../Components/RecommendUser';
import './Main.scss';
import Feed from '../../../Components/Feed';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      currentUser: '',
      inputComment: '',
      userData: [],
    };
  }

  componentDidMount() {
    this.addData();
  }

  addData = () => {
    fetch('http://localhost:3000/data/ParkJoonWoo/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ commentList: data, userData: jsonData });
      });
  };

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

  addComment = () => {
    const { inputComment, commentList } = this.state;
    const input = document.querySelector('.input-comment');

    if (!inputComment) {
      return;
    } else {
      const newObj = {
        id: commentList.length + 1,
        userName: 'Walsh',
        content: inputComment,
      };
      const addCommentToList = commentList.concat(newObj);
      this.setState({ commentList: addCommentToList });
      input.value = '';
    }
  };

  render() {
    return (
      <div className="ParkJoonWoo">
        <Nav />
        <main>
          <section className="left-container">
            <div className="story-container">
              {this.state.userData.length > 0 && (
                <StoryList userData={this.state.userData} />
              )}
            </div>
            <Feed
              commentList={this.state.commentList}
              handleInput={this.handleInput}
              handleKeyDown={this.handleKeyDown}
              addComment={this.addComment}
            />
          </section>
          <aside className="right-container">
            <section className="login-user-container">
              <span className="user-picture">
                <img alt="user profile" src="/images/JoonWooPark/profile.png" />
              </span>
              <span className="user-nickname">front_devpark</span>
              <a href="/" className="user-convert">
                전환
              </a>
            </section>
            <section className="user-recommend-container">
              <article>
                <h3>회원님을 위한 추천</h3>
                <span>모두 보기</span>
              </article>
              {this.state.userData.length > 0 && (
                <RecommendUser userData={this.state.userData} />
              )}
            </section>
            <footer>
              <ul className="footer-upper-deck">
                <li>소개</li>
                <li>블로그</li>
                <li>채용 정보</li>
                <li>도움말</li>
                <li>API</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>인기 계정</li>
                <li>해시태그</li>
                <li>위치</li>
              </ul>
              <div className="footer-lower-deck">
                <span> 2021 Westagram from Wecode</span>
              </div>
            </footer>
          </aside>
        </main>
      </div>
    );
  }
}

export default Main;
