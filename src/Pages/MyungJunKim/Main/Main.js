import React, { Component } from 'react';
import Nav from '../../../Components/Nav';
import Story from '../Main/Story';
import Contents from '../Main/Contents';
import MainRight from '../Main/MainRight';
import './Main.scss';
import './Contents.scss';
import './Story.scss';
import './Comment/Comment.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      storys: [],
      contentsData: [],
      suggestUser: [],
      resize: `${167 + window.innerWidth / 2}px`,
    };
  }

  componentDidMount() {
    fetch('data/ContentsData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          contentsData: data.feed,
        });
      });

    fetch('/data/StoryData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          storys: data.story,
        });
      });

    fetch('/data/SuggestUser.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          suggestUser: data.suggestUser,
        });
      });
  }

  componentDidUpdate() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      resize: `${167 + window.innerWidth / 2}px`,
    });
  };

  render() {
    const { storys, contentsData, suggestUser } = this.state;
    console.log(contentsData);
    return (
      <div className="main-myung">
        <Nav />
        <main>
          <div className="feeds-container">
            <div className="feeds">
              <div className="story">
                <ul>
                  {storys.length > 0 &&
                    storys.map(data => <Story storyData={data} />)}
                </ul>
              </div>
              {contentsData.length > 0 &&
                contentsData.map(data => <Contents contentsData={data} />)}
            </div>
            <section className="main-right" style={{ left: this.state.resize }}>
              <div className="my-profile">
                <div>
                  <img
                    alt="마이프로필 사진"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  />
                  <b>myxxjun</b>
                </div>
                <button>전환</button>
              </div>
              <div className="suggest">
                <div className="suggest-header">
                  <span>회원님을 위한 추천</span>
                  <button>모두보기</button>
                </div>
                <ul>
                  {suggestUser.length > 0 &&
                    suggestUser.map(data => (
                      <MainRight suggestUserData={data} />
                    ))}
                </ul>
              </div>
              <footer>
                소개 &#183; 도움말 &#183; 홍보 센터 &#183; API &#183; 채용 정보
                &#183; 개인정보처리방침 &#183;
                <br />
                약관 &#183; 위치 &#183; 인기 계정 &#183; 해시태그 &#183; 언어
                <div>
                  <span>&#169; 2021 WESTAGRAM FORM WECODE</span>
                </div>
              </footer>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
