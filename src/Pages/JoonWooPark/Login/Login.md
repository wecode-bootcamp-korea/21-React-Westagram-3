## Wecode Official Mission

### Mission 1) Login | 사용자 입력 데이터 저장

```js
handleInput = e => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};
```

### Mission 2) Login | 로그인 버튼 활성화 (validation)

#### 1. LifeCycle Method 활용

```js
componentDidUpdate() {
    this.validLoginButton();
}

validLoginButton = () => {
  const { inputId, inputPassword } = this.state;
  if (inputId.includes('@') && inputPassword.length >= 5) {
    inputId.includes('@') && inputPassword.length >= 5
      ? this.setState({ isDisabled: false })
      : this.setState({ isDisabled: true });
  }
};
```

#### 2. Callback의 활용

```js
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
  if (inputId.includes('@') && inputPassword.length >= 5) {
    inputId.includes('@') && inputPassword.length >= 5
      ? this.setState({ isDisabled: false })
      : this.setState({ isDisabled: true });
  }
};
```

### 3. render() 내부에 선언

```js
const { inputId, inputPassword } = this.state;
let isValidate = false;
if (inputId.includes('@') && inputPassword.length >= 5) {
  inputId.includes('@') && inputPassword.length >= 5
    ? this.setState({ isDisabled: false })
    : this.setState({ isDisabled: true });
  isValidate = true;
}
```
