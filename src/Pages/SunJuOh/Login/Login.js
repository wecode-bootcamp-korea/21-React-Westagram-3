import React from 'react';
import { GET_USER_API } from '../../../../src/config';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      passwordValue: '',
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    const { idValue, passwordValue } = this.state;
    fetch(`${GET_USER_API}`, {
      body: JSON.stringify({
        email: idValue,
        password: passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/main-sun');
        } else {
          alert('sign up failed.Retry');
        }
      })
      .catch(err => alert(err));
  };

  render() {
    const { idValue, passwordValue } = this.state;
    const buttonActive = idValue.includes('@') && passwordValue.length >= 5;

    return (
      <div className="allContainer">
        <div className="login_container">
          <header>
            <p>westagram</p>
          </header>
          <main>
            <input
              name="idValue"
              type="text"
              value={idValue}
              onChange={this.handleInput}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              name="passwordValue"
              type="password"
              value={passwordValue}
              onChange={this.handleInput}
              placeholder="비밀번호"
            />
            <button
              disabled={buttonActive ? false : true}
              onClick={this.goToMain}
            >
              로그인
            </button>
          </main>
          <div className="findPassword">
            <a href="">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
