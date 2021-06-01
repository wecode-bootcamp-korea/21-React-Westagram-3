import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPassword: '',
      isDisabled: true,
    };
  }

  handleInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.validLoginButton();
      }
    );
  };

  validLoginButton = () => {
    const { inputId, inputPassword } = this.state;
    inputId.includes('@') && inputPassword.length >= 5
      ? this.setState({ isDisabled: false })
      : this.setState({ isDisabled: true });
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <div className="JoonWooPark">
        <main>
          <section className="login-container">
            <h3 className="login-title">Westagram</h3>
            <input
              className="login-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="inputId"
              autoFocus
              onChange={e => this.handleInput(e)}
            />
            <input
              className="login-password"
              type="password"
              placeholder="비밀번호"
              name="inputPassword"
              onChange={e => this.handleInput(e)}
            />

            <Link
              to="/main-joon"
              className={isDisabled ? 'link-button' : 'link-button active'}
            >
              <button
                className={isDisabled ? 'login-button' : 'login-button active'}
              >
                로그인
              </button>
            </Link>
            <div className="login-divide">
              <div className="login-divide-line-first"></div>
              <div className="login-divide-text">또는</div>
              <div className="login-divide-line-second"></div>
            </div>
            <a href="/" className="login-social-app">
              <i className="fab fa-facebook-square"></i>
              Facebook으로 로그인
            </a>
            <a href="/" className="login-forget-password">
              비밀번호를 잊으셨나요?
            </a>
          </section>
          <section className="register-container">
            <p>계정이 없으신가요?</p>
            <a href="/">가입하기</a>
          </section>
          <section className="mobile-download-container">
            <p>앱을 다운로드하세요.</p>
            <div className="download-container-icons">
              <img
                src="./images/JoonWooPark/download_at_apple.png"
                alt="app download at apple"
              />
              <img
                src="./images/JoonWooPark/download_at_google.png"
                alt="app download at google"
              />
            </div>
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
              <select>
                <option value="한국어">한국어</option>
                <option value="영어">영어</option>
                <option value="스페인어">스페인어</option>
              </select>
              <span> 2021 Westagram from Wecode</span>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}

export default Login;
