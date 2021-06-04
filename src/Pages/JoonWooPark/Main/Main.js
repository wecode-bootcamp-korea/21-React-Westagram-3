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
      currentUser: '',
      userData: [],
    };
  }

  componentDidMount() {
    this.addData();
  }

  addData = () => {
    fetch('http://localhost:3000/data/ParkJoonWoo/commentData.json')
      .then(res => res.json())
      .then(() => {
        this.setState({ userData: jsonData });
      });
  };

  render() {
    const { commentList, userData } = this.state;
    return (
      <div className="ParkJoonWoo">
        <Nav />
        <main>
          <section className="left-container">
            <div className="story-container">
              {userData.length > 0 && <StoryList userData={userData} />}
            </div>
            <Feed commentList={commentList} />
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
              {userData.length > 0 && <RecommendUser userData={userData} />}
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
