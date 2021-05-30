import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/main-myung');
  };

  handleIdInput = e => {
    this.setState({
      idValue: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="login-myung">
        <div className="login-top">
          <div className="side-img">
            <img alt="스마트폰" src="./Images/MyungJunKim/smartphone.png" />
            <div>
              <img
                className="side-img-screen"
                alt="스마트폰 화면"
                src="./Images/MyungJunKim/rolling-4.jpeg"
              />
            </div>
          </div>
          <div className="login-container">
            <div className="login-wrapper">
              <h1>westargram</h1>
              <main>
                <form onSubmit={this.goToMain}>
                  <div className="login-input">
                    <input
                      onChange={this.handleIdInput}
                      value={this.state.idValue}
                      type="text"
                      placeholder="전화번호,사용자 이름 또는 이메일"
                    />
                    <input
                      onChange={this.handlePwInput}
                      value={this.state.pwValue}
                      type="password"
                      placeholder="비밀번호"
                    />
                  </div>
                  <button
                    className="login-button"
                    disabled={
                      !(
                        this.state.idValue.includes('@') &&
                        this.state.pwValue.length >= 5
                      )
                    }
                  >
                    <span>로그인</span>
                  </button>
                </form>
              </main>
              <footer className="login-footer">
                <div className="login-bar-container">
                  <div className="login-bar"></div>
                  <div>또는</div>
                  <div className="login-bar"></div>
                </div>

                <button>
                  <i className="fab fa-facebook-square"></i>
                  Facebook으로 로그인
                </button>
                <Link to="/">비밀번호를 잊으셨나요?</Link>
              </footer>
            </div>
            <aside>
              <div>
                <span>계정이 없으신가요?</span>
                <span>가입하기</span>
              </div>
            </aside>
            <div className="store">
              <div>앱을 다운로드하세요.</div>
              <div className="store-img">
                <img alt="앱스토어" src="./Images/MyungJunKim/apple.png" />
                <img
                  alt="구글스토어"
                  src="./Images/MyungJunKim/googleplay.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="login-bottom">
          <p>
            소개 &nbsp; &nbsp;블로그 &nbsp; &nbsp;채용 &nbsp; &nbsp;정보 &nbsp;
            &nbsp;도움말 &nbsp; &nbsp; API &nbsp; &nbsp;개인정보처리방침 &nbsp;
            &nbsp;약관 &nbsp; &nbsp;인기 &nbsp; &nbsp; 계정 &nbsp;
            &nbsp;해시태그 &nbsp; &nbsp; 위치
          </p>
          <span>한국어 &nbsp; &nbsp; &copy; 2021 Westagram from Facebook</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
